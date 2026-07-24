export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[280px] min-h-[520px] bg-[#1C1D17] px-5 py-5 text-[#e8e8e8] font-sans">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-base font-medium tracking-wide text-[#e8e8e8]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-6 w-6 items-center justify-center text-[#9a9a9a]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed section */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#b0b0b0]"
        >
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M1 6.5L6 1.5L11 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c8]"
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">
                Personal Access Token
              </label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6b6b] text-[10px] text-[#9a9a9a]"
                aria-label="More info"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#c8c8c8] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">Design URL</label>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b6b6b] text-[10px] text-[#9a9a9a]"
                aria-label="More info"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#c8c8c8] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#843A17] px-6 py-2.5 text-sm font-medium text-[#c4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#843A17] px-6 py-2.5 text-sm font-medium text-[#c4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="mt-10 text-base font-medium text-[#c8c8c8]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

export default TestCard;
