export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[340px] rounded-lg bg-[#1a1a1a] p-6 text-white">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-neutral-400 hover:text-white"
          >
            <svg
              width="20"
              height="20"
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
            className="shrink-0"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
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
              className="shrink-0"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Add New Design</span>
          </button>

          <div className="mb-4">
            <label className="mb-2 flex items-center gap-2 text-sm text-neutral-300">
              Personal Access Token
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400">
                i
              </span>
            </label>
            <input
              type="text"
              readOnly
              placeholder="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-neutral-600 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-300 placeholder:text-neutral-500 outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 flex items-center gap-2 text-sm text-neutral-300">
              Design URL
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-neutral-500 text-[10px] text-neutral-400">
                i
              </span>
            </label>
            <input
              type="text"
              readOnly
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border border-neutral-400 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-300 placeholder:text-neutral-500 outline-none"
            />
          </div>

          <div className="flex gap-3 pl-1">
            <button
              type="button"
              className="flex-1 rounded-md bg-[#b45309] px-4 py-2.5 text-sm font-medium text-orange-100/90"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 rounded-md bg-[#b45309] px-4 py-2.5 text-sm font-medium text-orange-100/90"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="text-base font-medium text-neutral-200">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
