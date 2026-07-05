import { useState } from "react";
import { Form, useNavigation } from "@remix-run/react";
import type { User } from "@domain/user";

interface AuthFormProps {
  users: User[];
}

export const AuthForm = ({ users }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [ssoFlash, setSsoFlash] = useState<"github" | "google" | null>(null);
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  // Use first user as the "default" login target
  const defaultUser = users[0];

  const handleSsoClick = (provider: "github" | "google") => {
    setSsoFlash(provider);
    setTimeout(() => setSsoFlash(null), 500);
  };

  return (
    <section
      className="flex items-center justify-center"
      style={{
        background: "#121211",
        padding: "clamp(28px, 5vw, 64px)",
      }}
    >
      <div className="w-full" style={{ maxWidth: "392px" }}>
        {/* Mobile-only wordmark */}
        <div
          className="mb-[30px] flex items-center gap-[11px] lg:hidden"
        >
          <span
            className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px]"
            aria-hidden="true"
            style={{
              background: "linear-gradient(150deg, #F25730, #F69874)",
              boxShadow:
                "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
            }}
          >
            <GlyphIcon />
          </span>
          <span
            style={{ fontWeight: 800, fontSize: "19px", letterSpacing: "-0.01em", color: "#fff" }}
          >
            Autonomy<span style={{ color: "#F25730" }}>AI</span>
          </span>
        </div>

        {/* Auth header */}
        <div className="mb-[30px]">
          <p
            className="m-0 mb-[14px]"
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7C7A75",
            }}
          >
            Sign in
          </p>
          <h2
            className="m-0"
            style={{
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ef4444",
            }}
          >
            Welcome back
          </h2>
          <p
            className="m-0 mt-[9px]"
            style={{ fontSize: "15px", lineHeight: 1.5, color: "#B4B1AC" }}
          >
            Pick up where the agent left off.
          </p>
        </div>

        {/* SSO buttons */}
        <div className="mb-[22px] flex flex-col gap-[10px]">
          <button
            type="button"
            onClick={() => handleSsoClick("github")}
            className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[8px] px-[16px] py-[12px] text-[14px] font-semibold transition-all duration-[180ms]"
            style={{
              background: "#212120",
              color: "#fff",
              border: `1px solid ${ssoFlash === "github" ? "#F25730" : "#3C3B39"}`,
              fontFamily: "inherit",
              transition: "border-color 0.18s, background 0.18s",
            }}
          >
            <GitHubIcon />
            Continue with GitHub
          </button>
          <button
            type="button"
            onClick={() => handleSsoClick("google")}
            className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[8px] px-[16px] py-[12px] text-[14px] font-semibold transition-all duration-[180ms]"
            style={{
              background: "#212120",
              color: "#fff",
              border: `1px solid ${ssoFlash === "google" ? "#F25730" : "#3C3B39"}`,
              fontFamily: "inherit",
              transition: "border-color 0.18s, background 0.18s",
            }}
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div
          className="mb-[22px] flex items-center gap-[14px]"
          style={{ color: "#7C7A75" }}
        >
          <span className="h-px flex-1" style={{ background: "#3C3B39" }} />
          <span
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            or
          </span>
          <span className="h-px flex-1" style={{ background: "#3C3B39" }} />
        </div>

        {/* Login form — wires to Remix action with setUser */}
        <Form method="post" className="flex flex-col gap-[16px]">
          {/* Hidden user ID — uses first mock user */}
          <input type="hidden" name="user" value={defaultUser?.id ?? ""} />

          {/* Email field */}
          <div>
            <label
              htmlFor="login-email"
              className="mb-[7px] block"
              style={{ fontSize: "13px", fontWeight: 500, color: "#B4B1AC" }}
            >
              Work email
            </label>
            <div className="relative flex items-center">
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                defaultValue={defaultUser ? `${defaultUser.name.toLowerCase().replace(/\s/g, ".")}@company.com` : ""}
                className="w-full rounded-[8px] px-[14px] py-[12px] text-[15px] outline-none transition-all duration-[150ms]"
                style={{
                  background: "#333333",
                  border: "1px solid #3C3B39",
                  color: "#fff",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#F25730";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(242,87,48,.55)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#3C3B39";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <div className="mb-[7px] flex items-center justify-between">
              <label
                htmlFor="login-password"
                style={{ fontSize: "13px", fontWeight: 500, color: "#B4B1AC" }}
              >
                Password
              </label>
              <button
                type="button"
                className="border-0 bg-transparent p-0 cursor-pointer"
                style={{ fontSize: "12.5px", color: "#F25730", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
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
                defaultValue="password"
                className="w-full rounded-[8px] px-[14px] py-[12px] pr-[44px] text-[15px] outline-none transition-all duration-[150ms]"
                style={{
                  background: "#333333",
                  border: "1px solid #3C3B39",
                  color: "#fff",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#F25730";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(242,87,48,.55)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#3C3B39";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-[6px] flex cursor-pointer rounded-[6px] border-0 bg-transparent p-[8px]"
                style={{ color: "#7C7A75" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B4B1AC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7C7A75")}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label
            className="mt-[2px] flex cursor-pointer select-none items-center gap-[9px]"
            style={{ fontSize: "13.5px", color: "#B4B1AC" }}
          >
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="absolute h-0 w-0 opacity-0"
            />
            <span
              aria-hidden="true"
              className="flex h-[17px] w-[17px] flex-none items-center justify-center rounded-[5px] transition-all duration-[150ms]"
              style={{
                border: `1px solid ${rememberMe ? "#F25730" : "#4A4946"}`,
                background: rememberMe ? "#F25730" : "#333333",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="11"
                height="11"
                stroke="#fff"
                fill="none"
                strokeWidth="2.6"
                style={{ opacity: rememberMe ? 1 : 0, transition: "opacity 0.12s" }}
              >
                <path d="M5 12.5 10 17l9-10" />
              </svg>
            </span>
            Keep me signed in
          </label>

          {/* Submit button */}
          <button
            type="submit"
            name="_action"
            value="setUser"
            disabled={isLoading}
            className="mt-[4px] flex w-full cursor-pointer items-center justify-center gap-[9px] rounded-[8px] border-0 px-[16px] py-[13px] text-[15px] font-semibold text-white transition-all duration-[150ms]"
            style={{
              background: isLoading ? "#ED5339" : "#F25730",
              boxShadow:
                "0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22)",
              fontFamily: "inherit",
              cursor: isLoading ? "wait" : "pointer",
            }}
          >
            {isLoading && (
              <span
                aria-hidden="true"
                className="h-[16px] w-[16px] animate-spin rounded-full"
                style={{
                  border: "2px solid rgba(255,255,255,.4)",
                  borderRightColor: "#fff",
                }}
              />
            )}
            <span>{isLoading ? "Signing in…" : "Sign in"}</span>
          </button>
        </Form>

        {/* Footnote */}
        <p
          className="mt-[26px] text-center"
          style={{ fontSize: "13.5px", color: "#B4B1AC" }}
        >
          New to the On-Call Agent?{" "}
          <button
            type="button"
            className="border-0 bg-transparent p-0 cursor-pointer"
            style={{ color: "#F25730", textDecoration: "none", fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            Request access
          </button>
        </p>

        {/* Secure badge */}
        <div
          className="mt-[28px] flex items-center justify-center gap-[8px]"
          style={{
            fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
            fontSize: "11px",
            letterSpacing: "0.05em",
            color: "#7C7A75",
          }}
        >
          <LockIcon />
          Encrypted &amp; SSO-ready
        </div>
      </div>
    </section>
  );
};

// --------------- Icon sub-components ---------------

const GlyphIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="#fff"
    fill="none"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
    <path fill="#FFC107" d="M21.8 10.2H21V10H12v4h5.65A5.97 5.97 0 0 1 6 12a6 6 0 0 1 9.51-4.85l2.83-2.83A10 10 0 1 0 22 12c0-.63-.06-1.23-.2-1.8Z" />
    <path fill="#FF3D00" d="m3.15 7.35 3.3 2.42A5.97 5.97 0 0 1 12 6c1.54 0 2.95.57 4.01 1.49l2.83-2.83A10 10 0 0 0 2 12c0 1.74.45 3.38 1.15 4.85l3.3-2.42A5.97 5.97 0 0 1 6 12c0-1.72.72-3.27 1.87-4.37l-4.72.28Z" />
    <path fill="#4CAF50" d="M12 22a9.97 9.97 0 0 0 6.71-2.6l-3.1-2.6A5.97 5.97 0 0 1 6.46 14.4l-3.31 2.55A10 10 0 0 0 12 22Z" />
    <path fill="#1976D2" d="M21.8 10.2H21V10H12v4h5.65a6.01 6.01 0 0 1-2.04 2.8l3.1 2.6C18.46 19.1 22 16.38 22 12c0-.63-.06-1.23-.2-1.8Z" />
  </svg>
);
