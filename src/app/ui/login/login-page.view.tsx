import cx from "classix";
import { LoginForm } from "@app/components/login-form";
import { BrandPanel } from "@app/components/brand-panel";

export const LoginPageView = ({ onSubmit, isLoading = false, error }: Props) => {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Brand Panel - Hidden on mobile, shown on md and up */}
      <BrandPanel />

      {/* Login Form Container */}
      <div className={cx(
        "flex flex-1 flex-col items-center justify-center px-4 py-8",
        "md:flex-none md:w-auto md:min-w-[500px] md:px-12"
      )}>
        <div className="w-full max-w-sm">
          {/* Logo/Title */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-font">
              Sign In
            </h2>
            <p className="mt-2 text-font-subtle">
              Welcome back to your project management dashboard
            </p>
          </div>

          {/* Login Form */}
          <LoginForm
            onSubmit={onSubmit}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  error?: string;
}
