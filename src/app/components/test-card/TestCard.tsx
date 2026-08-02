const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-gray-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 ${className ?? ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#252220] w-full max-w-[400px] text-white p-5 rounded-lg"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-lg tracking-tight">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2 mb-8">
        <ChevronUpIcon className="text-[#c2723a]" />
        <span className="text-[#c2723a] text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <ChevronUpIcon className="text-white" />
          <h2 className="font-bold text-base text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-gray-400 text-sm placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-gray-400 text-sm placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#c2723a] hover:bg-[#b0652f] text-white font-bold py-3 rounded-lg text-sm transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#c2723a] hover:bg-[#b0652f] text-white font-bold py-3 rounded-lg text-sm transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="font-bold text-base text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
