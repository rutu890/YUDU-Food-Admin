
import { Users } from "lucide-react";
import AdminSection from "../components/AdminSection";

export default function Customers() {
  return (
    <AdminSection
      title="Customers"
      subtitle="Manage your Yudu customers."
      icon={Users}
      description="View customer information and account activity."
      features={[
        "All customers",
        "Customer profiles",
        "Order history",
        "Customer feedback",
        "Blocked accounts"
      ]}
    />
  );
}
