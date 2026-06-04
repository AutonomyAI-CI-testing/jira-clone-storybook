import { useState } from "react";

// SVG icon paths from Heroicons (MIT licensed)
const SETTINGS_ICON_PATH =
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z";
const SETTINGS_ICON_CIRCLE_PATH = "M15 12a3 3 0 11-6 0 3 3 0 016 0z";
const CHEVRON_DOWN_ICON_PATH = "M19 14l-7 7m0 0l-7-7m7 7V3";
const ARROW_RIGHT_ICON_PATH = "M9 5l7 7-7 7";
const INFO_ICON_PATH =
  "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

// Input field styling constants
const INPUT_CLASS =
  "w-full rounded border border-neutral-700 bg-neutral-800 px-3 py-2 text-xs text-neutral-400 placeholder-neutral-600 focus:border-neutral-600 focus:outline-none";
const ACTION_BUTTON_CLASS =
  "flex-1 rounded bg-neutral-700 px-4 py-2 text-xs font-semibold text-neutral-400 hover:bg-neutral-600 active:bg-neutral-800";
const SMALL_ICON_BUTTON_CLASS = "p-0.5 hover:bg-neutral-800";
const LARGE_ICON_BUTTON_CLASS = "p-1 hover:bg-neutral-800";

export const TestCard = () => {
  const [tokenValue, setTokenValue] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      id="testElem"
      className="border-neutral-700 bg-neutral-900 w-full max-w-md rounded-lg border p-6"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-neutral-400 text-base font-semibold">
          UI magician Agent
        </h1>
        <button className={LARGE_ICON_BUTTON_CLASS} aria-label="Settings">
          <svg
            className="text-neutral-400 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={SETTINGS_ICON_PATH}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={SETTINGS_ICON_CIRCLE_PATH}
            />
          </svg>
        </button>
      </div>

      {/* Collapsible Section */}
      <button
        className="mb-6 w-full cursor-pointer text-left focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label="Toggle content"
      >
        <div className="flex items-center gap-2">
          <svg
            className={`text-neutral-500 h-4 w-4 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={CHEVRON_DOWN_ICON_PATH}
            />
          </svg>
          <span className="text-neutral-500 text-sm font-semibold">
            From entire frame to a singl...
          </span>
        </div>
      </button>

      {/* Add New Design Section */}
      <button
        className="hover:bg-neutral-800 mb-6 flex w-full items-center gap-2 p-3 focus:outline-none"
        aria-label="Add New Design"
      >
        <svg
          className="text-neutral-500 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={ARROW_RIGHT_ICON_PATH}
          />
        </svg>
        <span className="text-neutral-500 text-xs font-semibold">
          Add New Design
        </span>
      </button>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-neutral-400 text-xs font-semibold">
            Personal Access Token
          </label>
          {/* Info Icon */}
          <button
            className={SMALL_ICON_BUTTON_CLASS}
            aria-label="More information"
          >
            <svg
              className="text-neutral-500 h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={INFO_ICON_PATH}
              />
            </svg>
          </button>
        </div>
        <input
          type="password"
          placeholder="Enter token"
          value={tokenValue}
          onChange={(e) => setTokenValue(e.target.value)}
          className={INPUT_CLASS}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-neutral-400 text-xs font-semibold">
            Design URL
          </label>
          {/* Info Icon */}
          <button
            className={SMALL_ICON_BUTTON_CLASS}
            aria-label="More information"
          >
            <svg
              className="text-neutral-500 h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={INFO_ICON_PATH}
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter URL"
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          className={INPUT_CLASS}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <button className={ACTION_BUTTON_CLASS}>Awesome</button>
        <button className={ACTION_BUTTON_CLASS}>Prepare</button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="border-neutral-700 border-t pt-4">
        <h2 className="text-neutral-400 text-xs font-semibold">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
