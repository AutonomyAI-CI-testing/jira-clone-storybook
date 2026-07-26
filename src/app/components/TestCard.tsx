export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] bg-[#1a1a1a] text-neutral-200 p-6 rounded-lg font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-medium text-neutral-200">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-neutral-400 hover:text-neutral-200">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button type="button" className="flex items-center gap-2 text-neutral-400 text-sm mb-8 w-full text-left">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-90">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button type="button" className="flex items-center gap-2 text-neutral-300 text-base mb-5 w-full text-left">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-neutral-300">Personal Access Token</label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-neutral-500 text-neutral-400 text-[10px] leading-none" aria-hidden="true">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-neutral-600 rounded px-3 py-2.5 text-sm text-neutral-300 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-neutral-300">Design URL</label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-neutral-500 text-neutral-400 text-[10px] leading-none" aria-hidden="true">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/"
            className="w-full bg-[#2a2a2a] border border-neutral-400 rounded px-3 py-2.5 text-sm text-neutral-300 outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            className="bg-[#9a4a1a] text-neutral-200 rounded-md px-6 py-2.5 text-sm font-medium min-w-[120px]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="bg-[#9a4a1a] text-neutral-200 rounded-md px-6 py-2.5 text-sm font-medium min-w-[120px]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-neutral-300 text-base">Recent Breakdowns</div>
    </div>
  );
}
