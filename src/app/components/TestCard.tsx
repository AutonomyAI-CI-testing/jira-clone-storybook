const GearIcon = () => (
  <svg
    width="18"
    height="18"
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
);

const ChevronUpIcon = () => (
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
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-md bg-[#1C1D17] px-6 py-6 font-sans text-[#C8C8C8]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-base font-medium tracking-wide text-[#D0D0D0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-[#9A9A9A] hover:text-[#D0D0D0]"
          aria-label="Settings"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#A8A8A8]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-5 flex items-center gap-2 text-sm font-medium text-[#C8C8C8]"
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#B0B0B0]">
            Personal Access Token
            <span className="text-[#8A8A8A]">
              <InfoIcon />
            </span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#4A4A4A] bg-[#272822] px-3 py-2.5 text-sm text-[#A8A8A8] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#B0B0B0]">
            Design URL
            <span className="text-[#8A8A8A]">
              <InfoIcon />
            </span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded-sm border-2 border-[#A5ADAD] bg-[#272822] px-3 py-2.5 text-sm text-[#A8A8A8] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#A54E28] px-6 py-2.5 text-sm font-medium text-[#E8C4B0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[110px] rounded-md bg-[#A54E28] px-6 py-2.5 text-sm font-medium text-[#E8C4B0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-sm font-medium text-[#C8C8C8]">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
