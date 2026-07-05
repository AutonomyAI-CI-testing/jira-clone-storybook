export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] p-5 w-[360px] min-h-screen font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#b5b5b5] font-bold text-lg">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron up */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#8b9291] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#b2b2b1] font-bold text-base">
          Add New Design
        </span>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <label className="text-[#a4a4a3] text-sm">
              Personal Access Token
            </label>
            {/* Info icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-[#444] rounded text-[#737470] placeholder-[#666] text-sm px-3 py-2.5 outline-none focus:border-[#666]"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <label className="text-[#a4a4a3] text-sm">Design URL</label>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a4a4a3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#2a2a2a] border border-[#444] rounded text-[#737470] placeholder-[#666] text-sm px-3 py-2.5 outline-none focus:border-[#666]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6 justify-center">
        <button className="bg-[#8c4a2f] text-[#e8d5c8] font-semibold rounded-lg px-7 py-2.5 text-sm hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="bg-[#8c4a2f] text-[#e8d5c8] font-semibold rounded-lg px-7 py-2.5 text-sm hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-[#b0b0b0] font-bold text-base">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
