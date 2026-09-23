const GearIcon = () => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#0f0f0f] p-5 font-primary text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsible summary row */}
      <div className="mt-3 flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#8b9291]">
        <ChevronUpIcon size={8} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-10 flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        <ChevronUpIcon size={12} />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5 flex items-center gap-2">
        <label
          htmlFor="testcard-token"
          className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="testcard-token"
        type="text"
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-[36px] w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none"
      />

      {/* Design URL */}
      <div className="mt-4 flex items-center gap-2">
        <label
          htmlFor="testcard-url"
          className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="testcard-url"
        type="text"
        defaultValue="https://www.figma.com/file/:"
        className="mt-2 h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] outline-none"
      />

      {/* Actions */}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          className="h-[37px] flex-1 rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] flex-1 rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-16 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
