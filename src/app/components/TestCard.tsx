const buttonClassName =
  "h-[37px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 pb-[62px] pt-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronSmall />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronLarge />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-[6px]">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        aria-label="Personal Access Token"
        className="mt-3 w-full border border-[#a5adad] bg-[#272822] px-[18px] py-[10px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus-visible:outline-none"
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[6px]">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        aria-label="Design URL"
        className="mt-[11px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] py-[10px] text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus-visible:outline-none"
      />

      {/* Buttons */}
      <div className="mx-auto mt-[22px] grid w-[187px] grid-cols-2 gap-[17px]">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#d6d6d6]"
  >
    <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M19.2 14.8a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#9a9a9a]"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLarge = () => (
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
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#b0b0b0]"
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.9V11"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.85" fill="currentColor" />
  </svg>
);
