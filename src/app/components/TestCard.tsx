export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-5 text-[#e8e8e8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight text-[#f0f0f0]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#c0c0c0] hover:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed section */}
        <div className="mb-8 flex items-center gap-2 text-[#b0b0b0]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <span className="truncate text-sm">From entire frame to a singl...</span>
        </div>

        {/* Add New Design */}
        <div className="mb-4 flex items-center gap-2 text-[#d0d0d0]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="text-base font-medium">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#c8c8c8]">Personal Access Token</label>
            <span
              aria-hidden
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#888] text-[10px] text-[#aaa]"
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#666] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d0d0d0] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#c8c8c8]">Design URL</label>
            <span
              aria-hidden
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#888] text-[10px] text-[#aaa]"
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#888] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d0d0d0] outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="mb-10 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-[#a54a2a] px-8 py-2.5 text-sm font-medium text-[#e8d5c8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-lg bg-[#a54a2a] px-8 py-2.5 text-sm font-medium text-[#e8d5c8]"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div className="text-base text-[#c8c8c8]">Recent Breakdowns</div>
      </div>
    </div>
  );
}

export default TestCard;
