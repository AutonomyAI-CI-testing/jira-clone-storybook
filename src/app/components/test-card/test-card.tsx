import { useState } from "react";
import cx from "classix";

// SVG icon for settings button in header
const SettingsIcon = (): JSX.Element => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// SVG icon for collapsible section headers (rotates when expanded)
const ChevronIcon = ({ isOpen }: { isOpen: boolean }): JSX.Element => (
  <svg
    className={cx("h-4 w-4 transition-transform", isOpen && "rotate-90")}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// SVG icon for info buttons
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Reusable info/help icon button component
const InfoButton = ({
  label,
  title,
}: {
  label: string;
  title: string;
}): JSX.Element => (
  <button
    className={cx(
      "flex cursor-pointer items-center justify-center",
      "text-color-icon-subtle hover:text-color-icon",
      "focus-visible:outline focus-visible:outline-2",
      "focus-visible:outline-color-border-brand"
    )}
    type="button"
    aria-label={label}
    title={title}
  >
    <InfoIcon />
  </button>
);

// Reusable collapsible section header button
const CollapsibleButton = ({
  isOpen,
  onToggle,
  label,
}: {
  isOpen: boolean;
  onToggle: () => void;
  label: string;
}): JSX.Element => (
  <div className="mb-4">
    <button
      className={cx(
        "flex w-full items-center gap-2",
        "cursor-pointer rounded px-2 py-2",
        "text-color-font text-sm font-medium",
        "hover:bg-color-background-neutral",
        "focus-visible:outline focus-visible:outline-2",
        "focus-visible:outline-color-border-brand"
      )}
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <ChevronIcon isOpen={isOpen} />
      <span>{label}</span>
    </button>
  </div>
);

export const TestCard = (): JSX.Element => {
  const [fromFrameOpen, setFromFrameOpen] = useState(true);
  const [addDesignOpen, setAddDesignOpen] = useState(true);

  return (
    <div
      className={cx(
        "border-color-border w-full max-w-xs rounded-lg border",
        "bg-color-elevation-surface-sunken p-5"
      )}
    >
      {/* Header with title and settings button */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-color-font text-sm font-semibold">
          UI magician Agent
        </h2>
        <button
          className={cx(
            "flex cursor-pointer items-center justify-center",
            "text-color-icon hover:text-color-icon-brand",
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-color-border-brand"
          )}
          type="button"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible sections for configuration options */}
      <CollapsibleButton
        isOpen={fromFrameOpen}
        onToggle={() => setFromFrameOpen(!fromFrameOpen)}
        label="From entire frame to a singl..."
      />
      <CollapsibleButton
        isOpen={addDesignOpen}
        onToggle={() => setAddDesignOpen(!addDesignOpen)}
        label="Add New Design"
      />

      {/* Divider */}
      <div className="bg-color-border mb-4 h-px" />

      {/* Configuration input fields */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-1">
          <label
            htmlFor="personal-token"
            className="text-color-font-subtle text-xs font-medium"
          >
            Personal Access Token
          </label>
          <InfoButton
            label="Info"
            title="Figma personal access token for authentication"
          />
        </div>
        <input
          id="personal-token"
          type="password"
          placeholder="Enter your token"
          className={cx(
            "border-color-border w-full rounded border",
            "bg-color-background-input px-3 py-2",
            "text-color-font placeholder-color-font-subtlest text-xs",
            "hover:bg-color-background-input-hovered",
            "focus-visible:bg-color-background-input-pressed",
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-color-border-brand"
          )}
        />
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-center gap-1">
          <label
            htmlFor="design-url"
            className="text-color-font-subtle text-xs font-medium"
          >
            Design URL
          </label>
          <InfoButton label="Info" title="URL to your Figma design file" />
        </div>
        <input
          id="design-url"
          type="url"
          placeholder="https://figma.com/file/..."
          className={cx(
            "border-color-border w-full rounded border",
            "bg-color-background-input px-3 py-2",
            "text-color-font placeholder-color-font-subtlest text-xs",
            "hover:bg-color-background-input-hovered",
            "focus-visible:bg-color-background-input-pressed",
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-color-border-brand"
          )}
        />
      </div>

      {/* Action buttons: secondary "Awesome" and primary "Prepare" */}
      <div className="mb-4 flex gap-2">
        <button
          className={cx(
            "flex-1 rounded px-3 py-2",
            "text-color-font-subtle text-xs font-medium",
            "bg-color-background-neutral",
            "hover:bg-color-background-neutral-hovered",
            "active:bg-color-background-neutral-pressed",
            "cursor-pointer",
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-color-border-brand"
          )}
          type="button"
        >
          Awesome
        </button>
        <button
          className={cx(
            "flex-1 rounded px-3 py-2",
            "text-color-font-inverse text-xs font-medium",
            "bg-color-background-brand-bold",
            "hover:bg-color-background-brand-bold-hovered",
            "active:bg-color-background-brand-bold-pressed",
            "cursor-pointer",
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-color-border-brand"
          )}
          type="button"
        >
          Prepare
        </button>
      </div>

      {/* Recent breakdowns section */}
      <div>
        <h3 className="text-color-font-subtle text-xs font-semibold">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-color-border text-color-font-subtle mt-4 border-t pt-3 text-center text-xs">
        © AutonomyAI
      </div>
    </div>
  );
};
