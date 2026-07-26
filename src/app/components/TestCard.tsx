export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-md bg-[#1a1a1a] px-6 py-5 text-[14px] text-[#e8e8e8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[18px] font-medium leading-none text-[#e8e8e8]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#c8c8c8] hover:text-white"
          >
            <svg
              width="18"
              height="18"
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

        {/* Collapsed summary row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-[14px] text-[#c8c8c8]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 opacity-80"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design (expanded) */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-[#d0d0d0]"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 opacity-80"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[14px] text-[#d0d0d0]">
                Personal Access Token
              </label>
              <span
                aria-hidden
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#555555] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#c8c8c8] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[14px] text-[#d0d0d0]">Design URL</label>
              <span
                aria-hidden
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#c8c8c8] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b4532a] px-6 py-2.5 text-[15px] font-medium text-[#f0e6e0]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b4532a] px-6 py-2.5 text-[15px] font-medium text-[#f0e6e0]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-2">
          <h2 className="text-[16px] font-medium text-[#e0e0e0]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
