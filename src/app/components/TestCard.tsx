export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[#000000] font-['Inter',sans-serif]"
    >
      <div className="h-[9px] w-full bg-[#151515]" />

      <div className="flex items-start justify-between pl-[20px] pr-[24px] pt-[11px] text-[#b5b5b5]">
        <h2 className="text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[23px] text-[#8b9291]">
        <ChevronUpIcon className="h-[5px] w-[8px]" />
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[26px] text-[#b2b2b1]">
        <ChevronUpIcon className="h-[8px] w-[12px]" />
        <h3 className="text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </h3>
      </div>

      <div className="mt-[28px] flex items-center gap-[13px] pl-[20px] text-[#a4a4a3]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>

      <div className="mx-[20px] mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[#737470]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-[16px] pl-[20px] text-[#a3a3a2]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          Design URL
        </span>
        <InfoIcon />
      </div>

      <div className="mx-[20px] mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[20px] text-[#71726e]">
        <span className="text-[10.5px] font-semibold leading-[12.71px]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[23px] flex gap-[17px] pl-[44px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <p className="mt-[46px] px-[20px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="3.2" />
    <path d="M7 1.4v1.9M7 12.7v1.9M1.6 8h1.9M10.5 8h1.9M3.2 4.2l1.35 1.35M9.45 10.45l1.35 1.35M10.8 4.2 9.45 5.55M4.55 10.45 3.2 11.8" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.4" />
    <path d="M7.5 6.9v4.1" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

export default TestCard;
