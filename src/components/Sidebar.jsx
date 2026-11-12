
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ChartNoAxesColumn,
  Bell,
  List,
  UserRound,
  ShoppingBag,
  Store,
  CreditCard,
  Image,
  TicketPercent,
  ClipboardCheck,
  Bike,
  Users,
  ChevronRight,

} from "lucide-react";

import YuduLogo from "./YuduLogo";

const menuGroups = [
  {
    title: "MAIN MENU",
    items: [
      ["/dashboard", "Dashboard", LayoutDashboard],
      ["/analytics", "Analytics & Reports", ChartNoAxesColumn],
      ["/notifications", "Notifications", Bell],
      ["/activity-logs", "Activity Logs", List],
      ["/profile-settings", "Profile & Settings", UserRound]
    ]
  },
  {
    title: "MANAGEMENT",
    items: [
      ["/orders", "Orders", ShoppingBag],
      ["/restaurants", "Restaurants", Store],
      ["/customers", "Customers", Users],
      ["/partners", "Partner Applications", ClipboardCheck],
      ["/payments", "Payments", CreditCard],
      ["/coupons", "Coupons", TicketPercent],
      ["/promos", "Promos & Banners", Image],
      ["/riders", "Delivery Riders", Bike]
    ]
  }
];

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside className={`sidebar yudu-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-brand-row">
        <YuduLogo collapsed={collapsed} />


        <button
          type="button"
          className={`sidebar-toggle ${collapsed ? "is-collapsed" : ""}`}
          onClick={() => setCollapsed((prev) => !prev)}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
        >
          <svg
            className="sidebar-toggle-svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sidebar panel */}
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            {/* Vertical divider */}
            <path
              d="M9 4.5V19.5"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            {/* Animated direction arrow */}
            <path
              d="M14 9L17 12L14 15"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="toggle-arrow"
            />
          </svg>
        </button>

      </div>

      <div className="sidebar-navigation">
        {menuGroups.map((group) => (
          <div className="sidebar-group" key={group.title}>
            {!collapsed && (
              <div className="workspace-label">{group.title}</div>
            )}

            <nav>
              {group.items.map(([path, label, Icon]) => (
                <NavLink
                  key={path}
                  to={path}
                  title={collapsed ? label : undefined}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <Icon size={19} className="nav-icon" />
                  {!collapsed && <span>{label}</span>}
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <div className="help-card">
          {!collapsed ? (
            <>
              <b>Need help?</b>
              <span>Support is available 24/7.</span>
              <a href="mailto:support@example.com">
                Contact support <ChevronRight size={13} />
              </a>
            </>
          ) : (
            <a
              href="mailto:support@example.com"
              title="Contact support"
              className="collapsed-help"
            >
              ?
            </a>
          )}
        </div>

        {!collapsed && (
          <div className="sidebar-version">YUDU Admin · v1.0.0</div>
        )}
      </div>
    </aside>
  );
}
