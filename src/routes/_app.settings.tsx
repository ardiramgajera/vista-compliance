import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Slack, Github, Mail, FileText } from "lucide-react";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings — ComplianceVista" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const notifs = [
    { id: "due", label: "Upcoming control due dates", desc: "Reminders 7 days before due", on: true },
    { id: "fail", label: "Non-compliant findings", desc: "Immediate alert when a control fails", on: true },
    { id: "weekly", label: "Weekly digest", desc: "Friday summary of progress", on: false },
    { id: "evidence", label: "Evidence requests", desc: "When a reviewer asks for proof", on: true },
  ];
  const integrations = [
    { name: "Slack", desc: "Post alerts to #compliance", icon: Slack, connected: true },
    { name: "GitHub", desc: "Link PRs to controls", icon: Github, connected: true },
    { name: "Google Workspace", desc: "Sync calendar & email", icon: Mail, connected: false },
    { name: "Notion", desc: "Embed policy docs", icon: FileText, connected: false },
  ];
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your profile, alerts and connected tools.</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Profile</CardTitle><CardDescription>How your information appears to teammates.</CardDescription></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">SC</div>
            <Button variant="outline" size="sm">Change avatar</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" defaultValue="Sarah Chen" /></div>
            <div className="space-y-2"><Label htmlFor="title">Title</Label><Input id="title" defaultValue="Compliance Lead" /></div>
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" defaultValue="sarah@acme.io" /></div>
            <div className="space-y-2"><Label htmlFor="tz">Time zone</Label><Input id="tz" defaultValue="UTC-08:00 Pacific" /></div>
          </div>
          <div className="flex justify-end"><Button>Save changes</Button></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Notifications</CardTitle><CardDescription>Choose what we ping you about.</CardDescription></CardHeader>
        <CardContent className="space-y-4">
          {notifs.map((n, i) => (
            <div key={n.id}>
              <div className="flex items-center justify-between gap-4">
                <div><div className="font-medium text-sm">{n.label}</div><div className="text-xs text-muted-foreground">{n.desc}</div></div>
                <Switch defaultChecked={n.on} />
              </div>
              {i < notifs.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Integrations</CardTitle><CardDescription>Sync evidence and alerts with your stack.</CardDescription></CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {integrations.map((i) => (
            <div key={i.name} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted"><i.icon className="h-4 w-4" /></div>
                <div><div className="text-sm font-medium">{i.name}</div><div className="text-xs text-muted-foreground">{i.desc}</div></div>
              </div>
              <Button variant={i.connected ? "outline" : "default"} size="sm">{i.connected ? "Manage" : "Connect"}</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}