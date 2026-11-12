
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider, useAuth } from "./auth/auth";
import Layout from "./components/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Promos from "./pages/Promos";
import Coupons from "./pages/Coupons";
import Partners from "./pages/Partners";
import Restaurants from "./pages/Restaurants";
import Orders from "./pages/Orders";
import Riders from "./pages/Riders";

import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import ActivityLogs from "./pages/ActivityLogs";
import ProfileSettings from "./pages/ProfileSettings";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";

function Protected({ children }) {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <Protected>
            <Layout />
          </Protected>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="activity-logs" element={<ActivityLogs />} />
        <Route path="profile-settings" element={<ProfileSettings />} />

        <Route path="orders" element={<Orders />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="customers" element={<Customers />} />
        <Route path="partners" element={<Partners />} />
        <Route path="payments" element={<Payments />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="promos" element={<Promos />} />
        <Route path="riders" element={<Riders />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
