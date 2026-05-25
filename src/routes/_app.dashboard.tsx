import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { complianceTrend, frameworkBreakdown, auditLog, complianceItems } from "@/lib/compliance-data";
import { StatusBadge } from "@/components/StatusBadge";
import { ArrowUpRight, ShieldCheck, AlertTriangle, Clock } from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — ComplianceVista" }] }),
  component: Dashboard,
});

function Dashboard() {
  const score = 87;
  const atRisk = complianceItems.filter((c) => c.status === "At Risk").length;
  const nonCompliant = complianceItems.filter((c) => c.status === "Non-Compliant").length;
  const upcoming = complianceItems.filter((c) => new Date(c.dueDate) < new Date("2026-06-15")).length;

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Compliance Overview</h1>
        <p className="text-sm text-muted-foreground">Snapshot of your organization's regulatory posture.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Compliance Score</CardDescription>
            <CardTitle className="text-3xl">{score}<span className="text-base text-muted-foreground">/100</span></CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={score} className="h-2" />
            <p className="mt-2 text-xs text-accent">+3 pts vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-warning" /> At Risk</CardDescription>
            <CardTitle className="text-3xl">{atRisk}</CardTitle>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">Controls needing attention</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-destructive" /> Non-Compliant</CardDescription>
            <CardTitle className="text-3xl">{nonCompliant}</CardTitle>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">Immediate remediation</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Due in 30 days</CardDescription>
            <CardTitle className="text-3xl">{upcoming}</CardTitle>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">Across all frameworks</p></CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Compliance Trend</CardTitle>
            <CardDescription>Score over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={complianceTrend}>
                  <defs>
                    <linearGradient id="cv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.16 160)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="oklch(0.72 0.16 160)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 250)" />
                  <XAxis dataKey="month" stroke="oklch(0.5 0.02 250)" fontSize={12} />
                  <YAxis stroke="oklch(0.5 0.02 250)" fontSize={12} domain={[60, 100]} />
                  <Tooltip />
                  <Area type="monotone" dataKey="score" stroke="oklch(0.72 0.16 160)" strokeWidth={2} fill="url(#cv)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>By Framework</CardTitle>
            <CardDescription>Controls compliant vs total</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={frameworkBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 250)" />
                  <XAxis dataKey="framework" stroke="oklch(0.5 0.02 250)" fontSize={11} />
                  <YAxis stroke="oklch(0.5 0.02 250)" fontSize={11} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="compliant" fill="oklch(0.72 0.16 160)" radius={[4,4,0,0]} />
                  <Bar dataKey="total" fill="oklch(0.34 0.06 248)" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions across your workspace</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {auditLog.slice(0, 5).map((entry) => (
              <div key={entry.id} className="flex items-start gap-3 text-sm">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div className="flex-1">
                  <p><span className="font-medium">{entry.actor}</span> {entry.action.toLowerCase()} <span className="text-muted-foreground">— {entry.target}</span></p>
                  <p className="text-xs text-muted-foreground">{new Date(entry.timestamp).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">Priority Items <ArrowUpRight className="h-4 w-4 text-muted-foreground" /></CardTitle>
            <CardDescription>Needs attention this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {complianceItems.filter(c => c.status !== "Compliant").slice(0, 5).map(c => (
              <div key={c.id} className="flex items-center justify-between gap-3 rounded-lg border p-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{c.control}</p>
                  <p className="text-xs text-muted-foreground">{c.framework} · Due {c.dueDate}</p>
                </div>
                <StatusBadge status={c.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}