
import { UserRound } from "lucide-react";
import AdminSection from "../components/AdminSection";

export default function ProfileSettings() {
  return (
    <AdminSection
      title="Profile & Settings"
      subtitle="Manage your administrator account."
      icon={UserRound}
      description="Account and platform preferences."
      features={[
        "Personal information",
        "Profile photo",
        "Change password",
        "Notification preferences",
        "Security settings",
        "Business information"
      ]}
    />
  );
}
