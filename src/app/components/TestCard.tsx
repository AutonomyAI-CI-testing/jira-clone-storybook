export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-lg bg-[#1a1c16] p-5 text-[#c8c8c0] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#d4d4d0]">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#9a9a90]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#a8a8a0]"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="shrink-0">
          <path d="M2 8 L6 4 L10 8 Z" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c0]"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="shrink-0">
            <path d="M2 8 L6 4 L10 8 Z" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#b0b0a8]">Personal Access Token</label>
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a60] text-[10px] text-[#8a8a80]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#6a6a60] bg-[#22241c] px-3 py-2.5 text-sm text-[#8a8a80] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#b0b0a8]">Design URL</label>
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a60] text-[10px] text-[#8a8a80]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#8a8a80] bg-[#22241c] px-3 py-2.5 text-sm text-[#9a9a90] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a85a2a] px-6 py-2.5 text-sm font-medium text-[#d4b8a0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a85a2a] px-6 py-2.5 text-sm font-medium text-[#d4b8a0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-base font-medium text-[#c8c8c0]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
