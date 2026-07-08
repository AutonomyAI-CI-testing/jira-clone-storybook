import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";
import { LoginBrandPanel } from "./login-brand-panel";

/* ─── Eye icon (open) ─── */
const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={17}
    height={17}
    aria-hidden="true"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* ─── Eye-off icon (closed) ─── */
const EyeOffIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={17}
    height={17}
    aria-hidden="true"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

/* ─── GitHub icon ─── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17} aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

/* ─── Google icon ─── */
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} aria-hidden="true">
    <path fill="#FFC107" d="M21.8 10.25H21V10H12v4h5.65C16.85 16.45 14.6 18 12 18a6 6 0 1 1 4-10.45l2.85-2.85A10 10 0 1 0 22 12c0-.65-.07-1.28-.2-1.75Z" />
    <path fill="#FF3D00" d="m3.15 7.35 3.3 2.4C7.35 7.55 9.52 6 12 6a5.97 5.97 0 0 1 4 1.55l2.85-2.85A10 10 0 0 0 3.15 7.35Z" />
    <path fill="#4CAF50" d="M12 22a9.97 9.97 0 0 0 6.7-2.6l-3.1-2.6A5.97 5.97 0 0 1 12 18c-2.59 0-4.83-1.53-5.65-3.95l-3.25 2.5A10 10 0 0 0 12 22Z" />
    <path fill="#1976D2" d="M21.8 10.25H21V10H12v4h5.65a6.1 6.1 0 0 1-2.05 2.8l3.1 2.6C19.95 18.15 22 15.3 22 12c0-.65-.07-1.28-.2-1.75Z" />
  </svg>
);

/* ─── Lock icon ─── */
const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={13}
    height={13}
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

/* ─── Spinner ─── */
const Spinner = () => (
  <span
    aria-hidden="true"
    className="inline-block h-4 w-4 animate-spin rounded-full border-2"
    style={{
      borderColor: "rgba(255,255,255,.4)",
      borderRightColor: "#fff",
    }}
  />
);

/* ─── Checkmark icon ─── */
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={11}
    height={11}
    aria-hidden="true"
  >
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   LoginView — main exported component
═══════════════════════════════════════════════════════════ */
export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [ssoClicked, setSsoClicked] = useState<"github" | "google" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  const handleSsoClick = (provider: "github" | "google") => {
    setSsoClicked(provider);
    setTimeout(() => setSsoClicked(null), 500);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // Loading resets naturally when the page transitions; but for Storybook / fallback:
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    /* Force dark background regardless of app theme */
    <div
      className="grid min-h-screen"
      style={{
        background: "#0E0E0D",
        gridTemplateColumns: "1.05fr .95fr",
      }}
    >
      {/* ── LEFT: Brand Panel ── */}
      <LoginBrandPanel />

      {/* ── RIGHT: Auth Panel ── */}
      <section
        className="flex items-center justify-center"
        style={{
          background: "#121211",
          padding: "clamp(28px,5vw,64px)",
        }}
      >
        <div className="w-full" style={{ maxWidth: 392 }}>

          {/* Mobile wordmark (hidden on large screens where brand panel is visible) */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span
              className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg"
              style={{
                background: "linear-gradient(150deg, #F25730, #f5a07a)",
                boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
              }}
            >
              <img
                src="/images/logo.png"
                alt=""
                className="h-4 w-4 object-contain brightness-0 invert"
              />
            </span>
            <span
              className="text-[18px] font-extrabold tracking-tight"
              style={{ color: "#F2F0ED" }}
            >
              Jira Clone
            </span>
          </div>

          {/* Header */}
          <div className="mb-[30px]">
            <p
              className="mb-[14px] text-xs font-medium uppercase tracking-[.16em]"
              style={{ fontFamily: "monospace", color: "rgba(242,240,237,0.4)" }}
            >
              Sign in
            </p>
            <h2
              className="m-0 leading-[1.1] tracking-[-0.02em]"
              style={{ fontWeight: 700, fontSize: 30, color: "#ef4444" }}
            >
              Welcome back
            </h2>
            <p
              className="mt-[9px] leading-[1.5]"
              style={{ fontSize: 15, color: "#8A8882" }}
            >
              Select a user to log in — no real auth required.
            </p>
          </div>

          {/* SSO Buttons */}
          <div className="mb-[22px] flex flex-col gap-[10px]">
            <SsoButton
              icon={<GitHubIcon />}
              label="Continue with GitHub"
              isActive={ssoClicked === "github"}
              onClick={() => handleSsoClick("github")}
            />
            <SsoButton
              icon={<GoogleIcon />}
              label="Continue with Google"
              isActive={ssoClicked === "google"}
              onClick={() => handleSsoClick("google")}
            />
          </div>

          {/* OR Divider */}
          <div
            className="mb-[22px] flex items-center gap-[14px]"
            style={{ color: "rgba(242,240,237,0.3)" }}
          >
            <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span
              className="text-[11px] uppercase tracking-[.14em]"
              style={{ fontFamily: "monospace" }}
            >
              or
            </span>
            <span className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Auth Form */}
          <Form method="post" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">

              {/* User selector (the real auth mechanism) */}
              <div>
                <label
                  className="mb-[7px] block text-[13px] font-medium"
                  style={{ color: "#8A8882" }}
                >
                  Select user
                </label>
                <div
                  className="rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Select.Root
                    name="user"
                    defaultValue={userMock1.id}
                    onValueChange={onValueChange}
                  >
                    <Select.Trigger
                      className="flex w-full justify-between rounded-lg px-[14px] py-[12px]"
                      aria-label="Open user select"
                      style={{ color: "#F2F0ED" }}
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
              </div>

              {/* Cosmetic email field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-[7px] block text-[13px] font-medium"
                  style={{ color: "#8A8882" }}
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg px-[14px] py-[12px] text-[15px] outline-none transition-all duration-150"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#F2F0ED",
                    caretColor: "#F25730",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#F25730";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(242,87,48,0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Cosmetic password field */}
              <div>
                <div className="mb-[7px] flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[13px] font-medium"
                    style={{ color: "#8A8882" }}
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-[12.5px] transition-all duration-150 hover:underline"
                    style={{ color: "#F25730", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    className="w-full rounded-lg px-[14px] py-[12px] pr-[44px] text-[15px] outline-none transition-all duration-150"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#F2F0ED",
                      caretColor: "#F25730",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#F25730";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(242,87,48,0.2)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    className="absolute right-[6px] flex rounded-md p-2 transition-colors duration-150"
                    style={{ color: "rgba(242,240,237,0.35)", background: "none", border: "none" }}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#8A8882";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(242,240,237,0.35)";
                    }}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {/* Remember me checkbox */}
              <label
                className="flex cursor-pointer select-none items-center gap-[9px] text-[13.5px]"
                style={{ color: "#8A8882", marginTop: 2 }}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span
                  className="flex h-[17px] w-[17px] flex-none items-center justify-center rounded-[5px] transition-all duration-150"
                  style={{
                    border: rememberMe ? "1px solid #F25730" : "1px solid rgba(255,255,255,0.2)",
                    background: rememberMe ? "#F25730" : "rgba(255,255,255,0.04)",
                  }}
                  aria-hidden="true"
                >
                  {rememberMe && <CheckIcon />}
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
                className="mt-1 flex w-full cursor-pointer items-center justify-center gap-[9px] rounded-lg px-4 py-[13px] text-[15px] font-semibold text-white transition-all duration-150"
                style={{
                  background: isLoading
                    ? "#d94825"
                    : "linear-gradient(135deg, #F25730, #d94825)",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(242,87,48,0.35)",
                  cursor: isLoading ? "wait" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = "#f06540";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #F25730, #d94825)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {isLoading && <Spinner />}
                <span>{isLoading ? "Signing in…" : "Sign in"}</span>
              </button>
            </div>
          </Form>

          {/* Footnote */}
          <p
            className="mt-[26px] text-center text-[13.5px]"
            style={{ color: "#8A8882" }}
          >
            New to Jira Clone?{" "}
            <button
              type="button"
              className="font-medium transition-all duration-150 hover:underline"
              style={{ color: "#F25730", background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Request access
            </button>
          </p>

          {/* Trust badge */}
          <div
            className="mt-7 flex items-center justify-center gap-2 text-[11px] tracking-[.05em]"
            style={{ fontFamily: "monospace", color: "rgba(242,240,237,0.3)" }}
          >
            <LockIcon />
            <span>Encrypted &amp; SSO-ready</span>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── SSO Button ─── */
interface SsoButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SsoButton = ({ icon, label, isActive, onClick }: SsoButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-lg px-4 py-[12px] text-[14px] font-semibold transition-all duration-[180ms]"
    style={{
      background: "rgba(255,255,255,0.04)",
      border: isActive
        ? "1px solid #F25730"
        : "1px solid rgba(255,255,255,0.12)",
      color: "#F2F0ED",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(255,255,255,0.07)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      e.currentTarget.style.borderColor = isActive
        ? "#F25730"
        : "rgba(255,255,255,0.12)";
    }}
  >
    {icon}
    {label}
  </button>
);

interface Props {
  users: User[];
}
