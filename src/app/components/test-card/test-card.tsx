import React from "react";

// Color palette for the component - using CSS variables for dark theme
const INPUT_STYLE = {
  backgroundColor: "var(--DarkNeutral200)",
  color: "var(--DarkNeutral700)",
} as const;

// Button styling - warm brown tones matching the design system
const BUTTON_BASE_COLOR = "#8B4726";
const BUTTON_HOVER_COLOR = "#6B3520";
const BUTTON_TEXT_COLOR = "#C4A591";

const BUTTON_STYLE = {
  backgroundColor: BUTTON_BASE_COLOR,
  color: BUTTON_TEXT_COLOR,
} as const;

// Helper function to handle button hover state changes
const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = BUTTON_HOVER_COLOR;
};

const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = BUTTON_BASE_COLOR;
};

// Reusable button component to reduce duplication
const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    className="flex-1 rounded-md px-8 py-3 text-xs font-semibold transition"
    style={BUTTON_STYLE}
    onMouseEnter={handleButtonMouseEnter}
    onMouseLeave={handleButtonMouseLeave}
  >
    {label}
  </button>
);

// Reusable input field component for readonly token/URL fields
const ReadOnlyInput = ({
  type,
  placeholder,
  label,
}: {
  type: string;
  placeholder: string;
  label: string;
}): JSX.Element => (
  <div className="mb-6">
    <label className="mb-3 flex items-center gap-2 text-xs text-font-subtle">
      {label}
      <span className="inline-flex text-xs">i</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-border px-3 py-3 text-xs outline-none"
      style={INPUT_STYLE}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="dark min-h-screen bg-elevation-surface-sunken p-6 font-semibold">
      <div className="mx-auto max-w-md">
        {/* Header with title and settings button */}
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-sm tracking-tight text-font-subtlest">
            UI magician Agent
          </h1>
          <button
            className="text-gray-300 flex h-5 w-5 items-center justify-center text-lg"
            aria-label="Settings"
          >
            ⚙
          </button>
        </div>

        {/* Collapsible section showing a truncated project name */}
        <div className="mb-16 flex items-center gap-2">
          <span className="text-sm text-font-subtle">▲</span>
          <span className="text-xs text-font-subtle">
            From entire frame to a singl...
          </span>
        </div>

        {/* Section header for adding new design configurations */}
        <div className="mb-12 flex items-center gap-2">
          <span className="text-sm text-font-subtlest">▲</span>
          <h2 className="text-sm text-font-subtlest">Add New Design</h2>
        </div>

        {/* Personal Access Token field - readonly display of masked token */}
        <ReadOnlyInput
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          label="Personal Access Token"
        />

        {/* Design URL field - readonly display of Figma file URL */}
        <ReadOnlyInput
          type="text"
          placeholder="https://www.figma.com/file/:"
          label="Design URL"
        />

        {/* Action buttons for design operations */}
        <div className="mb-16 flex gap-4">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>

        {/* Recent breakdowns section header */}
        <div className="text-sm text-font-subtlest">Recent Breakdowns</div>

        {/* Footer with copyright */}
        <div className="mt-16 border-t border-border pt-3 text-center text-xs text-font-subtle">
          © AutonomyAI
        </div>
      </div>
    </div>
  );
};
