export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full p-5 flex flex-col gap-4 font-sans"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between">
        <span className="text-white text-xl font-bold">UI magician Agent</span>

        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0a0"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Subtitle row ── */}
      <div className="flex items-center gap-2">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0a0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#b85c2c] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ── */}
      <div className="mt-4" />

      {/* ── Add New Design section ── */}
      <div className="flex items-center gap-2">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-white text-lg font-bold">Add New Design</span>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <span className="text-[#d0d0d0] text-sm font-medium">
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
            strokeWidth="1.8"
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
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded px-3 py-3 text-[#a0a0a0] text-sm placeholder-[#666] focus:outline-none"
        />
      </div>

      {/* ── Design URL ── */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#d0d0d0] text-sm font-medium">Design URL</span>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
            strokeWidth="1.8"
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
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded px-3 py-3 text-[#a0a0a0] text-sm placeholder-[#666] focus:outline-none"
        />
      </div>

      {/* ── Action buttons ── */}
      <div className="flex items-center gap-4 mt-2 justify-center">
        <button
          type="button"
          className="flex-1 bg-[#b85c2c] hover:bg-[#a04e24] text-white font-semibold py-3 rounded-lg transition-colors duration-150"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#b85c2c] hover:bg-[#a04e24] text-white font-semibold py-3 rounded-lg transition-colors duration-150"
        >
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <div className="mt-6">
        <span className="text-white text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
