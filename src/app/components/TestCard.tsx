export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[320px] bg-[#1a1a1a] text-neutral-300 p-5 font-sans min-h-[480px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-base font-medium text-neutral-300">UI magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-neutral-400 hover:text-neutral-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        {/* Collapsed row */}
        <div className="flex items-center gap-2 mb-10 text-neutral-400 text-sm">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        {/* Add New Design */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5 text-neutral-400 text-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </div>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm text-neutral-300">Personal Access Token</label>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-500" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <circle cx="12" cy="8" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-neutral-500 bg-[#141414] px-3 py-2.5 text-sm text-neutral-400 outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm text-neutral-300">Design URL</label>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-500" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <circle cx="12" cy="8" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-neutral-400 bg-[#141414] px-3 py-2.5 text-sm text-neutral-400 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#B85C38] px-6 py-2.5 text-sm font-medium text-neutral-300/90"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#B85C38] px-6 py-2.5 text-sm font-medium text-neutral-300/90"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-8">
          <h2 className="text-sm text-neutral-300">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
