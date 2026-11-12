
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  Store,
  Smartphone,
  Clock3,
  CheckCircle2,
  Users,
  ClipboardList,
  KeyRound,
  Utensils,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../auth/auth";
import "./Login.css";

const demoPartners = [
  { initials: "SR", name: "Spice Route Kitchen", location: "Pune · Maharashtra", status: "Verified" },
  { initials: "BB", name: "Biryani Bhavan", location: "Hyderabad · Telangana", status: "Pending" },
  { initials: "CM", name: "Cafe Mocha", location: "Mumbai · Maharashtra", status: "Live" },
];

export default function Login() {
  const [step, setStep] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loginMode, setLoginMode] = useState("password");

  const { login } = useAuth();
  const navigate = useNavigate();

  const submitCredentials = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Demo credentials. Replace with your backend login API later.
    if (
      email.trim().toLowerCase() !== "admin@yudu.in" ||
      password !== "Admin@123"
    ) {
      setError("Incorrect email or password. Please try again.");
      return;
    }

    setStep("verification");
    setOtp("");
    toast.success("Verification code sent", {
      description: "Use the demo OTP 123456.",
    });
  };

  const sendPhoneOtp = (e) => {
    e.preventDefault();
    setError("");

    if (!/^\d{10}$/.test(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    setStep("verification");
    setOtp("");
    toast.success("Demo OTP sent", {
      description: "Use 123456 to continue.",
    });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    setError("");

    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the complete 6-digit verification code.");
      return;
    }

    // Keep compatibility with your existing AuthContext demo login.
    const demoPhone = loginMode === "otp" ? phone : "9999999999";

    if (login(demoPhone, otp)) {
      toast.success("Welcome to YUDU Admin", {
        description: "You have signed in successfully.",
      });
      navigate("/dashboard", { replace: true });
    } else {
      setError("Invalid verification code. Please try again.");
    }
  };

  const sendResetLink = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStep("reset-sent");

    toast.success("Reset link sent", {
      description: "Check your email for the password reset instructions.",
    });
  };

  const resetLogin = () => {
    setStep("login");
    setError("");
    setOtp("");
    setPassword("");
  };

  return (
    <div className="yudu-login-page">
      {/* LEFT BRANDING PANEL */}
      <aside className="yudu-login-brand-panel">
        <div className="yudu-login-brand-content">
          <div className="yudu-login-brand">
            <img src="/Yudu_Icon.png" alt="YUDU" />
            <div>
              <strong>yudu</strong>
              <small>Good Food. Good Mood.</small>
            </div>
          </div>

          <div className="yudu-login-intro">
            <span className="yudu-login-eyebrow">
              RESTAURANT PARTNER CONSOLE
            </span>

            <h1>
              Grow with every
              <br />
              restaurant partner.
            </h1>

            <p>
              Onboard, verify and manage your restaurant partners — menus,
              orders and payouts — all from one console.
            </p>
          </div>

          <div className="yudu-login-stats">
            <div className="yudu-login-stat">
              <span><Store size={13} /> Restaurant Partners</span>
              <strong>1,284</strong>
              <small>+5.2% joined this month</small>
            </div>

            <div className="yudu-login-stat">
              <span><Smartphone size={13} /> Live on App</span>
              <strong>1,016</strong>
              <small>79% of all partners</small>
            </div>

            <div className="yudu-login-stat">
              <span><Clock3 size={13} /> Pending Verification</span>
              <strong>18</strong>
              <small>Needs admin review</small>
            </div>

            <div className="yudu-login-stat">
              <span><Users size={13} /> Orders Today</span>
              <strong>9,420</strong>
              <small>Across all listed kitchens</small>
            </div>
          </div>

          <div className="yudu-login-activity">
            <div className="yudu-activity-heading">
              <strong>Recent partner activity</strong>
              <span>View all</span>
            </div>

            {demoPartners.map((partner) => (
              <div className="yudu-activity-row" key={partner.initials}>
                <div className="yudu-partner-avatar">
                  {partner.initials}
                </div>

                <div className="yudu-partner-info">
                  <strong>{partner.name}</strong>
                  <small>{partner.location}</small>
                </div>

                <span className={`yudu-partner-status ${partner.status.toLowerCase()}`}>
                  {partner.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="yudu-login-footer">
          <span>© 2026 YUDU Technologies Pvt. Ltd.</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="mailto:support@example.com">Help</a>
          </div>
        </div>
      </aside>

      {/* RIGHT LOGIN PANEL */}
      <main className="yudu-login-form-panel">
        <div className="yudu-login-form-card">

          {/* LOGIN */}
          {step === "login" && (
            <>
              <div className="yudu-form-icon">
                <ShieldCheck size={21} />
              </div>

              <span className="yudu-form-eyebrow">
                RESTAURANT PARTNER CONSOLE
              </span>

              <h2>Welcome back, Admin</h2>
              <p className="yudu-form-description">
                Sign in to manage restaurant partners, menus, orders and
                payouts.
              </p>

              {error && <div className="yudu-form-error">{error}</div>}

              {loginMode === "password" ? (
                <form onSubmit={submitCredentials}>
                  <label className="yudu-field-label">Work email</label>

                  <div className="yudu-input-wrap">
                    <Mail size={16} />
                    <input
                      type="email"
                      placeholder="admin@yudu.in"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                    />
                  </div>

                  <label className="yudu-field-label">Password</label>

                  <div className="yudu-input-wrap">
                    <LockKeyhole size={16} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                    />

                    <button
                      type="button"
                      className="yudu-password-toggle"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  <div className="yudu-login-options">
                    <label className="yudu-remember">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                      />
                      <span>Keep me signed in</span>
                    </label>

                    <button
                      type="button"
                      className="yudu-text-link"
                      onClick={() => {
                        setError("");
                        setStep("forgot");
                      }}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button type="submit" className="yudu-submit-button">
                    Sign in <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <form onSubmit={sendPhoneOtp}>
                  <label className="yudu-field-label">Phone number</label>

                  <div className="yudu-input-wrap">
                    <Smartphone size={16} />
                    <span className="yudu-country-code">+91</span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Enter 10-digit number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, ""));
                        setError("");
                      }}
                    />
                  </div>

                  <button type="submit" className="yudu-submit-button">
                    Send OTP <ArrowRight size={16} />
                  </button>
                </form>
              )}

              <div className="yudu-login-divider">
                <span>or continue with</span>
              </div>

              <button
                type="button"
                className="yudu-alternate-login"
                onClick={() => {
                  setLoginMode((mode) => mode === "password" ? "otp" : "password");
                  setError("");
                }}
              >
                {loginMode === "password" ? (
                  <><Smartphone size={15} /> OTP login</>
                ) : (
                  <><Mail size={15} /> Email login</>
                )}
              </button>

              <div className="yudu-security-note">
                <ShieldCheck size={15} />
                <span>
                  Secured with 256-bit encryption. Access is limited to
                  authorized YUDU staff.
                </span>
              </div>
            </>
          )}

          {/* TWO-STEP VERIFICATION */}
          {step === "verification" && (
            <>
              <button className="yudu-back-link" onClick={resetLogin}>
                <ArrowLeft size={14} /> Back to login
              </button>

              <div className="yudu-form-icon">
                <ShieldCheck size={21} />
              </div>

              <h2>Two-step verification</h2>
              <p className="yudu-form-description">
                We sent a 6-digit code to{" "}
                <strong>
                  {loginMode === "otp" ? `+91 ${phone}` : email}
                </strong>.
                Enter it below to continue.
              </p>

              {error && <div className="yudu-form-error">{error}</div>}

              <form onSubmit={verifyOtp}>
                <label className="yudu-field-label">Verification code</label>

                <input
                  className="yudu-otp-input"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="• • • • • •"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value.replace(/\D/g, ""));
                    setError("");
                  }}
                  autoFocus
                />

                <div className="yudu-otp-help">
                  <span>Didn't get the code?</span>
                  <button
                    type="button"
                    className="yudu-text-link"
                    onClick={() => toast.success("New demo OTP sent: 123456")}
                  >
                    Resend code
                  </button>
                </div>

                <label className="yudu-remember yudu-trust-device">
                  <input type="checkbox" defaultChecked />
                  <span>Trust this device for 30 days</span>
                </label>

                <button type="submit" className="yudu-submit-button">
                  Verify &amp; sign in <ArrowRight size={16} />
                </button>
              </form>
            </>
          )}

          {/* FORGOT PASSWORD */}
          {step === "forgot" && (
            <>
              <button className="yudu-back-link" onClick={resetLogin}>
                <ArrowLeft size={14} /> Back to login
              </button>

              <div className="yudu-form-icon">
                <KeyRound size={21} />
              </div>

              <h2>Forgot your password?</h2>
              <p className="yudu-form-description">
                Enter your admin email and we'll send you a secure link to
                reset it.
              </p>

              {error && <div className="yudu-form-error">{error}</div>}

              <form onSubmit={sendResetLink}>
                <label className="yudu-field-label">Work email</label>

                <div className="yudu-input-wrap">
                  <Mail size={16} />
                  <input
                    type="email"
                    placeholder="name@yudu.in"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                  />
                </div>

                <button type="submit" className="yudu-submit-button">
                  Send reset link <ArrowRight size={16} />
                </button>
              </form>

              <div className="yudu-security-note">
                <ShieldCheck size={15} />
                <span>
                  Only registered admin email addresses can request a
                  password reset.
                </span>
              </div>
            </>
          )}

          {/* RESET LINK SENT */}
          {step === "reset-sent" && (
            <>
              <button className="yudu-back-link" onClick={resetLogin}>
                <ArrowLeft size={14} /> Back to login
              </button>

              <div className="yudu-form-icon success-icon">
                <Mail size={21} />
              </div>

              <h2>Check your email</h2>
              <p className="yudu-form-description">
                We sent a password reset link to{" "}
                <strong>{email}</strong>. It expires in 15 minutes.
              </p>

              <button
                type="button"
                className="yudu-submit-button"
                onClick={resetLogin}
              >
                Back to sign in <ArrowRight size={16} />
              </button>

              <div className="yudu-security-note">
                <CheckCircle2 size={15} />
                <span>
                  Didn't receive it? Check your spam folder or contact
                  YUDU support.
                </span>
              </div>
            </>
          )}
        </div>

        <p className="yudu-login-support">
          Need help signing in?{" "}
          <a href="mailto:support@example.com">Contact YUDU support · 24/7</a>
        </p>

        <div className="yudu-demo-hint">
          <Utensils size={13} />
          Demo: admin@yudu.in / Admin@123 · OTP: 123456
        </div>
      </main>
    </div>
  );
}
