import { useState } from "react";

export const ClaudeFeiView = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        // Color tokens from the AutonomyAI design system
        ["--ink-950" as string]: "#121013",
        ["--ink-900" as string]: "#18161A",
        ["--ink-700" as string]: "#262229",
        ["--ink-600" as string]: "#302C34",
        ["--ink-500" as string]: "#1E1B22",
        ["--ink-400" as string]: "#3A3540",
        ["--ink-300" as string]: "#4A4550",
        ["--fg" as string]: "#F2EFF0",
        ["--fg-muted" as string]: "#A29DA6",
        ["--fg-faint" as string]: "#6E6873",
        ["--aai-orange" as string]: "#F25730",
        ["--aai-orange-peach" as string]: "#FF8A63",
        ["--aai-orange-bright" as string]: "#FF6A3D",
        ["--aai-orange-deep" as string]: "#D8441F",
        ["--aai-blue" as string]: "#9FD2ED",
        ["--ok" as string]: "#4FB477",
        ["--warn" as string]: "#E8A13C",
        ["--err" as string]: "#E5484D",
        ["--ring" as string]: "rgba(242,87,48,.22)",
        ["--glow-orange" as string]: "0 0 18px rgba(242,87,48,.25), 0 1px 2px rgba(0,0,0,.35)",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        position: "relative" as const,
        background: "var(--ink-950)",
        color: "var(--fg)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Film grain overlay — signature brand texture */}
      <div
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

      {/* "Claude Fei" red overlay — fixed, truly centered over entire viewport */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 10000,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#00CC00",
            fontSize: "clamp(64px, 10vw, 120px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
            textShadow: "0 0 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.8)",
            background: "rgba(0,0,0,0.45)",
            padding: "12px 32px",
            borderRadius: 8,
          }}
        >
          Claude Fei
        </span>
      </div>

      {/* Main shell: two-column grid */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          minHeight: "100vh",
        }}
        className="claude-fei-shell"
      >
        {/* ===== BRAND PANEL (left) ===== */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "var(--ink-900)",
            borderRight: "1px solid var(--ink-400)",
            padding: "clamp(36px,4.5vw,64px)",
            display: "flex",
            flexDirection: "column",
          }}
          className="claude-fei-brand"
        >
          {/* Warm glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `
                radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
                radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)
              `,
            }}
          />

          {/* Wordmark */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              gap: 11,
              fontWeight: 800,
              fontSize: 19,
              letterSpacing: "-0.01em",
            }}
          >
            <span aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 8, background: "var(--aai-orange)" }}>
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: "#fff", fill: "none", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span>Autonomy<span style={{ color: "var(--aai-orange)" }}>AI</span></span>
            <span style={{ width: 1, height: 18, background: "var(--ink-400)", margin: "0 3px" }} aria-hidden="true" />
            <span style={{ fontWeight: 500, fontSize: 14, color: "var(--fg-muted)", letterSpacing: 0 }}>On-Call Agent</span>
          </div>

          {/* Brand mid content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              marginTop: "auto",
              marginBottom: "auto",
              padding: "48px 0",
              maxWidth: 480,
            }}
          >
            <p style={{ fontFamily: "monospace", fontWeight: 500, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--aai-orange)", margin: "0 0 22px" }}>
              Autonomous incident response
            </p>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(32px,3.6vw,48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: "var(--fg)" }}>
              Your on-call engineer that{" "}
              <span style={{ background: "linear-gradient(95deg,var(--aai-orange),var(--aai-orange-peach))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                never sleeps.
              </span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-muted)", margin: "22px 0 0", maxWidth: 420 }}>
              From first alert to merged fix — the agent triages, investigates, and ships the patch while your team stays asleep.
            </p>

            {/* Pipeline motif */}
            <div aria-hidden="true" style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { nodeClass: "blue", label: <><b style={{ color: "var(--fg)", fontWeight: 600 }}>Alert received</b> — latency spike, checkout-svc</>, t: "00:00", bg: "var(--aai-blue)", shadow: "rgba(159,210,237,.12)" },
                { nodeClass: "amber", label: <><b style={{ color: "var(--fg)", fontWeight: 600 }}>Triaged &amp; root-caused</b> — connection pool exhausted</>, t: "00:02", bg: "var(--warn)", shadow: "rgba(232,161,60,.12)" },
                { nodeClass: "ok", label: <><b style={{ color: "var(--fg)", fontWeight: 600 }}>Fix merged</b> — PR #1408, verified in staging</>, t: "00:09", bg: "var(--ok)", shadow: "rgba(79,180,119,.14)" },
              ].map((row, i, arr) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, position: "relative", padding: "11px 0" }}>
                  {i < arr.length - 1 && (
                    <div style={{ position: "absolute", left: 5, top: 22, bottom: -1, width: 1, background: "var(--ink-400)" }} />
                  )}
                  <span style={{ width: 11, height: 11, borderRadius: "50%", flex: "none", background: row.bg, boxShadow: `0 0 0 4px ${row.shadow}`, position: "relative", zIndex: 1 }} />
                  <span style={{ fontFamily: "monospace", fontSize: 12.5, letterSpacing: "0.02em", color: "var(--fg-muted)" }}>{row.label}</span>
                  <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 11, color: "var(--fg-faint)" }}>{row.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand footer badges */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 18, fontFamily: "monospace", fontSize: 11, letterSpacing: "0.04em", color: "var(--fg-faint)" }}>
            <span>SOC 2 Type II</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--ink-300)" }} aria-hidden="true" />
            <span>Runs in your infra</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--ink-300)" }} aria-hidden="true" />
            <span>150+ teams on-call</span>
          </div>
        </section>

        {/* ===== AUTH PANEL (right) ===== */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(28px,5vw,64px)",
            background: "var(--ink-900)",
          }}
        >
          <div style={{ width: "100%", maxWidth: 392 }}>
            {/* Mobile-only wordmark */}
            <div className="claude-fei-mobile-mark" style={{ display: "none", alignItems: "center", gap: 11, fontWeight: 800, fontSize: 19, marginBottom: 30 }}>
              <span aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 8, background: "var(--aai-orange)" }}>
                <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: "#fff", fill: "none", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                  <circle cx="12" cy="12" r="3.4" />
                </svg>
              </span>
              <span>Autonomy<span style={{ color: "var(--aai-orange)" }}>AI</span></span>
            </div>

            {/* Auth header */}
            <div style={{ marginBottom: 30 }}>
              <p style={{ fontFamily: "monospace", fontWeight: 500, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-faint)", margin: "0 0 14px" }}>Sign in</p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(26px,3vw,34px)", letterSpacing: "-0.02em", margin: "0 0 8px", color: "var(--fg)" }}>Welcome back</h2>
              <p style={{ margin: 0, color: "var(--fg-muted)", fontSize: 15 }}>Pick up where the agent left off.</p>
            </div>

            {/* SSO buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {[
                {
                  id: "github",
                  label: "Continue with GitHub",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 17, height: 17, flex: "none" }}>
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
                    </svg>
                  ),
                },
                {
                  id: "google",
                  label: "Continue with Google",
                  icon: (
                    <svg viewBox="0 0 48 48" aria-hidden="true" style={{ width: 17, height: 17, flex: "none" }}>
                      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z" />
                      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
                      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z" />
                    </svg>
                  ),
                },
              ].map((sso) => (
                <button
                  key={sso.id}
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--fg)",
                    background: "var(--ink-700)",
                    border: "1px solid var(--ink-400)",
                    borderRadius: 8,
                    padding: "12px 16px",
                    cursor: "pointer",
                  }}
                >
                  {sso.icon}
                  {sso.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 22px", color: "var(--fg-faint)" }}>
              <div style={{ height: 1, flex: 1, background: "var(--ink-400)" }} />
              <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>or</span>
              <div style={{ height: 1, flex: 1, background: "var(--ink-400)" }} />
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Email field */}
              <div>
                <label htmlFor="cf-email" style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--fg-muted)", marginBottom: 7 }}>Work email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  style={{
                    width: "100%",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: 15,
                    color: "var(--fg)",
                    background: "var(--ink-500)",
                    border: "1px solid var(--ink-400)",
                    borderRadius: 8,
                    padding: "12px 14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Password field */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 7 }}>
                  <label htmlFor="cf-password" style={{ fontSize: 13, fontWeight: 500, color: "var(--fg-muted)" }}>Password</label>
                  <a href="#" style={{ fontSize: 13, color: "var(--aai-orange)", textDecoration: "none", fontWeight: 500 }}>Forgot?</a>
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    id="cf-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    style={{
                      width: "100%",
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: 15,
                      color: "var(--fg)",
                      background: "var(--ink-500)",
                      border: "1px solid var(--ink-400)",
                      borderRadius: 8,
                      padding: "12px 44px 12px 14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    style={{ position: "absolute", right: 6, background: "none", border: 0, cursor: "pointer", color: "var(--fg-faint)", padding: 8, borderRadius: 6, display: "flex" }}
                  >
                    <svg viewBox="0 0 24 24" style={{ width: 17, height: 17, fill: "none", stroke: "currentColor", strokeWidth: 1.8 }}>
                      {showPassword ? (
                        <>
                          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                          <line x1="3" y1="3" x2="21" y2="21" />
                        </>
                      ) : (
                        <>
                          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", userSelect: "none", fontSize: 13.5, color: "var(--fg-muted)" }}>
                <input type="checkbox" style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
                <span style={{ width: 16, height: 16, borderRadius: 4, border: "1.5px solid var(--ink-300)", background: "var(--ink-500)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }} aria-hidden="true" />
                Keep me signed in
              </label>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  marginTop: 4,
                  width: "100%",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  background: "var(--aai-orange)",
                  color: "#fff",
                  border: 0,
                  borderRadius: 8,
                  padding: "13px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  boxShadow: "var(--glow-orange)",
                }}
              >
                Sign in
              </button>
            </form>

            <p style={{ marginTop: 26, textAlign: "center", fontSize: 13.5, color: "var(--fg-muted)" }}>
              New to the On-Call Agent?{" "}
              <a href="#" style={{ color: "var(--aai-orange)", textDecoration: "none", fontWeight: 500 }}>Request access</a>
            </p>

            <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "monospace", fontSize: 11, letterSpacing: "0.05em", color: "var(--fg-faint)" }}>
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 13, height: 13, fill: "none", stroke: "currentColor", strokeWidth: 1.8 }}>
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </main>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 920px) {
          .claude-fei-shell {
            grid-template-columns: 1fr !important;
          }
          .claude-fei-brand {
            display: none !important;
          }
          .claude-fei-mobile-mark {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};
