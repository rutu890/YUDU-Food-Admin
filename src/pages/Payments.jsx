
import { CreditCard } from "lucide-react";
import AdminSection from "../components/AdminSection";

export default function Payments() {
  return (
    <AdminSection
      title="Payments"
      subtitle="Monitor transactions and payment activity."
      icon={CreditCard}
      description="Manage payment records, refunds and settlements."
      features={[
        "All transactions",
        "Successful payments",
        "Failed payments",
        "Refund requests",
        "Restaurant settlements",
        "Payment reports"
      ]}
    />
  );
}
