import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { Agentation } from "agentation";
import { AppLayout } from "@/components/AppLayout";

// Lazy load page components to split javascript chunks and minimize initial load size
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Compliance = lazy(() => import("./pages/Compliance.tsx"));
const Audit = lazy(() => import("./pages/Audit.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));

// Defer fallback skeleton loader
const RouteSkeleton = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-white">
    <div className="w-10 h-10 border-4 border-[#37C643] border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  const { loadRecaptcha } = useRecaptcha();

  useEffect(() => {
    loadRecaptcha();
  }, [loadRecaptcha]);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<RouteSkeleton />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route element={<AppLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/compliance" element={<Compliance />} />
                  <Route path="/audit" element={<Audit />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
      {import.meta.env.DEV && <Agentation />}
    </ErrorBoundary>
  );
};

export default App;
