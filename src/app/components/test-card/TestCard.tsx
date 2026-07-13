const GearIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
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
    strokeWidth="1.75"
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
      className="bg-[#272727] min-h-screen w-full px-5 py-6 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-[#aaa]">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#c1632a] text-sm mb-10">
        <span className="text-[#c1632a]">
          <ChevronUpIcon />
        </span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-white">
          <ChevronUpIcon />
        </span>
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-semibold text-[#d0ccc8]">
            Personal Access Token
          </label>
          <span className="text-[#999]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#555555] rounded-md px-4 py-3 text-sm text-[#888] placeholder-[#666] outline-none focus:border-[#777]"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-semibold text-[#d0ccc8]">
            Design URL
          </label>
          <span className="text-[#999]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#666666] rounded-md px-4 py-3 text-sm text-[#888] placeholder-[#666] outline-none focus:border-[#777]"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 mb-12">
        <button className="flex-1 bg-[#b5451b] hover:bg-[#c94e1f] active:bg-[#9e3c17] text-white font-semibold text-sm py-3 px-5 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#9e3c17] hover:bg-[#b5451b] active:bg-[#8a3413] text-white font-semibold text-sm py-3 px-5 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
