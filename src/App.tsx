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
import { RobotsManager } from "@/components/seo/RobotsManager";
import { CanonicalManager } from "@/components/seo/CanonicalManager";

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
    // 1. Load reCAPTCHA hook after a brief timeout (5 seconds after page load)
    const timeoutId = setTimeout(() => {
      loadRecaptcha();
    }, 5000);

    // 2. Document-wide click/touch listener for mobile toggle
    const handleDocumentClick = (e: MouseEvent | TouchEvent) => {
      // Disable this listener on fine-pointer devices (desktops) that support native :hover states
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        return;
      }

      const target = e.target as HTMLElement;
      const badge = document.querySelector('.grecaptcha-badge');
      
      if (!badge) return;

      if (badge.contains(target) || target.closest('.grecaptcha-badge')) {
        badge.classList.toggle('is-open');
      } else {
        badge.classList.remove('is-open');
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentClick, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentClick);
    };
  }, [loadRecaptcha]);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RobotsManager />
            <CanonicalManager />
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
