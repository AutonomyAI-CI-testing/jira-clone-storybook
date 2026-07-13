import { useState } from "react";
import { Form, useTransition } from "@remix-run/react";
import { User } from "@domain/user";
import { Button } from "@app/components/button";

export const LoginView = ({ users }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const transition = useTransition();
  const isLoading = transition.state === "submitting";

  const validateEmail = (value: string): boolean => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (value: string): boolean => {
    if (!value) {
      setPasswordError("Password is required");
      return false;
    }
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-elevation-surface">
      <div className="w-full max-w-md px-6 py-12">
        <div className="mb-8">
          <h1 className="font-primary-black text-4xl text-font-danger mb-2">
            Welcome back
          </h1>
          <p className="text-font-subtle">
            Sign in to your account to continue
          </p>
        </div>

        <Form method="post" className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-font mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) validateEmail(e.target.value);
              }}
              onBlur={(e) => validateEmail(e.target.value)}
              placeholder="you@company.com"
              disabled={isLoading}
              className="w-full px-3 py-2 bg-background-input border border-border-input rounded-md text-font placeholder-font-subtlest focus:outline-none focus:border-border-brand transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-invalid={!!emailError}
            />
            {emailError && (
              <p className="mt-1 text-sm text-font-danger">{emailError}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-font mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) validatePassword(e.target.value);
                }}
                onBlur={(e) => validatePassword(e.target.value)}
                placeholder="••••••••"
                disabled={isLoading}
                className="w-full px-3 py-2 bg-background-input border border-border-input rounded-md text-font placeholder-font-subtlest focus:outline-none focus:border-border-brand transition disabled:opacity-50 disabled:cursor-not-allowed pr-10"
                aria-invalid={!!passwordError}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-font-subtle hover:text-font transition disabled:opacity-50"
                disabled={isLoading}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3C5.58 3 1.77 5.76.5 9.5c.96 2.1 2.59 3.94 4.65 5.1C7.56 15.8 8.68 17 10 17s2.44-1.2 3.85-2.9c2.06-1.16 3.69-3 4.65-5.1-1.27-3.74-5.08-6.5-9.5-6.5zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 4C5.58 4 1.77 6.76.5 10.5c1.27 3.74 5.08 6.5 9.5 6.5s8.23-2.76 9.5-6.5C18.23 6.76 14.42 4 10 4zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && (
              <p className="mt-1 text-sm text-font-danger">{passwordError}</p>
            )}
          </div>

          {/* Keep Signed In Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="keepSignedIn"
              name="keepSignedIn"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              disabled={isLoading}
              className="w-4 h-4 rounded border-border-input cursor-pointer accent-brand focus:outline-2 focus:outline-border-brand disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <label htmlFor="keepSignedIn" className="ml-2 text-sm text-font-subtle cursor-pointer">
              Keep me signed in
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            name="_action"
            value="login"
            disabled={isLoading}
            className="w-full justify-center"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </Button>
        </Form>

        {/* Forgot Password Link */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {
              // TODO: Implement forgot password flow
            }}
            className="text-sm text-font-brand hover:text-font-brand transition cursor-pointer bg-transparent border-none p-0"
          >
            Forgot your password?
          </button>
        </div>

        {/* Demo Note */}
        <div className="mt-8 p-4 bg-background-neutral rounded-md border border-border">
          <p className="text-xs text-font-subtle">
            <strong>Demo Mode:</strong> Use any email and password (min. 8 characters) to login. You can select which user to login as in the route action.
          </p>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
