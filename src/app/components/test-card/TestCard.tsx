const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
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
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b9291"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="1.8"
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
      className="bg-[#1a1a1a] p-5 w-full max-w-[340px] min-h-screen"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] font-semibold text-[13.5px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <ChevronUpIcon />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design section row */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#b2b2b1] font-semibold text-[13.5px]">
          Add New Design
        </span>
      </div>

      {/* 4. Personal Access Token label */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
          Personal Access Token
        </span>
        <InfoCircleIcon />
      </div>

      {/* 5. Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#252525] border border-[#555] text-[#737470] placeholder-[#737470] text-[11.5px] px-3 py-2.5 rounded mb-4 outline-none"
      />

      {/* 6. Design URL label */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
          Design URL
        </span>
        <InfoCircleIcon />
      </div>

      {/* 7. URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#252525] border border-[#555] text-[#71726e] placeholder-[#71726e] text-[11.5px] px-3 py-2.5 rounded mb-6 outline-none"
      />

      {/* 8. Button row */}
      <div className="flex gap-4 mb-12">
        <button className="flex-1 bg-[#7a4a30] text-[#d4b8a8] font-semibold text-[11.5px] py-3 px-4 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#7a4a30] text-[#d4b8a8] font-semibold text-[11.5px] py-3 px-4 rounded-lg">
          Prepare
        </button>
      </div>

      {/* 9. Recent Breakdowns heading */}
      <span className="text-[#b0b0b0] font-semibold text-[13.5px]">
        Recent Breakdowns
      </span>
    </div>
  );
};
