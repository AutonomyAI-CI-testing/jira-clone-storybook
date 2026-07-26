export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[640px] w-full max-w-[420px] bg-[#1a1a1a] px-8 py-10 text-[#e8e8e8]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[22px] font-medium tracking-tight text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-8 w-8 items-center justify-center text-[#c4c4c4]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-[15px] text-[#b0b0b0]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-12">
        <button
          type="button"
          className="mb-6 flex w-full items-center gap-2 text-left text-[17px] font-medium text-[#d0d0d0]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[15px] text-[#c8c8c8]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
          />
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-[15px] text-[#c8c8c8]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded-sm border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#b8b8b8] outline-none"
          />
        </div>

        <div className="flex justify-center gap-3 pt-1">
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a85a2a] px-6 py-2.5 text-[15px] font-medium text-[#e8d5c8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a85a2a] px-6 py-2.5 text-[15px] font-medium text-[#e8d5c8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-[18px] font-medium text-[#e0e0e0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUp = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="shrink-0"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <span
    className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px] leading-none text-[#8a8a8a]"
    aria-hidden
  >
    i
  </span>
);

export default TestCard;
