
export default function YuduLogo({ collapsed = false }) {
  return (
    <div className={`yudu-brand ${collapsed ? "logo-only" : ""}`}>
      <img
        src="/Yudu_Icon.png"
        alt="YUDU Logo"
        className="yudu-logo-icon"
      />

      {!collapsed && (
        <div className="yudu-brand-text">
          <strong>YUDU</strong>
          <small>Good Food. Good Mood.</small>
        </div>
      )}
    </div>
  );
}
