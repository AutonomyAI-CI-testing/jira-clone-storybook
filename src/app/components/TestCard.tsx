
import React from 'react';

/**
 * Design constants for the TestCard component.
 * These hex values represent specific Figma-inspired dark theme colors.
 */
const COLORS = {
  BACKGROUND: '#272822',
  HEADER_TEXT: '#b5b5b5',
  SUBTITLE_TEXT: '#8b9291',
  SECTION_TITLE: '#b2b2b1',
  LABEL_PAT: '#a4a4a3',
  LABEL_URL: '#a3a3a2',
  INPUT_BORDER_PAT: '#a5adad',
  INPUT_BORDER_URL: '#929291',
  INPUT_PLACEHOLDER_PAT: '#737470',
  INPUT_PLACEHOLDER_URL: '#71726e',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  FOOTER_TEXT: '#b0b0b0',
} as const;

/**
 * Gear/Settings icon SVG component.
 */
const GearIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/**
 * Information circle icon SVG component.
 */
const InfoCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/**
 * Small chevron pointing up.
 */
const ChevronUpSmall = () => (
  <svg width="8" height="5" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 9 8 2 1 9" />
  </svg>
);

/**
 * Medium chevron pointing up.
 */
const ChevronUpMedium = () => (
  <svg width="12" height="8" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 15 12 4 1 15" />
  </svg>
);

/**
 * TestCard Component
 * 
 * A self-contained component rendering a dark-themed UI panel.
 * Uses Tailwind with arbitrary values for precise design matching.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="bg-[#272822] w-[254px] p-5 font-['Inter',sans-serif] selection:bg-[#843a17] selection:text-white"
    >
      {/* Header section with title and settings */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Context/Location subtitle */}
      <div className="flex items-center gap-2 mb-8 text-[#8b9291]">
        <ChevronUpSmall />
        <span className="text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section title */}
      <div className="flex items-center gap-2 mb-4 text-[#b2b2b1]">
        <ChevronUpMedium />
        <span className="text-[13.5px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Form: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2 text-[#a4a4a3]">
          <label htmlFor="pat" className="text-[11.5px] font-semibold cursor-pointer">
            Personal Access Token
          </label>
          <InfoCircleIcon />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] rounded-sm px-3 py-2 text-[#b5b5b5] text-[11.5px] font-semibold placeholder:text-[#737470] focus:outline-none focus:border-[#b5b5b5] transition-colors"
        />
      </div>

      {/* Form: Design URL */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2 text-[#a3a3a2]">
          <label htmlFor="design-url" className="text-[11.5px] font-semibold cursor-pointer">
            Design URL
          </label>
          <InfoCircleIcon />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] rounded-sm px-3 py-2 text-[#b5b5b5] text-[11.5px] font-semibold placeholder:text-[#71726e] focus:outline-none focus:border-[#b5b5b5] transition-colors"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center mt-4">
        <button className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold px-6 py-2 w-[85px] h-[37px] hover:brightness-110 active:scale-95 transition-all">
          Awesome
        </button>
        <button className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold px-6 py-2 w-[85px] h-[37px] hover:brightness-110 active:scale-95 transition-all">
          Prepare
        </button>
      </div>

      {/* Footer section title */}
      <div className="mt-8 text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
        Recent Breakdowns
      </div>
    </div>
  );
};

