export function TestCard() {
  return (
    <div id="testElem">
      <div className="flex w-[320px] flex-col gap-6 bg-[#1a1a1a] p-6 font-sans text-[#c8c8c8]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#c8c8c8]">UI Magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-neutral-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed frame row */}
        <button type="button" className="flex items-center gap-2 text-left text-sm text-neutral-400">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl…</span>
        </button>

        {/* Add New Design section */}
        <div className="flex flex-col gap-4">
          <button type="button" className="flex items-center gap-2 text-left text-base font-medium text-neutral-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>Personal Access Token</span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400">
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-neutral-500 bg-[#2a2a2a] px-3 py-2 text-sm text-neutral-300 outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <span>Design URL</span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400">
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/…"
              className="w-full rounded border border-neutral-400 bg-[#2a2a2a] px-3 py-2 text-sm text-neutral-300 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="mt-1 flex gap-3 px-2">
            <button
              type="button"
              className="flex-1 rounded-md bg-[#a85a2a] px-4 py-2.5 text-sm font-medium text-neutral-200"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 rounded-md bg-[#a85a2a] px-4 py-2.5 text-sm font-medium text-neutral-200"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-4">
          <h2 className="text-base font-medium text-neutral-300">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
