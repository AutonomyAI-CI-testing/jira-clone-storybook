const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-gray-400"
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronUpIcon = ({ className = "w-4 h-4 text-gray-400" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-500"
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
      className="bg-[#232120] text-white flex flex-col gap-3 w-[253px] rounded-lg p-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-base text-white">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1.5">
        <ChevronUpIcon />
        <span className="text-[#c97d52] text-sm truncate">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon className="w-4 h-4 text-white" />
        <span className="font-semibold text-base text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-transparent border border-gray-600 rounded text-gray-400 text-sm px-3 py-2 placeholder-gray-600 focus:outline-none focus:border-gray-400 w-full"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <label className="text-sm text-gray-300">Design URL</label>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-transparent border border-gray-600 rounded text-gray-400 text-sm px-3 py-2 placeholder-gray-600 focus:outline-none focus:border-gray-400 w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button className="flex-1 bg-[#b5541e] hover:bg-[#c45e22] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541e] hover:bg-[#c45e22] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <span className="font-bold text-base text-white">Recent Breakdowns</span>
    </div>
  );
};

export default TestCard;
