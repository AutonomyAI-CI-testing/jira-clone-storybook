
import React from "react";

/**
 * Inline SVG components for visual accuracy as requested in the design specs.
 * These are kept within the file to maintain the "self-contained" requirement.
 */

const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white rotate-180"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const InfoIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

/**
 * TestCard - A smoke test component that replicates a specific Figma design.
 * All styles use arbitrary values as specified in the style requirements.
 */
export const TestCard = () => {
  const inputClass =
    "w-full bg-transparent border border-[#4a4a4a] rounded px-2 py-1 text-[#737470] text-[11.5px] mt-1 font-semibold focus:outline-none focus:border-[#b85c2a]";
  const labelRowClass = "flex items-center gap-1 mt-3";
  const labelTextClass = "text-[11.5px] font-semibold";
  const buttonClass =
    "bg-[#b85c2a] text-white rounded px-4 py-2 font-semibold hover:bg-[#a65326] transition-colors";

  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 w-[254px] font-sans text-[#b5b5b5] select-none">
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold">UI magician Agent</span>
        <GearIcon />
      </div>

      <div className="mt-2" />

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1 text-[11.5px] font-semibold">
        <ChevronDownIcon />
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      <div className="mt-4" />

      {/* 3. Section heading */}
      <div className="flex items-center gap-1">
        <ChevronDownIcon />
        <span className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</span>
      </div>

      {/* 4. Personal Access Token */}
      <div className={labelRowClass}>
        <span className={`${labelTextClass} text-[#a4a4a3]`}>Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        type="password"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={inputClass}
        spellCheck={false}
      />

      {/* 6. Design URL */}
      <div className={labelRowClass}>
        <span className={`${labelTextClass} text-[#a3a3a2]`}>Design URL</span>
        <InfoIcon />
      </div>
      <input
        placeholder="https://www.figma.com/file/:"
        className={inputClass}
        spellCheck={false}
      />

      {/* 8. Action Buttons */}
      <div className="flex gap-3 mt-4 text-[11.5px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* 9. Footnote */}
      <div className="mt-6">
        <span className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</span>
      </div>
    </div>
  );
};
