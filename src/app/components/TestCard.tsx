export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-5 w-80 min-h-screen font-sans"
    >
      {/* ── Header Row ─────────────────────────────────── */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-lg">UI magician Agent</span>

        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Subtitle Row ───────────────────────────────── */}
      <div className="flex items-center gap-2 text-[#c47a40] text-sm mb-8">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* ── Add New Design Row ─────────────────────────── */}
      <div className="flex items-center gap-2 mb-5">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* ── Personal Access Token ──────────────────────── */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <label className="text-gray-300 text-sm font-medium">
            Personal Access Token
          </label>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
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
          className="w-full bg-[#333333] border border-[#4a4a4a] text-gray-400 placeholder-gray-500 rounded p-2.5 text-sm outline-none focus:border-[#6a6a6a]"
        />
      </div>

      {/* ── Design URL ─────────────────────────────────── */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <label className="text-gray-300 text-sm font-medium">
            Design URL
          </label>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
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
          className="w-full bg-[#333333] border border-[#4a4a4a] text-gray-400 placeholder-gray-500 rounded p-2.5 text-sm outline-none focus:border-[#6a6a6a]"
        />
      </div>

      {/* ── Buttons ────────────────────────────────────── */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-[#b5541c] hover:bg-[#c75f22] text-white font-medium rounded-lg px-5 py-3 text-sm transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541c] hover:bg-[#c75f22] text-white font-medium rounded-lg px-5 py-3 text-sm transition-colors">
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ──────────────────────────── */}
      <div className="mt-10">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}
