/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma
 * panel. Takes no props and holds no state; every value is inlined from the
 * design so the component can be rendered on its own.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[#000000] px-[20px] pt-[20px] font-[Inter,sans-serif]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon className="h-[5px] w-[8px] text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronUpIcon className="h-[8px] w-[12px] text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[26px] flex h-[15px] items-center gap-[6px]">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[13px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[9px] flex h-[15px] items-center gap-[6px]">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[12px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Section header */}
      <div className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 14 16"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className="h-[16px] w-[14px] shrink-0 text-[#b5b5b5]"
  >
    <circle cx="7" cy="8" r="4.2" />
    <path
      d="M7 1.2v2.2M7 12.6v2.2M1.2 8h2.2M10.6 8h2.2M2.9 3.9l1.6 1.6M9.5 10.5l1.6 1.6M11.1 3.9l-1.6 1.6M4.5 10.5l-1.6 1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 7L6 2L11 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.9v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);
