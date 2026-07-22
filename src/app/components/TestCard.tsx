export default function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-[360px] bg-[#1a1a1a] px-6 py-5 text-[#c8c8c8] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#d0d0d0]">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-7 w-7 items-center justify-center rounded text-[#9a9a9a]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M19.4 13a7.7 7.7 0 0 0 .05-2l2.05-1.6-2-3.46-2.45.75a7.6 7.6 0 0 0-1.73-1L15 3h-6l-.32 2.69a7.6 7.6 0 0 0-1.73 1L4.5 5.94l-2 3.46L4.55 11a7.7 7.7 0 0 0 0 2l-2.05 1.6 2 3.46 2.45-.75a7.6 7.6 0 0 0 1.73 1L9 21h6l.32-2.69a7.6 7.6 0 0 0 1.73-1l2.45.75 2-3.46L19.4 13Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Collapsed section row */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-sm text-[#b0b0b0]"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M3 7.5 6 4.5 9 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-12">
        <button
          type="button"
          className="mb-5 flex items-center gap-2 text-left text-base font-medium text-[#cfcfcf]"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M3 7.5 6 4.5 9 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <label className="mb-4 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-[#bdbdbd]">
            Personal Access Token
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </span>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#6a6a6a] bg-[#222222] px-3 py-2.5 text-sm text-[#b0b0b0] outline-none"
          />
        </label>

        {/* Design URL */}
        <label className="mb-5 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-[#bdbdbd]">
            Design URL
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </span>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#7a7a7a] bg-[#222222] px-3 py-2.5 text-sm text-[#b0b0b0] outline-none"
          />
        </label>

        {/* Actions */}
        <div className="flex justify-center gap-3 pt-1">
          <button
            type="button"
            className="min-w-[110px] rounded-lg bg-[#a8542a] px-5 py-2.5 text-sm font-medium text-[#d8d0c8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[110px] rounded-lg bg-[#a8542a] px-5 py-2.5 text-sm font-medium text-[#d8d0c8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-base font-medium text-[#cfcfcf]">Recent Breakdowns</h2>
    </div>
  );
}
