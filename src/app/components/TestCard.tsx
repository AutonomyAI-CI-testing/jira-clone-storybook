export function TestCard(): JSX.Element {
  return (
    <div id="testElem">
      <div className="min-h-[640px] w-full max-w-[420px] bg-[#1a1c16] px-6 py-6 text-[#c8c8c4]">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight text-[#c8c8c4]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#8a8a84] hover:text-[#c8c8c4]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed row */}
        <button
          type="button"
          className="mb-10 flex w-full items-center gap-2 text-left text-[15px] text-[#9a9a94]"
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
            aria-hidden="true"
            className="shrink-0"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-12">
          <button
            type="button"
            className="mb-6 flex w-full items-center gap-2 text-left text-lg font-medium text-[#b0b0aa]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[15px] text-[#c8c8c4]">
                Personal Access Token
              </label>
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6b6b66] text-[11px] text-[#8a8a84]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded-sm border border-[#6b6b66] bg-[#22241e] px-3 py-2.5 text-[14px] text-[#8a8a84] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[15px] text-[#c8c8c4]">Design URL</label>
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6b6b66] text-[11px] text-[#8a8a84]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded-sm border border-[#8a8a84] bg-[#22241e] px-3 py-2.5 text-[14px] text-[#8a8a84] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b85c2e] px-6 py-2.5 text-[15px] font-medium text-[#c4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[120px] rounded-md bg-[#b85c2e] px-6 py-2.5 text-[15px] font-medium text-[#c4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 text-[15px] text-[#c8c8c4]">Recent Breakdowns</div>
      </div>
    </div>
  );
}
