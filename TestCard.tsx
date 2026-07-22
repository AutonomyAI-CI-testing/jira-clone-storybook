export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full max-w-sm bg-[#1a1c18] px-6 py-8 text-gray-200"
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <h1 className="text-xl font-semibold tracking-tight text-gray-100">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="mt-0.5 text-gray-400 hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section row */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
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

      {/* Add New Design section */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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

        {/* Personal Access Token */}
        <label className="mb-4 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-gray-300">
            Personal Access Token
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-500 text-[10px] text-gray-400"
              aria-hidden="true"
            >
              i
            </span>
          </span>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-gray-500 bg-[#2a2c28] px-3 py-2.5 text-sm text-gray-300 outline-none"
          />
        </label>

        {/* Design URL */}
        <label className="mb-6 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-gray-300">
            Design URL
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-500 text-[10px] text-gray-400"
              aria-hidden="true"
            >
              i
            </span>
          </span>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-gray-400 bg-[#2a2c28] px-3 py-2.5 text-sm text-gray-300 outline-none"
          />
        </label>

        {/* Action buttons */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-8 py-2.5 text-sm font-medium text-orange-100/90"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-8 py-2.5 text-sm font-medium text-orange-100/90"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-base font-medium text-gray-300">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
