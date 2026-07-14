export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-5 font-sans">

      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xl font-semibold">UI magician Agent</span>

        {/* Gear / settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#cccccc"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Collapsible row: "From entire frame to a singl..." ── */}
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#cccccc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#b07a5a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* ── "Add New Design" section header ── */}
      <div className="flex items-center gap-2 mb-6">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#cccccc"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-white text-lg font-semibold">Add New Design</span>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#d0cdc9] text-sm font-medium">Personal Access Token</span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-[#555555] rounded px-3 py-2 text-[#888888] text-sm placeholder-[#666666] focus:outline-none"
        />
      </div>

      {/* ── Design URL ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#d0cdc9] text-sm font-medium">Design URL</span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-[#777777] rounded px-3 py-2 text-[#888888] text-sm placeholder-[#666666] focus:outline-none"
        />
      </div>

      {/* ── Action buttons ── */}
      <div className="flex items-center gap-4 mb-10">
        <button
          type="button"
          className="flex-1 bg-[#b85c2a] hover:bg-[#a34f22] text-white font-semibold text-sm py-3 rounded-lg transition-colors"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#b85c2a] hover:bg-[#a34f22] text-white font-semibold text-sm py-3 rounded-lg transition-colors"
        >
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <div>
        <span className="text-white text-lg font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
