export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-6 min-h-screen text-gray-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-white">UI magician Agent</h1>
        <button className="text-gray-400 hover:text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      {/* Collapsible section 1 */}
      <div className="flex items-center gap-2 mb-8 text-gray-400">
        <span className="text-sm">^</span>
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm">^</span>
          <span className="font-medium text-white">Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center text-xs text-gray-500">
              i
            </span>
          </div>
          <input
            type="text"
            defaultValue="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#3a3a3a] border border-gray-600 rounded-md px-4 py-3 text-gray-400 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Design URL field */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center text-xs text-gray-500">
              i
            </span>
          </div>
          <input
            type="text"
            defaultValue="https://www.figma.com/file/:"
            className="w-full bg-[#3a3a3a] border border-gray-600 rounded-md px-4 py-3 text-gray-400 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mb-8">
          <button className="bg-[#b5541a] hover:bg-[#a04a17] text-white px-8 py-3 rounded-md font-medium">
            Awesome
          </button>
          <button className="bg-[#8b4513] hover:bg-[#7a3c10] text-white px-8 py-3 rounded-md font-medium">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
