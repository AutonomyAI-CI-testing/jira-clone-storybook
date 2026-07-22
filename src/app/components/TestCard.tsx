export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-5 text-[#d4d4d4]"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-base font-medium tracking-wide text-[#d4d4d4]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#a3a3a3] hover:text-[#e5e5e5]"
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

      {/* Collapsed hint */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#a3a3a3]"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 -rotate-90"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-5">
        <button
          type="button"
          className="mb-5 flex items-center gap-2 text-[15px] font-medium text-[#d4d4d4]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 -rotate-90"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          Add New Design
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#d4d4d4]">
              Personal Access Token
            </label>
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#737373] text-[10px] text-[#a3a3a3]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#525252] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#a3a3a3] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#d4d4d4]">Design URL</label>
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#737373] text-[10px] text-[#a3a3a3]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#a3a3a3] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#a3a3a3] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a3532a] px-6 py-2.5 text-sm font-medium text-[#d4d4d4]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a3532a] px-6 py-2.5 text-sm font-medium text-[#d4d4d4]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-[15px] font-medium text-[#d4d4d4]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
