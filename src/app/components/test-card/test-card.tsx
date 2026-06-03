import { useState } from "react";
import cx from "classix";

// Button color states for the action buttons
const BUTTON_COLORS = {
  base: "#9f6b4d",
  hover: "#a87a5c",
  active: "#8f5b3d",
} as const;

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-full max-w-xl rounded-lg bg-black p-5 text-font-subtlest"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xs font-semibold text-font-subtle">
          UI magician Agent
        </h1>
        <button
          className="inline-flex h-6 w-6 items-center justify-center
            rounded hover:bg-background-neutral"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-4 border-b border-border pb-4">
        <button
          onClick={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
          className="flex w-full items-center gap-2 py-2 text-xs font-semibold
            text-font-subtle hover:bg-background-neutral-hovered"
        >
          <ChevronIcon open={isFirstSectionOpen} />
          <span>From entire frame to a singl...</span>
        </button>
        {isFirstSectionOpen && (
          <div className="mt-2 text-xs text-font-subtlest">
            <p>Collapsible content goes here</p>
          </div>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-4 border-b border-border pb-4">
        <button
          onClick={() => setIsAddDesignOpen(!isAddDesignOpen)}
          className="flex w-full items-center gap-2 py-2 text-xs
            font-semibold text-font-subtle hover:bg-background-neutral-hovered"
        >
          <ChevronIcon open={isAddDesignOpen} />
          <span>Add New Design</span>
        </button>
      </div>

      {/* Form Section */}
      <div className="mb-4 space-y-4">
        {/* Personal Access Token */}
        <div>
          <label
            className="mb-1 flex items-center gap-1 text-xs
            text-font-subtle"
          >
            <span>Personal Access Token</span>
            <InfoIcon />
          </label>
          <input
            type="password"
            placeholder="••••••••••••••••"
            className="w-full rounded border border-border bg-background-input
              px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest
              focus:outline-none focus:ring-1 focus:ring-border-input"
          />
        </div>

        {/* Design URL */}
        <div>
          <label
            className="mb-1 flex items-center gap-1 text-xs
            text-font-subtle"
          >
            <span>Design URL</span>
            <InfoIcon />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/..."
            className="w-full rounded border border-border bg-background-input
              px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest
              focus:outline-none focus:ring-1 focus:ring-border-input"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex gap-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-xs font-semibold text-font-subtle">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

// Shared SVG Icon Components
// These icons are used in headers and buttons throughout the card interface

const ChevronIcon = ({ open }: { open: boolean }): JSX.Element => (
  <svg
    className={cx(
      "h-4 w-4 transition-transform",
      open ? "rotate-0" : "-rotate-90"
    )}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724
        1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724
        1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724
        1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724
        1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724
        1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724
        1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724
        1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608
        2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1
        1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

// Reusable action button component with consistent styling
const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    className={cx(
      "flex-1 rounded px-4 py-2 text-xs font-semibold text-font-subtle",
      "transition-colors",
      `bg-[${BUTTON_COLORS.base}] hover:bg-[${BUTTON_COLORS.hover}] active:bg-[${BUTTON_COLORS.active}]`
    )}
  >
    {children}
  </button>
);
