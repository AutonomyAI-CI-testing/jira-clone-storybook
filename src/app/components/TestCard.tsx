interface IconProps {
  className: string;
}

const ChevronUp = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.4v4.2" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 text-[11.5px] font-semibold leading-[13.92px]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px]">
      <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[#a4a4a3]">
      <label htmlFor="personal-access-token">Personal Access Token</label>
      <InfoIcon className="h-[15px] w-[15px]" />
    </div>
    <input
      id="personal-access-token"
      name="personal-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[#b5b5b5] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2 text-[#a3a3a2]">
      <label htmlFor="design-url">Design URL</label>
      <InfoIcon className="h-[15px] w-[15px]" />
    </div>
    <input
      id="design-url"
      name="design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[19px] text-[10.5px] leading-[12.71px] text-[#b5b5b5] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
