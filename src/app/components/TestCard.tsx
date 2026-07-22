export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-full max-w-md bg-[#1a1a1a] px-6 py-6 text-[#c8c8c8] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <h1 className="text-xl font-medium text-[#d0d0d0]">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="mt-0.5 text-[#9a9a9a]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </button>
      </div>

      {/* Collapsed summary */}
      <button type="button" className="mb-10 flex items-center gap-2 text-sm text-[#9a9a9a]">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 7.5L6 4.5L9 7.5" />
        </svg>
        <span>From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-5 flex items-center gap-2 text-[#b8b8b8]">
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 7.5L6 4.5L9 7.5" />
        </svg>
        <h2 className="text-lg font-medium">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-[#b0b0b0]">Personal Access Token</label>
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a6a] text-[10px] text-[#8a8a8a]">
            i
          </span>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#4a4a4a] bg-[#222222] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-[#b0b0b0]">Design URL</label>
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a6a] text-[10px] text-[#8a8a8a]">
            i
          </span>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full rounded border border-[#8a8a8a] bg-[#222222] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mb-12 flex gap-3 px-2">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a54a2a] px-4 py-2.5 text-base font-medium text-[#d4a090]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a54a2a] px-4 py-2.5 text-base font-medium text-[#d4a090]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-base font-medium text-[#c0c0c0]">Recent Breakdowns</h3>
    </div>
  );
}
