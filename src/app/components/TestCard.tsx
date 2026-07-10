export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2b2b2b] text-white min-h-screen p-5 w-full max-w-sm font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
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
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-[#b87a55] text-sm mb-8">
        <span className="text-gray-400">^</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-lg font-semibold mb-5">
          <span className="text-gray-400">^</span>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2 text-sm text-gray-200">
            <span>Personal Access Token</span>
            <span className="text-gray-400 text-xs border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center leading-none">i</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-[#3a3a3a] border border-[#555] text-gray-400 placeholder-gray-500 text-sm rounded px-3 py-3 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2 text-sm text-gray-200">
            <span>Design URL</span>
            <span className="text-gray-400 text-xs border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center leading-none">i</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-[#3a3a3a] border border-[#555] text-gray-400 placeholder-gray-500 text-sm rounded px-3 py-3 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#b85c38] text-white text-sm font-medium px-6 py-3 rounded-lg flex-1">
            Awesome
          </button>
          <button className="bg-[#b85c38] text-white text-sm font-medium px-6 py-3 rounded-lg flex-1">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
