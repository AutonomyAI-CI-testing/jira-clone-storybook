import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

/* ── Icons ──────────────────────────────────────────────────── */
const GlyphIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z" />
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

/* ── Wordmark ───────────────────────────────────────────────── */
const Wordmark = ({ showProduct = true }: { showProduct?: boolean }) => (
  <div className="login-wordmark">
    <span className="login-glyph" aria-hidden="true">
      <GlyphIcon />
    </span>
    <span>
      Autonomy<span className="login-ai">AI</span>
    </span>
    {showProduct && (
      <>
        <span className="login-div" aria-hidden="true" />
        <span className="login-product">On-Call Agent</span>
      </>
    )}
  </div>
);

/* ── Main component ─────────────────────────────────────────── */
export const LoginView = ({ users, isLoading: externalLoading }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(externalLoading ?? false);
  const [ssoActive, setSsoActive] = useState<string | null>(null);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  const handleSso = (provider: string) => {
    setSsoActive(provider);
    setTimeout(() => setSsoActive(null), 500);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // Loading state is reset by navigation; if no navigation (e.g. Storybook), reset after delay
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <main className="login-shell">
      {/* ═══════════════ BRAND PANEL ═══════════════ */}
      <section className="login-brand" data-testid="login-brand">
        <Wordmark />

        <div className="login-brand-mid">
          <p className="login-eyebrow">Autonomous incident response</p>
          <h1>
            Your on-call engineer that{" "}
            <span className="login-grad">never sleeps.</span>
          </h1>
          <p className="login-lede">
            From first alert to merged fix — the agent triages, investigates,
            and ships the patch while your team stays asleep.
          </p>

          <div className="login-pipeline" aria-hidden="true">
            <div className="login-pl-row">
              <span className="login-node login-n-blue" />
              <span className="login-lab">
                <b>Alert received</b> — latency spike, checkout-svc
              </span>
              <span className="login-t">00:00</span>
            </div>
            <div className="login-pl-row">
              <span className="login-node login-n-amber" />
              <span className="login-lab">
                <b>Triaged &amp; root-caused</b> — connection pool exhausted
              </span>
              <span className="login-t">00:02</span>
            </div>
            <div className="login-pl-row">
              <span className="login-node login-n-ok" />
              <span className="login-lab">
                <b>Fix merged</b> — PR #1408, verified in staging
              </span>
              <span className="login-t">00:09</span>
            </div>
          </div>
        </div>

        <div className="login-brand-foot">
          <span>SOC 2 Type II</span>
          <span className="login-foot-dot" aria-hidden="true" />
          <span>Runs in your infra</span>
          <span className="login-foot-dot" aria-hidden="true" />
          <span>150+ teams on-call</span>
        </div>
      </section>

      {/* ═══════════════ AUTH PANEL ═══════════════ */}
      <section className="login-auth" data-testid="login-auth">
        <div className="login-card">
          {/* Mobile-only compact wordmark */}
          <div className="login-mobile-mark login-wordmark">
            <span className="login-glyph" aria-hidden="true">
              <GlyphIcon />
            </span>
            <span>
              Autonomy<span className="login-ai">AI</span>
            </span>
          </div>

          {/* Header */}
          <div className="login-auth-head">
            <p className="login-ey">Sign in</p>
            <h2>Welcome back</h2>
            <p>Pick up where the agent left off.</p>
          </div>

          {/* SSO buttons — cosmetic */}
          <div className="login-sso">
            <button
              type="button"
              className="login-sso-btn"
              onClick={() => handleSso("github")}
              style={
                ssoActive === "github"
                  ? { borderColor: "var(--aai-orange)" }
                  : undefined
              }
              aria-label="Continue with GitHub"
            >
              <GitHubIcon />
              Continue with GitHub
            </button>
            <button
              type="button"
              className="login-sso-btn"
              onClick={() => handleSso("google")}
              style={
                ssoActive === "google"
                  ? { borderColor: "var(--aai-orange)" }
                  : undefined
              }
              aria-label="Continue with Google"
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="login-divider">
            <span>or</span>
          </div>

          {/* Remix form */}
          <Form
            method="post"
            className="login-form"
            onSubmit={handleSubmit}
          >
            {/* User select field */}
            <div className="login-field">
              <label htmlFor="login-user-select">
                Workspace user
                <button type="button" className="login-link-btn" tabIndex={-1}>
                  Switch account?
                </button>
              </label>
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  id="login-user-select"
                  className="login-select-trigger flex w-full justify-between"
                  aria-label="Open user select"
                >
                  <div className="flex items-center gap-2">
                    <UserAvatar {...selectedValue} />
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
            </div>

            {/* Remember me */}
            <label className="login-remember">
              <input
                type="checkbox"
                id="login-remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="login-checkbox-box" aria-hidden="true">
                <CheckIcon />
              </span>
              Keep me signed in
            </label>

            {/* Submit */}
            <button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login"
              className="login-submit"
              disabled={isLoading}
            >
              {isLoading && (
                <span className="login-spinner" aria-hidden="true" />
              )}
              <span>{isLoading ? "Signing in…" : "Sign in"}</span>
            </button>
          </Form>

          {/* Footnote */}
          <p className="login-footnote">
            New to the On-Call Agent?{" "}
<button type="button" className="login-link-btn">Request access</button>
          </p>

          {/* Secure badge */}
          <div className="login-secure">
            <LockIcon />
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </main>
  );
};

interface Props {
  users: User[];
  /** Set to true to show the loading/spinner state (used in Storybook) */
  isLoading?: boolean;
}
