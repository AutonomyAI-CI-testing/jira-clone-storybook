import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";

// ─── icons (inline SVGs to avoid extra deps) ───────────────────────────────

const GlyphIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="#fff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
    <path fill="#FFC107" d="M21.8 10.25H21V10H12v4h5.65C16.7 16.45 14.55 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.96.6 4 1.55l2.83-2.83C17.15 3.05 14.7 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.68-.07-1.35-.2-2Z" />
    <path fill="#FF3D00" d="m3.15 7.35 3.3 2.4C7.35 7.55 9.5 6 12 6c1.55 0 2.96.6 4 1.55l2.83-2.83C17.15 3.05 14.7 2 12 2 8.15 2 4.85 4.17 3.15 7.35Z" />
    <path fill="#4CAF50" d="M12 22c2.58 0 4.95-1 6.7-2.6l-3.1-2.6C14.6 17.55 13.35 18 12 18c-2.54 0-4.7-1.56-5.65-3.77l-3.24 2.5C4.73 19.83 8.12 22 12 22Z" />
    <path fill="#1976D2" d="M21.8 10.25H21V10H12v4h5.65c-.43 1.12-1.17 2.07-2.12 2.77l3.1 2.6C20 17.15 22 14.8 22 12c0-.68-.07-1.35-.2-2Z" />
  </svg>
);

const EyeIcon = ({ crossed }: { crossed: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    {crossed && <line x1="3" y1="3" x2="21" y2="21" />}
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="11"
    height="11"
    fill="none"
    stroke="#fff"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// ─── component ─────────────────────────────────────────────────────────────

interface Props {
  users: User[];
}

export const LoginView = ({ users }: Props) => {
  const [selectedUserId, setSelectedUserId] = useState<UserId>(userMock1.id);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // loading state will clear when Remix navigates away; reset as fallback
    setTimeout(() => setIsLoading(false), 3000);
  };

  // ─── brand panel ──────────────────────────────────────────────────────────

  const BrandPanel = () => (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#121211",
        borderRight: "1px solid #3C3B39",
        padding: "clamp(36px, 4.5vw, 64px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* warm off-axis glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
        }}
      />

      {/* film-grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* all content above glow */}
      <div style={{ position: "relative", zIndex: 1, display: "contents" }}>
        {/* wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            fontFamily: "Poppins, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "-0.01em",
            color: "#fff",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              flexShrink: 0,
              background: "linear-gradient(150deg, #F25730, #F69874)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
            }}
          >
            <GlyphIcon />
          </span>
          <span>
            Jira<span style={{ color: "#F25730" }}>Clone</span>
          </span>
          <span
            aria-hidden="true"
            style={{ width: 1, height: 18, background: "#3C3B39", margin: "0 3px" }}
          />
          <span
            style={{
              fontWeight: 500,
              fontSize: 14,
              color: "#7C7A75",
              letterSpacing: 0,
            }}
          >
            Project Tracker
          </span>
        </div>

        {/* mid section */}
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            padding: "48px 0",
            maxWidth: 480,
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#F25730",
              margin: "0 0 22px",
            }}
          >
            Agile project management
          </p>

          <h1
            style={{
              fontFamily: "Poppins, system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 3.6vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#fff",
            }}
          >
            Ship features,
            <br />
            <span
              style={{
                background: "linear-gradient(95deg, #F25730, #F69874)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              not incidents.
            </span>
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "#B4B1AC",
              margin: "22px 0 0",
              maxWidth: 420,
            }}
          >
            From sprint planning to deployment — track issues, assign tasks, and
            ship faster as a team.
          </p>

          {/* pipeline timeline */}
          <div
            aria-hidden="true"
            style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 0 }}
          >
            {[
              {
                color: "#9FD2ED",
                glow: "rgba(159,210,237,.12)",
                label: "Plan Sprint",
                detail: "Backlog groomed",
                time: "Day 1",
              },
              {
                color: "#E8A13C",
                glow: "rgba(232,161,60,.12)",
                label: "In Review",
                detail: "PR #142 open",
                time: "Day 4",
              },
              {
                color: "#4FB477",
                glow: "rgba(79,180,119,.14)",
                label: "Deployed",
                detail: "v2.1.0 live",
                time: "Day 5",
              },
            ].map((item, i, arr) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  position: "relative",
                  padding: "11px 0",
                }}
              >
                {/* connector line */}
                {i < arr.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 5,
                      top: "calc(50% + 5px)",
                      width: 1,
                      height: "calc(100% - 4px)",
                      background: "#3C3B39",
                    }}
                  />
                )}
                {/* node dot */}
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    background: item.color,
                    boxShadow: `0 0 0 4px ${item.glow}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 12.5,
                    letterSpacing: "0.02em",
                    color: "#B4B1AC",
                  }}
                >
                  <strong style={{ color: "#fff", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                    {item.label}
                  </strong>{" "}
                  — {item.detail}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 11,
                    color: "#7C7A75",
                  }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* footer trust badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 11,
            letterSpacing: "0.04em",
            color: "#7C7A75",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span>SOC 2 Type II</span>
          <span
            aria-hidden="true"
            style={{ width: 4, height: 4, borderRadius: "50%", background: "#4A4946" }}
          />
          <span>Open Source</span>
          <span
            aria-hidden="true"
            style={{ width: 4, height: 4, borderRadius: "50%", background: "#4A4946" }}
          />
          <span>Self-hostable</span>
        </div>
      </div>
    </section>
  );

  // ─── auth panel ───────────────────────────────────────────────────────────

  const Wordmark = ({ compact = false }: { compact?: boolean }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        fontFamily: "Poppins, system-ui, sans-serif",
        fontWeight: 800,
        fontSize: compact ? 17 : 19,
        letterSpacing: "-0.01em",
        color: "#fff",
        marginBottom: compact ? 30 : 0,
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          flexShrink: 0,
          background: "linear-gradient(150deg, #F25730, #F69874)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
        }}
      >
        <GlyphIcon />
      </span>
      <span>
        Jira<span style={{ color: "#F25730" }}>Clone</span>
      </span>
    </div>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "100vh",
        background: "#0B0B0A",
      }}
      className="login-shell"
    >
      {/* ── brand panel (hidden on mobile via CSS below) ─── */}
      <style>{`
        @media (max-width: 920px) {
          .login-shell { grid-template-columns: 1fr !important; }
          .login-brand { display: none !important; }
          .login-mobile-mark { display: flex !important; }
        }
        .login-sso-btn:hover {
          border-color: #4A4946 !important;
          background: #2A2A28 !important;
        }
        .login-submit:hover:not(:disabled) {
          background: #FC816F !important;
          transform: translateY(-1px);
        }
        .login-submit:active:not(:disabled) {
          background: #ED5339 !important;
          transform: translateY(0);
        }
        .login-input:focus {
          border-color: #F25730 !important;
          box-shadow: 0 0 0 3px rgba(242,87,48,.35) !important;
          outline: none;
        }
        .login-select:focus {
          border-color: #F25730 !important;
          box-shadow: 0 0 0 3px rgba(242,87,48,.35) !important;
          outline: none;
        }
        @keyframes login-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="login-brand" style={{ display: "contents" }}>
        <BrandPanel />
      </div>

      {/* ── auth panel ──────────────────────────────────── */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(28px, 5vw, 64px)",
          background: "#121211",
        }}
      >
        <div style={{ width: "100%", maxWidth: 392 }}>
          {/* mobile-only wordmark */}
          <div
            className="login-mobile-mark"
            style={{ display: "none", marginBottom: 30 }}
          >
            <Wordmark compact />
          </div>

          {/* auth header */}
          <div style={{ marginBottom: 30 }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#7C7A75",
                margin: "0 0 14px",
              }}
            >
              Sign in
            </p>
            <h2
              style={{
                fontFamily: "Poppins, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 30,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
                color: "#ff0000",
              }}
            >
              Welcome back
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.5,
                color: "#B4B1AC",
                margin: "9px 0 0",
              }}
            >
              Your team is waiting.
            </p>
          </div>

          {/* SSO buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
            {[
              { id: "github", icon: <GitHubIcon />, label: "Continue with GitHub" },
              { id: "google", icon: <GoogleIcon />, label: "Continue with Google" },
            ].map((sso) => (
              <button
                key={sso.id}
                type="button"
                className="login-sso-btn"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  fontFamily: "Poppins, system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  background: "#212120",
                  color: "#fff",
                  border: "1px solid #3C3B39",
                  borderRadius: 8,
                  padding: "12px 16px",
                  cursor: "pointer",
                  transition: "border-color .18s ease, background .18s ease",
                }}
              >
                {sso.icon}
                {sso.label}
              </button>
            ))}
          </div>

          {/* OR divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              margin: "0 0 22px",
              color: "#7C7A75",
            }}
          >
            <span style={{ flex: 1, height: 1, background: "#3C3B39" }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              or
            </span>
            <span style={{ flex: 1, height: 1, background: "#3C3B39" }} />
          </div>

          {/* login form */}
          <Form method="post" onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* account / user select */}
              <div>
                <label
                  htmlFor="userId"
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#B4B1AC",
                    marginBottom: 7,
                  }}
                >
                  Account
                </label>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <select
                    id="userId"
                    name="userId"
                    className="login-select"
                    value={selectedUserId}
                    onChange={(e) => setSelectedUserId(e.target.value as UserId)}
                    disabled={isLoading}
                    style={{
                      width: "100%",
                      appearance: "none",
                      fontFamily: "Poppins, system-ui, sans-serif",
                      fontSize: 15,
                      color: "#fff",
                      background: "#333333",
                      border: "1px solid #3C3B39",
                      borderRadius: 8,
                      padding: "12px 40px 12px 14px",
                      cursor: "pointer",
                      transition: "border-color .15s ease, box-shadow .15s ease",
                    }}
                  >
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: 12,
                      color: "#7C7A75",
                      pointerEvents: "none",
                    }}
                  >
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>

              {/* password field (visual) */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 7,
                  }}
                >
                  <label
                    htmlFor="login-password"
                    style={{ fontSize: 13, fontWeight: 500, color: "#B4B1AC" }}
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    style={{
                      fontSize: 12.5,
                      color: "#F25730",
                      textDecoration: "none",
                      background: "none",
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    Forgot password?
                  </button>
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    className="login-input"
                    autoComplete="current-password"
                    style={{
                      width: "100%",
                      fontFamily: "Poppins, system-ui, sans-serif",
                      fontSize: 15,
                      color: "#fff",
                      background: "#333333",
                      border: "1px solid #3C3B39",
                      borderRadius: 8,
                      padding: "12px 44px 12px 14px",
                      transition: "border-color .15s ease, box-shadow .15s ease",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    style={{
                      position: "absolute",
                      right: 6,
                      background: "none",
                      border: 0,
                      cursor: "pointer",
                      color: "#7C7A75",
                      padding: 8,
                      borderRadius: 6,
                      display: "flex",
                    }}
                  >
                    <EyeIcon crossed={showPassword} />
                  </button>
                </div>
              </div>

              {/* remember me */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 13.5,
                  color: "#B4B1AC",
                  cursor: "pointer",
                  userSelect: "none",
                  marginTop: 2,
                }}
              >
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                />
                <span
                  style={{
                    width: 17,
                    height: 17,
                    borderRadius: 5,
                    border: `1px solid ${rememberMe ? "#F25730" : "#4A4946"}`,
                    background: rememberMe ? "#F25730" : "#333333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all .15s ease",
                  }}
                >
                  {rememberMe && <CheckIcon />}
                </span>
                Keep me signed in
              </label>

              {/* submit button */}
              <button
                type="submit"
                name="_action"
                value="setUser"
                disabled={isLoading}
                className="login-submit"
                style={{
                  marginTop: 4,
                  width: "100%",
                  fontFamily: "Poppins, system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  background: "#F25730",
                  color: "#fff",
                  border: 0,
                  borderRadius: 8,
                  padding: "13px 16px",
                  cursor: isLoading ? "wait" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22)",
                  transition: "background .15s ease, transform .12s ease",
                  opacity: isLoading ? 0.85 : 1,
                }}
              >
                {isLoading && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: 16,
                      height: 16,
                      border: "2px solid rgba(255,255,255,.4)",
                      borderRightColor: "#fff",
                      borderRadius: "50%",
                      animation: "login-spin .65s linear infinite",
                    }}
                  />
                )}
                <span>{isLoading ? "Signing in…" : "Sign in →"}</span>
              </button>
            </div>
          </Form>

          {/* footnote */}
          <p
            style={{
              marginTop: 26,
              textAlign: "center",
              fontSize: 13.5,
              color: "#B4B1AC",
            }}
          >
            New here?{" "}
            <button
              type="button"
              style={{
                color: "#F25730",
                textDecoration: "none",
                fontWeight: 500,
                background: "none",
                border: 0,
                padding: 0,
                cursor: "pointer",
              }}
            >
              Request access →
            </button>
          </p>

          {/* secure badge */}
          <div
            style={{
              marginTop: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "0.05em",
              color: "#7C7A75",
            }}
          >
            <LockIcon />
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </div>
  );
};
