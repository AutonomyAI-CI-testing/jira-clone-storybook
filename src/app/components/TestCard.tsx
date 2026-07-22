export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] min-h-[640px] bg-[#1a1a1a] text-[#e8e8e8] px-6 py-6 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-medium tracking-tight">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#c4c4c4] p-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="flex items-center gap-2 text-[#9a9a9a] text-sm mb-10 w-full text-left"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-12">
        <button
          type="button"
          className="flex items-center gap-2 text-[#c8c8c8] text-base font-medium mb-6"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-[#c8c8c8]">Personal Access Token</label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-[#6b6b6b] rounded px-3 py-2.5 text-sm text-[#b0b0b0] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-[#c8c8c8]">Design URL</label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full bg-[#2a2a2a] border border-[#8a8a8a] rounded px-3 py-2.5 text-sm text-[#b0b0b0] outline-none ring-1 ring-[#8a8a8a]"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a85a2a] px-6 py-2.5 text-sm text-[#c4b0a0] font-medium"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a85a2a] px-6 py-2.5 text-sm text-[#c4b0a0] font-medium"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-base text-[#c8c8c8] font-normal">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
