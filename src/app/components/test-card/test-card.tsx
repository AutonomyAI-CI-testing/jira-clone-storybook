import { useState } from "react";
import cx from "classix";

// Color constants for the dark-themed card
const COLORS = {
  headerText: "#b5b5b5",
  sectionTitle: "#b2b2b1",
  labelText: "#a4a4a3",
  labelTextAlt: "#a3a3a2",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  inputBorder: "#929291",
  collapsibleText: "#8b9291",
  inputBackground: "#272822",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
  footerBorder: "#d1d5db",
  footerText: "#9ca3af",
};

// Shared input styling for consistent appearance
const INPUT_BASE_CLASSES = "w-full rounded border px-3 py-2 text-[10.5px] font-semibold leading-[12.71px] bg-[#272822] hover:bg-opacity-80 focus:outline-2 focus:outline-blue-500 placeholder-gray-600";

const INPUT_STYLE = {
  borderColor: COLORS.inputBorder,
  borderWidth: "1px",
};

// Action buttons use consistent styling with dark theme
const BUTTON_STYLE = {
  backgroundColor: COLORS.buttonBackground,
  color: COLORS.buttonText,
};

const BUTTON_CLASSES = "flex flex-1 items-center justify-center rounded py-2 text-[11.5px] font-semibold leading-[13.92px] hover:opacity-90 active:opacity-75 focus-visible:outline-2 focus-visible:outline-blue-500";

export const TestCard = (): JSX.Element => {
  // Form input state for Figma token and URL
  const [tokenValue, setTokenValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  return (
    <div className="w-[254px] bg-black p-5 text-sm font-semibold">
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px]" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center rounded hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          aria-label="Settings"
        >
          {/* Settings gear icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
          </svg>
        </button>
      </div>

      {/* Collapsible section indicator for current task */}
      <div className="mb-8 flex items-center gap-3">
        <span
          className="flex h-4 w-4 items-center justify-center text-xs"
          style={{ color: COLORS.headerText }}
          role="img"
          aria-label="Expandable section"
        >
          ^
        </span>
        <p
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: COLORS.collapsibleText }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="mb-6 flex items-center gap-3">
        <span
          className="flex h-4 w-4 items-center justify-center text-xs"
          style={{ color: COLORS.sectionTitle }}
          role="img"
          aria-label="Expandable section"
        >
          ^
        </span>
        <h2
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.sectionTitle }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input section */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-[11.5px] font-semibold leading-[13.92px]"
            htmlFor="token-input"
            style={{ color: COLORS.labelText }}
          >
            Personal Access Token
          </label>
          <button
            className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-xs text-gray-400 hover:border-gray-500 hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-blue-500"
            aria-label="Information about Personal Access Token"
            type="button"
          >
            i
          </button>
        </div>
        <input
          id="token-input"
          type="text"
          value={tokenValue}
          onChange={(e) => setTokenValue(e.target.value)}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(INPUT_BASE_CLASSES)}
          style={{
            color: COLORS.inputText,
            ...INPUT_STYLE,
          }}
        />
      </div>

      {/* Design URL input section */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-[11.5px] font-semibold leading-[13.92px]"
            htmlFor="url-input"
            style={{ color: COLORS.labelTextAlt }}
          >
            Design URL
          </label>
          <button
            className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-xs text-gray-400 hover:border-gray-500 hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-blue-500"
            aria-label="Information about Design URL"
            type="button"
          >
            i
          </button>
        </div>
        <input
          id="url-input"
          type="text"
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          placeholder="https://www.figma.com/file/:"
          className={cx(INPUT_BASE_CLASSES)}
          style={{
            color: COLORS.inputTextAlt,
            ...INPUT_STYLE,
          }}
        />
      </div>

      {/* Action buttons for form submission and additional actions */}
      <div className="mb-8 flex gap-3">
        <button
          type="button"
          className={BUTTON_CLASSES}
          style={BUTTON_STYLE}
        >
          Awesome
        </button>
        <button
          type="button"
          className={BUTTON_CLASSES}
          style={BUTTON_STYLE}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h3
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: COLORS.recentBreakdownsText }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright attribution */}
      <div className="border-t pt-3 text-center" style={{ borderColor: COLORS.footerBorder }}>
        <p className="text-xs" style={{ color: COLORS.footerText }}>© AutonomyAI</p>
      </div>
    </div>
  );
};
