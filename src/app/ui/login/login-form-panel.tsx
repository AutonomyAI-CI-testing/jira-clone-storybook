import { useState } from "react";
import { Form, useNavigation } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

interface Props {
  users: User[];
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="17" height="17" style={{ flex: "none" }}>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="17" height="17" style={{ flex: "none" }}>
    <path fill="#FFC107" d="M21.8 10.25H21V10H12v4h5.65C16.85 16.45 14.63 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.95.6 4 1.55l2.85-2.85C17.15 3.05 14.7 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.65-.07-1.15-.2-1.75Z"/>
    <path fill="#FF3D00" d="m3.15 7.35 3.3 2.4C7.35 7.55 9.45 6 12 6c1.55 0 2.95.6 4 1.55l2.85-2.85C17.15 3.05 14.7 2 12 2 8.15 2 4.85 4.15 3.15 7.35Z"/>
    <path fill="#4CAF50" d="M12 22c2.6 0 4.95-1 6.7-2.6l-3.1-2.6C14.6 17.55 13.35 18 12 18c-2.63 0-4.85-1.55-5.65-3.95l-3.25 2.5C4.75 19.8 8.1 22 12 22Z"/>
    <path fill="#1976D2" d="M21.8 10.25H21V10H12v4h5.65c-.4 1.1-1.1 2.05-2.05 2.8l3.1 2.6C20 17.15 22 14.54 22 12c0-.65-.07-1.15-.2-1.75Z"/>
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flex: "none" }}>
    <rect x="4" y="11" width="16" height="10" rx="2"/>
    <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
  </svg>
);

export const LoginFormPanel = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  const handleSsoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.borderColor = "#F25730";
    setTimeout(() => { btn.style.borderColor = ""; }, 500);
  };

  return (
    <section className="login-auth-panel">
      <div className="login-card">
        {/* Mobile-only wordmark */}
        <div className="login-wordmark login-mobile-mark">
          <span className="login-wordmark-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="#fff" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
              <circle cx="12" cy="12" r="3.4"/>
            </svg>
          </span>
          <span className="login-wordmark-name">
            Jira<span className="login-wordmark-accent">Clone</span>
          </span>
        </div>

        {/* Auth header */}
        <div className="login-auth-head">
          <p className="login-auth-eyebrow">Sign in</p>
          <h2 className="login-auth-heading">Welcome back</h2>
          <p className="login-auth-sub">Pick a user and jump right in.</p>
        </div>

        {/* SSO buttons */}
        <div className="login-sso">
          <button type="button" className="login-sso-btn" onClick={handleSsoClick} aria-label="Continue with GitHub (placeholder)">
            <GithubIcon />
            Continue with GitHub
          </button>
          <button type="button" className="login-sso-btn" onClick={handleSsoClick} aria-label="Continue with Google (placeholder)">
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="login-divider">
          <span>or</span>
        </div>

        {/* Login form */}
        <Form method="post" className="login-form">
          <div className="login-field">
            <label className="login-field-label">Select user</label>
            <Select.Root
              name="user"
              defaultValue={userMock1.id}
              onValueChange={onValueChange}
            >
              <Select.Trigger
                className="login-user-select-trigger"
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

          {/* Remember me checkbox */}
          <label className="login-remember">
            <input
              type="checkbox"
              className="sr-only"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span className={`login-checkbox-box${checked ? " login-checkbox-checked" : ""}`} aria-hidden="true">
              {checked && (
                <svg viewBox="0 0 24 24" width="11" height="11" stroke="#fff" fill="none" strokeWidth="2.6">
                  <path d="M5 12.5 10 17l9-10"/>
                </svg>
              )}
            </span>
            Keep me signed in
          </label>

          {/* Submit button */}
          <button
            type="submit"
            name="_action"
            value="setUser"
            aria-label="Login"
            disabled={isLoading}
            className={`login-submit${isLoading ? " login-submit-loading" : ""}`}
          >
            {isLoading && (
              <span className="login-spinner" aria-hidden="true" />
            )}
            <span className="login-submit-label">
              {isLoading ? "Signing in…" : "Sign in"}
            </span>
          </button>
        </Form>

        {/* Footnote */}
        <p className="login-footnote">
          New here?{" "}
          <span className="login-footnote-link">Try any user above</span>
        </p>

        {/* Secure badge */}
        <div className="login-secure">
          <LockIcon />
          No real auth · open source
        </div>
      </div>
    </section>
  );
};
