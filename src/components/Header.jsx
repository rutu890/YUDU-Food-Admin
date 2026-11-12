
import { Bell, Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="topbar yudu-topbar">
      <div className="header-search">
        <Search size={18} />
        <input
          type="search"
          placeholder="Search orders, restaurants, customers..."
          aria-label="Search dashboard"
        />
      </div>

      <div className="top-actions">
        <button
          className="icon-button notification-button"
          onClick={() => navigate("/notifications")}
          title="Notifications"
          aria-label="Open notifications"
        >
          <Bell size={19} />
          <i />
        </button>

        <button
          className="profile-chip"
          onClick={() => navigate("/profile-settings")}
        >
          <div className="avatar">SG</div>
          <div className="profile-info">
            <b>Sourav G</b>
            <small>Admin</small>
          </div>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}
