export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] min-h-[520px] bg-[#1a1f1a] text-[#e8e8e8] px-6 py-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[18px] font-medium tracking-wide">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a9a] hover:text-[#e8e8e8]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed tip row */}
        <button
          type="button"
          className="flex items-center gap-2 text-[#9a9a9a] text-[14px] mb-8 w-full text-left"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden="true"
            className="-rotate-90"
          >
            <path d="M2.5 4.5 L6 8 L9.5 4.5 Z" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-8">
          <button
            type="button"
            className="flex items-center gap-2 text-[#c8c8c8] text-[15px] mb-5"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2.5 7.5 L6 4 L9.5 7.5 Z" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[14px] text-[#c8c8c8]">
                Personal Access Token
              </label>
              <span
                className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full bg-[#151815] border border-[#6a6a6a] rounded px-3 py-2.5 text-[13px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[14px] text-[#c8c8c8]">Design URL</label>
              <span
                className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full bg-[#151815] border border-[#6a6a6a] rounded px-3 py-2.5 text-[13px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              type="button"
              className="min-w-[110px] px-6 py-2.5 rounded-lg bg-[#a05528] text-[#d4b5a0] text-[15px]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] px-6 py-2.5 rounded-lg bg-[#a05528] text-[#d4b5a0] text-[15px]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-10">
          <h2 className="text-[15px] text-[#c8c8c8]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}
