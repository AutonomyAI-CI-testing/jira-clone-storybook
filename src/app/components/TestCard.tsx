const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
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
    width="14"
    height="14"
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
    width="14"
    height="14"
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
      className="w-[253px] min-h-screen bg-[#272422] text-gray-200 p-4 font-sans flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold text-gray-100">
          UI magician Agent
        </h1>
        <span className="text-gray-400">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-[#b5651d] text-sm">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section header */}
        <div className="flex items-center gap-2 text-gray-100">
          <ChevronUpIcon />
          <h2 className="text-base font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>Personal Access Token</span>
            <span className="text-gray-500">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>Design URL</span>
            <span className="text-gray-500">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mt-4" />

      {/* Recent Breakdowns */}
      <h2 className="text-base font-semibold text-gray-100">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
