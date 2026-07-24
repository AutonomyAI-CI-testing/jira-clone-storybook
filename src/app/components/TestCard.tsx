export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-lg bg-[#1a1a1a] p-6 text-[#e8e8e8] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-medium tracking-tight">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#c4c4c4]">
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
        className="mb-8 flex w-full items-center gap-2 text-left text-[15px] text-[#d0d0d0]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Expanded: Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-lg font-medium text-[#d8d8d8]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        <div className="mb-4">
          <label className="mb-2 flex items-center gap-2 text-[15px] text-[#c8c8c8]">
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-[15px] text-[#d0d0d0] outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-[15px] text-[#c8c8c8]">
            Design URL
            <InfoIcon />
          </label>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-[15px] text-[#d0d0d0] outline-none"
          />
        </div>

        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-[#a8542f] px-8 py-2.5 text-[15px] font-medium text-[#c4a090]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-lg bg-[#a8542f] px-8 py-2.5 text-[15px] font-medium text-[#c4a090]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-lg font-medium text-[#d8d8d8]">Recent Breakdowns</div>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#c0c0c0]"
    >
      <path
        d="M1 6.5L6 1.5L11 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="text-[#9a9a9a]"
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 7v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export default TestCard;
