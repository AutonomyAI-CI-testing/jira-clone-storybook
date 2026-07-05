import { useState } from "react";
import { Form } from "@remix-run/react";
import { User } from "@domain/user";

/* ---- AutonomyAI Login Page Design tokens ---- */
const aaiStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  .aai-login-root {
    --aai-orange: #F25730;
    --aai-orange-bright: #FC816F;
    --aai-orange-deep: #ED5339;
    --aai-orange-peach: #F69874;
    --aai-blue: #9FD2ED;
    --ink-950: #0B0B0A;
    --ink-900: #121211;
    --ink-800: #1A1A18;
    --ink-700: #212120;
    --ink-600: #2A2A28;
    --ink-500: #333333;
    --ink-400: #3C3B39;
    --ink-300: #4A4946;
    --warm-glow: #5E5452;
    --ok: #4FB477;
    --warn: #E8A13C;
    --fg: #FFFFFF;
    --fg-muted: #B4B1AC;
    --fg-faint: #7C7A75;
    --ring: rgba(242,87,48,.55);
    --ease-out: cubic-bezier(.2,.7,.2,1);
    --font-display: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
    --font-sans: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
    --glow-orange: 0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22);

    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    min-height: 100vh;
    background: var(--ink-900);
    color: var(--fg);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    position: relative;
  }

  .aai-login-root *,
  .aai-login-root *::before,
  .aai-login-root *::after {
    box-sizing: border-box;
  }

  /* Film grain overlay */
  .aai-login-root::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: .045;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  @media (max-width: 920px) {
    .aai-login-root {
      grid-template-columns: 1fr;
    }
    .aai-brand-panel {
      display: none !important;
    }
    .aai-auth-mobile-mark {
      display: flex !important;
    }
  }

  /* ---- Brand panel ---- */
  .aai-brand-panel {
    position: relative;
    overflow: hidden;
    background: var(--ink-900);
    border-right: 1px solid var(--ink-400);
    padding: clamp(36px, 4.5vw, 64px);
    display: flex;
    flex-direction: column;
  }

  .aai-brand-panel::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
      radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%);
  }

  .aai-brand-panel > * {
    position: relative;
    z-index: 1;
  }

  /* Wordmark */
  .aai-wordmark {
    display: flex;
    align-items: center;
    gap: 11px;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 19px;
    letter-spacing: -.01em;
    color: var(--fg);
    text-decoration: none;
  }

  .aai-wordmark .aai-glyph {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    flex: none;
    background: linear-gradient(150deg, var(--aai-orange), var(--aai-orange-peach));
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25);
  }

  .aai-wordmark .aai-glyph svg {
    width: 16px;
    height: 16px;
    stroke: #fff;
    fill: none;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .aai-wordmark .aai-ai {
    color: var(--aai-orange);
  }

  .aai-wordmark .aai-div {
    width: 1px;
    height: 18px;
    background: var(--ink-400);
    margin: 0 3px;
  }

  .aai-wordmark .aai-product {
    font-weight: 500;
    font-size: 14px;
    color: var(--fg-muted);
    letter-spacing: 0;
  }

  /* Brand mid */
  .aai-brand-mid {
    margin-top: auto;
    margin-bottom: auto;
    padding: 48px 0;
    max-width: 480px;
  }

  .aai-eyebrow {
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 12px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--aai-orange);
    margin: 0 0 22px;
  }

  .aai-brand-h1 {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(32px, 3.6vw, 48px);
    line-height: 1.05;
    letter-spacing: -.02em;
    margin: 0;
    color: var(--fg);
    text-wrap: balance;
  }

  .aai-brand-h1 .aai-grad {
    background: linear-gradient(95deg, var(--aai-orange), var(--aai-orange-peach));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .aai-lede {
    font-size: 18px;
    line-height: 1.55;
    color: var(--fg-muted);
    margin: 22px 0 0;
    max-width: 420px;
  }

  /* Pipeline status */
  .aai-pipeline {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .aai-pl-row {
    display: flex;
    align-items: center;
    gap: 14px;
    position: relative;
    padding: 11px 0;
  }

  .aai-pl-row .aai-node {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    flex: none;
    position: relative;
    z-index: 1;
  }

  .aai-pl-row:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    bottom: -50%;
    width: 1px;
    background: var(--ink-400);
    z-index: 0;
  }

  .aai-pl-row .aai-lab {
    font-family: var(--font-mono);
    font-size: 12.5px;
    letter-spacing: .02em;
    color: var(--fg-muted);
  }

  .aai-pl-row .aai-lab b {
    color: var(--fg);
    font-weight: 600;
    font-family: var(--font-sans);
  }

  .aai-pl-row .aai-t {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--fg-faint);
  }

  .aai-n-blue {
    background: var(--aai-blue);
    box-shadow: 0 0 0 4px rgba(159,210,237,.12);
  }

  .aai-n-amber {
    background: var(--warn);
    box-shadow: 0 0 0 4px rgba(232,161,60,.12);
  }

  .aai-n-ok {
    background: var(--ok);
    box-shadow: 0 0 0 4px rgba(79,180,119,.14);
  }

  /* Brand footer */
  .aai-brand-foot {
    display: flex;
    align-items: center;
    gap: 18px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: .04em;
    color: var(--fg-faint);
  }

  .aai-brand-foot .aai-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--ink-300);
  }

  /* ---- Auth panel ---- */
  .aai-auth-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(28px, 5vw, 64px);
    background: var(--ink-900);
  }

  .aai-card {
    width: 100%;
    max-width: 392px;
  }

  .aai-auth-mobile-mark {
    display: none;
    margin-bottom: 30px;
  }

  .aai-auth-head {
    margin-bottom: 30px;
  }

  .aai-auth-head .aai-ey {
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 12px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--fg-faint);
    margin: 0 0 14px;
  }

  .aai-auth-head h2 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 30px;
    line-height: 1.1;
    letter-spacing: -.02em;
    margin: 0;
    color: var(--fg);
  }

  .aai-auth-head p {
    font-size: 15px;
    line-height: 1.5;
    color: var(--fg-muted);
    margin: 9px 0 0;
  }

  /* SSO buttons */
  .aai-sso {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 22px;
  }

  .aai-sso-btn {
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

  .aai-sso-btn:hover {
    border-color: var(--ink-300);
    background: var(--ink-600);
  }

  .aai-sso-btn svg {
    width: 17px;
    height: 17px;
    flex: none;
  }

  /* Divider */
  .aai-divider {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 0 0 22px;
    color: var(--fg-faint);
  }

  .aai-divider::before,
  .aai-divider::after {
    content: "";
    height: 1px;
    flex: 1;
    background: var(--ink-400);
  }

  .aai-divider span {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  /* Form fields */
  .aai-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .aai-field label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--fg-muted);
    margin-bottom: 7px;
  }

  .aai-input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  .aai-field input {
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

  .aai-field input::placeholder {
    color: var(--fg-faint);
  }

  .aai-field input:focus {
    border-color: var(--aai-orange);
    box-shadow: 0 0 0 3px var(--ring);
  }

  .aai-lbl-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .aai-lbl-row a {
    font-size: 12.5px;
    color: var(--aai-orange);
    text-decoration: none;
  }

  .aai-lbl-row a:hover {
    text-decoration: underline;
  }

  .aai-reveal {
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

  .aai-reveal:hover {
    color: var(--fg-muted);
  }

  .aai-reveal svg {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
  }

  /* Custom checkbox */
  .aai-remember {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 13.5px;
    color: var(--fg-muted);
    cursor: pointer;
    user-select: none;
    margin-top: 2px;
  }

  .aai-remember input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .aai-checkbox-box {
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

  .aai-checkbox-box svg {
    width: 11px;
    height: 11px;
    stroke: #fff;
    fill: none;
    stroke-width: 2.6;
    opacity: 0;
    transition: opacity .12s;
  }

  .aai-remember input[type="checkbox"]:checked + .aai-checkbox-box {
    background: var(--aai-orange);
    border-color: var(--aai-orange);
  }

  .aai-remember input[type="checkbox"]:checked + .aai-checkbox-box svg {
    opacity: 1;
  }

  /* Submit button */
  .aai-submit {
    margin-top: 4px;
    width: 100%;
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 15px;
    background: var(--aai-orange);
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

  .aai-submit:hover {
    background: var(--aai-orange-bright);
    transform: translateY(-1px);
  }

  .aai-submit:active {
    background: var(--aai-orange-deep);
    transform: translateY(0);
  }

  .aai-submit:disabled {
    cursor: wait;
    background: var(--aai-orange-deep);
  }

  /* Spinner */
  @keyframes aai-spin {
    to { transform: rotate(360deg); }
  }

  .aai-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,.4);
    border-right-color: #fff;
    border-radius: 50%;
    animation: aai-spin .65s linear infinite;
    flex: none;
  }

  /* Footnote */
  .aai-footnote {
    margin-top: 26px;
    text-align: center;
    font-size: 13.5px;
    color: var(--fg-muted);
  }

  .aai-footnote a {
    color: var(--aai-orange);
    text-decoration: none;
    font-weight: 500;
  }

  .aai-footnote a:hover {
    text-decoration: underline;
  }

  /* Secure badge */
  .aai-secure {
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

  .aai-secure svg {
    width: 13px;
    height: 13px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
  }
`;

type Props = {
  users: User[];
  /** When true the submit button shows a loading spinner */
  isLoading?: boolean;
};

export const LoginView = ({ users: _users, isLoading = false }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: aaiStyles }} />
      <div className="aai-login-root">
        {/* =========== LEFT: BRAND PANEL =========== */}
        <section className="aai-brand-panel" aria-label="AutonomyAI brand">
          {/* Wordmark */}
          <div className="aai-wordmark">
            <span className="aai-glyph" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
                <circle cx="12" cy="12" r="3.4"/>
              </svg>
            </span>
            <span>Autonomy<span className="aai-ai">AI</span></span>
            <span className="aai-div" aria-hidden="true" />
            <span className="aai-product">On-Call Agent</span>
          </div>

          {/* Mid content */}
          <div className="aai-brand-mid">
            <p className="aai-eyebrow">Autonomous incident response</p>
            <h1 className="aai-brand-h1">
              Your on-call engineer that{" "}
              <span className="aai-grad">never sleeps.</span>
            </h1>
            <p className="aai-lede">
              From first alert to merged fix — the agent triages, investigates, and ships
              the patch while your team stays asleep.
            </p>

            {/* Pipeline status */}
            <div className="aai-pipeline" aria-hidden="true">
              <div className="aai-pl-row">
                <span className="aai-node aai-n-blue" />
                <span className="aai-lab">
                  <b>Alert received</b> — latency spike, checkout-svc
                </span>
                <span className="aai-t">00:00</span>
              </div>
              <div className="aai-pl-row">
                <span className="aai-node aai-n-amber" />
                <span className="aai-lab">
                  <b>Triaged &amp; root-caused</b> — connection pool exhausted
                </span>
                <span className="aai-t">00:02</span>
              </div>
              <div className="aai-pl-row">
                <span className="aai-node aai-n-ok" />
                <span className="aai-lab">
                  <b>Fix merged</b> — PR #1408, verified in staging
                </span>
                <span className="aai-t">00:09</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="aai-brand-foot">
            <span>SOC 2 Type II</span>
            <span className="aai-dot" aria-hidden="true" />
            <span>Runs in your infra</span>
            <span className="aai-dot" aria-hidden="true" />
            <span>150+ teams on-call</span>
          </div>
        </section>

        {/* =========== RIGHT: AUTH PANEL =========== */}
        <section className="aai-auth-panel" aria-label="Sign in">
          <div className="aai-card">
            {/* Mobile wordmark (hidden on desktop) */}
            <div className="aai-wordmark aai-auth-mobile-mark" aria-hidden="true">
              <span className="aai-glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
                  <circle cx="12" cy="12" r="3.4"/>
                </svg>
              </span>
              <span>Autonomy<span className="aai-ai">AI</span></span>
            </div>

            {/* Auth head */}
            <div className="aai-auth-head">
              <p className="aai-ey">Sign in</p>
              <h2>Welcome back</h2>
              <p>Pick up where the agent left off.</p>
            </div>

            {/* SSO buttons */}
            <div className="aai-sso">
              <button type="button" className="aai-sso-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/>
                </svg>
                Continue with GitHub
              </button>
              <button type="button" className="aai-sso-btn">
                <svg viewBox="0 0 48 48" aria-hidden="true" width="17" height="17">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z"/>
                  <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z"/>
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="aai-divider">
              <span>or</span>
            </div>

            {/* Login form — posts to Remix action */}
            <Form method="post" className="aai-form">
              <div className="aai-field">
                <label htmlFor="aai-email">Work email</label>
                <div className="aai-input-wrap">
                  <input
                    id="aai-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="aai-field">
                <div className="aai-lbl-row">
                  <label htmlFor="aai-password">Password</label>
                  <a href="#" tabIndex={0}>Forgot password?</a>
                </div>
                <div className="aai-input-wrap">
                  <input
                    id="aai-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    required
                    minLength={8}
                    style={{ paddingRight: 44 }}
                  />
                  <button
                    type="button"
                    className="aai-reveal"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24">
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                        <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <label className="aai-remember">
                <input
                  type="checkbox"
                  id="aai-remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="aai-checkbox-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M5 12.5 10 17l9-10"/></svg>
                </span>
                Keep me signed in
              </label>

              <button
                type="submit"
                name="_action"
                value="setUser"
                className="aai-submit"
                aria-label="Sign in"
                disabled={isLoading}
              >
                {isLoading && <span className="aai-spinner" aria-hidden="true" />}
                <span>{isLoading ? "Signing in…" : "Sign in"}</span>
              </button>
            </Form>

            <p className="aai-footnote">
              New to the On-Call Agent?{" "}
              <a href="#">Request access</a>
            </p>

            <div className="aai-secure">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="11" width="16" height="10" rx="2"/>
                <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
