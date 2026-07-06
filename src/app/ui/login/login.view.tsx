import { useState } from "react";
import { Form, useNavigation } from "@remix-run/react";
import { User } from "@domain/user";

const FILM_GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E";

const AAI_TOKENS = {
  "--ink-900": "#121211",
  "--ink-800": "#1a1a19",
  "--ink-700": "#242422",
  "--ink-600": "#2e2e2b",
  "--aai-orange": "#F25730",
  "--aai-orange-dim": "rgba(242,87,48,.18)",
  "--aai-orange-glow": "rgba(242,87,48,.55)",
  "--text-primary": "#e8e6e1",
  "--text-secondary": "#8a8880",
  "--text-tertiary": "#5c5a56",
} as React.CSSProperties;

const pipeline = [
  { color: "#3b82f6", label: "INFRA_MONITOR", time: "00:00:12", status: "Scanning…" },
  { color: "#f59e0b", label: "ALERT_ROUTER", time: "00:00:47", status: "Escalating…" },
  { color: "#22c55e", label: "AUTO_REMEDIATE", time: "00:01:23", status: "Resolved ✓" },
];

const stats = [
  { value: "2.1s", label: "Mean Time to Detect" },
  { value: "99.97%", label: "Uptime SLA" },
  { value: "< 0s", label: "Human Lag" },
];

export const LoginView = ({ users }: Props) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting" || navigation.state === "loading";
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [ssoFlash, setSsoFlash] = useState<string | null>(null);

  const firstUserId = users[0]?.id ?? "";

  const handleSsoClick = (provider: string) => {
    setSsoFlash(provider);
    setTimeout(() => setSsoFlash(null), 600);
  };

  return (
    <div
      style={AAI_TOKENS as React.CSSProperties}
      className="relative min-h-screen overflow-hidden"
      css-bg="ink-900"
    >
      {/* Background color via style */}
      <div
        className="fixed inset-0"
        style={{ background: "var(--ink-900)" }}
      />

      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          backgroundImage: `url("${FILM_GRAIN_SVG}")`,
          backgroundRepeat: "repeat",
          opacity: 0.045,
          mixBlendMode: "overlay",
        }}
      />

      {/* Main grid */}
      <div
        className="relative z-20 grid min-h-screen"
        style={{ gridTemplateColumns: "1.05fr 0.95fr" }}
      >
        {/* ── LEFT: Brand Panel ── */}
        <div
          className="relative hidden flex-col overflow-hidden lg:flex"
          style={{
            background: "var(--ink-900)",
            padding: "clamp(36px,4.5vw,64px)",
          }}
        >
          {/* Warm radial glows */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-120px",
              left: "-120px",
              width: "480px",
              height: "480px",
              background:
                "radial-gradient(circle, rgba(242,87,48,.22) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "-80px",
              right: "-80px",
              width: "360px",
              height: "360px",
              background:
                "radial-gradient(circle, rgba(180,60,20,.18) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #F25730, #FFAA80)",
                fontSize: "14px",
                boxShadow: "0 0 16px rgba(242,87,48,.45)",
              }}
            >
              A
            </div>
            <div>
              <div
                className="text-sm font-bold tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                AutonomyAI
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--text-tertiary)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                On-Call Agent
              </div>
            </div>
          </div>

          {/* Brand mid — vertically centered */}
          <div className="my-auto">
            {/* Eyebrow */}
            <div
              className="mb-6 text-xs font-semibold tracking-widest"
              style={{
                color: "var(--aai-orange)",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.2em",
              }}
            >
              AUTONOMOUS INCIDENT RESPONSE
            </div>

            {/* Headline */}
            <h1
              className="mb-5 leading-tight"
              style={{
                fontFamily: "'CircularStdBlack', sans-serif",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                color: "var(--text-primary)",
                lineHeight: 1.12,
              }}
            >
              The incident pipeline that{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #F25730, #FFAA80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                never sleeps
              </span>
            </h1>

            {/* Lede */}
            <p
              className="mb-10 max-w-sm text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Autonomous detection, routing &amp; remediation — from alert to
              resolved without waking anyone up.
            </p>

            {/* Pipeline */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "var(--ink-800)",
                border: "1px solid var(--ink-600)",
              }}
            >
              {pipeline.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                  style={{ paddingTop: i > 0 ? "14px" : 0 }}
                >
                  {/* Node */}
                  <div className="relative flex shrink-0 items-center justify-center">
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: "20px",
                        height: "20px",
                        background: row.color,
                        opacity: 0.18,
                      }}
                    />
                    <div
                      className="relative rounded-full"
                      style={{
                        width: "8px",
                        height: "8px",
                        background: row.color,
                        boxShadow: `0 0 8px ${row.color}`,
                      }}
                    />
                  </div>

                  {/* Label + status */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span
                      className="text-xs font-semibold"
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {row.status}
                    </span>
                  </div>

                  {/* Timestamp */}
                  <span
                    className="shrink-0 text-xs tabular-nums"
                    style={{
                      color: "var(--text-tertiary)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand footer stats */}
          <div
            className="mt-auto flex items-center gap-8 border-t pt-6"
            style={{ borderColor: "var(--ink-600)" }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  className="text-lg font-bold"
                  style={{ color: "var(--aai-orange)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--text-tertiary)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Auth Panel ── */}
        <div
          className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
          style={{ background: "var(--ink-900)" }}
        >
          {/* Mobile wordmark */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #F25730, #FFAA80)",
                fontSize: "14px",
                boxShadow: "0 0 16px rgba(242,87,48,.45)",
              }}
            >
              A
            </div>
            <span
              className="text-base font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              AutonomyAI
            </span>
          </div>

          {/* Auth card */}
          <div className="w-full max-w-[392px]">
            <div className="mb-8">
              <h2
                className="mb-1 text-2xl font-bold"
                style={{ color: "var(--text-primary)", fontFamily: "'CircularStdBlack', sans-serif" }}
              >
                Welcome back
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Sign in to your AutonomyAI account
              </p>
            </div>

            {/* SSO Buttons */}
            <div className="mb-6 flex gap-3">
              {(["GitHub", "Google"] as const).map((provider) => (
                <button
                  key={provider}
                  type="button"
                  onClick={() => handleSsoClick(provider)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-150"
                  style={{
                    background: "var(--ink-800)",
                    border: `1px solid ${ssoFlash === provider ? "var(--aai-orange)" : "var(--ink-600)"}`,
                    color: "var(--text-primary)",
                    cursor: "pointer",
                  }}
                >
                  {provider === "GitHub" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  )}
                  {provider}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="relative mb-6 flex items-center">
              <div className="flex-1" style={{ height: "1px", background: "var(--ink-600)" }} />
              <span
                className="px-4 text-xs"
                style={{ color: "var(--text-tertiary)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                or
              </span>
              <div className="flex-1" style={{ height: "1px", background: "var(--ink-600)" }} />
            </div>

            {/* Form */}
            <Form method="post">
              <input type="hidden" name="_action" value="setUser" />
              <input type="hidden" name="user" value={firstUserId} />

              {/* Email */}
              <div className="mb-4">
                <label
                  className="mb-1.5 block text-xs font-medium"
                  style={{ color: "var(--text-secondary)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-150"
                  style={{
                    background: "var(--ink-800)",
                    border: "1px solid var(--ink-600)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--aai-orange)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(242,87,48,.22)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--ink-600)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Password */}
              <div className="mb-5">
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    className="text-xs font-medium"
                    style={{ color: "var(--text-secondary)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    PASSWORD
                  </label>
                  <button
                    type="button"
                    className="text-xs transition-colors duration-150"
                    style={{ color: "var(--aai-orange)", cursor: "pointer", background: "none", border: "none" }}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    autoComplete="current-password"
                    className="w-full rounded-lg px-4 py-3 pr-11 text-sm outline-none transition-all duration-150"
                    style={{
                      background: "var(--ink-800)",
                      border: "1px solid var(--ink-600)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--aai-orange)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(242,87,48,.22)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--ink-600)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--text-tertiary)", background: "none", border: "none", cursor: "pointer" }}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="mb-6 flex items-center gap-3">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded transition-all duration-150"
                  style={{
                    background: rememberMe ? "var(--aai-orange)" : "transparent",
                    border: `1.5px solid ${rememberMe ? "var(--aai-orange)" : "var(--ink-600)"}`,
                    cursor: "pointer",
                  }}
                >
                  {rememberMe && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Remember me for 30 days
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all duration-200"
                style={{
                  background: isLoading
                    ? "rgba(242,87,48,.6)"
                    : "linear-gradient(135deg, #F25730, #e04820)",
                  boxShadow: isLoading ? "none" : "0 0 24px rgba(242,87,48,.45)",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 0 32px rgba(242,87,48,.65)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 0 24px rgba(242,87,48,.45)";
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Signing in…
                  </>
                ) : (
                  "Sign in"
                )}
              </button>

              {/* Footnote */}
              <p className="mb-8 text-center text-xs" style={{ color: "var(--text-tertiary)" }}>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="transition-colors duration-150"
                  style={{ color: "var(--aai-orange)", background: "none", border: "none", cursor: "pointer" }}
                >
                  Request access
                </button>
              </p>

              {/* Secure badge */}
              <div
                className="flex items-center justify-center gap-2 rounded-lg py-3"
                style={{ background: "var(--ink-800)", border: "1px solid var(--ink-700)" }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span
                  className="text-xs"
                  style={{ color: "var(--text-tertiary)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Encrypted &amp; SSO-ready
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
