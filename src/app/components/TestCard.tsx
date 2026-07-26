export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-5 text-white font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight text-zinc-200">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-zinc-400 hover:text-zinc-200"
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
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-zinc-400"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7.5L6 4.5L9 7.5" />
          </svg>
          <span className="truncate">From entire frame to a single component…</span>
        </button>

        {/* Add New Design */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-zinc-300"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7.5L6 4.5L9 7.5" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <label className="mb-2 flex items-center gap-2 text-sm text-zinc-300">
              Personal Access Token
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-500 text-[10px] text-zinc-400">
                i
              </span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-zinc-500 bg-[#222222] px-3 py-2.5 text-sm text-zinc-300 outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <label className="mb-2 flex items-center gap-2 text-sm text-zinc-300">
              Design URL
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-500 text-[10px] text-zinc-400">
                i
              </span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-zinc-500 bg-[#222222] px-3 py-2.5 text-sm text-zinc-300 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#9a4d2e] px-6 py-2.5 text-sm font-medium text-zinc-200"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#9a4d2e] px-6 py-2.5 text-sm font-medium text-zinc-200"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4">
          <h2 className="text-base font-medium text-zinc-300">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
