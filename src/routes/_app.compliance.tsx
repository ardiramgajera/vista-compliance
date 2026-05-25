import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StatusBadge } from "@/components/StatusBadge";
import { complianceItems, type ComplianceStatus } from "@/lib/compliance-data";
import { Plus, Download } from "lucide-react";

export const Route = createFileRoute("/_app/compliance")({
  head: () => ({ meta: [{ title: "Compliance Tracker — ComplianceVista" }] }),
  component: Tracker,
});

function Tracker() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [fw, setFw] = useState<string>("all");

  const filtered = complianceItems.filter((c) => {
    if (status !== "all" && c.status !== status) return false;
    if (fw !== "all" && c.framework !== fw) return false;
    if (q && !c.control.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Compliance Tracker</h1>
          <p className="text-sm text-muted-foreground">All controls across GDPR, ISO 27001, SOC 2, HIPAA.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Export</Button>
          <Button size="sm"><Plus className="mr-2 h-4 w-4" /> New Control</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3">
            <Input placeholder="Search controls…" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-xs" />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-44"><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="Compliant">Compliant</SelectItem>
                <SelectItem value="At Risk">At Risk</SelectItem>
                <SelectItem value="Non-Compliant">Non-Compliant</SelectItem>
              </SelectContent>
            </Select>
            <Select value={fw} onValueChange={setFw}>
              <SelectTrigger className="w-44"><SelectValue placeholder="Framework" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All frameworks</SelectItem>
                <SelectItem value="GDPR">GDPR</SelectItem>
                <SelectItem value="ISO 27001">ISO 27001</SelectItem>
                <SelectItem value="SOC 2">SOC 2</SelectItem>
                <SelectItem value="HIPAA">HIPAA</SelectItem>
              </SelectContent>
            </Select>
            <span className="ml-auto text-xs text-muted-foreground">{filtered.length} of {complianceItems.length}</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Control</TableHead>
                <TableHead>Framework</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{c.id}</TableCell>
                  <TableCell className="font-medium">{c.control}<div className="text-xs text-muted-foreground">{c.category}</div></TableCell>
                  <TableCell><span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">{c.framework}</span></TableCell>
                  <TableCell><StatusBadge status={c.status as ComplianceStatus} /></TableCell>
                  <TableCell>{c.assignee}</TableCell>
                  <TableCell>{c.dueDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}