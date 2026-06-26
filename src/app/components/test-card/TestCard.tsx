import React from "react";

/**
 * TestCard component
 * 
 * A static, self-contained component that replicates a UI tool panel design.
 * Primarily used as a smoke test for Tailwind CSS rendering and custom colors.
 * 
 * Design details:
 * - Uses specific Figma-exact hex colors via Tailwind arbitrary values
 * - Icons are inlined as sub-components for zero external dependencies
 */

// Design Token Constants
const COLORS = {
  CARD_BG: "bg-[#272822]",
  BUTTON_BG: "bg-[#843a17]",
  TITLE_TEXT: "text-[#b5b5b5]",
  SECTION_HEADER: "text-[#b2b2b1]",
  SUBTITLE_TEXT: "text-[#8b9291]",
  LABEL_TEXT: "text-[#a4a4a3]",
  PLACEHOLDER: "placeholder-[#737470]",
  BUTTON_TEXT: "text-[#8c8078]",
  RECENT_HEADER: "text-[#b0b0b0]",
} as const;

// Internal Icon Components
const SettingsIcon = () => (
  <svg
    className={`${COLORS.TITLE_TEXT} w-4 h-4`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.273.608 3.269 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="w-3 h-3 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export function TestCard() {
  return (
    <div id="testElem" className={`p-4 ${COLORS.CARD_BG} font-sans text-white max-w-sm rounded-lg shadow-lg`}>
      {/* Section 1 - Header row */}
      <div className="flex justify-between items-center mb-4">
        <span className={`${COLORS.TITLE_TEXT} font-semibold text-sm`}>UI magician Agent</span>
        <SettingsIcon />
      </div>

      {/* Section 2 - Collapsible row */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon className={`${COLORS.SUBTITLE_TEXT} w-3 h-3 mr-2`} />
        <span className={`${COLORS.SUBTITLE_TEXT} text-xs`}>From entire frame to a singl...</span>
      </div>

      {/* Section 3 - Add New Design header */}
      <div className="border-t border-gray-700 pt-4 mt-4 mb-4">
        <div className="flex items-center">
          <ChevronUpIcon className={`${COLORS.SECTION_HEADER} w-3 h-3 mr-2`} />
          <span className={`${COLORS.SECTION_HEADER} font-semibold text-sm`}>Add New Design</span>
        </div>
      </div>

      {/* Section 4 - Personal Access Token */}
      <div className="mb-4">
        <label className={`flex items-center ${COLORS.LABEL_TEXT} text-xs mb-2`}>
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full p-2 text-xs ${COLORS.CARD_BG} border border-[#a5adad] rounded outline-none ${COLORS.PLACEHOLDER}`}
        />
      </div>

      {/* Section 5 - Design URL */}
      <div className="mb-6">
        <label className={`flex items-center ${COLORS.LABEL_TEXT} text-xs mb-2`}>
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full p-2 text-xs ${COLORS.CARD_BG} border border-[#929291] rounded outline-none ${COLORS.PLACEHOLDER}`}
        />
      </div>

      {/* Section 6 - Button row */}
      <div className="flex gap-2 mb-6">
        <button className={`flex-1 ${COLORS.BUTTON_BG} rounded ${COLORS.BUTTON_TEXT} font-semibold text-xs px-4 py-2 hover:opacity-90 transition-opacity`}>
          Awesome
        </button>
        <button className={`flex-1 ${COLORS.BUTTON_BG} rounded ${COLORS.BUTTON_TEXT} font-semibold text-xs px-4 py-2 hover:opacity-90 transition-opacity`}>
          Prepare
        </button>
      </div>

      {/* Section 7 - Recent Breakdowns */}
      <div>
        <span className={`${COLORS.RECENT_HEADER} font-semibold text-sm`}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
