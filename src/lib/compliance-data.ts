export type ComplianceStatus = "Compliant" | "At Risk" | "Non-Compliant";
export type Framework = "GDPR" | "ISO 27001" | "SOC 2" | "HIPAA";

export interface ComplianceItem {
  id: string;
  control: string;
  framework: Framework;
  status: ComplianceStatus;
  assignee: string;
  dueDate: string;
  category: string;
}

export const complianceItems: ComplianceItem[] = [
  { id: "C-001", control: "Data Subject Access Request Process", framework: "GDPR", status: "Compliant", assignee: "Sarah Chen", dueDate: "2026-06-15", category: "Privacy" },
  { id: "C-002", control: "Encryption at Rest", framework: "ISO 27001", status: "Compliant", assignee: "Marcus Webb", dueDate: "2026-06-02", category: "Security" },
  { id: "C-003", control: "Vendor Risk Assessment", framework: "SOC 2", status: "At Risk", assignee: "Priya Patel", dueDate: "2026-05-30", category: "Vendor Mgmt" },
  { id: "C-004", control: "PHI Access Logging", framework: "HIPAA", status: "Compliant", assignee: "James Liu", dueDate: "2026-07-10", category: "Access Control" },
  { id: "C-005", control: "Incident Response Plan Test", framework: "ISO 27001", status: "Non-Compliant", assignee: "Sarah Chen", dueDate: "2026-05-20", category: "IR" },
  { id: "C-006", control: "Cookie Consent Banner", framework: "GDPR", status: "Compliant", assignee: "Elena Rossi", dueDate: "2026-08-01", category: "Privacy" },
  { id: "C-007", control: "Change Management Approvals", framework: "SOC 2", status: "Compliant", assignee: "Marcus Webb", dueDate: "2026-06-22", category: "Operations" },
  { id: "C-008", control: "Business Associate Agreements", framework: "HIPAA", status: "At Risk", assignee: "Priya Patel", dueDate: "2026-05-28", category: "Legal" },
  { id: "C-009", control: "Annual Risk Assessment", framework: "ISO 27001", status: "Compliant", assignee: "James Liu", dueDate: "2026-09-15", category: "Governance" },
  { id: "C-010", control: "Data Retention Policy Review", framework: "GDPR", status: "At Risk", assignee: "Elena Rossi", dueDate: "2026-06-05", category: "Privacy" },
  { id: "C-011", control: "Penetration Test", framework: "SOC 2", status: "Non-Compliant", assignee: "Marcus Webb", dueDate: "2026-05-18", category: "Security" },
  { id: "C-012", control: "Employee Security Training", framework: "ISO 27001", status: "Compliant", assignee: "Sarah Chen", dueDate: "2026-07-30", category: "HR" },
];

export interface AuditEntry {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  target: string;
  framework?: Framework;
}

export const auditLog: AuditEntry[] = [
  { id: "A-101", timestamp: "2026-05-25T09:42:00Z", actor: "Sarah Chen", action: "Marked control as Compliant", target: "Data Subject Access Request Process", framework: "GDPR" },
  { id: "A-100", timestamp: "2026-05-25T08:15:00Z", actor: "Marcus Webb", action: "Uploaded evidence", target: "Encryption at Rest", framework: "ISO 27001" },
  { id: "A-099", timestamp: "2026-05-24T17:03:00Z", actor: "Priya Patel", action: "Flagged At Risk", target: "Vendor Risk Assessment", framework: "SOC 2" },
  { id: "A-098", timestamp: "2026-05-24T14:21:00Z", actor: "System", action: "Auto-reminder sent", target: "Incident Response Plan Test", framework: "ISO 27001" },
  { id: "A-097", timestamp: "2026-05-24T11:48:00Z", actor: "James Liu", action: "Assigned reviewer", target: "PHI Access Logging", framework: "HIPAA" },
  { id: "A-096", timestamp: "2026-05-23T16:30:00Z", actor: "Elena Rossi", action: "Updated policy document", target: "Cookie Consent Banner", framework: "GDPR" },
  { id: "A-095", timestamp: "2026-05-23T10:12:00Z", actor: "Marcus Webb", action: "Closed finding", target: "Change Management Approvals", framework: "SOC 2" },
  { id: "A-094", timestamp: "2026-05-22T15:55:00Z", actor: "Sarah Chen", action: "Created new control", target: "Employee Security Training", framework: "ISO 27001" },
  { id: "A-093", timestamp: "2026-05-22T09:08:00Z", actor: "System", action: "Quarterly scan completed", target: "All frameworks" },
];

export const complianceTrend = [
  { month: "Dec", score: 72 },
  { month: "Jan", score: 75 },
  { month: "Feb", score: 78 },
  { month: "Mar", score: 81 },
  { month: "Apr", score: 84 },
  { month: "May", score: 87 },
];

export const frameworkBreakdown = [
  { framework: "GDPR", compliant: 18, total: 22 },
  { framework: "ISO 27001", compliant: 42, total: 51 },
  { framework: "SOC 2", compliant: 31, total: 38 },
  { framework: "HIPAA", compliant: 15, total: 19 },
];