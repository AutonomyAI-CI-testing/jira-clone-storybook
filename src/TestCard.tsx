export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-6 min-h-screen text-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#b5b5b5]"
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

      {/* Subtitle */}
      <div className="flex items-center gap-2 mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#8b9180]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[#8b9180] text-xs">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#b5b5b5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[#b5b5b5] font-bold text-base">Add New Design</span>
      </div>

      {/* Form */}
      <div className="mt-5">
        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <label className="text-[#a4a4a3] text-xs">Personal Access Token</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
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
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-[#444] text-[#737470] placeholder-[#737470] rounded px-3 py-2 text-xs focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-[#a4a4a3] text-xs">Design URL</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a4a4a3]"
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
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#2a2a2a] border border-[#444] text-[#737470] placeholder-[#737470] rounded px-3 py-2 text-xs focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-[#8c4a2f] text-[#e0d0c0] rounded-lg px-6 py-2 text-sm font-medium">
          Awesome
        </button>
        <button className="bg-[#8c4a2f] text-[#e0d0c0] rounded-lg px-6 py-2 text-sm font-medium">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-[#b0b0b0] font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
