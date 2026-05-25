import { useState } from "react";
import cx from "classix";

// Icon SVG for the menu button in the header
const MenuIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path
      d="M12 2a1.5 1.5 0 0 0-1.5 1.5h3A1.5 1.5 0 0 0 12 2zm0 18a1.5 1.5 0 0 0 1.5-1.5h-3A1.5 1.5 0 0 0 12 20zm6-10a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 18 12zM6 12a1.5 1.5 0 0 0-1.5-1.5v3A1.5 1.5 0 0 0 6 12z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chevron icon used for collapsible sections - rotates when expanded
const ChevronIcon = ({ expanded }: { expanded: boolean }): JSX.Element => (
  <svg
    className={cx("transition-transform", expanded && "rotate-180")}
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Info icon shown next to form field labels
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-font-subtle"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" />
    <text x="10" y="12" textAnchor="middle" fontSize="12" fill="currentColor">
      i
    </text>
  </svg>
);

// Reusable button styling for action buttons
const BUTTON_STYLE_PRIMARY =
  "flex-1 rounded bg-background-warning-bold px-4 py-2 text-sm font-semibold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";

// Input field styling shared by token and URL fields
const INPUT_STYLE =
  "w-full border border-border bg-background-input px-3 py-2 text-sm text-font-subtlest placeholder-font-subtlest outline-none hover:border-border-bold focus:border-border-bold";

export const TestCard = (): JSX.Element => {
  // Tracks whether each collapsible section is open or closed
  const [section1Expanded, setSection1Expanded] = useState(true);
  const [section2Expanded, setSection2Expanded] = useState(true);

  return (
    <div className="w-full max-w-sm bg-elevation-surface p-6 text-font-subtle">
      {/* Header with title and menu button */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-base font-semibold text-font">
          UI magician Agent
        </h1>
        <button type="button" aria-label="Menu" className="text-font-subtle hover:text-font">
          <MenuIcon />
        </button>
      </div>

      {/* Section 1: Collapsible section for previous task */}
      <div className="mb-8">
        <button
          type="button"
          onClick={() => setSection1Expanded(!section1Expanded)}
          className="flex items-center gap-2 text-left text-sm font-semibold text-font-subtle hover:text-font"
        >
          <div className="h-4 w-4">
            <ChevronIcon expanded={section1Expanded} />
          </div>
          From entire frame to a singl...
        </button>
      </div>

      {/* Section 2: Collapsible form for adding new design with Figma token */}
      <div className="mb-8">
        <button
          type="button"
          onClick={() => setSection2Expanded(!section2Expanded)}
          className="flex items-center gap-2 text-left text-base font-semibold text-font hover:text-font"
        >
          <div className="h-5 w-5">
            <ChevronIcon expanded={section2Expanded} />
          </div>
          Add New Design
        </button>
      </div>

      {section2Expanded && (
        <>
          {/* Personal Access Token Field */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm font-semibold text-font">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={INPUT_STYLE}
            />
          </div>

          {/* Design URL Field */}
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm font-semibold text-font">
                Design URL
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className={INPUT_STYLE}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button type="button" className={BUTTON_STYLE_PRIMARY}>
              Awesome
            </button>
            <button type="button" className={BUTTON_STYLE_PRIMARY}>
              Prepare
            </button>
          </div>
        </>
      )}

      {/* Recent Breakdowns Section */}
      <div className="mt-12 text-base font-semibold text-font">
        Recent Breakdowns
      </div>

      {/* Footer */}
      <div className="border-t border-border pt-3 text-center text-xs text-font-subtle">
        © AutonomyAI
      </div>
    </div>
  );
};
