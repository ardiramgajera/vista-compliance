import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldHalf, ShieldCheck, BarChart3, Bell, FileCheck, Lock, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ComplianceVista | Salesforce Compliance Management" },
      { name: "description", content: "Native Salesforce compliance management for audits, vendor risk, evidence tracking, and automated workflows." },
      { property: "og:title", content: "ComplianceVista | Salesforce Compliance Management" },
      { property: "og:description", content: "Native Salesforce compliance management for audits, vendor risk, evidence tracking, and automated workflows." },
    ],
  }),
  component: Index,
});

function Index() {
  const features = [
    { icon: ShieldCheck, t: "Unified control library", d: "GDPR, ISO 27001, SOC 2 and HIPAA mapped out of the box." },
    { icon: BarChart3, t: "Live compliance score", d: "Real-time posture tracking with trend analytics." },
    { icon: Bell, t: "Smart reminders", d: "Never miss a control review or evidence renewal." },
    { icon: FileCheck, t: "Evidence vault", d: "Centralize policies, screenshots and attestations." },
    { icon: Lock, t: "Immutable audit log", d: "Every action timestamped for auditors." },
    { icon: ShieldHalf, t: "Vendor risk", d: "Track third-party posture alongside your own." },
  ];
  const tiers = [
    { name: "Starter", price: "$0", desc: "For small teams getting started.", features: ["1 framework", "Up to 5 users", "Community support"], cta: "Start free", featured: false },
    { name: "Growth", price: "$249", desc: "For scaling SaaS teams.", features: ["All frameworks", "Unlimited users", "Slack & GitHub", "Priority support"], cta: "Start trial", featured: true },
    { name: "Enterprise", price: "Custom", desc: "Audit-grade and dedicated.", features: ["SAML SSO", "Dedicated CSM", "Custom frameworks", "SLA"], cta: "Contact sales", featured: false },
  ];
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <ShieldHalf className="h-4 w-4" />
            </div>
            <span className="font-semibold">ComplianceVista</span>
          </Link>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm"><Link to="/dashboard">Sign in</Link></Button>
            <Button asChild size="sm"><Link to="/dashboard">Open dashboard</Link></Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.34_0.06_248/0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> SOC 2 · ISO 27001 · GDPR · HIPAA
          </span>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Compliance, finally <span className="text-accent">in focus.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            Track every control, evidence and audit task across frameworks in one calm, audit-ready workspace built for modern teams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg"><Link to="/dashboard">Start free trial</Link></Button>
            <Button asChild size="lg" variant="outline"><a href="#features">See how it works</a></Button>
          </div>
        </div>
      </section>

      <section id="features" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Everything your audit needs</h2>
            <p className="mt-2 text-muted-foreground">Built for compliance leaders, loved by engineers.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.t}>
                <CardHeader>
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary"><f.icon className="h-4 w-4" /></div>
                  <CardTitle className="text-lg">{f.t}</CardTitle>
                  <CardDescription>{f.d}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-2 text-muted-foreground">Start free. Upgrade when you're audit-bound.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((p) => (
              <Card key={p.name} className={p.featured ? "border-accent shadow-lg ring-1 ring-accent/30" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {p.name}
                    {p.featured && <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">Popular</span>}
                  </CardTitle>
                  <div className="mt-2 text-3xl font-semibold">{p.price}{p.price !== "Custom" && <span className="text-base font-normal text-muted-foreground">/mo</span>}</div>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {f}</li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={p.featured ? "default" : "outline"}>
                    <Link to="/dashboard">{p.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2026 ComplianceVista. Built for audit-ready teams.
      </footer>
    </div>
  );
}
