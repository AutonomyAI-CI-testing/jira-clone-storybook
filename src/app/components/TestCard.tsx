export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] bg-[#1a1a1a] px-6 py-5 text-[#c8c8c8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#d4d4d4]">UI magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-[#a3a3a3]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed nav row */}
        <button type="button" className="mb-8 flex items-center gap-2 text-sm text-[#a3a3a3]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="rotate-180">
            <path d="M2 4 L6 8 L10 4 Z" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-10">
          <button type="button" className="mb-5 flex items-center gap-2 text-base font-medium text-[#c8c8c8]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 4 L6 8 L10 4 Z" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2 text-sm text-[#b0b0b0]">
              <span>Personal Access Token</span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
                i
              </span>
            </div>
            <div className="rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a]">
              figd_xxxxxxxxxxxxxxxxxx
            </div>
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2 text-sm text-[#b0b0b0]">
              <span>Design URL</span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
                i
              </span>
            </div>
            <div className="rounded border-2 border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b8b8b8]">
              https://www.figma.com/file/:
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pl-1">
            <button
              type="button"
              className="rounded-md bg-[#b45309] px-6 py-2.5 text-sm font-medium text-[#d4a574]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#b45309] px-6 py-2.5 text-sm font-medium text-[#d4a574]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 text-base font-medium text-[#c8c8c8]">Recent Breakdowns</div>
      </div>
    </div>
  );
}
