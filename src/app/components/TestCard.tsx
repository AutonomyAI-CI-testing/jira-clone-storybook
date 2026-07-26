export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-md flex-col gap-6 bg-[#1a1a1a] px-6 py-8 text-[#c8c8c8]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#d0d0d0]">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M19.4 13a7.6 7.6 0 0 0 .05-2l2.05-1.6-2-3.46-2.45.6a7.7 7.7 0 0 0-1.73-1L15 3h-6l-.32 2.54a7.7 7.7 0 0 0-1.73 1l-2.45-.6-2 3.46L4.55 11a7.6 7.6 0 0 0 0 2l-2.05 1.6 2 3.46 2.45-.6a7.7 7.7 0 0 0 1.73 1L9 21h6l.32-2.54a7.7 7.7 0 0 0 1.73-1l2.45.6 2-3.46L19.4 13Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Collapsed summary */}
      <button
        type="button"
        className="flex items-center gap-2 text-left text-sm text-[#8a8a8a]"
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path
            d="M1 6.5L6 1.5L11 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="truncate">From entire frame to a singl…</span>
      </button>

      {/* Add New Design */}
      <div className="flex flex-col gap-5">
        <button
          type="button"
          className="flex items-center gap-2 text-left text-base font-medium text-[#c8c8c8]"
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
            <path
              d="M1 6.5L6 1.5L11 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-[#b0b0b0]">
            Personal Access Token
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b8b8b8] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-[#b0b0b0]">
            Design URL
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#c8c8c8] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            className="min-w-[7.5rem] rounded-md bg-[#a85a35] px-5 py-2.5 text-sm text-[#d4b8a8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[7.5rem] rounded-md bg-[#a85a35] px-5 py-2.5 text-sm text-[#d4b8a8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <h2 className="text-base font-medium text-[#c8c8c8]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
