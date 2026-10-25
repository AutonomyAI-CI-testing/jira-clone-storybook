interface IconProps {
  className?: string;
}

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
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

const SettingsIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="4.6" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M13 8h1.6M11.54 11.54l1.13 1.13M8 13v1.6M4.46 11.54l-1.13 1.13M3 8H1.4M4.46 4.46 3.33 3.33M8 3V1.4M11.54 4.46l1.13-1.13" />
    </g>
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.4v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" />
  </svg>
);

const FIELD_LABEL_CLASS =
  "mt-[11px] flex items-center gap-4 text-[11.5px] leading-[13.92px]";
const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#121212] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <SettingsIcon className="h-4 w-[14px] shrink-0" />
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
      htmlFor="test-card-access-token"
      className={`${FIELD_LABEL_CLASS} text-[#a4a4a3]`}
    >
      Personal Access Token
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <label
      htmlFor="test-card-design-url"
      className={`${FIELD_LABEL_CLASS} text-[#a3a3a2]`}
    >
      Design URL
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-design-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px] pr-[3px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
