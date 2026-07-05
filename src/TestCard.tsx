import React from "react";

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
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
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] text-[#b5b5b5] p-6 w-full max-w-sm min-h-screen font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</span>
        <span className="text-[#8b8b8b]">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mt-2 text-[#8b7b6b]">
        <ChevronUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-2 mt-10 text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="font-bold text-base">Add New Design</span>
      </div>

      {/* Form */}
      <div className="mt-5 flex flex-col gap-5">
        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-[#a4a4a3] text-sm">
            <span>Personal Access Token</span>
            <span className="text-[#7a7a78]">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#252525] border border-[#3a3a3a] text-[#737470] placeholder-[#737470] rounded px-3 py-2 text-sm outline-none focus:border-[#555]"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-[#a4a4a3] text-sm">
            <span>Design URL</span>
            <span className="text-[#7a7a78]">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#252525] border border-[#3a3a3a] text-[#737470] placeholder-[#737470] rounded px-3 py-2 text-sm outline-none focus:border-[#555]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-[#8c3a1a] hover:bg-[#a0451a] text-[#e8d5c4] font-semibold px-6 py-2 rounded-lg text-sm transition-colors">
          Awesome
        </button>
        <button className="bg-[#8c3a1a] hover:bg-[#a0451a] text-[#e8d5c4] font-semibold px-6 py-2 rounded-lg text-sm transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="font-bold text-[#b0b0b0] text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
