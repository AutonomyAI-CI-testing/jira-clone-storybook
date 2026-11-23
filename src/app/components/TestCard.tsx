const fieldLabelClass = "text-[11.5px] font-semibold leading-[13.92px]";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

const ChevronUp = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M13.6 8 11.8 9.99 11.67 12.67 8.99 12.8 7 14.6 5.01 12.8 2.33 12.67 2.2 9.99 0.4 8 2.2 6.01 2.33 3.33 5.01 3.2 7 1.4 8.99 3.2 11.67 3.33 11.8 6.01Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" />
    <path
      d="M7.5 6.6v4.2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#121212] px-5 py-5 font-[Inter,sans-serif] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        UI magician Agent
      </span>
      <GearIcon className="shrink-0" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-2 shrink-0" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-[5px]">
      <ChevronUp className="h-2 w-3 shrink-0" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[27px]">
      <label
        htmlFor="testElem-token"
        className={`${fieldLabelClass} text-[#a4a4a3]`}
      >
        Personal Access Token
      </label>
      <InfoIcon className="shrink-0 text-[#a4a4a3]" />
    </div>

    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <label
        htmlFor="testElem-url"
        className={`${fieldLabelClass} text-[#a3a3a2]`}
      >
        Design URL
      </label>
      <InfoIcon className="shrink-0 text-[#a3a3a2]" />
    </div>

    <input
      id="testElem-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

interface IconProps {
  className?: string;
}
