export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-full max-w-md bg-[#1a1a1a] px-6 py-6 font-sans text-[#c8c8c8]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-medium text-[#d4d4d4]">UI magician Agent</h1>
          <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
            <svg
              width="22"
              height="22"
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

        {/* Collapsed section row */}
        <button
          type="button"
          className="mb-10 flex w-full items-center gap-2 text-left text-sm text-[#9a9a9a]"
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
        <div className="mb-5 flex items-center gap-2 text-[#c8c8c8]">
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
          <h2 className="text-lg font-medium">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-base text-[#b0b0b0]">Personal Access Token</label>
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#8a8a8a] placeholder:text-[#6b6b6b] outline-none"
            defaultValue=""
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-base text-[#b0b0b0]">Design URL</label>
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="mb-12 flex gap-3 pl-2">
          <button
            type="button"
            className="rounded-md bg-[#a84b2f] px-8 py-2.5 text-base font-medium text-[#c4a090]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a84b2f] px-8 py-2.5 text-base font-medium text-[#c4a090]"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <h3 className="text-lg font-medium text-[#c8c8c8]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
