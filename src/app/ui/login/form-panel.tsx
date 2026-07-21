import { useState } from "react";
import { Form } from "@remix-run/react";
import cx from "classix";
import { Button } from "@app/components/button";

interface FormPanelProps {
  isLoading?: boolean;
  onSubmit?: (e: React.FormEvent) => void;
}

export const FormPanel = ({ isLoading = false, onSubmit }: FormPanelProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    onSubmit?.(e);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) validateEmail(value);
  };

  return (
    <div className="flex flex-col justify-center bg-elevation-surface px-8 py-12 sm:px-12">
      {/* Form Header */}
      <div className="mb-8 space-y-2">
        <h2 className="font-primary-black text-3xl text-font">
          Sign in to AutonomyAI
        </h2>
        <p className="text-sm text-font-subtle">
          Enter your credentials to access the incident response platform
        </p>
      </div>

      <Form method="post" onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-primary-bold uppercase tracking-wider text-font-subtle"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            disabled={isLoading}
            className={cx(
              "w-full rounded border bg-background-input px-3 py-2.5 text-sm text-font transition-colors",
              emailError
                ? "border-background-danger-bold"
                : "border-border-input hover:bg-background-input-hovered focus-visible:border-border-focused focus-visible:outline-none"
            )}
            placeholder="you@example.com"
          />
          {emailError && (
            <p className="text-xs text-background-danger-bold">{emailError}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-xs font-primary-bold uppercase tracking-wider text-font-subtle"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full rounded border border-border-input bg-background-input px-3 py-2.5 pr-10 text-sm text-font transition-colors hover:bg-background-input-hovered focus-visible:border-border-focused focus-visible:outline-none"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-font-subtle hover:text-font disabled:opacity-50"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.596 3.039M12 5c4.478 0 8.268 2.943 9.543 7a10.079 10.079 0 01-1.563 4.803"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Keep Signed In Checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="keep-signed-in"
            type="checkbox"
            name="keepSignedIn"
            checked={keepSignedIn}
            onChange={(e) => setKeepSignedIn(e.target.checked)}
            disabled={isLoading}
            className="h-4 w-4 rounded border-border-input bg-background-input cursor-pointer accent-background-brand-bold"
          />
          <label
            htmlFor="keep-signed-in"
            className="text-sm text-font-subtle cursor-pointer"
          >
            Keep me signed in
          </label>
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2"
          aria-label="Sign in"
        >
          {isLoading ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  opacity="0.25"
                />
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </Form>

      {/* Links */}
      <div className="mt-6 flex flex-col gap-2 text-center text-sm">
        <a
          href="/forgot-password"
          className="text-font-brand hover:underline"
        >
          Forgot password?
        </a>
        <a href="/request-access" className="text-font-brand hover:underline">
          Request access
        </a>
      </div>

      {/* SSO Buttons */}
      <div className="mt-8 space-y-3">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase text-font-subtle">
            <span className="bg-elevation-surface px-2">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={isLoading}
            className="rounded border border-border bg-elevation-surface-raised px-3 py-2.5 text-sm font-primary-bold text-font transition-colors hover:bg-elevation-surface-raised-hovered disabled:opacity-50"
            onClick={() => alert("GitHub SSO - placeholder")}
          >
            GitHub
          </button>
          <button
            type="button"
            disabled={isLoading}
            className="rounded border border-border bg-elevation-surface-raised px-3 py-2.5 text-sm font-primary-bold text-font transition-colors hover:bg-elevation-surface-raised-hovered disabled:opacity-50"
            onClick={() => alert("Google SSO - placeholder")}
          >
            Google
          </button>
        </div>
      </div>

      {/* Security Badge */}
      <div className="mt-8 rounded border border-border-info bg-background-info px-3 py-2 text-center text-xs text-font-subtle">
        🔒 Encrypted & SSO-ready
      </div>
    </div>
  );
};
