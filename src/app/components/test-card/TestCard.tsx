export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full max-w-[320px] px-5 pt-6 pb-10 flex flex-col gap-0"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xl font-bold leading-tight">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b0b0b0"
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
      <div className="flex items-center gap-2 mb-10">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b07050"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[#a86840] text-sm leading-snug">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design section ── */}
      <div className="flex items-center gap-2 mb-5">
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
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

      {/* ── Personal Access Token field ── */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#d0d0d0] text-sm font-medium">
            Personal Access Token
          </label>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8a8a8a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#333333] border border-[#555555] rounded-md px-3 py-3 text-[#888888] text-sm placeholder-[#888888] outline-none"
        />
      </div>

      {/* ── Design URL field ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#d0d0d0] text-sm font-medium">
            Design URL
          </label>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8a8a8a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#333333] border border-[#666666] rounded-md px-3 py-3 text-[#888888] text-sm placeholder-[#888888] outline-none"
        />
      </div>

      {/* ── Action buttons ── */}
      <div className="flex gap-3 mb-10">
        <button
          type="button"
          className="flex-1 bg-[#a0522d] hover:bg-[#b5622d] text-white text-sm font-semibold py-3 rounded-lg"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#8b4513] hover:bg-[#9b5523] text-white text-sm font-semibold py-3 rounded-lg"
        >
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns heading ── */}
      <div className="mt-2">
        <span className="text-white text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
