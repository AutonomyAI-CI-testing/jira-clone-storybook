const ChevronUpIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 24 24" aria-hidden="true">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <rect
        key={angle}
        x="10.6"
        y="1.4"
        width="2.8"
        height="5"
        rx="0.7"
        fill="currentColor"
        transform={`rotate(${angle} 12 12)`}
      />
    ))}
    <circle
      cx="12"
      cy="12"
      r="7.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="3.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
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
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const inputClasses =
  "mt-[12px] w-full bg-[#272822] px-3 py-[10px] text-2xs text-[#737470] placeholder:text-[#737470]";

const buttonClasses =
  "w-[85px] rounded bg-[#843a17] py-[11px] font-primary-bold text-2xs text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#0e0e0e] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between gap-3">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 text-[#b5b5b5]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <span className="shrink-0">
        <ChevronUpIcon width={8} height={5} />
      </span>
      <span className="truncate text-2xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-[75px] flex items-center gap-2 text-[#b2b2b1]">
      <span className="shrink-0">
        <ChevronUpIcon width={12} height={8} />
      </span>
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <div className="mt-[30px]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
        <button
          type="button"
          aria-label="About the personal access token"
          className="shrink-0 text-[#a4a4a3]"
        >
          <InfoIcon />
        </button>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${inputClasses} border border-[#a5adad]`}
      />
    </div>

    <div className="mt-[20px]">
      <div className="flex items-center gap-3">
        <span className="text-2xs text-[#a3a3a2]">Design URL</span>
        <button
          type="button"
          aria-label="About the design URL"
          className="shrink-0 text-[#a3a3a2]"
        >
          <InfoIcon />
        </button>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={`${inputClasses} border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e]`}
      />
    </div>

    <div className="mt-[23px] flex gap-[17px]">
      <button type="button" className={buttonClasses}>
        Awesome
      </button>
      <button type="button" className={buttonClasses}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[46px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
