import { useState } from "react";
import { Form } from "@remix-run/react";
import cx from "classix";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const LogoGlyphSvg = () => (
  <svg
    viewBox="0 0 24 24"
    width={16}
    height={16}
    fill="none"
    stroke="#fff"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M17 14v7M14 17h7" />
  </svg>
);

const GitHubSvg = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleSvg = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const EyeOpenSvg = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeClosedSvg = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

const SpinnerSvg = () => (
  <svg className="animate-spin" width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.35)" strokeWidth={3} />
    <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

const LockSvg = () => (
  <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const CheckSvg = () => (
  <svg viewBox="0 0 24 24" width={11} height={11} fill="none" stroke="white" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

// ─── Wordmark ──────────────────────────────────────────────────────────────────

const Wordmark = ({ showProduct = true }: { showProduct?: boolean }) => (
  <div className="flex items-center gap-[11px]">
    <span
      className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg"
      style={{
        background: "linear-gradient(150deg, #F25730, #F69874)",
        boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
      }}
    >
      <LogoGlyphSvg />
    </span>
    <span className="font-primary-black text-[19px] tracking-tight" style={{ color: "#e8e6e2" }}>
      Jira&nbsp;<span style={{ color: "#F25730" }}>Clone</span>
    </span>
    {showProduct && (
      <>
        <span className="h-[18px] w-px flex-none" style={{ background: "#2e2e2d" }} aria-hidden="true" />
        <span className="font-primary text-sm" style={{ color: "#8a8a85" }}>Issue Tracker</span>
      </>
    )}
  </div>
);

// ─── Pipeline data ─────────────────────────────────────────────────────────────

const PIPELINE_ROWS = [
  { label: "AUTH-4521", detail: "Critical bug closed",   time: "00:00", dotColor: "#9FD2ED", glowColor: "rgba(159,210,237,.12)" },
  { label: "SPRINT-12", detail: "deadline approaching",  time: "00:02", dotColor: "#E8A13C", glowColor: "rgba(232,161,60,.12)"  },
  { label: "RELEASE-3.1", detail: "shipped to prod",     time: "00:09", dotColor: "#4FB477", glowColor: "rgba(79,180,119,.14)"  },
] as const;

// ─── Brand Panel ───────────────────────────────────────────────────────────────

const BrandPanel = () => (
  <section
    className="relative hidden flex-col overflow-hidden border-r border-[#2e2e2d] md:flex"
    style={{ background: "#121211" }}
    aria-label="Jira Clone brand"
  >
    {/* Warm radial corner glows */}
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%)," +
          "radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
      }}
    />
    <div className="relative z-10 flex h-full flex-col p-[clamp(36px,4.5vw,64px)]">
      <Wordmark />

      {/* Mid section */}
      <div className="my-auto max-w-[480px] py-12">
        <p
          className="mb-[22px] font-mono text-[12px] font-medium uppercase tracking-[.16em]"
          style={{ color: "#F25730" }}
        >
          Autonomous project tracking
        </p>
        <h1
          className="m-0 font-primary-black leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(32px, 3.6vw, 48px)",
            color: "#e8e6e2",
          }}
        >
          Your workflow{" "}
          <span
            style={{
              background: "linear-gradient(95deg, #F25730, #F69874)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            never sleeps.
          </span>
        </h1>
        <p className="mt-[22px] max-w-[420px] text-lg leading-[1.55]" style={{ color: "#9a9994" }}>
          Jira Clone keeps your team&apos;s tasks, bugs, and sprints organized 24/7.
        </p>

        {/* Pipeline motif */}
        <div className="mt-10 flex flex-col" aria-hidden="true">
          {PIPELINE_ROWS.map((row, i) => (
            <div key={row.label} className="relative flex items-center gap-[14px] py-[11px]">
              {i < PIPELINE_ROWS.length - 1 && (
                <span
                  className="pointer-events-none absolute bottom-[-1px] left-[5px] top-[22px] w-px"
                  style={{ background: "#2e2e2d" }}
                />
              )}
              <span
                className="relative z-10 h-[11px] w-[11px] flex-none rounded-full"
                style={{ background: row.dotColor, boxShadow: `0 0 0 4px ${row.glowColor}` }}
              />
              <span className="font-mono text-[12.5px] tracking-[.02em]" style={{ color: "#9a9994" }}>
                <strong className="font-primary-bold" style={{ color: "#c8c5bf" }}>{row.label}</strong>{" "}
                — {row.detail}
              </span>
              <span className="ml-auto font-mono text-[11px]" style={{ color: "#6a6a65" }}>{row.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer stats */}
      <div
        className="flex items-center gap-[18px] font-mono text-[11px] tracking-[.04em]"
        style={{ color: "#6a6a65" }}
      >
        <span>SOC 2 Type II</span>
        <span className="h-1 w-1 rounded-full" style={{ background: "#4a4946" }} aria-hidden="true" />
        <span>Self-hostable</span>
        <span className="h-1 w-1 rounded-full" style={{ background: "#4a4946" }} aria-hidden="true" />
        <span>500+ teams tracking</span>
      </div>
    </div>
  </section>
);

// ─── Auth Panel ────────────────────────────────────────────────────────────────

interface AuthPanelProps {
  users: User[];
  initialShowPassword?: boolean;
  initialLoading?: boolean;
}

const AuthPanel = ({ users, initialShowPassword = false, initialLoading = false }: AuthPanelProps) => {
  const [selectedUser, setSelectedUser] = useState<User>(userMock1);
  const [showPassword, setShowPassword] = useState(initialShowPassword);
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [rememberMe, setRememberMe] = useState(false);

  const onUserChange = (userId: UserId) => {
    const found = users.find((u) => u.id === userId);
    if (found) setSelectedUser(found);
  };

  const handleMockSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#F25730";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(242,87,48,.35)";
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#2e2e2d";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      className="flex items-center justify-center p-[clamp(28px,5vw,64px)]"
      style={{ background: "#121211" }}
    >
      <div className="w-full max-w-[392px]">
        {/* Mobile-only compact wordmark */}
        <div className="mb-8 md:hidden">
          <Wordmark showProduct={false} />
        </div>

        {/* Auth header */}
        <div className="mb-[30px]">
          <p
            className="mb-[14px] font-mono text-[12px] uppercase tracking-[.16em]"
            style={{ color: "#6a6a65" }}
          >
            Sign in
          </p>
          <h2 className="m-0 font-primary-black text-[30px] leading-[1.1] tracking-tight" style={{ color: "red" }}>
            Welcome back
          </h2>
          <p className="mt-[9px] text-[15px] leading-relaxed" style={{ color: "#9a9994" }}>
            Sign in to your workspace.
          </p>
        </div>

        {/* SSO buttons */}
        <div className="mb-[22px] flex flex-col gap-[10px]">
          {(
            [
              { id: "github", label: "Continue with GitHub", Icon: GitHubSvg },
              { id: "google", label: "Continue with Google", Icon: GoogleSvg },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              className={cx(
                "flex w-full cursor-pointer items-center justify-center gap-[10px]",
                "rounded-lg border px-4 py-3",
                "font-primary-bold text-sm",
                "transition-[border-color] duration-[180ms]",
                "hover:border-[#F25730]",
                "focus:outline-none focus-visible:outline-2 focus-visible:outline-[#F25730]"
              )}
              style={{ background: "#1a1a19", borderColor: "#2e2e2d", color: "#c8c5bf" }}
              aria-label={label}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>

        {/* "or" divider */}
        <div className="mb-[22px] flex items-center gap-3.5">
          <span className="h-px flex-1" style={{ background: "#2e2e2d" }} aria-hidden="true" />
          <span
            className="font-mono text-[11px] uppercase tracking-[.14em]"
            style={{ color: "#6a6a65" }}
          >
            or
          </span>
          <span className="h-px flex-1" style={{ background: "#2e2e2d" }} aria-hidden="true" />
        </div>

        {/* Mock email/password form */}
        <form onSubmit={handleMockSubmit} className="flex flex-col gap-4" noValidate>
          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="login-email"
              className="mb-[7px] text-[13px] font-medium"
              style={{ color: "#9a9994" }}
            >
              Work email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              className={cx(
                "w-full rounded-lg border px-3.5 py-3",
                "font-primary text-[15px]",
                "transition-[border-color,box-shadow] duration-150",
                "focus:outline-none"
              )}
              style={{
                background: "#1a1a19",
                borderColor: "#2e2e2d",
                color: "#e8e6e2",
              }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <div className="mb-[7px] flex items-center justify-between">
              <label htmlFor="login-password" className="text-[13px] font-medium" style={{ color: "#9a9994" }}>
                Password
              </label>
              <button
                type="button"
                className="text-[12.5px] transition-colors duration-150 hover:underline focus:outline-none"
                style={{ color: "#F25730" }}
              >
                Forgot password?
              </button>
            </div>
            <div className="relative flex items-center">
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••••••"
                required
                minLength={8}
                className={cx(
                  "w-full rounded-lg border px-3.5 py-3 pr-11",
                  "font-primary text-[15px]",
                  "transition-[border-color,box-shadow] duration-150",
                  "focus:outline-none"
                )}
                style={{
                  background: "#1a1a19",
                  borderColor: "#2e2e2d",
                  color: "#e8e6e2",
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <button
                type="button"
                className={cx(
                  "absolute right-1.5 flex cursor-pointer rounded-md p-2",
                  "transition-colors duration-150",
                  "focus:outline-none"
                )}
                style={{ color: "#6a6a65" }}
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#9a9994")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6a6a65")}
              >
                {showPassword ? <EyeClosedSvg /> : <EyeOpenSvg />}
              </button>
            </div>
          </div>

          {/* Remember me checkbox — state-driven */}
          <label className="flex cursor-pointer select-none items-center gap-[9px] text-[13.5px]" style={{ color: "#9a9994" }}>
            <span
              className={cx(
                "flex h-[17px] w-[17px] flex-none items-center justify-center rounded-[5px] border",
                "transition-all duration-150"
              )}
              style={
                rememberMe
                  ? { background: "#F25730", borderColor: "#F25730" }
                  : { background: "#1a1a19", borderColor: "#2e2e2d" }
              }
              aria-hidden="true"
            >
              {rememberMe && <CheckSvg />}
            </span>
            <input
              type="checkbox"
              id="login-remember"
              className="sr-only"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Keep me signed in
          </label>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className={cx(
              "mt-1 flex w-full items-center justify-center gap-[9px]",
              "cursor-pointer rounded-lg px-4 py-3.5",
              "font-primary-bold text-[15px] text-white",
              "transition-all duration-150",
              isLoading ? "cursor-wait" : "hover:-translate-y-px active:translate-y-0"
            )}
            style={{
              background: isLoading ? "#ED5339" : "#F25730",
              boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22)",
            }}
          >
            {isLoading && <SpinnerSvg />}
            <span>{isLoading ? "Signing in\u2026" : "Sign in"}</span>
          </button>
        </form>

        {/* Footnote */}
        <p className="mt-[26px] text-center text-[13.5px]" style={{ color: "#9a9994" }}>
          New here?{" "}
          <button
            type="button"
            className="font-primary-bold transition-colors duration-150 hover:underline focus:outline-none"
            style={{ color: "#F25730" }}
          >
            Create an account
          </button>
        </p>

        {/* Trust badge */}
        <div
          className="mt-7 flex items-center justify-center gap-2 font-mono text-[11px] tracking-[.05em]"
          style={{ color: "#6a6a65" }}
        >
          <LockSvg />
          <span>Encrypted &amp; SSO-ready</span>
        </div>

        {/* ── Demo user selector ─────────────────────────────────── */}
        <div className="mt-10 border-t pt-6" style={{ borderColor: "#2e2e2d" }}>
          <p
            className="mb-3 text-center font-mono text-[11px] uppercase tracking-[.16em]"
            style={{ color: "#6a6a65" }}
          >
            Demo mode — select a user
          </p>
          <Form method="post" className="flex flex-col gap-2">
            <Select.Root name="user" defaultValue={userMock1.id} onValueChange={onUserChange}>
              <Select.Trigger className="flex w-full justify-between" aria-label="Open user select">
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
            <Button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login as selected user"
              className="w-full"
            >
              Preview as {selectedUser.name}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

// ─── Main export ───────────────────────────────────────────────────────────────

export const LoginView = ({ users, initialShowPassword, initialLoading }: Props) => (
  <div
    className="grid min-h-screen grid-cols-1 md:grid-cols-[1.05fr_0.95fr]"
    style={{ background: "#121211" }}
  >
    <BrandPanel />
    <AuthPanel
      users={users}
      initialShowPassword={initialShowPassword}
      initialLoading={initialLoading}
    />
  </div>
);

export interface Props {
  users: User[];
  /** Storybook prop: start with password field revealed */
  initialShowPassword?: boolean;
  /** Storybook prop: start in loading state */
  initialLoading?: boolean;
}
