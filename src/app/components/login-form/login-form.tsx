import { forwardRef, useState } from "react";
import cx from "classix";
import { Button } from "@app/components/button";

export const LoginForm = forwardRef<HTMLFormElement, Props>(
  (
    {
      onSubmit,
      isLoading = false,
      error,
      className,
      ...rest
    },
    forwardedRef
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <form
        ref={forwardedRef}
        className={cx(
          "flex w-full max-w-sm flex-col gap-6",
          className
        )}
        onSubmit={onSubmit}
        {...rest}
      >
        {/* Error Message */}
        {error && (
          <div className="rounded-lg bg-background-danger-subtlest p-3 text-sm text-font-danger">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-sm font-medium text-font">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={isLoading}
            className={cx(
              "rounded-lg border border-background-neutral px-3 py-2",
              "text-sm text-font placeholder:text-font-subtle",
              "focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ff6b35]",
              "disabled:bg-background-neutral-hovered disabled:text-font-subtle",
              "bg-background transition-all"
            )}
            required
          />
        </div>

        {/* Password Input with Toggle */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-font">
              Password
            </label>
            <button
              type="button"
              onClick={handleTogglePassword}
              disabled={isLoading}
              className="text-xs text-font-brand hover:text-font-brand disabled:text-font-subtle"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            disabled={isLoading}
            className={cx(
              "rounded-lg border border-background-neutral px-3 py-2",
              "text-sm text-font placeholder:text-font-subtle",
              "focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ff6b35]",
              "disabled:bg-background-neutral-hovered disabled:text-font-subtle",
              "bg-background transition-all"
            )}
            required
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              className={cx(
                "h-4 w-4 rounded border-background-neutral",
                "cursor-pointer accent-[#ff6b35]",
                "disabled:cursor-not-allowed"
              )}
            />
            <span className="text-sm text-font-subtle">Remember me</span>
          </label>
          <a
            href="#forgot-password"
            className={cx(
              "text-sm text-font-brand hover:underline whitespace-nowrap",
              isLoading && "pointer-events-none text-font-subtle"
            )}
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>

        {/* SSO Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            type="button"
            disabled={isLoading}
            className={cx(
              "flex-1 rounded-lg border border-background-neutral px-4 py-2",
              "text-sm font-medium text-font transition-colors",
              "hover:bg-background-neutral active:bg-background-neutral-pressed",
              "disabled:cursor-not-allowed disabled:bg-background-neutral-hovered disabled:text-font-subtle",
              "flex items-center justify-center gap-2"
            )}
          >
            <span>GitHub</span>
          </button>
          <button
            type="button"
            disabled={isLoading}
            className={cx(
              "flex-1 rounded-lg border border-background-neutral px-4 py-2",
              "text-sm font-medium text-font transition-colors",
              "hover:bg-background-neutral active:bg-background-neutral-pressed",
              "disabled:cursor-not-allowed disabled:bg-background-neutral-hovered disabled:text-font-subtle",
              "flex items-center justify-center gap-2"
            )}
          >
            <span>Google</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-font-subtle text-wrap">
          Don&apos;t have an account?{" "}
          <a href="#signup" className="font-medium text-font-brand hover:underline whitespace-nowrap">
            Request Access
          </a>
        </p>
      </form>
    );
  }
);

LoginForm.displayName = "LoginForm";

interface Props {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  error?: string;
  className?: string;
}
