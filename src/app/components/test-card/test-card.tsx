import React from "react";

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const TestCard: React.FC = () => {
  return (
    <div className="flex min-h-[508px] w-[350px] flex-col space-y-4 rounded-lg bg-[#191a14] p-6 text-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* Collapsible row */}
      <div className="text-gray-400 flex items-center text-sm">
        <ChevronUpIcon className="mr-2 h-4 w-4" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center pt-4">
        <ChevronUpIcon className="mr-2 h-4 w-4 text-white" />
        <h2 className="text-sm font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token input */}
      <div className="flex flex-col space-y-2 pt-4">
        <div className="text-gray-300 flex items-center justify-between text-xs font-semibold">
          <span>Personal Access Token</span>
          <InfoIcon />
        </div>
        <div className="border-gray-600 flex h-[40px] items-center rounded-md border bg-[#272822] p-2">
          <span className="text-gray-500 text-[13px]">
            figd_xxxxxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input */}
      <div className="flex flex-col space-y-2 pt-2">
        <div className="text-gray-300 flex items-center justify-between text-xs font-semibold">
          <span>Design URL</span>
          <InfoIcon />
        </div>
        <div className="border-gray-600 flex h-[40px] items-center rounded-md border bg-[#272822] p-2">
          <span className="text-gray-500 text-[13px]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action Buttons - Distinctive brown color matches brand assets */}
      <div className="flex justify-between gap-4 pt-4">
        <button className="flex-1 rounded-md bg-[#b56e3b] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a05e32]">
          Awesome
        </button>
        <button className="flex-1 rounded-md bg-[#b56e3b] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a05e32]">
          Prepare
        </button>
      </div>

      {/* Footer Breakdown list label */}
      <h3 className="pt-6 text-sm font-semibold">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
