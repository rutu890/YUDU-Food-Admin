
import { List } from "lucide-react";
import AdminSection from "../components/AdminSection";

export default function ActivityLogs() {
  return (
    <AdminSection
      title="Activity Logs"
      subtitle="Track administrative actions."
      icon={List}
      description="View the history of activities performed on the platform."
      features={[
        "Admin login history",
        "Order status changes",
        "Restaurant updates",
        "Payment activities",
        "Coupon changes",
        "Account activity"
      ]}
    />
  );
}
