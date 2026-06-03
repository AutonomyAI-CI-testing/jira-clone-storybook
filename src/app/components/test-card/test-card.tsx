import { useState } from "react";

// Color palette - extracted for maintainability
const COLORS = {
  background: "#000000",
  headerText: "#b5b5b5",
  sectionLabel: "#8b9291",
  addNewDesignLabel: "#b2b2b1",
  fieldLabel: "#a4a4a3",
  inputBackground: "#272822",
  inputTextPrimary: "#737470",
  inputTextSecondary: "#71726e",
  inputBorderPrimary: "#929291",
  inputBorderSecondary: "#a5adad",
  buttonBackground: "#843a17",
  buttonHoverBackground: "#9e4620",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
};

const FONT_SIZES = {
  headerSize: "13.5px",
  sectionSize: "11.5px",
  addNewDesignSize: "13.5px",
  inputSize: "10.5px",
  buttonSize: "11.5px",
};

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);
  // Placeholder token and URL for demonstration purposes - will be replaced with actual values
  const [personalAccessToken, setPersonalAccessToken] = useState(
    "figd_xxxxxxxxxxxxxxxxxx"
  );
  const [designUrl, setDesignUrl] = useState("https://www.figma.com/file/:");

  return (
    <div
      id="testElem"
      className="min-h-screen bg-black p-6"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-sm space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1
            className="text-base font-semibold"
            style={{ color: COLORS.headerText, fontSize: FONT_SIZES.headerSize }}
          >
            UI magician Agent
          </h1>
          <button
            className="flex h-6 w-6 items-center justify-center"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>
        </div>

        {/* Collapsible Section 1 */}
        <div className="space-y-2">
          <button
            onClick={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: COLORS.sectionLabel, fontSize: FONT_SIZES.sectionSize }}
          >
            {isFirstSectionOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            <span className="truncate">From entire frame to a singl...</span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="space-y-2">
          <button
            onClick={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
            className="flex items-center gap-2 text-base font-semibold"
            style={{ color: COLORS.addNewDesignLabel, fontSize: FONT_SIZES.addNewDesignSize }}
          >
            {isAddNewDesignOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            <span>Add New Design</span>
          </button>
        </div>

        {isAddNewDesignOpen && (
          <div className="space-y-6">
            {/* Personal Access Token Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label
                  className="font-semibold"
                  style={{ color: COLORS.fieldLabel, fontSize: FONT_SIZES.sectionSize }}
                >
                  Personal Access Token
                </label>
                <button
                  className="flex h-4 w-4 items-center justify-center"
                  aria-label="Info"
                >
                  <InfoIcon />
                </button>
              </div>
              <input
                type="text"
                value={personalAccessToken}
                onChange={(e) => setPersonalAccessToken(e.target.value)}
                className="w-full px-3 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: COLORS.inputBackground,
                  color: COLORS.inputTextPrimary,
                  border: `2px solid ${COLORS.inputBorderPrimary}`,
                  fontSize: FONT_SIZES.inputSize,
                }}
              />
            </div>

            {/* Design URL Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label
                  className="font-semibold"
                  style={{ color: COLORS.fieldLabel, fontSize: FONT_SIZES.sectionSize }}
                >
                  Design URL
                </label>
                <button
                  className="flex h-4 w-4 items-center justify-center"
                  aria-label="Info"
                >
                  <InfoIcon />
                </button>
              </div>
              <input
                type="text"
                value={designUrl}
                onChange={(e) => setDesignUrl(e.target.value)}
                className="w-full px-3 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: COLORS.inputBackground,
                  color: COLORS.inputTextSecondary,
                  border: `1px solid ${COLORS.inputBorderSecondary}`,
                  fontSize: FONT_SIZES.inputSize,
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <ActionButton label="Awesome" />
              <ActionButton label="Prepare" />
            </div>
          </div>
        )}

        {/* Recent Breakdowns Section */}
        <div>
          <h2
            className="text-base font-semibold"
            style={{ color: COLORS.recentBreakdownsText, fontSize: FONT_SIZES.headerSize }}
          >
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

/**
 * ActionButton Component
 * Reusable button with consistent hover interaction for the design form.
 * Uses inline style updates for visual feedback to match the existing design system.
 */
function ActionButton({ label }: { label: string }): JSX.Element {
  return (
    <button
      className="flex-1 rounded py-2 px-4 font-semibold transition-colors"
      style={{
        backgroundColor: COLORS.buttonBackground,
        color: COLORS.buttonText,
        fontSize: FONT_SIZES.buttonSize,
        borderRadius: "4px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.buttonHoverBackground;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.buttonBackground;
      }}
    >
      {label}
    </button>
  );
}

/**
 * Icon Components
 * Inline SVG icons used throughout the UI for collapsible sections and actions.
 * Rendered as small decorative elements that inherit text color.
 */

function ChevronUpIcon(): JSX.Element {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4l3-3 3 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(): JSX.Element {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon(): JSX.Element {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <text
        x="7.5"
        y="9.5"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        fontWeight="bold"
      >
        i
      </text>
    </svg>
  );
}

function SettingsIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
      <line
        x1="8"
        y1="1.5"
        x2="8"
        y2="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="13"
        x2="8"
        y2="14.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="14.5"
        y1="8"
        x2="13"
        y2="8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="8"
        x2="1.5"
        y2="8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}


