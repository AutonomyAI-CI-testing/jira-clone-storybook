import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAutorenew } from "react-icons/md";
import { LoginSSOButtons } from "./LoginSSOButtons";

interface LoginFormProps {
  isLoading?: boolean;
  error?: string;
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
}

export const LoginForm = ({
  isLoading = false,
  error,
  onSubmit,
}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email, password, rememberMe);
    }
  };

  return (
    <div className="autonomy-login-form-panel">
      <div className="max-w-md mx-auto w-full">
        {/* Welcome Message */}
        <h2 className="autonomy-login-heading mb-2">Welcome back</h2>
        <p className="autonomy-login-subheading mb-8">
          Sign in to access your incident management dashboard
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-950 border border-red-700 text-red-200">
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SSO Buttons */}
          <LoginSSOButtons />

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Work email address
            </label>
            <input
              id="email"
              type="email"
              className="autonomy-input"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              aria-label="Email address"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="autonomy-input pr-12"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                aria-label="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="autonomy-password-toggle absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-3 my-6">
            <input
              id="rememberMe"
              type="checkbox"
              className="autonomy-checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              aria-label="Keep me signed in"
            />
            <label htmlFor="rememberMe" className="text-sm text-[#A0A0A0] cursor-pointer">
              Keep me signed in
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="autonomy-button autonomy-button-primary w-full flex items-center justify-center gap-2"
            aria-label="Sign in"
          >
            {isLoading && <MdAutorenew size={20} className="autonomy-spinner" />}
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer Links */}
        <div className="flex flex-col gap-2 mt-6 text-center">
          <a href="#forgot" className="autonomy-link text-sm">
            Forgot password?
          </a>
          <a href="#request-access" className="autonomy-link text-sm">
            Don't have an account? Request access
          </a>
        </div>

        {/* Security Footer */}
        <div className="autonomy-security-footer">
          <p>✓ Encrypted & SSO-ready • Your data is always secure</p>
        </div>
      </div>
    </div>
  );
};
