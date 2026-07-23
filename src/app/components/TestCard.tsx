export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] min-h-[560px] bg-[#1a1a1a] text-[#c8c8c8] px-6 py-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[18px] font-medium text-[#d0d0d0]">UI magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed frame row */}
        <button type="button" className="flex items-center gap-2 text-[14px] text-[#b0b0b0] mb-10">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 7.5L6 4.5L9 7.5" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-8">
          <button type="button" className="flex items-center gap-2 text-[15px] text-[#c8c8c8] mb-5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7.5L6 4.5L9 7.5" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <label className="block mb-4">
            <span className="flex items-center gap-2 text-[14px] text-[#b8b8b8] mb-2">
              Personal Access Token
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#888] text-[10px] text-[#888]">
                i
              </span>
            </span>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full bg-[#2a2a2a] border border-[#5a5a5a] rounded-sm px-3 py-2.5 text-[13px] text-[#a0a0a0] outline-none"
            />
          </label>

          {/* Design URL */}
          <label className="block mb-5">
            <span className="flex items-center gap-2 text-[14px] text-[#b8b8b8] mb-2">
              Design URL
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#888] text-[10px] text-[#888]">
                i
              </span>
            </span>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full bg-[#2a2a2a] border border-[#7a7a7a] rounded-sm px-3 py-2.5 text-[13px] text-[#b0b0b0] outline-none"
            />
          </label>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              type="button"
              className="min-w-[110px] px-6 py-2.5 rounded-md bg-[#a3542f] text-[#d4b5a0] text-[14px] font-medium"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] px-6 py-2.5 rounded-md bg-[#a3542f] text-[#d4b5a0] text-[14px] font-medium"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-12">
          <h2 className="text-[15px] text-[#c0c0c0]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
