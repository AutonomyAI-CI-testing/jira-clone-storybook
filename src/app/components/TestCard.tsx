import React from "react";

// Icons extracted as local components for clarity and to reduce nesting in the main render
const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/**
 * TestCard component is a smoke test UI approximating a Figma design.
 * It uses hardcoded Tailwind arbitrary values to match design specs precisely.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="min-h-screen bg-[#1c1c1a] p-4 w-[253px]">
      {/* Section 1: Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#b5b5b5] font-semibold text-[13.5px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Section 2: Subtitle */}
      <div className="flex items-center gap-1 mb-6">
        <ChevronUpIcon color="#8b9291" />
        <span className="text-[#8b9291] text-xs">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 3: Add New Design Heading */}
      <div className="flex items-center gap-1 mb-4">
        <ChevronUpIcon color="#b2b2b1" />
        <span className="text-[#b2b2b1] font-semibold text-[13.5px]">
          Add New Design
        </span>
      </div>

      {/* Section 4: Form Controls */}
      <div className="flex flex-col gap-3 mb-4">
        {/* Personal Access Token Entry */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] placeholder-[#737470] text-sm rounded px-3 py-2 outline-none"
          />
        </div>

        {/* Design URL Entry */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#272822] border border-[#929291] text-[#71726e] placeholder-[#71726e] text-sm rounded px-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* Section 5: Call to Action Buttons */}
      <div className="flex gap-2 mb-8">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-4 py-2 hover:opacity-90 active:scale-95 transition-all">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-4 py-2 hover:opacity-90 active:scale-95 transition-all">
          Prepare
        </button>
      </div>

      {/* Section 6: Footer heading */}
      <div>
        <span className="text-[#b0b0b0] font-semibold text-[13.5px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
