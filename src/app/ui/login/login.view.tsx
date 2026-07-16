import { useState } from "react";
import { User } from "@domain/user";

export const LoginView = ({ users }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate async login
    setTimeout(() => {
      setIsLoading(false);
    }, 1600);
  };

  return (
    <div className="grid min-h-screen grid-cols-[1.05fr_0.95fr]">
      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Brand Panel (Left) */}
      <section className="relative hidden overflow-hidden border-r border-gray-700 bg-gray-900 px-12 py-12 md:flex md:flex-col lg:block">
        {/* Glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 stroke-white"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
              <line x1="5" y1="5" x2="7.5" y2="7.5" />
              <line x1="16.5" y1="16.5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="16.5" y2="7.5" />
              <line x1="7.5" y1="16.5" x2="5" y2="19" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="text-sm font-bold">
            Autonomy<span className="text-orange-500">AI</span>
          </div>
          <div className="mx-1 h-4 w-px bg-gray-700"></div>
          <div className="text-xs text-gray-500">On-Call Agent</div>
        </div>

        <div className="my-auto max-w-md">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-orange-500">
            Autonomous incident response
          </p>
          <h1 className="mb-5 font-black text-4xl leading-tight tracking-tight text-white">
            Your on-call engineer that{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              never sleeps.
            </span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-400">
            From first alert to merged fix — the agent triages, investigates, and ships the patch while your team stays asleep.
          </p>

          {/* Pipeline visualization */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 flex-none rounded-full bg-blue-500"></div>
              <div>
                <p className="font-mono text-sm text-gray-300">
                  <b>Alert received</b> — latency spike, checkout-svc
                </p>
                <p className="font-mono text-xs text-gray-600">00:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 flex-none rounded-full bg-amber-500"></div>
              <div>
                <p className="font-mono text-sm text-gray-300">
                  <b>Triaged &amp; root-caused</b> — connection pool exhausted
                </p>
                <p className="font-mono text-xs text-gray-600">00:02</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 flex-none rounded-full bg-green-500"></div>
              <div>
                <p className="font-mono text-sm text-gray-300">
                  <b>Fix merged</b> — PR #1408, verified in staging
                </p>
                <p className="font-mono text-xs text-gray-600">00:09</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 space-x-3 font-mono text-xs text-gray-500">
          <span>SOC 2 Type II</span>
          <span>•</span>
          <span>Runs in your infra</span>
          <span>•</span>
          <span>150+ teams on-call</span>
        </div>
      </section>

      {/* Auth Panel (Right) */}
      <section className="flex items-center justify-center bg-gray-900 px-8 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile wordmark */}
          <div className="mb-8 flex items-center gap-2 md:hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-400">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 stroke-white"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="5" y1="5" x2="7.5" y2="7.5" />
                <line x1="16.5" y1="16.5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="16.5" y2="7.5" />
                <line x1="7.5" y1="16.5" x2="5" y2="19" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="text-sm font-bold">
              Autonomy<span className="text-orange-500">AI</span>
            </div>
          </div>

          {/* Auth head */}
          <div className="mb-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-gray-500">
              Sign in
            </p>
            <h2 className="mb-3 text-3xl font-bold text-font-danger">Welcome back</h2>
            <p className="text-sm text-gray-400">Pick up where the agent left off.</p>
          </div>

          {/* SSO Buttons */}
          <div className="mb-6 flex flex-col gap-2.5">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 font-semibold text-white transition hover:border-gray-400 hover:bg-gray-700">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
              </svg>
              Continue with GitHub
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 font-semibold text-white transition hover:border-gray-400 hover:bg-gray-700">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
              >
                <g fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </g>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="font-mono text-xs uppercase text-gray-600">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2">
                Work email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-600 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20"
                required
              />
            </div>

            {/* Password field */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-medium text-gray-400">
                  Password
                </label>
                <button type="button" className="text-xs text-orange-500 hover:underline">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 pr-12 text-sm text-white placeholder-gray-600 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-400"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="3" y1="3" x2="21" y2="21" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me checkbox */}
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="peer sr-only"
              />
              <div className="flex h-4 w-4 items-center justify-center rounded border border-gray-500 bg-gray-800 transition peer-checked:border-orange-500 peer-checked:bg-orange-500">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 stroke-white"
                  fill="none"
                  strokeWidth={2.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5 10 17l9-10" />
                </svg>
              </div>
              <span className="text-xs text-gray-400">Keep me signed in</span>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/50 active:translate-y-0 disabled:cursor-wait disabled:bg-orange-700 flex items-center justify-center gap-2"
            >
              {isLoading && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-r-white"></div>
              )}
              <span className={isLoading ? "opacity-85" : ""}>
                {isLoading ? "Signing in..." : "Sign in"}
              </span>
            </button>
          </form>

          {/* Footer links */}
          <p className="mt-6 text-center text-xs text-gray-500">
            New to the On-Call Agent?{" "}
            <button type="button" className="font-medium text-orange-500 hover:underline">
              Request access
            </button>
          </p>

          {/* Security badge */}
          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-600">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  users: User[];
}
