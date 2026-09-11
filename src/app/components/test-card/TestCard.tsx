// Smoke-test component generated from a Figma reference ("UI magician Agent" panel).
// Self-contained, static, no props — approximate visual fidelity only.

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[280px] flex-col gap-6 rounded-md bg-[#171716] p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#b5b5b5]"
        >
          <path
            d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9c.2-.63.06-1.3-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .68.39 1.29 1 1.51.63.2 1.3.06 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.39.52-.53 1.19-.33 1.82.2.61.81 1 1.49 1H21a2 2 0 1 1 0 4h-.09c-.68 0-1.29.39-1.51 1Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Collapsed "From entire frame..." row */}
      <div className="flex items-center gap-2">
        <svg width="10" height="6" viewBox="0 0 12 8" fill="none">
          <path
            d="M1 6.5 6 1.5 11 6.5"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 6.5 6 1.5 11 6.5"
              stroke="#b2b2b1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="#8c8c8c" />
              <path
                d="M8 7v4M8 5.2v.1"
                stroke="#8c8c8c"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            disabled
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="#8c8c8c" />
              <path
                d="M8 7v4M8 5.2v.1"
                stroke="#8c8c8c"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            disabled
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            disabled
            className="rounded-[4px] bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            disabled
            className="rounded-[4px] bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
