const ACTION_BUTTON_CLASS =
  "flex h-[62px] w-[172px] cursor-pointer items-center justify-center rounded-md bg-[#9e4a21] font-primary-bold text-[17px] text-[#c9c9c9]";

const ChevronUpIcon = ({ size = 20 }: { size?: number }): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <label className="block">
    <span className="flex items-center gap-3 font-primary-bold text-[16px] text-[#c9c9c9]">
      {label}
      <InfoIcon />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className="mt-8 h-[60px] w-full rounded border border-[#8c8c8c] bg-[#2b2b2b] px-4 text-[17px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1c1c1c] px-10 py-10 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[22px] leading-[28px]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-12 flex items-center gap-4 text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="text-[17px]">From entire frame to a singl…</span>
    </div>

    <div className="mt-44 flex items-center gap-4">
      <ChevronUpIcon size={24} />
      <h2 className="font-primary-bold text-[22px] leading-[28px]">
        Add New Design
      </h2>
    </div>

    <div className="mt-20 flex flex-col gap-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="ml-12 mt-14 flex gap-9">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-[22px] leading-[28px]">
      Recent Breakdowns
    </h2>
  </div>
);
