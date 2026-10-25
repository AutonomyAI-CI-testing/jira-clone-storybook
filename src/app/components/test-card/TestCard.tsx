interface IconProps {
  className?: string;
}

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

const SettingsIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="4.6" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.5" />
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 1.4v1.9" />
      <path d="M8 12.7v1.9" />
      <path d="M1.4 8h1.9" />
      <path d="M12.7 8h1.9" />
      <path d="m3.33 3.33 1.34 1.34" />
      <path d="m11.33 11.33 1.34 1.34" />
      <path d="m12.67 3.33-1.34 1.34" />
      <path d="m4.67 11.33-1.34 1.34" />
    </g>
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.4v4.2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" />
  </svg>
);

const LABEL_CLASS = "flex items-center gap-4 text-[11.5px] leading-[13.92px]";

const INFO_ICON_CLASS = "h-[15px] w-[15px] shrink-0";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1a1a1a] px-5 pt-5 pb-[62px] font-primary"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <SettingsIcon className="h-4 w-[14px]" />
    </div>

    <div className="mt-[14px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
      <span className="truncate text-[11.5px] leading-[13.92px]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
      <ChevronUpIcon className="h-2 w-3 shrink-0" />
      <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
    </div>

    <label
      htmlFor="test-card-token"
      className={`mt-[28px] text-[#a4a4a3] ${LABEL_CLASS}`}
    >
      Personal Access Token
      <InfoIcon className={INFO_ICON_CLASS} />
    </label>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <label
      htmlFor="test-card-url"
      className={`mt-[11px] text-[#a3a3a2] ${LABEL_CLASS}`}
    >
      Design URL
      <InfoIcon className={INFO_ICON_CLASS} />
    </label>
    <input
      id="test-card-url"
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
