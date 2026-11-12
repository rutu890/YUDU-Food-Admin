
import { ChartNoAxesColumn } from "lucide-react";
import AdminSection from "../components/AdminSection";

export default function Analytics() {
  return (
    <AdminSection
      title="Analytics & Reports"
      subtitle="Understand your platform performance."
      icon={ChartNoAxesColumn}
      description="Review business performance and generate reports."
      features={[
        "Revenue analytics",
        "Order performance",
        "Restaurant performance",
        "Customer growth",
        "Monthly reports",
        "Export reports"
      ]}
    />
  );
}
