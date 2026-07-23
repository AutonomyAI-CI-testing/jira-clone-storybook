export default function TestCard() {
  return (
    <div id="testElem">
      <div className="w-full max-w-md rounded-xl bg-[#1a1a1a] p-6 text-[#e8e8e8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a9a] hover:text-[#e8e8e8]"
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
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed breadcrumb row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-[#9a9a9a]"
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
            className="shrink-0"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate text-sm">
            From entire frame to a singl...
          </span>
        </button>

        {/* Add New Design section */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-lg font-medium text-[#c8c8c8]"
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
              className="shrink-0"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-base text-[#b0b0b0]">
                Personal Access Token
              </label>
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6b6b6b] text-xs text-[#9a9a9a]"
              >
                i
              </span>
            </div>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxxxxx"
              readOnly
              className="w-full rounded-md border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d0d0d0] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-base text-[#b0b0b0]">Design URL</label>
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6b6b6b] text-xs text-[#9a9a9a]"
              >
                i
              </span>
            </div>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full rounded-md border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d0d0d0] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-lg bg-[#a75a2a] px-8 py-2.5 text-base font-medium text-[#e8c4a8]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#a75a2a] px-8 py-2.5 text-base font-medium text-[#e8c4a8]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-10">
          <h2 className="text-lg font-medium text-[#c8c8c8]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}
