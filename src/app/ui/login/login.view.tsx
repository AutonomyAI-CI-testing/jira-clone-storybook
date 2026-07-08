import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import "./login.css";

/* ============================================================
   LoginView — Two-panel dark login page
   Left: brand/marketing panel
   Right: auth form (with real user-select demo flow)
   ============================================================ */
export const LoginView = ({ users }: Props) => {
  const [selectedUserId, setSelectedUserId] = useState<UserId>(userMock1.id);
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <main className="login-shell">
      {/* ============ BRAND PANEL ============ */}
      <section className="ls-brand" aria-label="Brand panel">
        {/* Wordmark */}
        <div className="ls-wordmark">
          <span className="ls-wordmark__glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </span>
          <span>Jira Clone</span>
        </div>

        {/* Mid section */}
        <div className="ls-brand__mid">
          <span className="ls-eyebrow">Project management, reimagined</span>
          <h1 className="ls-brand__headline">
            Your project board,{" "}
            <span className="ls-grad">always in motion.</span>
          </h1>
          <p className="ls-brand__lede">
            From sprint planning to shipped features — track issues, collaborate
            with your team, and move work forward without the noise.
          </p>

          {/* Pipeline / timeline motif */}
          <ul className="ls-pipeline" aria-hidden="true">
            <li className="ls-pl-row">
              <span className="ls-pl-row__node ls-pl-row__node--blue" />
              <span className="ls-pl-row__label">
                <strong>Sprint started</strong> — board synced, 12 issues open
              </span>
              <span className="ls-pl-row__time">Day 1</span>
            </li>
            <li className="ls-pl-row">
              <span className="ls-pl-row__node ls-pl-row__node--amber" />
              <span className="ls-pl-row__label">
                <strong>Bottleneck flagged</strong> — query latency in reports
              </span>
              <span className="ls-pl-row__time">Day 3</span>
            </li>
            <li className="ls-pl-row">
              <span className="ls-pl-row__node ls-pl-row__node--ok" />
              <span className="ls-pl-row__label">
                <strong>PR merged</strong> — issue #42 closed, tests green
              </span>
              <span className="ls-pl-row__time">Day 5</span>
            </li>
          </ul>
        </div>

        {/* Footer trust signals */}
        <div className="ls-brand__foot">
          <span>Made with Remix</span>
          <span className="ls-brand__foot__dot" aria-hidden="true" />
          <span>Open Source</span>
          <span className="ls-brand__foot__dot" aria-hidden="true" />
          <span>TypeScript + Prisma</span>
        </div>
      </section>

      {/* ============ AUTH PANEL ============ */}
      <section className="ls-auth" aria-label="Sign in">
        <div className="ls-card">
          {/* Mobile-only wordmark */}
          <div className="ls-mobile-mark" aria-hidden="true">
            <span className="ls-wordmark__glyph">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span>Jira Clone</span>
          </div>

          {/* Header */}
          <div className="ls-auth__head">
            <span className="ls-auth__ey">Sign in</span>
            <h2 className="ls-auth__h2">Welcome back</h2>
            <p className="ls-auth__sub">Pick up where you left off.</p>
          </div>

          {/* SSO buttons — visual only */}
          <div className="ls-sso">
            <button
              type="button"
              className="ls-sso__btn"
              aria-label="Continue with GitHub"
              onClick={(e) => {
                const btn = e.currentTarget;
                btn.style.borderColor = "var(--ls-orange)";
                setTimeout(() => (btn.style.borderColor = ""), 500);
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
              </svg>
              Continue with GitHub
            </button>
            <button
              type="button"
              className="ls-sso__btn"
              aria-label="Continue with Google"
              onClick={(e) => {
                const btn = e.currentTarget;
                btn.style.borderColor = "var(--ls-orange)";
                setTimeout(() => (btn.style.borderColor = ""), 500);
              }}
            >
              <svg viewBox="0 0 48 48" aria-hidden="true" width="17" height="17">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
                <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z" />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="ls-divider" role="separator">
            <span className="ls-divider__text">or</span>
          </div>

          {/* Real login form */}
          <Form method="post" className="ls-form" onSubmit={handleSubmit}>
            {/* User selector (replaces email — this is the real auth mechanism) */}
            <div>
              <label htmlFor="ls-user-select" className="ls-field__label">
                Select your profile
              </label>
              <div className="ls-input-wrap">
                <select
                  id="ls-user-select"
                  name="user"
                  className="ls-input ls-input--select"
                  defaultValue={userMock1.id}
                  onChange={(e) => setSelectedUserId(e.target.value as UserId)}
                  aria-label="Choose user account"
                >
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
              <p
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  color: "var(--ls-fg-faint)",
                  fontFamily: "var(--ls-font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                No real authentication — pick any user to explore
              </p>
            </div>

            {/* Remember me */}
            <label className="ls-remember">
              <input
                type="checkbox"
                className="ls-remember__input"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="ls-remember__box" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12.5 10 17l9-10" />
                </svg>
              </span>
              Keep me signed in
            </label>

            {/* Submit */}
            <button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Sign in"
              disabled={isLoading}
              className={`ls-submit${isLoading ? " ls-submit--loading" : ""}`}
            >
              <span className="ls-spinner" aria-hidden="true" />
              <span className="ls-submit__label">
                {isLoading ? "Signing in…" : "Sign in →"}
              </span>
            </button>
          </Form>

          {/* Footnote */}
          <p className="ls-footnote">
            New here?{" "}
            <a href="https://github.com/daniseijo/jira-clone" target="_blank" rel="noreferrer">
              View source on GitHub
            </a>
          </p>

          {/* Secure badge */}
          <div className="ls-secure">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Open source &amp; privacy-first
          </div>
        </div>
      </section>
    </main>
  );
};

interface Props {
  users: User[];
}
