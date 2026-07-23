export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1c16] px-6 py-5 font-sans text-[#c8c8c4]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#e8e8e4]">UI magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-[#9a9a94]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed section */}
        <button type="button" className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9a94]">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="shrink-0">
            <path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button type="button" className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c4]">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="shrink-0">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Add New Design
          </button>

          {/* Personal Access Token */}
          <label className="mb-4 block">
            <span className="mb-2 flex items-center gap-2 text-sm text-[#b0b0aa]">
              Personal Access Token
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a64] text-[10px] text-[#6a6a64]">
                i
              </span>
            </span>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6a6a64] bg-[#22241e] px-3 py-2.5 text-sm text-[#9a9a94] outline-none"
            />
          </label>

          {/* Design URL */}
          <label className="mb-5 block">
            <span className="mb-2 flex items-center gap-2 text-sm text-[#b0b0aa]">
              Design URL
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a64] text-[10px] text-[#6a6a64]">
                i
              </span>
            </span>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a8a84] bg-[#22241e] px-3 py-2.5 text-sm text-[#c8c8c4] outline-none"
            />
          </label>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#a54a2a] px-6 py-2.5 text-sm font-medium text-[#d4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a54a2a] px-6 py-2.5 text-sm font-medium text-[#d4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="text-base font-medium text-[#c8c8c4]">Recent Breakdowns</div>
      </div>
    </div>
  );
}

export default TestCard;
