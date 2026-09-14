import { useState } from "react";

export function ClaudeFeiView() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1600);
  }

  function handleSsoClick(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    btn.style.borderColor = "var(--cf-orange)";
    setTimeout(() => (btn.style.borderColor = ""), 500);
  }

  return (
    <div className="cf-root">
      <style>{`
        /* ── missing colors_and_type.css variables, defined locally ── */
        .cf-root {
          --ink-950: #0d0f11;
          --ink-900: #13161a;
          --ink-700: #1e2329;
          --ink-600: #242b33;
          --ink-500: #2a333d;
          --ink-400: #3a4452;
          --ink-300: #556070;

          --fg: #eef0f3;
          --fg-muted: #8d9aab;
          --fg-faint: #5a6878;

          --cf-orange: #F25730;
          --cf-orange-peach: #f5794f;
          --cf-orange-bright: #f47050;
          --cf-orange-deep: #c44322;
          --cf-blue: #9fd2ed;
          --warn: #E8A13C;
          --ok: #4FB477;
          --err: #e05c5c;
          --ring: rgba(242,87,48,.3);
          --glow-orange: 0 0 0 1px rgba(242,87,48,.3), 0 4px 16px rgba(242,87,48,.2);

          --font-sans: system-ui, -apple-system, "Segoe UI", sans-serif;
          --font-display: "Inter", system-ui, sans-serif;
          --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;
          --ease-out: cubic-bezier(0.16, 1, 0.3, 1);

          /* layout */
          box-sizing: border-box;
          min-height: 100vh;
          position: relative;
          background: var(--ink-950);
          color: var(--fg);
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          overflow: hidden;
        }

        .cf-root *, .cf-root *::before, .cf-root *::after {
          box-sizing: border-box;
        }

        /* film grain */
        .cf-grain {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          opacity: .045;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* "Claude Fei" overlay — above everything */
        .cf-overlay {
          position: fixed;
          inset: 0;
          z-index: 10001;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cf-overlay-text {
          color: #00ff00;
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1;
          text-shadow: 0 2px 32px rgba(255,0,0,0.5);
          user-select: none;
        }

        /* shell grid */
        .cf-shell {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          min-height: 100vh;
        }
        @media (max-width: 920px) {
          .cf-shell { grid-template-columns: 1fr; }
          .cf-brand { display: none !important; }
        }

        /* ── BRAND PANEL ── */
        .cf-brand {
          position: relative;
          overflow: hidden;
          background: var(--ink-900);
          border-right: 1px solid var(--ink-400);
          padding: clamp(36px, 4.5vw, 64px);
          display: flex;
          flex-direction: column;
        }
        .cf-brand::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
            radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%);
        }
        .cf-brand > * { position: relative; z-index: 1; }

        .cf-wordmark {
          display: flex;
          align-items: center;
          gap: 11px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 19px;
          letter-spacing: -0.01em;
        }
        .cf-glyph {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          flex: none;
          background: linear-gradient(150deg, var(--cf-orange), var(--cf-orange-peach));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25);
        }
        .cf-glyph svg {
          width: 16px;
          height: 16px;
          stroke: #fff;
          fill: none;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .cf-ai { color: var(--cf-orange); }
        .cf-wdiv {
          width: 1px;
          height: 18px;
          background: var(--ink-400);
          margin: 0 3px;
        }
        .cf-product {
          font-weight: 500;
          font-size: 14px;
          color: var(--fg-muted);
          letter-spacing: 0;
        }

        .cf-brand-mid {
          margin-top: auto;
          margin-bottom: auto;
          padding: 48px 0;
          max-width: 480px;
        }
        .cf-eyebrow {
          font-family: var(--font-mono);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--cf-orange);
          margin: 0 0 22px;
        }
        .cf-brand-h1 {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(32px, 3.6vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0;
          color: var(--fg);
          text-wrap: balance;
        }
        .cf-grad {
          background: linear-gradient(95deg, var(--cf-orange), var(--cf-orange-peach));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .cf-lede {
          font-size: 18px;
          line-height: 1.55;
          color: var(--fg-muted);
          margin: 22px 0 0;
          max-width: 420px;
        }

        .cf-pipeline { margin-top: 40px; display: flex; flex-direction: column; gap: 0; }
        .cf-pl-row {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          padding: 11px 0;
        }
        .cf-node {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          flex: none;
          position: relative;
          z-index: 1;
        }
        .cf-pl-row:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 22px;
          bottom: -1px;
          width: 1px;
          background: var(--ink-400);
        }
        .cf-lab {
          font-family: var(--font-mono);
          font-size: 12.5px;
          letter-spacing: .02em;
          color: var(--fg-muted);
        }
        .cf-lab b { color: var(--fg); font-weight: 600; font-family: var(--font-sans); }
        .cf-t {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--fg-faint);
        }
        .cf-n-blue { background: var(--cf-blue); box-shadow: 0 0 0 4px rgba(159,210,237,.12); }
        .cf-n-amber { background: var(--warn); box-shadow: 0 0 0 4px rgba(232,161,60,.12); }
        .cf-n-ok { background: var(--ok); box-shadow: 0 0 0 4px rgba(79,180,119,.14); }

        .cf-brand-foot {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: .04em;
          color: var(--fg-faint);
        }
        .cf-foot-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--ink-300);
        }

        /* ── AUTH PANEL ── */
        .cf-auth {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 5vw, 64px);
          background: var(--ink-900);
        }
        .cf-card { width: 100%; max-width: 392px; }

        .cf-auth-head { margin-bottom: 30px; }
        .cf-auth-ey {
          font-family: var(--font-mono);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--fg-faint);
          margin: 0 0 14px;
        }
        .cf-auth-h2 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          color: var(--fg);
        }
        .cf-auth-sub {
          font-size: 15px;
          line-height: 1.5;
          color: var(--fg-muted);
          margin: 9px 0 0;
        }

        .cf-sso { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
        .cf-sso-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 14px;
          background: var(--ink-700);
          color: var(--fg);
          border: 1px solid var(--ink-400);
          border-radius: 8px;
          padding: 12px 16px;
          cursor: pointer;
          transition: border-color .18s var(--ease-out), background .18s var(--ease-out);
        }
        .cf-sso-btn:hover { border-color: var(--ink-300); background: var(--ink-600); }
        .cf-sso-btn svg { width: 17px; height: 17px; flex: none; }

        .cf-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 0 0 22px;
          color: var(--fg-faint);
        }
        .cf-divider::before, .cf-divider::after {
          content: "";
          height: 1px;
          flex: 1;
          background: var(--ink-400);
        }
        .cf-divider span {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .cf-form { display: flex; flex-direction: column; gap: 16px; }
        .cf-field label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: var(--fg-muted);
          margin-bottom: 7px;
        }
        .cf-input-wrap { position: relative; display: flex; align-items: center; }
        .cf-field input {
          width: 100%;
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--fg);
          background: var(--ink-500);
          border: 1px solid var(--ink-400);
          border-radius: 8px;
          padding: 12px 14px;
          outline: none;
          transition: border-color .15s var(--ease-out), box-shadow .15s var(--ease-out);
        }
        .cf-field input::placeholder { color: var(--fg-faint); }
        .cf-field input:focus { border-color: var(--cf-orange); box-shadow: 0 0 0 3px var(--ring); }

        .cf-reveal {
          position: absolute;
          right: 6px;
          background: none;
          border: 0;
          cursor: pointer;
          color: var(--fg-faint);
          padding: 8px;
          border-radius: 6px;
          display: flex;
        }
        .cf-reveal:hover { color: var(--fg-muted); }
        .cf-reveal svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.8; }

        .cf-lbl-row { display: flex; align-items: center; justify-content: space-between; }
        .cf-lbl-row a { font-size: 12.5px; color: var(--cf-orange); text-decoration: none; }
        .cf-lbl-row a:hover { text-decoration: underline; }

        .cf-remember {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          color: var(--fg-muted);
          cursor: pointer;
          user-select: none;
          margin-top: 2px;
        }
        .cf-checkbox { position: absolute; opacity: 0; width: 0; height: 0; }
        .cf-box {
          width: 17px;
          height: 17px;
          border-radius: 5px;
          border: 1px solid var(--ink-300);
          background: var(--ink-500);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .15s var(--ease-out);
          flex: none;
        }
        .cf-box svg { width: 11px; height: 11px; stroke: #fff; fill: none; stroke-width: 2.6; }

        .cf-submit {
          margin-top: 4px;
          width: 100%;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 15px;
          background: var(--cf-orange);
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 13px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          box-shadow: var(--glow-orange);
          transition: background .15s var(--ease-out), transform .12s var(--ease-out);
        }
        .cf-submit:hover { background: var(--cf-orange-bright); transform: translateY(-1px); }
        .cf-submit:active { background: var(--cf-orange-deep); transform: translateY(0); }
        .cf-submit:disabled { cursor: wait; background: var(--cf-orange-deep); }

        @keyframes cf-spin { to { transform: rotate(360deg); } }
        .cf-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,.4);
          border-right-color: #fff;
          border-radius: 50%;
          animation: cf-spin .65s linear infinite;
        }

        .cf-footnote {
          margin-top: 26px;
          text-align: center;
          font-size: 13.5px;
          color: var(--fg-muted);
        }
        .cf-footnote a {
          color: var(--cf-orange);
          text-decoration: none;
          font-weight: 500;
        }
        .cf-footnote a:hover { text-decoration: underline; }

        .cf-secure {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: .05em;
          color: var(--fg-faint);
        }
        .cf-secure svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.8; }

        /* mobile wordmark */
        .cf-mobile-mark { display: none; }
        @media (max-width: 920px) {
          .cf-mobile-mark { display: flex; margin-bottom: 30px; }
        }
      `}</style>

      {/* film grain */}
      <div className="cf-grain" aria-hidden="true" />

      {/* "Claude Fei" red overlay */}
      <div className="cf-overlay" aria-label="Claude Fei">
        <span className="cf-overlay-text">Claude Fei</span>
      </div>

      <main className="cf-shell">
        {/* ── BRAND PANEL ── */}
        <section className="cf-brand" data-screen-label="Brand panel">
          <div className="cf-wordmark">
            <span className="cf-glyph" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
                <circle cx="12" cy="12" r="3.4"/>
              </svg>
            </span>
            <span>Autonomy<span className="cf-ai">AI</span></span>
            <span className="cf-wdiv" aria-hidden="true" />
            <span className="cf-product">On-Call Agent</span>
          </div>

          <div className="cf-brand-mid">
            <p className="cf-eyebrow">Autonomous incident response</p>
            <h1 className="cf-brand-h1">
              Your on-call engineer that <span className="cf-grad">never sleeps.</span>
            </h1>
            <p className="cf-lede">
              From first alert to merged fix — the agent triages, investigates, and ships the patch while your team stays asleep.
            </p>

            <div className="cf-pipeline" aria-hidden="true">
              <div className="cf-pl-row">
                <span className="cf-node cf-n-blue" />
                <span className="cf-lab"><b>Alert received</b> — latency spike, checkout-svc</span>
                <span className="cf-t">00:00</span>
              </div>
              <div className="cf-pl-row">
                <span className="cf-node cf-n-amber" />
                <span className="cf-lab"><b>Triaged &amp; root-caused</b> — connection pool exhausted</span>
                <span className="cf-t">00:02</span>
              </div>
              <div className="cf-pl-row">
                <span className="cf-node cf-n-ok" />
                <span className="cf-lab"><b>Fix merged</b> — PR #1408, verified in staging</span>
                <span className="cf-t">00:09</span>
              </div>
            </div>
          </div>

          <div className="cf-brand-foot">
            <span>SOC 2 Type II</span>
            <span className="cf-foot-dot" aria-hidden="true" />
            <span>Runs in your infra</span>
            <span className="cf-foot-dot" aria-hidden="true" />
            <span>150+ teams on-call</span>
          </div>
        </section>

        {/* ── AUTH PANEL ── */}
        <section className="cf-auth" data-screen-label="Login · form">
          <div className="cf-card">
            {/* mobile wordmark */}
            <div className="cf-wordmark cf-mobile-mark">
              <span className="cf-glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
                  <circle cx="12" cy="12" r="3.4"/>
                </svg>
              </span>
              <span>Autonomy<span className="cf-ai">AI</span></span>
            </div>

            <div className="cf-auth-head">
              <p className="cf-auth-ey">Sign in</p>
              <h2 className="cf-auth-h2">Welcome back</h2>
              <p className="cf-auth-sub">Pick up where the agent left off.</p>
            </div>

            <div className="cf-sso">
              <button type="button" className="cf-sso-btn" onClick={handleSsoClick}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/>
                </svg>
                Continue with GitHub
              </button>
              <button type="button" className="cf-sso-btn" onClick={handleSsoClick}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{width:17,height:17}}>
                  <path fill="#FFC107" d="M21.8 10.2H21V10H12v4h5.65C16.85 16.45 14.6 18 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.55 0 2.95.6 4 1.55L18.85 4.7C17.15 3.05 14.7 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.65-.07-1.3-.2-1.8Z"/>
                  <path fill="#FF3D00" d="M3.15 7.35 5.45 9.1C6.15 7.05 8.9 5.5 12 5.5c1.55 0 2.95.6 4 1.55L18.85 4.2C17.15 2.55 14.7 1.5 12 1.5 8.15 1.5 4.85 3.9 3.15 7.35Z"/>
                  <path fill="#4CAF50" d="M12 22.5c2.6 0 4.95-1 6.7-2.6l-3.1-2.6C14.6 18 13.35 18.5 12 18.5c-2.6 0-4.85-1.55-5.65-3.95l-3.25 2.5C4.75 20.8 8.1 22.5 12 22.5Z"/>
                  <path fill="#1976D2" d="M21.8 10.2H21V10H12v4h5.65c-.4 1.1-1.1 2.05-2.05 2.8l3.1 2.6C20 17.15 22 14.8 22 12c0-.65-.07-1.3-.2-1.8Z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="cf-divider"><span>or</span></div>

            <form className="cf-form" noValidate onSubmit={handleSubmit}>
              <div className="cf-field">
                <label htmlFor="cf-email">Work email</label>
                <div className="cf-input-wrap">
                  <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                </div>
              </div>

              <div className="cf-field">
                <div className="cf-lbl-row">
                  <label htmlFor="cf-password">Password</label>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" tabIndex={0}>Forgot password?</a>
                </div>
                <div className="cf-input-wrap">
                  <input
                    id="cf-password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    required
                    minLength={8}
                    style={{ paddingRight: 42 }}
                  />
                  <button
                    type="button"
                    className="cf-reveal"
                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                    onClick={() => setPasswordVisible((v) => !v)}
                  >
                    {passwordVisible ? (
                      <svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="3" x2="21" y2="21"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <label className="cf-remember">
                <input
                  type="checkbox"
                  className="cf-checkbox"
                  checked={checked}
                  onChange={() => setChecked((v) => !v)}
                />
                <span className="cf-box" style={checked ? { background: "var(--cf-orange)", borderColor: "var(--cf-orange)" } : {}}>
                  <svg viewBox="0 0 24 24" style={{ opacity: checked ? 1 : 0 }}>
                    <path d="M5 12.5 10 17l9-10"/>
                  </svg>
                </span>
                Keep me signed in
              </label>

              <button type="submit" className="cf-submit" disabled={isLoading}>
                {isLoading && <span className="cf-spinner" aria-hidden="true" />}
                <span>{isLoading ? "Signing in…" : "Sign in"}</span>
              </button>
            </form>

            <p className="cf-footnote">New to the On-Call Agent? <a href="#">Request access</a></p>

            <div className="cf-secure">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="11" width="16" height="10" rx="2"/>
                <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
