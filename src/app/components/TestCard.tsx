export function TestCard(): JSX.Element {
  return (
    <div id="testElem">
      <div className="w-full max-w-md rounded-lg bg-[#1a1a1a] p-6 text-neutral-200">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-neutral-200">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-neutral-400 hover:text-neutral-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed section */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-neutral-400"
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
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Expanded: Add New Design */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-neutral-300"
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
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-neutral-300">
                Personal Access Token
              </label>
              <span
                aria-hidden
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400"
              >
                i
              </span>
            </div>
            <div className="rounded border border-neutral-600 bg-[#222] px-3 py-2.5 text-sm text-neutral-400">
              figd_xxxxxxxxxxxxxxx
            </div>
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-neutral-300">Design URL</label>
              <span
                aria-hidden
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400"
              >
                i
              </span>
            </div>
            <div className="rounded border border-neutral-500 bg-[#222] px-3 py-2.5 text-sm text-neutral-400">
              https://www.figma.com/file/:
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#a34b1e] px-8 py-2.5 text-sm font-medium text-neutral-300"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a34b1e] px-8 py-2.5 text-sm font-medium text-neutral-300"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-base text-neutral-300">Recent Breakdowns</div>
      </div>
    </div>
  );
}

export default TestCard;
