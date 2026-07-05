import { forwardRef } from "react";
import cx from "classix";

export const BrandPanel = forwardRef<HTMLDivElement, Props>(
  (
    {
      title = "Welcome Back",
      subtitle = "To your project management dashboard",
      features = defaultFeatures,
      className,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx(
          "hidden md:flex flex-col justify-between rounded-lg bg-gradient-to-br",
          "from-background-brand-bold to-background-brand-bold-hovered p-12",
          "text-font-inverse min-h-screen md:min-h-auto md:min-w-[400px]",
          className
        )}
        {...rest}
      >
        {/* Top Section - Brand */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold leading-tight">{title}</h1>
            <p className="mt-3 text-lg text-font-inverse opacity-90">
              {subtitle}
            </p>
          </div>

          {/* Features List */}
          <div className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6b35]">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-font-inverse">{feature.title}</p>
                  <p className="text-sm text-font-inverse opacity-80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Footer */}
        <div className="mt-12 pt-6 border-t border-font-inverse border-opacity-20">
          <p className="text-sm text-font-inverse opacity-75">
            Secure • Fast • Reliable
          </p>
          <p className="mt-2 text-xs text-font-inverse opacity-60">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
);

BrandPanel.displayName = "BrandPanel";

const defaultFeatures = [
  {
    title: "Manage Projects",
    description: "Create and organize your projects effortlessly",
  },
  {
    title: "Track Issues",
    description: "Keep track of all your tasks and issues in one place",
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time",
  },
];

interface Feature {
  title: string;
  description: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}
