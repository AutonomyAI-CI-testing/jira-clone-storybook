export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-xl bg-[#1a1c16] px-6 py-5 text-[#c8c7c1] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#e8e6e0]">UI Magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-[#9a9890]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed summary row */}
        <button type="button" className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9890]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button type="button" className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c7c1]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm font-medium text-[#c8c7c1]">Personal Access Token</label>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6960] text-[10px] text-[#9a9890]">
                i
              </span>
            </div>
            <div className="rounded-md border border-[#4a4840] bg-[#22241c] px-3 py-2.5 text-sm text-[#9a9890]">
              figd_xxxxxxxxxxxxxxx
            </div>
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm font-medium text-[#c8c7c1]">Design URL</label>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6960] text-[10px] text-[#9a9890]">
                i
              </span>
            </div>
            <div className="rounded-md border-2 border-[#9a9890] bg-[#22241c] px-3 py-2.5 text-sm text-[#c8c7c1]">
              https://www.figma.com/file/:
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-lg bg-[#9a5b32] px-8 py-2.5 text-base font-medium text-[#e8d5c8]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#9a5b32] px-8 py-2.5 text-base font-medium text-[#e8d5c8]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 text-base font-medium text-[#c8c7c1]">Recent Breakdowns</div>
      </div>
    </div>
  );
};

export default TestCard;
