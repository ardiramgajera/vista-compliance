import { cn } from "@/lib/utils";
import type { ComplianceStatus } from "@/lib/compliance-data";

const styles: Record<ComplianceStatus, string> = {
  Compliant: "bg-success/10 text-success border-success/20",
  "At Risk": "bg-warning/15 text-warning-foreground border-warning/30",
  "Non-Compliant": "bg-destructive/10 text-destructive border-destructive/20",
};

export function StatusBadge({ status }: { status: ComplianceStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[status],
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "Compliant" && "bg-success",
          status === "At Risk" && "bg-warning",
          status === "Non-Compliant" && "bg-destructive",
        )}
      />
      {status}
    </span>
  );
}