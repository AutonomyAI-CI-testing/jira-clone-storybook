const TITLE = "UI magician Agent";
const SUBTITLE = "From entire frame to a singl...";
const SECTION_TITLE = "Add New Design";
const TOKEN_LABEL = "Personal Access Token";
const TOKEN_VALUE = "figd_xxxxxxxxxxxxxxxxxx";
const URL_LABEL = "Design URL";
const URL_VALUE = "https://www.figma.com/file/:";
const BUTTONS = ["Awesome", "Prepare"];
const RECENT_TITLE = "Recent Breakdowns";

const ICON_COLOR = "#b5b5b5";

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[16px] w-[14px] shrink-0"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={`${className} shrink-0`}
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="#d6d6d6"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4.5" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  value: string;
}

const Field = ({ label, value }: FieldProps) => (
  <div className="flex flex-col gap-[8px]">
    <div className="flex items-center gap-[8px]">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      value={value}
      aria-label={label}
      className="h-[37px] w-full border border-[#a5adad] bg-[#272822] px-[12px] text-[11.5px] font-semibold text-[#737470] outline-none"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#000000] px-[20px] py-[20px] font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        {TITLE}
      </span>
      <GearIcon />
    </div>

    <div className="mt-[14px] flex items-center gap-[10px]">
      <ChevronUpIcon className="h-[5px] w-[8px]" />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        {SUBTITLE}
      </span>
    </div>

    <div className="mt-[56px] flex items-center gap-[8px]">
      <ChevronUpIcon className="h-[8px] w-[12px]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        {SECTION_TITLE}
      </span>
    </div>

    <div className="mt-[24px] flex flex-col gap-[20px]">
      <Field label={TOKEN_LABEL} value={TOKEN_VALUE} />
      <Field label={URL_LABEL} value={URL_VALUE} />
    </div>

    <div className="mt-[24px] flex gap-[17px] pl-[24px]">
      {BUTTONS.map((button) => (
        <button
          key={button}
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          {button}
        </button>
      ))}
    </div>

    <span className="mt-[46px] text-[13.5px] font-semibold text-[#b2b2b1]">
      {RECENT_TITLE}
    </span>
  </div>
);
