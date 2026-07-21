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
    <div id="testElem" className="bg-[#2a2a2a] p-5 w-[320px] font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <span className="text-gray-400">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#c17a4a] text-sm mb-10">
        <span>
          <ChevronUpIcon />
        </span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design row */}
      <div className="flex items-center gap-2 text-white font-bold text-lg mb-5">
        <span>
          <ChevronUpIcon />
        </span>
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
        <span>Personal Access Token</span>
        <span className="text-gray-400">
          <InfoIcon />
        </span>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#3a3a3a] border border-[#555555] rounded px-3 py-2 text-gray-400 text-sm mb-4 outline-none"
        readOnly
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
        <span>Design URL</span>
        <span className="text-gray-400">
          <InfoIcon />
        </span>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#3a3a3a] border border-[#555555] rounded px-3 py-2 text-gray-400 text-sm mb-6 outline-none"
        readOnly
      />

      {/* Button row */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#9b4f2a] text-white font-semibold px-6 py-3 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#9b4f2a] text-white font-semibold px-6 py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};
