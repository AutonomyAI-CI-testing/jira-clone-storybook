import React from "react";

// Chevron icon used in collapsible sections
const ChevronIcon = () => (
  <svg
    className="text-gray-400 h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M9 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Form input styling — ensures consistent appearance across token and design URL fields
const INPUT_CLASS =
  "w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600";

/**
 * TestCard Component
 * A self-contained smoke test component that renders a static UI card
 * showing a form interface for the UI magician Agent.
 *
 * No props required - renders static content only.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="text-gray-300 max-w-md rounded bg-black p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-gray-200 text-sm font-semibold">
          UI magician Agent
        </h1>
        <button className="text-gray-400 hover:text-gray-300">
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

      {/* Collapsible Section 1 */}
      <div className="border-gray-700 border-b py-3">
        <div className="flex cursor-pointer items-center gap-2">
          <ChevronIcon />
          <span className="text-gray-400 text-xs">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Expandable Section */}
      <div className="border-gray-700 border-b py-3">
        <div className="flex cursor-pointer items-center gap-2">
          <ChevronIcon />
          <span className="text-gray-400 text-xs">Add New Design</span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-3 py-4">
        {/* Personal Access Token Input */}
        <div>
          <label className="text-gray-400 mb-1 block text-xs">
            Personal Access Token
          </label>
          <input
            type="password"
            placeholder="Paste your token here"
            className={INPUT_CLASS}
          />
        </div>

        {/* Design URL Input */}
        <div>
          <label className="text-gray-400 mb-1 block text-xs">Design URL</label>
          <input
            type="text"
            placeholder="Paste your Figma design URL"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-gray-700 flex gap-2 border-t py-3">
        <button className="bg-amber-700 hover:bg-amber-600 text-gray-100 flex-1 rounded px-3 py-2 text-xs font-semibold transition">
          Awesome
        </button>
        <button className="bg-amber-700 hover:bg-amber-600 text-gray-100 flex-1 rounded px-3 py-2 text-xs font-semibold transition">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="border-gray-700 border-t pt-4">
        <h2 className="text-gray-300 text-xs font-semibold">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
