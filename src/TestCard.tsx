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
    width="15"
    height="15"
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
      className="bg-[#1a1a1a] text-gray-300 min-h-screen w-full max-w-xs mx-auto p-5 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-200">UI magician Agent</span>
        <span className="text-gray-400">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-[#a0855a] text-sm">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-gray-400">
          <ChevronUpIcon />
        </span>
        <span className="text-base font-bold text-gray-200">Add New Design</span>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 mt-1">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <span>Personal Access Token</span>
            <span className="text-gray-500">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#2a2a2a] border border-gray-600 rounded text-gray-400 placeholder-gray-600 px-3 py-2.5 text-sm w-full outline-none focus:border-gray-500"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <span>Design URL</span>
            <span className="text-gray-500">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#2a2a2a] border border-gray-600 rounded text-gray-400 placeholder-gray-600 px-3 py-2.5 text-sm w-full outline-none focus:border-gray-500"
            readOnly
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-[#8c4a2f] text-[#e8d5c4] font-semibold py-3 rounded-lg text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#8c4a2f] text-[#e8d5c4] font-semibold py-3 rounded-lg text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="mt-6">
        <span className="text-base font-bold text-gray-200">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
