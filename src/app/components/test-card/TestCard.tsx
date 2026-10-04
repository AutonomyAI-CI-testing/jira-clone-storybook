const fieldClass = "mt-3 w-full bg-[#272822] px-[19px]";

const actionButtonClass =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 pt-5 font-primary text-[13.5px] leading-[16.34px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5]">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Collapsed section row */}
      <div className="mt-[18px] flex items-center gap-2">
        <CaretUpSmall />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[77px] flex items-center gap-2">
        <CaretUpLarge />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px]">
        <div className="flex items-center gap-3">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${fieldClass} h-9 border border-[#a5adad] text-[11.5px] leading-[13.92px] placeholder:text-[#737470]`}
        />
      </div>

      {/* Design URL */}
      <div className="mt-[11px]">
        <div className="flex items-center gap-3">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={`${fieldClass} h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] placeholder:text-[#71726e]`}
        />
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="3.2" />
    <path d="M7 1v2M7 13v2M1.5 4.5l1.8 1M10.7 10.5l1.8 1M1.5 11.5l1.8-1M10.7 5.5l1.8-1" />
  </svg>
);

const CaretUpSmall = (): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="#8b9291"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4L4 1L7 4" />
  </svg>
);

const CaretUpLarge = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="#b2b2b1"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5L6 1.5L11 6.5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.8v3.4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.7" fill="#a4a4a3" stroke="none" />
  </svg>
);
