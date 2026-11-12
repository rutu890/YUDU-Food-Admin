
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAuth } from "../auth/auth";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`app-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main className="main-area">
        <Header />

        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
