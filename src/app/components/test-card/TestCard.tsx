export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] w-full min-h-screen p-6 flex flex-col"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Subtitle row ── */}
      <div className="flex items-center gap-2 mt-1">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#c17a50] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Vertical spacer ── */}
      <div className="flex-1 min-h-[48px] max-h-[80px]" />

      {/* ── Add New Design section ── */}
      <div className="flex items-center gap-2 mb-5">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white flex-shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-white font-bold text-xl">Add New Design</span>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">
            Personal Access Token
          </label>
          {/* Info-circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 flex-shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#555555] rounded text-gray-400 placeholder-gray-500 text-sm px-3 py-3 outline-none focus:border-[#777777]"
          readOnly
        />
      </div>

      {/* ── Design URL ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          {/* Info-circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 flex-shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#555555] rounded text-gray-400 placeholder-gray-500 text-sm px-3 py-3 outline-none focus:border-[#777777]"
          readOnly
        />
      </div>

      {/* ── Orange buttons ── */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#c1622f] hover:bg-[#a0521f] text-white font-semibold text-base py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1622f] hover:bg-[#a0521f] text-white font-semibold text-base py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <div>
        <span className="text-white font-bold text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
};
