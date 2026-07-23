export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1f14] px-6 py-5 text-[#e8e8e6] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">UI magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-[#c8c8c0] hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed row */}
        <button type="button" className="mb-8 flex w-full items-center gap-2 text-left text-[15px] text-[#c8c8c0]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-80">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button type="button" className="mb-5 flex w-full items-center gap-2 text-left text-lg font-medium text-[#c8c8c0]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-80">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[15px] text-[#c8c8c0]">Personal Access Token</label>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a80] text-[10px] text-[#8a8a80]">i</span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#4a4f45] bg-[#22281c] px-3 py-2.5 text-[14px] text-[#9a9a90] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[15px] text-[#c8c8c0]">Design URL</label>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a80] text-[10px] text-[#8a8a80]">i</span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#9a9a90] bg-[#22281c] px-3 py-2.5 text-[14px] text-[#b0b0a8] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b85a28] px-6 py-2.5 text-[15px] font-medium text-[#c4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b85a28] px-6 py-2.5 text-[15px] font-medium text-[#c4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h2 className="text-lg font-medium text-[#c8c8c0]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
