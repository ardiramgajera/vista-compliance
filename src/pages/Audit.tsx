import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { auditLog } from "@/lib/compliance-data";
import { CheckCircle2, FileUp, AlertTriangle, Bell, UserPlus, FileEdit, ShieldCheck, Plus, Activity } from "lucide-react";

function iconFor(action: string) {
  if (action.includes("Compliant")) return CheckCircle2;
  if (action.includes("Uploaded")) return FileUp;
  if (action.includes("Flagged")) return AlertTriangle;
  if (action.includes("reminder")) return Bell;
  if (action.includes("Assigned")) return UserPlus;
  if (action.includes("Updated")) return FileEdit;
  if (action.includes("Closed")) return ShieldCheck;
  if (action.includes("Created")) return Plus;
  return Activity;
}

export default function Audit() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Audit Log</h1>
        <p className="text-sm text-muted-foreground">Immutable timeline of every compliance action.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Activity Timeline</CardTitle>
          <CardDescription>Latest events first</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="relative space-y-6 border-l border-border pl-6">
            {auditLog.map((entry) => {
              const Icon = iconFor(entry.action);
              return (
                <li key={entry.id} className="relative">
                  <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                    <Icon className="h-3 w-3" />
                  </span>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm">
                        <span className="font-medium">{entry.actor}</span>{" "}
                        <span className="text-muted-foreground">{entry.action.toLowerCase()}</span>
                      </p>
                      <time className="text-xs text-muted-foreground">{new Date(entry.timestamp).toLocaleString()}</time>
                    </div>
                    <p className="mt-1 text-sm font-medium">{entry.target}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono">{entry.id}</span>
                      {entry.framework && <><span>·</span><span className="rounded bg-muted px-1.5 py-0.5">{entry.framework}</span></>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
