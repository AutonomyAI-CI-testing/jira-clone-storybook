const GearIcon = (): JSX.Element => (
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

const ChevronUpIcon = (): JSX.Element => (
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

const InfoIcon = (): JSX.Element => (
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

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-4 bg-[#1e1e1e] p-5 text-white"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-gray-400">
          <GearIcon />
        </span>
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1 text-sm text-[#c1501a]">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* 3. Spacer */}
      <div className="h-6" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <span className="text-[#c1501a]">
          <ChevronUpIcon />
        </span>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* 5. Label: Personal Access Token */}
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <span>Personal Access Token</span>
        <span className="text-gray-400">
          <InfoIcon />
        </span>
      </div>

      {/* 6. Input: Personal Access Token */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded-md border border-[#444] bg-[#2a2a2a] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#666]"
      />

      {/* 7. Label: Design URL */}
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <span>Design URL</span>
        <span className="text-gray-400">
          <InfoIcon />
        </span>
      </div>

      {/* 8. Input: Design URL */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded-md border border-[#555] bg-[#2a2a2a] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#666]"
      />

      {/* 9. Two buttons */}
      <div className="flex gap-3 pt-1">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1501a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a84316] active:bg-[#923b12]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1501a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a84316] active:bg-[#923b12]"
        >
          Prepare
        </button>
      </div>

      {/* 10. Footer */}
      <div className="pt-4">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
