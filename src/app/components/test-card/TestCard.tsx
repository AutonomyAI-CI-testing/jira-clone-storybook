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

const ChevronUp = (): JSX.Element => (
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
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-5 font-sans">

      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white text-xl font-bold tracking-tight">
          UI magician Agent
        </h1>
        <span className="text-[#929291]">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#b85c2a] mb-10">
        <ChevronUp />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 text-white mb-6">
        <ChevronUp />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 text-[#d4d4d4] text-sm font-medium mb-2">
          <span>Personal Access Token</span>
          <span className="text-[#929291]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#929291] rounded text-[#929291] placeholder-[#666] text-sm px-3 py-2 outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-7">
        <div className="flex items-center gap-2 text-[#d4d4d4] text-sm font-medium mb-2">
          <span>Design URL</span>
          <span className="text-[#929291]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border border-[#a5adad] rounded text-[#929291] placeholder-[#666] text-sm px-3 py-2 outline-none"
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="flex-1 bg-[#843a17] text-white font-semibold text-sm py-2.5 px-6 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-white font-semibold text-sm py-2.5 px-6 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-white text-xl font-bold tracking-tight">
        Recent Breakdowns
      </h2>
    </div>
  );
};
