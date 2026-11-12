
import { Bell } from "lucide-react";
import AdminSection from "../components/AdminSection";

export default function Notifications() {
  return (
    <AdminSection
      title="Notifications"
      subtitle="Stay updated with important platform activities."
      icon={Bell}
      description="Manage alerts, order updates and system notifications."
      features={[
        "New order notifications",
        "Restaurant approval alerts",
        "Payment updates",
        "Customer complaints",
        "System notifications",
        "Notification history"
      ]}
    />
  );
}
