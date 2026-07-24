export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[340px] rounded-lg bg-[#1a1c16] p-6 text-[#c4c4c0] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-[#c8c8c4]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#8a8a84] hover:text-[#c4c4c0]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-[15px] text-[#9a9a94]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 rotate-180"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-lg font-medium text-[#c4c4c0]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 rotate-180"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[15px] text-[#b0b0aa]">
                Personal Access Token
              </label>
              <span
                aria-hidden
                className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#6a6a64] text-[10px] font-semibold leading-none text-[#1a1c16]"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#8a8a84] bg-[#22241c] px-3 py-2.5 text-[15px] text-[#9a9a94] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[15px] text-[#b0b0aa]">Design URL</label>
              <span
                aria-hidden
                className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#6a6a64] text-[10px] font-semibold leading-none text-[#1a1c16]"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#9a9a94] bg-[#22241c] px-3 py-2.5 text-[15px] text-[#9a9a94] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3 pt-1">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#b3542a] px-6 py-2.5 text-[15px] font-medium text-[#d4a890]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#b3542a] px-6 py-2.5 text-[15px] font-medium text-[#d4a890]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <h2 className="text-lg font-medium text-[#c4c4c0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}
