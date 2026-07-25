export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-full max-w-[420px] bg-[#1a1f14] px-6 py-8 text-[#c8c8c4]"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-medium tracking-tight text-[#c8c8c4]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#9a9a94] hover:text-[#c8c8c4]"
        >
          <svg
            width="22"
            height="22"
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
        className="mb-10 flex w-full items-center gap-2 text-left text-[#9a9a94]"
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
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className="truncate text-base">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-12">
        <button
          type="button"
          className="mb-6 flex w-full items-center gap-2 text-left text-lg font-medium text-[#c8c8c4]"
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
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <label className="mb-2 flex items-center gap-2 text-base text-[#c8c8c4]">
          Personal Access Token
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6a6a64] text-xs text-[#9a9a94]"
            aria-hidden="true"
          >
            i
          </span>
        </label>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxx"
          className="mb-5 w-full rounded border border-[#6a6a64] bg-[#1f241c] px-3 py-2.5 text-sm text-[#9a9a94] outline-none"
        />

        {/* Design URL */}
        <label className="mb-2 flex items-center gap-2 text-base text-[#c8c8c4]">
          Design URL
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6a6a64] text-xs text-[#9a9a94]"
            aria-hidden="true"
          >
            i
          </span>
        </label>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="mb-6 w-full rounded border border-[#6a6a64] bg-[#1f241c] px-3 py-2.5 text-sm text-[#9a9a94] outline-none"
        />

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#b85c38] px-8 py-2.5 text-base font-medium text-[#d4b5a0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b85c38] px-8 py-2.5 text-base font-medium text-[#d4b5a0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-medium text-[#c8c8c4]">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
