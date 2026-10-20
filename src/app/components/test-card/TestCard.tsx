const ChevronUpIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 6.5 6 1.5l5 5" />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      className="h-[15px] w-[15px] shrink-0 text-[color:var(--DarkNeutral800)]"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="7.5" cy="7.5" r="6.8" />
      <path d="M7.5 7v3.2M7.5 4.6h.01" />
    </svg>
  );
};

const GearIcon = () => {
  return (
    <svg
      className="h-[16px] w-[14px] shrink-0 text-[color:var(--DarkNeutral900)]"
      viewBox="0 0 14 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="7" cy="8" r="3.2" />
      <circle cx="7" cy="8" r="5.1" />
      <path d="M12.1 8h1.1M10.61 4.39l.78-.78M7 2.9v-1.1M3.39 4.39l-.78-.78M1.9 8H.8M3.39 11.61l-.78.78M7 13.1v1.1M10.61 11.61l.78.78" />
    </svg>
  );
};

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[color:var(--DarkNeutral0)] px-[20px] pt-[20px] font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <ChevronUpIcon className="h-[5px] w-[8px] shrink-0 text-[color:var(--DarkNeutral700)]" />
        <span className="text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <ChevronUpIcon className="h-[8px] w-[12px] shrink-0 text-[color:var(--DarkNeutral900)]" />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center justify-between">
        <span className="text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[color:var(--DarkNeutral800)] bg-[color:var(--DarkNeutral200)] pl-[19px]">
        <span className="text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral600)]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-[5px]">
        <span className="text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[color:var(--DarkNeutral700)] bg-[color:var(--DarkNeutral200)] pl-[20px]">
        <span className="text-[10.5px] leading-[13px] text-[color:var(--DarkNeutral600)]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </span>
    </div>
  );
};
