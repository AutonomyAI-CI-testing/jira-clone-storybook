export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] w-[300px] p-4 text-white font-sans min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c47a3a] text-sm mb-10">
        <span className="text-xs">&#8963;</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm">&#8963;</span>
          <h2 className="text-base font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm text-[#aaaaaa]">Personal Access Token</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#aaaaaa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-[#555555] rounded px-3 py-2 text-[#aaaaaa] text-sm placeholder-[#555] focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm text-[#aaaaaa]">Design URL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#aaaaaa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-[#555555] rounded px-3 py-2 text-[#aaaaaa] text-sm placeholder-[#555] focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg text-sm">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg text-sm">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-base font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
