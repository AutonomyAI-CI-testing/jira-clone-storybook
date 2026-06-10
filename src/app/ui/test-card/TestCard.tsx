
import React from 'react';

/**
 * Icons extracted as sub-components for better readability and reusability within this file.
 * These are based on the Figma design requirements.
 */
const GearIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.5l.2 1.3c-.2.6-.9 1-1.6 1.4l-1.4.2a1.65 1.65 0 0 0-1.5.3l-1.3.2c-.6-.2-1-.9-1.4-1.6l-.2-1.4a1.65 1.65 0 0 0-.3-1.5l-.2-1.3c.2-.6.9-1 1.6-1.4l1.4-.2a1.65 1.65 0 0 0 1.5-.3l1.3-.2c.6.2 1 .9 1.4 1.6l.2 1.4zM6 15a1.65 1.65 0 0 0 .3 1.5l.2 1.3c-.2.6-.9 1-1.6 1.4l-1.4.2a1.65 1.65 0 0 0-1.5.3l-1.3.2c-.6-.2-1-.9-1.4-1.6l-.2-1.4a1.65 1.65 0 0 0-.3-1.5l-.2-1.3c.2-.6.9-1 1.6-1.4l1.4-.2a1.65 1.65 0 0 0 1.5-.3l1.3-.2c.6.2 1 .9 1.4 1.6l.2 1.4zM22 12h-4M2 12h4M12 2v4M12 18v4"></path>
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 15l-6-6-6 6"></path>
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

/**
 * TestCard renders a static UI widget matching a specific Figma design.
 * 
 * DESIGN CHOICES:
 * - Arbitrary Tailwind hex values are used to match FIGMA specs precisely.
 * - The root element has id="testElem" for automated test targeting.
 * - Inputs are read-only as this is a static smoke test component.
 */
const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#282420] p-5 font-sans w-full max-w-[254px] text-[#b5b5b5]"
    >
      {/* 1. Header row */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </h2>
        <GearIcon className="text-[#b5b5b5]" />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center text-[#8b9291] text-[11.5px] font-semibold mb-4">
        <ChevronUpIcon className="mr-1 text-[#8b9291]" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* 3. Spacer gap */}
      <div className="h-4" aria-hidden="true" />

      {/* 4. Section row: Add New Design */}
      <div className="flex items-center text-[#b2b2b1] text-[13.5px] font-semibold mb-4">
        <ChevronUpIcon className="mr-1 text-[#b2b2b1]" />
        <span>Add New Design</span>
      </div>

      {/* 5. Personal Access Token */}
      <div className="text-[#a4a4a3] text-[11.5px] font-semibold flex items-center mb-2">
        <label htmlFor="pat-input">Personal Access Token</label>
        <InfoIcon className="ml-1 text-[#a4a4a3]" />
      </div>
      <input
        id="pat-input"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="bg-[#272822] border-[1px] border-[#a5adad] text-[#737470] text-[11.5px] p-2 rounded w-full mb-4"
      />

      {/* 6. Design URL */}
      <div className="text-[#a3a3a2] text-[11.5px] font-semibold flex items-center mb-2">
        <label htmlFor="url-input">Design URL</label>
        <InfoIcon className="ml-1 text-[#a3a3a2]" />
      </div>
      <input
        id="url-input"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="bg-[#272822] border-[2px] border-[#929291] text-[#71726e] text-[11.5px] p-2 rounded w-full mb-6"
      />

      {/* 7. Button row */}
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          className="bg-[#843a17] text-[#8c8078] text-[12px] font-semibold py-2 px-4 rounded-[4px] w-full mr-2 hover:opacity-90 transition-opacity"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#843a17] text-[#8c8078] text-[12px] font-semibold py-2 px-4 rounded-[4px] w-full ml-2 hover:opacity-90 transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns heading */}
      <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;

