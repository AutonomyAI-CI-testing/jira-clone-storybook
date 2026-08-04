export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[253px] bg-[#232323] text-white rounded-xl p-4 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-6">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 text-[#b07040]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-xs text-[#b07040] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-4">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-base font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-xs text-gray-300">Personal Access Token</label>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-xs text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-xs text-gray-300">Design URL</label>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-xs text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#b05a28] text-white text-sm font-medium py-2 px-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b05a28] text-white text-sm font-medium py-2 px-3 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h3 className="text-base font-semibold text-white">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
