export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[360px] flex-col gap-8 bg-[#1a1a1a] px-6 py-5 text-[#d8d8d8]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-[#e8e8e8]">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-8 w-8 items-center justify-center rounded text-[#b0b0b0] hover:text-[#e8e8e8]"
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
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section row */}
      <button
        type="button"
        className="flex items-center gap-2 text-left text-[15px] text-[#c8c8c8]"
      >
        <ChevronUp className="rotate-180 opacity-80" />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design section */}
      <div className="flex flex-col gap-5">
        <button
          type="button"
          className="flex items-center gap-2 text-left text-[17px] font-medium text-[#d0d0d0]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-[15px] text-[#c8c8c8]">
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            type="text"
            defaultValue="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded-sm border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#b8b8b8] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-[15px] text-[#c8c8c8]">
            Design URL
            <InfoIcon />
          </label>
          <input
            type="text"
            defaultValue="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded-sm border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#b8b8b8] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="mt-1 flex gap-3 pl-1">
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a04a24] px-6 py-2.5 text-[15px] font-medium text-[#d8b8a8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a04a24] px-6 py-2.5 text-[15px] font-medium text-[#d8b8a8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-[17px] font-medium text-[#d0d0d0]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

const ChevronUp = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <span
    className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] leading-none text-[#9a9a9a]"
    aria-hidden="true"
  >
    i
  </span>
);
