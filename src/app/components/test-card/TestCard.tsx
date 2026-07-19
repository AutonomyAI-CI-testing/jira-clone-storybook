export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] min-h-screen w-full max-w-[400px] flex flex-col px-5 py-5 font-sans"
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Collapse row ── */}
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron-up */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c27448"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#c27448] text-sm">From entire frame to a singl...</span>
      </div>

      {/* ── Add New Design ── */}
      <div className="flex items-center gap-2 mb-6">
        {/* Chevron-up */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-white text-lg font-bold">Add New Design</span>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm font-medium">Personal Access Token</span>
          {/* Info icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2.5" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#4a4a4a] rounded text-gray-400 text-sm px-3 py-3 placeholder-gray-500 outline-none"
        />
      </div>

      {/* ── Design URL ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm font-medium">Design URL</span>
          {/* Info icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2.5" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#4a4a4a] rounded text-gray-400 text-sm px-3 py-3 placeholder-gray-500 outline-none"
        />
      </div>

      {/* ── Buttons ── */}
      <div className="flex gap-4 mb-10 justify-center">
        <button className="bg-[#9c4a22] text-white font-semibold text-sm rounded-lg px-8 py-4 hover:bg-[#b5572a] transition-colors">
          Awesome
        </button>
        <button className="bg-[#9c4a22] text-white font-semibold text-sm rounded-lg px-8 py-4 hover:bg-[#b5572a] transition-colors">
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <div>
        <span className="text-white text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
