export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[340px] bg-[#2a2a2a] px-5 py-5 font-sans text-white"
    >
      {/* ── Header row ── */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-80"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Hint row ── */}
      <div className="mb-8 flex items-center gap-2">
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
          className="shrink-0 text-[#a07050]"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm text-[#a07050]">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design ── */}
      <div className="mb-5 flex items-center gap-2">
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
          className="shrink-0 text-white"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="mb-3">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-sm text-[#cccccc]">Personal Access Token</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#888888]"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-[#555555] bg-[#363636] px-3 py-2.5 text-sm text-[#aaaaaa] placeholder-[#888888] outline-none focus:border-[#777777]"
        />
      </div>

      {/* ── Design URL ── */}
      <div className="mb-6">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-sm text-[#cccccc]">Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#888888]"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded-md border border-[#666666] bg-[#363636] px-3 py-2.5 text-sm text-[#aaaaaa] placeholder-[#888888] outline-none focus:border-[#777777]"
        />
      </div>

      {/* ── Buttons ── */}
      <div className="mb-8 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c96a38] active:bg-[#a04e22]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c96a38] active:bg-[#a04e22]">
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <div>
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
