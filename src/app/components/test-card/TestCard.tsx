const ChevronUpIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="4.6" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="8" cy="8" r="1.7" stroke="currentColor" strokeWidth="1.4" />
    <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M12.6 8h2" />
      <path d="m11.25 11.25 1.42 1.42" />
      <path d="M8 12.6v2" />
      <path d="m4.75 11.25-1.42 1.42" />
      <path d="M3.4 8h-2" />
      <path d="M4.75 4.75 3.33 3.33" />
      <path d="M8 3.4v-2" />
      <path d="m11.25 4.75 1.42-1.42" />
    </g>
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.3v4.1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" />
  </svg>
);

const fieldClassName =
  "h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]";

const labelClassName =
  "flex items-center gap-4 text-[11.5px] leading-[13.92px]";

const buttonClassName =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1a1a1a] px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[14px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label
      htmlFor="test-card-token"
      className={`mt-[28px] text-[#a4a4a3] ${labelClassName}`}
    >
      Personal Access Token
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={`mt-3 ${fieldClassName}`}
    />

    <label
      htmlFor="test-card-url"
      className={`mt-[11px] text-[#a3a3a2] ${labelClassName}`}
    >
      Design URL
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px] pr-[3px]">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className?: string;
}
