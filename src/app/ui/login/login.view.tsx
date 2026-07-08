import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";

// ─── Icons ───────────────────────────────────────────────────────────────────

const GlyphIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
    <circle cx="12" cy="12" r="3.4"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
    <path fill="#FFC107" d="M21.8 10.25H21V10H12v4h5.65A5.98 5.98 0 0 1 12 18a6 6 0 1 1 3.99-10.55l2.83-2.83A10 10 0 1 0 22 12c0-.62-.07-1.23-.2-1.75Z"/>
    <path fill="#FF3D00" d="m3.15 7.35 3.3 2.4A5.99 5.99 0 0 1 12 6c1.54 0 2.94.59 3.99 1.55l2.83-2.83A10 10 0 0 0 2 12c0-1.7.44-3.29 1.15-4.65Z"/>
    <path fill="#4CAF50" d="M12 22a9.96 9.96 0 0 0 6.7-2.6l-3.1-2.6A5.97 5.97 0 0 1 12 18a5.98 5.98 0 0 1-5.66-3.95l-3.26 2.51A10 10 0 0 0 12 22Z"/>
    <path fill="#1976D2" d="M21.8 10.25H21V10H12v4h5.65a6.02 6.02 0 0 1-2.05 2.8l3.1 2.6C20.57 17.68 22 15.02 22 12c0-.62-.07-1.23-.2-1.75Z"/>
  </svg>
);

const EyeIcon = ({ crossed = false }: { crossed?: boolean }) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
    {crossed && <line x1="3" y1="3" x2="21" y2="21"/>}
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#fff" strokeWidth="2.6">
    <path d="M5 12.5 10 17l9-10"/>
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2"/>
    <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
  </svg>
);

// ─── Wordmark ─────────────────────────────────────────────────────────────────

const Wordmark = ({ compact = false }: { compact?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 11, fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: compact ? 16 : 19, letterSpacing: "-0.01em" }}>
    <span
      aria-hidden="true"
      style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        background: "linear-gradient(150deg, #F25730, #F69874)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
      }}
    >
      <GlyphIcon />
    </span>
    <span style={{ color: "#FFFFFF" }}>
      Autonomy<span style={{ color: "#F25730" }}>AI</span>
    </span>
    {!compact && (
      <>
        <span aria-hidden="true" style={{ width: 1, height: 18, background: "#3C3B39", margin: "0 3px" }} />
        <span style={{ fontWeight: 500, fontSize: 14, color: "#7C7A75", letterSpacing: 0 }}>On-Call Agent</span>
      </>
    )}
  </div>
);

// ─── Pipeline Status Motif ────────────────────────────────────────────────────

const PipelineRow = ({
  nodeClass,
  label,
  bold,
  time,
}: {
  nodeClass: string;
  label: string;
  bold: string;
  time: string;
}) => (
  <div className="lp-pl-row">
    <span className={`lp-node ${nodeClass}`} />
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, letterSpacing: "0.02em", color: "#B4B1AC", flex: 1 }}>
      <b style={{ color: "#FFFFFF", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>{bold}</b>
      {" "}— {label}
    </span>
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#7C7A75" }}>{time}</span>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const LoginView = ({ users, isLoading = false }: Props) => {
  const [selectedUserId, setSelectedUserId] = useState<UserId>(userMock1.id);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(isLoading);

  const onUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(e.target.value as UserId);
  };

  const handleSSOClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.borderColor = "#F25730";
    setTimeout(() => { btn.style.borderColor = ""; }, 500);
  };

  return (
    <div
      className="login-page"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "100vh",
        background: "#121211",
      }}
    >
      {/* Film grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none",
          opacity: 0.045, mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ===================== BRAND PANEL ===================== */}
      <section
        className="lp-brand-panel"
        style={{
          position: "relative", overflow: "hidden",
          background: "#121211",
          borderRight: "1px solid #3C3B39",
          padding: "clamp(36px, 4.5vw, 64px)",
          display: "flex", flexDirection: "column",
        }}
      >
        {/* Off-axis warm glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `
              radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
              radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)
            `,
          }}
        />

        {/* Content sits above the glow */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Wordmark */}
          <Wordmark />

          {/* Middle content */}
          <div style={{ marginTop: "auto", marginBottom: "auto", padding: "48px 0", maxWidth: 480 }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500, fontSize: 12, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#F25730", margin: "0 0 22px",
            }}>
              Autonomous incident response
            </p>

            <h1 style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 800,
              fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.05,
              letterSpacing: "-0.02em", margin: 0, color: "#FFFFFF",
            }}>
              Your on-call engineer that{" "}
              <span style={{
                background: "linear-gradient(95deg, #F25730, #F69874)",
                WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
              }}>
                never sleeps.
              </span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.55, color: "#B4B1AC", margin: "22px 0 0", maxWidth: 420 }}>
              From first alert to merged fix — the agent triages, investigates, and ships the patch while your team stays asleep.
            </p>

            {/* Pipeline status motif */}
            <div className="lp-pipeline" style={{ marginTop: 40 }} aria-hidden="true">
              <PipelineRow nodeClass="lp-n-blue" bold="Alert received" label="latency spike, checkout-svc" time="00:00" />
              <PipelineRow nodeClass="lp-n-amber" bold="Triaged & root-caused" label="connection pool exhausted" time="00:02" />
              <PipelineRow nodeClass="lp-n-ok" bold="Fix merged" label="PR #1408, verified in staging" time="00:09" />
            </div>
          </div>

          {/* Footer trust badges */}
          <div style={{
            display: "flex", alignItems: "center", gap: 18,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: "0.04em", color: "#7C7A75",
          }}>
            <span>SOC 2 Type II</span>
            <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: "50%", background: "#4A4946" }} />
            <span>Runs in your infra</span>
            <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: "50%", background: "#4A4946" }} />
            <span>150+ teams on-call</span>
          </div>
        </div>
      </section>

      {/* ===================== AUTH PANEL ===================== */}
      <section style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(28px, 5vw, 64px)",
        background: "#121211",
      }}>
        <div style={{ width: "100%", maxWidth: 392 }}>
          {/* Mobile-only wordmark */}
          <div
            className="lp-mobile-mark"
            style={{ display: "none", marginBottom: 30 }}
          >
            <Wordmark compact />
          </div>

          {/* Auth header */}
          <div style={{ marginBottom: 30 }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace", fontWeight: 500,
              fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#7C7A75", margin: "0 0 14px",
            }}>
              Sign in
            </p>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 700,
              fontSize: 30, lineHeight: 1.1, letterSpacing: "-0.02em",
              margin: 0, color: "#FFFFFF",
            }}>
              Welcome back
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: "#B4B1AC", margin: "9px 0 0" }}>
              Pick up where the agent left off.
            </p>
          </div>

          {/* SSO Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
            <button type="button" className="lp-sso-btn" onClick={handleSSOClick}>
              <GitHubIcon />
              Continue with GitHub
            </button>
            <button type="button" className="lp-sso-btn" onClick={handleSSOClick}>
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14,
            margin: "0 0 22px", color: "#7C7A75",
          }}>
            <span style={{ height: 1, flex: 1, background: "#3C3B39" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>or</span>
            <span style={{ height: 1, flex: 1, background: "#3C3B39" }} />
          </div>

          {/* Login Form */}
          <Form method="post" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* User / Email field */}
            <div>
              <label
                htmlFor="userSelect"
                style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#B4B1AC", marginBottom: 7 }}
              >
                Work email
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="userSelect"
                  name="userId"
                  value={selectedUserId}
                  onChange={onUserChange}
                  className="lp-input"
                  style={{
                    width: "100%",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 15,
                    color: "#FFFFFF",
                    background: "#333333",
                    border: "1px solid #3C3B39",
                    borderRadius: 8,
                    padding: "12px 14px",
                    outline: "none",
                    appearance: "none",
                    WebkitAppearance: "none",
                    cursor: "pointer",
                  }}
                >
                  {users.map((user) => (
                    <option key={user.id} value={user.id} style={{ background: "#212120" }}>
                      {user.name}
                    </option>
                  ))}
                </select>
                {/* Chevron icon */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="14" height="14"
                  fill="none"
                  stroke="#7C7A75"
                  strokeWidth="2"
                  style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>

            {/* Password field */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 7 }}>
                <label
                  htmlFor="password"
                  style={{ fontSize: 13, fontWeight: 500, color: "#B4B1AC" }}
                >
                  Password
                </label>
                <a
                  href="#"
                  style={{ fontSize: 12.5, color: "#F25730", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.textDecoration = "underline"; }}
                  onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.textDecoration = "none"; }}
                >
                  Forgot password?
                </a>
              </div>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  className="lp-input"
                  style={{ paddingRight: 44 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  style={{
                    position: "absolute", right: 6,
                    background: "none", border: 0, cursor: "pointer",
                    color: "#7C7A75", padding: 8, borderRadius: 6,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "color .15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#B4B1AC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#7C7A75"; }}
                >
                  <EyeIcon crossed={showPassword} />
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label
              style={{
                display: "flex", alignItems: "center", gap: 9,
                fontSize: 13.5, color: "#B4B1AC", cursor: "pointer",
                userSelect: "none", marginTop: 2,
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
              />
              <span
                className="lp-checkbox-box"
                style={rememberMe ? { background: "#F25730", borderColor: "#F25730" } : {}}
              >
                {rememberMe && <CheckIcon />}
              </span>
              Keep me signed in
            </label>

            {/* Submit */}
            <button
              type="submit"
              name="_action"
              value="setUser"
              className={`lp-submit${loading ? " loading" : ""}`}
              disabled={loading}
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 1800);
              }}
            >
              <span className="lp-spinner" aria-hidden="true" />
              <span className="lp-btn-label">{loading ? "Signing in…" : "Sign in"}</span>
            </button>
          </Form>

          {/* Footnote */}
          <p style={{ marginTop: 26, textAlign: "center", fontSize: 13.5, color: "#B4B1AC" }}>
            New to the On-Call Agent?{" "}
            <a
              href="#"
              style={{ color: "#F25730", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.textDecoration = "none"; }}
            >
              Request access
            </a>
          </p>

          {/* Secure badge */}
          <div style={{
            marginTop: 28, display: "flex", alignItems: "center", justifyContent: "center",
            gap: 8, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: "0.05em", color: "#7C7A75",
          }}>
            <LockIcon />
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  users: User[];
  isLoading?: boolean;
}
