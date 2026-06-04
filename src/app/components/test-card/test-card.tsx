export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-md rounded-lg bg-black p-6 text-sm font-semibold"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="text-[#b5b5b5] hover:text-[#d0d0d0]">
          <svg
            className="h-5 w-5"
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

      {/* Collapsible Section */}
      <div className="mb-6 flex items-center justify-between border-b border-[#333333] pb-4">
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
        <svg
          className="h-4 w-4 text-[#8b9291]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center justify-between border-b border-[#333333] pb-4">
        <span className="text-xs text-[#b2b2b1]">Add New Design</span>
        <svg
          className="h-4 w-4 text-[#b2b2b1]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Form Fields */}
      <div className="mb-6 space-y-5">
        {/* Personal Access Token */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-xs font-semibold text-[#a3a3a2]">
              Personal Access Token
            </label>
            <button className="text-[#a3a3a2] hover:text-[#b5b5b5]">
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-[#333333] bg-black px-3 py-2 text-xs text-[#737470] placeholder-[#5a5a57] focus:border-[#555555] focus:outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-xs font-semibold text-[#a3a3a2]">
              Design URL
            </label>
            <button className="text-[#a3a3a2] hover:text-[#b5b5b5]">
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-[#333333] bg-black px-3 py-2 text-xs text-[#71726e] placeholder-[#5a5a57] focus:border-[#555555] focus:outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <button className="flex-1 border border-[#9d5d3f] bg-black px-4 py-2 text-xs font-semibold text-[#8c8078] hover:bg-[#1a1410] focus:outline-none">
          Awesome
        </button>
        <button className="flex-1 bg-[#9d5d3f] px-4 py-2 text-xs font-semibold text-[#8c8078] hover:bg-[#b66b47] focus:outline-none">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-[#333333] pt-4">
        <h2 className="text-xs font-semibold text-[#b5b5b5]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
