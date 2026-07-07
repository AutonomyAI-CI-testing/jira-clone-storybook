export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-5 max-w-[320px] min-h-screen font-sans"
    >
      {/* Top row: title + gear icon */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
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

      {/* Subtitle row: chevron + text */}
      <div className="flex items-center gap-2 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#8b9291] text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#b5b5b5] font-semibold text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <label className="text-[#b5b5b5] text-xs font-semibold">
          Personal Access Token
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Token input */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] placeholder-[#737470] text-xs font-semibold px-3 py-2 rounded mb-4 outline-none"
      />

      {/* Design URL label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <label className="text-[#b5b5b5] text-xs font-semibold">Design URL</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* URL input */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] placeholder-[#71726e] text-xs font-semibold px-3 py-2 rounded mb-6 outline-none"
      />

      {/* Button row */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <button className="bg-[#843a17] text-[#8c8078] text-sm font-semibold px-5 py-2 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] text-sm font-semibold px-5 py-2 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[#b5b5b5] font-semibold text-sm mt-8">
        Recent Breakdowns
      </h2>
    </div>
  );
};
