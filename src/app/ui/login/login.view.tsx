import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";
import "./login.css";

export const LoginView = ({ users }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User>(userMock1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const onValueChange = (userId: UserId) => {
    const found = users.find((u) => u.id === userId);
    if (found) setSelectedUser(found);
  };

  const handleSSOClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1600);
  };

  return (
    <main className="login-root">
      {/* ===== BRAND PANEL (left) ===== */}
      <section className="login-brand" data-screen-label="Login · brand panel">
        {/* Wordmark */}
        <div className="login-wordmark">
          <span className="glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L8 8H4l4 4-2 6 6-3 6 3-2-6 4-4h-4z" />
            </svg>
          </span>
          <span>Jira Clone</span>
          <span className="wm-divider" aria-hidden="true" />
          <span className="wm-product">Project Tracker</span>
        </div>

        {/* Middle */}
        <div className="login-brand-mid">
          <p className="eyebrow">Collaborative project management</p>
          <h1>
            Ship faster with teams that{" "}
            <span className="grad">stay in sync.</span>
          </h1>
          <p className="lede">
            From backlog to deployment — track issues, manage sprints, and
            collaborate across every feature your team ships.
          </p>

          {/* Pipeline timeline */}
          <div className="login-pipeline" aria-hidden="true">
            <div className="login-pl-row">
              <span className="node n-blue" />
              <span className="lab">
                <b>Issue created</b> — login page redesign, UX sprint
              </span>
              <span className="time">00:00</span>
            </div>
            <div className="login-pl-row">
              <span className="node n-amber" />
              <span className="lab">
                <b>Sprint updated</b> — moved to in-progress, assigned
              </span>
              <span className="time">00:04</span>
            </div>
            <div className="login-pl-row">
              <span className="node n-ok" />
              <span className="lab">
                <b>PR merged</b> — feature/login-redesign, reviewed
              </span>
              <span className="time">00:22</span>
            </div>
          </div>
        </div>

        {/* Footer trust badges */}
        <div className="login-brand-foot">
          <span>Open source</span>
          <span className="dot" aria-hidden="true" />
          <span>Self-hostable</span>
          <span className="dot" aria-hidden="true" />
          <span>MIT License</span>
        </div>
      </section>

      {/* ===== AUTH PANEL (right) ===== */}
      <section className="login-auth">
        {/* Mobile wordmark */}
        <div className="login-mobile-mark">
          <span className="glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L8 8H4l4 4-2 6 6-3 6 3-2-6 4-4h-4z" />
            </svg>
          </span>
          <span>Jira Clone</span>
        </div>

        {/* Auth card */}
        <div className="login-card">
          <p className="eyebrow">Welcome back</p>
          <h2>Sign in to your workspace</h2>
          <p className="subtitle">
            Access your projects, sprints, and team — pick up right where you
            left off.
          </p>

          {/* SSO buttons */}
          <div className="login-sso">
            <button
              type="button"
              className="login-sso-btn"
              onClick={handleSSOClick}
              aria-label="Continue with GitHub"
            >
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Continue with GitHub
            </button>
            <button
              type="button"
              className="login-sso-btn"
              onClick={handleSSOClick}
              aria-label="Continue with Google"
            >
              {/* Google icon */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* OR divider */}
          <div className="login-divider">or</div>

          {/* Email / password form */}
          <form className="login-form" onSubmit={handleFormSubmit} noValidate>
            <div className="login-field">
              <label htmlFor="lp-email">Email</label>
              <input
                id="lp-email"
                className="login-input"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="login-field">
              <div className="login-field-row">
                <label htmlFor="lp-password">Password</label>
                <span className="forgot" role="button" tabIndex={-1} aria-disabled="true">
                  Forgot password?
                </span>
              </div>
              <div className="login-input-wrap">
                <input
                  id="lp-password"
                  className="login-input has-reveal"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="login-reveal"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24">
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="3" y1="3" x2="21" y2="21" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24">
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="login-checkbox-row">
              <input
                id="lp-remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="lp-remember">Keep me signed in</label>
            </div>

            <button
              type="submit"
              className="login-submit"
              disabled={isLoading}
            >
              {isLoading && <span className="login-spinner" />}
              <span>{isLoading ? "Signing in…" : "Sign in"}</span>
            </button>
          </form>

          <p className="login-footnote">
            New to Jira Clone?{" "}
            <span className="login-link" role="button" aria-disabled="true">Create an account</span>
          </p>

          <div className="login-secure">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Encrypted &amp; SSO-ready
          </div>
        </div>

        {/* Demo Mode — existing user select preserved */}
        <div className="login-demo">
          <div className="login-demo-label">Demo Mode</div>
          <p className="login-demo-hint">
            No authentication required. Select any user to explore the app as
            them — great for testing different roles and project memberships.
          </p>
          <Form method="post">
            <Select.Root
              name="user"
              defaultValue={userMock1.id}
              onValueChange={onValueChange}
            >
              <Select.Trigger
                className="flex w-full justify-between"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "#F5F3EE",
                  borderRadius: "8px",
                  padding: "10px 14px",
                }}
                aria-label="Open user select"
              >
                <div className="flex items-center gap-2">
                  <UserAvatar {...selectedUser} />
                  <Select.Value />
                </div>
                <Select.TriggerIcon />
              </Select.Trigger>
              <Select.Content>
                <Select.ScrollUpButton />
                <Select.Viewport>
                  {users.map((user, index) => (
                    <Select.Item key={index} value={user.id}>
                      <Select.ItemIndicator />
                      <UserAvatar {...user} />
                      <Select.ItemText>{user.name}</Select.ItemText>
                    </Select.Item>
                  ))}
                  <Select.Separator />
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select.Root>
            <button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login as selected user"
              className="login-submit"
              style={{ marginTop: "10px" }}
            >
              Enter as demo user
            </button>
          </Form>
        </div>
      </section>
    </main>
  );
};

interface Props {
  users: User[];
}
