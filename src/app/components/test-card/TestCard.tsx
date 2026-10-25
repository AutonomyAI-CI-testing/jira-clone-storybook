const CHEVRON_UP_PATH = "M1 6.5 6 1.5l5 5";

const SETTINGS_PATH =
  "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z";

const ChevronUpIcon = ({ className }: TestCardIconProps): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d={CHEVRON_UP_PATH}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = ({ className }: TestCardIconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d={SETTINGS_PATH}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const InfoIcon = ({ className }: TestCardIconProps): JSX.Element => (
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

const FIELD_LABEL =
  "flex items-center gap-[18px] text-[11.5px] leading-[13.92px]";
const FIELD_INPUT =
  "mt-3 h-9 w-[211px] border bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]";
const ACTION_BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078] transition-colors duration-100 hover:bg-[#6f3013]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#141414] px-5 pt-5 pb-[62px] font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <SettingsIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[14px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
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
      htmlFor="test-card-personal-access-token"
      className={`${FIELD_LABEL} mt-[28px] text-[#a4a4a3]`}
    >
      Personal Access Token
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-personal-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={`${FIELD_INPUT} border-[#a5adad]`}
    />

    <label
      htmlFor="test-card-design-url"
      className={`${FIELD_LABEL} mt-[11px] text-[#a3a3a2]`}
    >
      Design URL
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-design-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className={`${FIELD_INPUT} mt-[11px] h-[37px] border-2 border-[#929291] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]`}
    />

    <div className="mt-[22px] flex justify-end gap-[17px] pr-[3px]">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface TestCardIconProps {
  className?: string;
}
