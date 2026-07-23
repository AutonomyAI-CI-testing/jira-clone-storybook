export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-5 text-[#c8c8c8]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-base font-medium text-[#d0d0d0]">UI magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed section */}
        <button type="button" className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9a9a]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span className="truncate">From entire frame to a singl…</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button type="button" className="mb-5 flex w-full items-center gap-2 text-left text-sm font-medium text-[#c8c8c8]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">Personal Access Token</label>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6b6b] text-[10px] text-[#8a8a8a]">
                i
              </span>
            </div>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxxxxx"
              readOnly
              className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#8a8a8a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">Design URL</label>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6b6b] text-[10px] text-[#8a8a8a]">
                i
              </span>
            </div>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#8a8a8a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#b54a1e] px-8 py-2.5 text-sm font-medium text-[#c4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#b54a1e] px-8 py-2.5 text-sm font-medium text-[#c4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-2">
          <h2 className="text-sm font-medium text-[#c8c8c8]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}
