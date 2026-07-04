import React from "react";

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
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
    strokeWidth="2.5"
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] p-5 w-full max-w-xs min-h-screen font-sans"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</span>
        <span className="text-gray-500">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mt-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section title */}
      <div className="flex items-center gap-2 mt-10 text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="font-bold text-base">Add New Design</span>
      </div>

      {/* Form */}
      <div className="mt-5 flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#a4a4a3] text-sm">
            <span>Personal Access Token</span>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#2a2a2a] border border-zinc-600 rounded px-3 py-2 w-full text-sm text-gray-400 placeholder-[#737470] outline-none focus:border-zinc-400"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#a4a4a3] text-sm">
            <span>Design URL</span>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#2a2a2a] border border-zinc-600 rounded px-3 py-2 w-full text-sm text-gray-400 placeholder-[#737470] outline-none focus:border-zinc-400"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="bg-[#8c3a1f] text-white rounded-lg px-5 py-2 font-medium text-sm flex-1">
          Awesome
        </button>
        <button className="bg-[#8c3a1f] text-white rounded-lg px-5 py-2 font-medium text-sm flex-1">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-[#b0b0b0] font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
