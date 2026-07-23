export function TestCard() {
  return (
    <div id="testElem">
      <div className="flex w-full max-w-[360px] flex-col gap-8 bg-[#1a1a1a] px-6 py-8 text-[#e5e5e5]">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="m-0 text-lg font-medium text-[#e5e5e5]">
              UI magician Agent
            </h1>
            <button
              type="button"
              aria-label="Settings"
              className="flex h-6 w-6 items-center justify-center border-0 bg-transparent p-0 text-[#a3a3a3]"
            >
              <svg
                width="18"
                height="18"
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

          <div className="flex items-center gap-2 text-sm text-[#a3a3a3]">
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
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span className="truncate">From entire frame to a singl...</span>
          </div>
        </div>

        {/* Add New Design */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-base text-[#d4d4d4]">
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
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </div>

          {/* Personal Access Token */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-[#d4d4d4]">
              <span>Personal Access Token</span>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#737373] text-[10px] text-[#a3a3a3]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              value="figd_xxxxxxxxxxxxxxx"
              className="box-border w-full rounded border border-[#525252] bg-[#222222] px-3 py-2.5 text-sm text-[#a3a3a3] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-[#d4d4d4]">
              <span>Design URL</span>
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#737373] text-[10px] text-[#a3a3a3]"
                aria-hidden="true"
              >
                i
              </span>
            </div>
            <input
              type="text"
              readOnly
              value="https://www.figma.com/file/:"
              className="box-border w-full rounded border border-[#737373] bg-[#222222] px-3 py-2.5 text-sm text-[#a3a3a3] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="mt-1 flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-md border-0 bg-[#a85a2a] px-8 py-2.5 text-sm font-medium text-[#e5e5e5]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md border-0 bg-[#a85a2a] px-8 py-2.5 text-sm font-medium text-[#e5e5e5]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-2 text-base text-[#d4d4d4]">Recent Breakdowns</div>
      </div>
    </div>
  );
}
