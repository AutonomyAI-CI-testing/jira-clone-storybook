const ChevronUp = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" />
    <path d="M7.5 7v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-[14px] shrink-0 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
  </svg>
);

const fieldClassName =
  "mt-3 h-[36px] w-full bg-[#272822] px-3 text-[11.5px] text-[#b5b5b5] outline-none placeholder:text-[#737470]";

const buttonClassName =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 pl-[3px]">
      <ChevronUp className="h-[5px] w-[8px] shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-primary-bold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[70px] flex items-center gap-2 pl-[5px]">
      <ChevronUp className="h-[8px] w-[12px] shrink-0 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] font-primary-bold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <label className="mt-8 block">
      <span className="flex items-center gap-2">
        <span className="text-[11.5px] font-primary-bold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${fieldClassName} border border-[#a5adad]`}
      />
    </label>

    <label className="mt-3 block">
      <span className="flex items-center gap-2">
        <span className="text-[11.5px] font-primary-bold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className={`${fieldClassName} border-2 border-[#929291] text-[10.5px] placeholder:text-[#71726e]`}
      />
    </label>

    <div className="mt-5 flex gap-4 pl-[25px]">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
