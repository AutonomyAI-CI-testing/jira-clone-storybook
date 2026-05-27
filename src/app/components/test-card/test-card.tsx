import cx from "classix";

// Shared color and styling constants for consistency
const COLORS = {
  text: {
    primary: "text-[#b5b5b5]",
    secondary: "text-[#a4a4a3]",
    muted: "text-[#a3a3a2]",
    input: "text-[#737470]",
    inputPlaceholder: "placeholder-[#6a6a67]",
  },
  bg: {
    card: "bg-black",
    input: "bg-[#1a1a19]",
    button: "bg-[#9d5a3c]",
    buttonHover: "hover:bg-[#a86543]",
    buttonActive: "active:bg-[#8f4f34]",
  },
  border: {
    input: "border-[#3a3a39]",
    inputFocus: "focus:ring-[#5a5a57]",
  },
};

// Shared typography classes
const TEXT_STYLES = {
  heading: "text-[13.5px] font-bold leading-[16.34px]",
  label: "text-[11.5px] font-bold leading-[13.92px]",
  body: "text-[11.5px] font-bold leading-[13.92px]",
};

// Shared input styling
const INPUT_CLASSES = `rounded border ${COLORS.border.input} ${COLORS.bg.input} px-3 py-2.5 ${TEXT_STYLES.label} ${COLORS.text.input} ${COLORS.text.inputPlaceholder} focus:outline-none focus:ring-1 ${COLORS.border.inputFocus}`;

// Shared button styling for action buttons
const ACTION_BUTTON_CLASSES = cx(
  `flex-1 rounded px-3 py-4 ${TEXT_STYLES.label} text-white transition-colors`,
  `${COLORS.bg.button} ${COLORS.bg.buttonHover} ${COLORS.bg.buttonActive}`
);

/**
 * TestCard Component
 *
 * A UI component representing a card for the "UI magician Agent".
 * Displays agent information, collapsible sections, a form for Figma design inputs,
 * and action buttons. Uses dark theme styling with muted color palette.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className={`w-[254px] ${COLORS.bg.card} p-5`}>
      {/* Header with agent name and menu button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className={`${TEXT_STYLES.heading} ${COLORS.text.primary}`}>
          UI magician Agent
        </h1>
        <button
          className={`flex items-center justify-center ${COLORS.text.primary} hover:text-[#c0c0c0]`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-label="Menu options"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      {/* Collapsible section indicator with truncated text */}
      <div className="mb-6 flex items-center gap-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={COLORS.text.primary}
          aria-hidden="true"
        >
          <polyline points="3 9 6 6 9 9" />
        </svg>
        <span className={`${TEXT_STYLES.label} ${COLORS.text.primary}`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* "Add New Design" section header */}
      <div className="mb-6 flex items-center gap-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={COLORS.text.secondary}
          aria-hidden="true"
        >
          <polyline points="3 3 6 6 9 3" />
        </svg>
        <h2 className={`${TEXT_STYLES.label} ${COLORS.text.secondary}`}>
          Add New Design
        </h2>
      </div>

      {/* Form section: Personal Access Token and Design URL inputs */}
      <div className="mb-6 space-y-5">
        {/* Personal Access Token input field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <label className={`${TEXT_STYLES.label} ${COLORS.text.primary}`}>
              Personal Access Token
            </label>
            <button
              className={`flex items-center justify-center ${COLORS.text.muted}`}
              aria-label="Info about Personal Access Token"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={INPUT_CLASSES}
            aria-label="Personal Access Token input"
          />
        </div>

        {/* Design URL input field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <label className={`${TEXT_STYLES.label} ${COLORS.text.primary}`}>
              Design URL
            </label>
            <button
              className={`flex items-center justify-center ${COLORS.text.muted}`}
              aria-label="Info about Design URL"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={INPUT_CLASSES}
            aria-label="Design URL input"
          />
        </div>
      </div>

      {/* Primary action buttons */}
      <div className="mb-6 flex gap-3">
        <button className={ACTION_BUTTON_CLASSES}>Awesome</button>
        <button className={ACTION_BUTTON_CLASSES}>Prepare</button>
      </div>

      {/* Recent Breakdowns section header */}
      <div className={`${TEXT_STYLES.label} ${COLORS.text.primary}`}>
        Recent Breakdowns
      </div>

      {/* Footer with copyright information */}
      <div
        className={`border-gray-300 mt-6 border-t pt-3 text-center ${TEXT_STYLES.label} ${COLORS.text.primary}`}
      >
        © AutonomyAI
      </div>
    </div>
  );
};
