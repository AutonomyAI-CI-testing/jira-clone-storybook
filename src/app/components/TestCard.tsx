export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] min-h-screen text-white font-sans p-5 w-full max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
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
      </div>

      {/* Collapse row */}
      <div className="flex items-center gap-2 mb-10 text-[#b05a2a] text-sm">
        <span className="text-gray-400 text-xs">&#8963;</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-white text-base">&#8963;</span>
          <h2 className="text-base font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
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
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11v5M12 8h.01"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm text-gray-300">Design URL</span>
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
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11v5M12 8h.01"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-[#b05a2a] text-white font-medium py-3 px-8 rounded-xl hover:bg-[#c06535]">
            Awesome
          </button>
          <button className="bg-[#b05a2a] text-white font-medium py-3 px-8 rounded-xl hover:bg-[#c06535]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
