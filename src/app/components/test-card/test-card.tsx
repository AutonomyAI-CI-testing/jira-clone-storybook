import { useState } from "react";
import cx from "classix";

/**
 * Reusable info icon component used for field labels and headers.
 * Displays a small circular info icon with question mark inside.
 */
const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
    <path
      strokeWidth="1.5"
      d="M12 8v4m0 4v.01"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Collapsible section header with animated toggle arrow.
 * Used for main section headers that can expand/collapse content.
 */
const CollapsibleHeader = ({
  isCollapsed,
  onClick,
  children,
  variant = "default",
}: {
  isCollapsed: boolean;
  onClick: () => void;
  children: string;
  variant?: "default" | "secondary";
}): JSX.Element => {
  const baseClasses = "flex items-center gap-3 transition-colors";
  const variantClasses =
    variant === "secondary"
      ? "text-sm font-semibold text-font-subtlest hover:text-font-subtle"
      : "text-base font-semibold text-font-subtle hover:text-font";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      <span
        className={cx(
          "transform transition-transform",
          isCollapsed ? "rotate-180" : ""
        )}
      >
        ▲
      </span>
      {children}
    </button>
  );
};

export const TestCard = (): JSX.Element => {
  const [isCollapsedSection1, setIsCollapsedSection1] = useState(false);
  const [isCollapsedSection2, setIsCollapsedSection2] = useState(false);

  // Toggle handlers for collapsible sections
  const toggleSection1 = () => setIsCollapsedSection1(!isCollapsedSection1);
  const toggleSection2 = () => setIsCollapsedSection2(!isCollapsedSection2);

  return (
    <div className="w-full max-w-2xl bg-elevation-surface p-5 text-font">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-font">UI magician Agent</h1>
        <svg
          className="h-5 w-5 text-font-subtle"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
          <path
            strokeWidth="1.5"
            d="M12 8v4m0 4v.01"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-12">
        <CollapsibleHeader
          isCollapsed={isCollapsedSection1}
          onClick={toggleSection1}
          variant="secondary"
        >
          From entire frame to a singl...
        </CollapsibleHeader>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <div className="mb-6">
          <CollapsibleHeader
            isCollapsed={isCollapsedSection2}
            onClick={toggleSection2}
          >
            Add New Design
          </CollapsibleHeader>
        </div>

        {/* Personal Access Token */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-font-subtle">
              Personal Access Token
            </label>
            <InfoIcon className="h-4 w-4 text-font-subtlest" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-border-input bg-background-input px-4 py-3 text-sm font-semibold text-font-subtle placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold text-font-subtle">
              Design URL
            </label>
            <InfoIcon className="h-4 w-4 text-font-subtlest" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-border-input bg-background-input px-4 py-3 text-sm font-semibold text-font-subtle placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 rounded bg-background-danger-bold px-4 py-3 text-sm font-semibold text-font-inverse transition-colors hover:bg-background-danger-bold-hovered">
            Awesome
          </button>
          <button className="flex-1 rounded bg-background-danger-bold px-4 py-3 text-sm font-semibold text-font-inverse transition-colors hover:bg-background-danger-bold-hovered">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-base font-semibold text-font">Recent Breakdowns</h2>
      </div>

      {/* Footer */}
      <div className="border-border-default border-t pt-3 text-center">
        <p className="text-sm text-font-subtle">© AutonomyAI</p>
      </div>
    </div>
  );
};
