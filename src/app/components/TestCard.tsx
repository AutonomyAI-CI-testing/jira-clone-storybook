export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] bg-[#1a1f1a] px-5 py-5 text-[#c8c8c8] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[18px] font-medium tracking-wide text-[#d4d4d4]">
          UI Magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-7 w-7 items-center justify-center text-[#9a9a9a]"
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

      {/* Frame summary */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-[13px] text-[#9a9a9a]"
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
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-5 flex items-center gap-2 text-[15px] font-medium text-[#b0b0b0]"
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
          Add New Design
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[13px] text-[#b8b8b8]">
              Personal Access Token
            </label>
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#7a7a7a] text-[10px] text-[#9a9a9a]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#5a5a5a] bg-[#2a2f2a] px-3 py-2.5 text-[13px] text-[#a8a8a8] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[13px] text-[#b8b8b8]">Design URL</label>
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#7a7a7a] text-[10px] text-[#9a9a9a]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#c0c0c0] bg-[#2a2f2a] px-3 py-2.5 text-[13px] text-[#b0b0b0] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pl-1">
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-6 py-2.5 text-[14px] font-medium text-[#d4a890]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-6 py-2.5 text-[14px] font-medium text-[#d4a890]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[15px] font-normal text-[#c0c0c0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
