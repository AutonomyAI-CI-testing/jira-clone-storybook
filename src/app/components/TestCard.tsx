export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#252220] text-white w-80 min-h-screen p-5 flex flex-col gap-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white opacity-80"
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

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#c1693a] text-sm -mt-2">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <h2 className="text-xl font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <label className="text-sm text-[#a89080]">Personal Access Token</label>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a89080]"
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
            className="w-full bg-[#2e2a27] border border-[#5a4a40] rounded text-sm text-[#7a6a60] placeholder-[#7a6a60] px-3 py-2.5 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <label className="text-sm text-[#a89080]">Design URL</label>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#a89080]"
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
            className="w-full bg-[#2e2a27] border border-[#5a4a40] rounded text-sm text-[#7a6a60] placeholder-[#7a6a60] px-3 py-2.5 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          <button className="flex-1 bg-[#b85c2c] hover:bg-[#a54f24] text-white font-semibold py-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2c] hover:bg-[#a54f24] text-white font-semibold py-3 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
