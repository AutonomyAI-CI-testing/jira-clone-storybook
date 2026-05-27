import { useState } from "react";
import cx from "classix";

// Color constants for button states
const BUTTON_BASE_BG = "#843a17";
const BUTTON_HOVER_BG = "#6f3010";
const BUTTON_ACTIVE_BG = "#5a2609";
const BUTTON_TEXT_COLOR = "#8c8078";
const INPUT_BG = "#1a1a1a";

export const TestCard = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("");

  const handleAwesomeClick = () => {
    // Handle awesome click action
  };

  const handlePrepareClick = () => {
    // Handle prepare click action
  };

  return (
    <div className="w-64 rounded-[4px] bg-black p-5">
      {/* Header Section */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-primary-bold text-sm text-font-subtle">
          UI magician Agent
        </h2>
        <button
          aria-label="Settings"
          className="flex h-5 w-5 items-center justify-center rounded hover:bg-background-neutral-hovered"
        >
          <svg
            className="h-4 w-4 text-font-subtlest"
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
        </button>
      </div>

      {/* Collapsible Row */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-5 flex w-full items-center gap-2 text-sm text-font-subtlest hover:text-font-subtle"
      >
        <svg
          className={cx(
            "h-4 w-4 transition-transform text-font-subtlest",
            isCollapsed && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className="truncate text-left">
          From entire frame to a singl...
        </span>
      </button>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center gap-2">
        <svg
          className="h-4 w-4 text-font-subtlest"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <h3 className="font-primary-bold text-sm text-font-subtle">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label className="mb-2 flex items-center gap-1 text-xs text-font-subtlest">
          Personal Access Token
          <svg className="h-3 w-3 text-font-subtlest" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </label>
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            `w-full rounded border-[1px] border-input px-3 py-2 bg-[${INPUT_BG}]`,
            "text-xs text-font-subtle placeholder:text-font-subtlest",
            "focus-visible:border-border-input focus-visible:outline-none"
          )}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-1 text-xs text-font-subtlest">
          Design URL
          <svg className="h-3 w-3 text-font-subtlest" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.figma.com/file/:"
          className={cx(
            `w-full rounded border-[1px] border-input px-3 py-2 bg-[${INPUT_BG}]`,
            "text-xs text-font-subtle placeholder:text-font-subtlest",
            "focus-visible:border-border-input focus-visible:outline-none"
          )}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex gap-3">
        <button
          onClick={handleAwesomeClick}
          className={cx(
            "flex-1 rounded-[4px] border-none py-2 px-3",
            `font-primary-bold text-xs text-[${BUTTON_TEXT_COLOR}]`,
            `bg-[${BUTTON_BASE_BG}] hover:bg-[${BUTTON_HOVER_BG}] active:bg-[${BUTTON_ACTIVE_BG}]`,
            "cursor-pointer transition-colors focus-visible:outline-border-input"
          )}
        >
          Awesome
        </button>
        <button
          onClick={handlePrepareClick}
          className={cx(
            "flex-1 rounded-[4px] border-none py-2 px-3",
            `font-primary-bold text-xs text-[${BUTTON_TEXT_COLOR}]`,
            `bg-[${BUTTON_BASE_BG}] hover:bg-[${BUTTON_HOVER_BG}] active:bg-[${BUTTON_ACTIVE_BG}]`,
            "cursor-pointer transition-colors focus-visible:outline-border-input"
          )}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h4 className="text-xs font-semibold text-font-subtlest">
          Recent Breakdowns
        </h4>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-300 pt-3">
        <p className="text-center text-xs text-font-subtle">© AutonomyAI</p>
      </div>
    </div>
  );
};
