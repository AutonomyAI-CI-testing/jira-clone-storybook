import { useState } from "react";
import cx from "classix";

// Collapsible button component for consistent toggle behavior
const CollapsibleButton = ({
  isCollapsed,
  onClick,
  label,
  isBold = false,
}: {
  isCollapsed: boolean;
  onClick: () => void;
  label: string;
  isBold?: boolean;
}): JSX.Element => (
  <button
    onClick={onClick}
    className={cx(
      "flex items-center gap-2 text-sm transition-colors",
      isBold
        ? "font-semibold text-font-subtle hover:text-font"
        : "text-font-subtlest hover:text-font-subtle"
    )}
  >
    <span className={cx("transition-transform", !isCollapsed && "rotate-180")}>
      ∧
    </span>
    {label}
  </button>
);

// Info icon button component for consistent help indicators
const InfoButton = ({ title }: { title: string }): JSX.Element => (
  <button
    className="flex h-4 w-4 items-center justify-center rounded-full border border-border-input text-xs text-font-subtlest hover:text-font-subtle"
    title={title}
    aria-label={title}
  >
    ⓘ
  </button>
);

// Form input field component for consistent styling
const FormField = ({
  label,
  type = "text",
  placeholder,
  helpText,
}: {
  label: string;
  type?: "text" | "password";
  placeholder: string;
  helpText: string;
}): JSX.Element => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-xs font-semibold text-font-subtle">
      {label}
      <InfoButton title={helpText} />
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded border border-border-input bg-background-input px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest hover:border-border-input focus:border-border-focused focus:outline-none"
      aria-label={label}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddNewDesignCollapsed, setIsAddNewDesignCollapsed] = useState(false);

  const actionButtonClassName =
    "flex-1 rounded bg-background-brand-bold px-4 py-2 text-xs font-semibold text-font-subtle hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

  return (
    <div className="w-64 rounded bg-background-neutral p-5">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-font-subtle">
          UI magician Agent
        </h1>
        <button
          className="text-font-subtlest transition-colors hover:text-font-subtle"
          aria-label="Settings menu"
        >
          ⚙
        </button>
      </div>

      {/* Collapsible Description Section */}
      <div className="mb-6 space-y-2">
        <CollapsibleButton
          isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(!isCollapsed)}
          label="From entire frame to a singl..."
        />
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 space-y-4">
        <CollapsibleButton
          isCollapsed={isAddNewDesignCollapsed}
          onClick={() => setIsAddNewDesignCollapsed(!isAddNewDesignCollapsed)}
          label="Add New Design"
          isBold
        />

        {!isAddNewDesignCollapsed && (
          <div className="space-y-4">
            {/* Personal Access Token Field */}
            <FormField
              label="Personal Access Token"
              type="password"
              placeholder="figd_xxxxxxxxxxxxxx"
              helpText="Enter your Figma personal access token for authentication"
            />

            {/* Design URL Field */}
            <FormField
              label="Design URL"
              type="text"
              placeholder="https://www.figma.com/file/:"
              helpText="Provide the URL of your Figma design file"
            />

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button className={actionButtonClassName}>Awesome</button>
              <button className={actionButtonClassName}>Prepare</button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="text-xs font-semibold text-font-subtle">
        Recent Breakdowns
      </div>

      {/* Footer Section */}
      {/* Using semantic border token instead of hardcoded gray */}
      <div className="mt-3 border-t border-border pt-3 text-center text-xs text-font-subtle">
        © AutonomyAI
      </div>
    </div>
  );
};
