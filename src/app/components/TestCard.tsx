export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[320px] max-w-sm bg-[#1a1a1a] p-6 text-neutral-200 font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-neutral-200">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-neutral-400">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed summary row */}
      <button type="button" className="mb-8 flex w-full items-center gap-2 text-left text-sm text-neutral-400">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design section */}
      <div className="mb-6">
        <button type="button" className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-neutral-300">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-neutral-300">Personal Access Token</label>
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400" aria-hidden>
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-neutral-600 bg-[#2a2a2a] px-3 py-2 text-sm text-neutral-300 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-neutral-300">Design URL</label>
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400" aria-hidden>
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded-sm border border-neutral-500 bg-[#2a2a2a] px-3 py-2 text-sm text-neutral-300 outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a94b2e] px-6 py-2.5 text-sm font-medium text-neutral-200"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a94b2e] px-6 py-2.5 text-sm font-medium text-neutral-200"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <h2 className="text-base font-medium text-neutral-200">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
