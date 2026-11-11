const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.11-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.11a1.7 1.7 0 0 0 1.55-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.11a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.11a1.7 1.7 0 0 0-1.49 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 10.8v5.4" />
    <path d="M12 7.4h.01" strokeWidth="2.4" />
  </svg>
);

const actionButtonClass =
  "h-[62px] w-[172px] cursor-pointer rounded-lg bg-[#9c3d1c] font-primary-bold text-[15px] text-[#a8a8a8]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-bold text-[15px] text-[#dedede]"
      >
        {label}
      </label>
      <button
        type="button"
        aria-label={`More information about ${label}`}
        className="flex cursor-pointer items-center text-[#9a9a9a]"
      >
        <InfoIcon />
      </button>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-[10px] h-[62px] w-full border border-[#8b8b8b] bg-[#2a2725] px-10 font-primary text-[15px] text-[#e6e6e6] placeholder:text-[#9a9a9a]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1f1b19] px-[36px] pt-[46px] pb-[60px] font-primary text-[#9a9a9a]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[20px] leading-none text-[#f2f2f2]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center text-[#c8c8c8]"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-[10px] text-[15px]">
      <ChevronUpIcon />
      <span>From entire frame to a singl…</span>
    </div>

    <h2 className="mt-[110px] flex items-center gap-[10px] font-primary-black text-[20px] leading-none text-[#f2f2f2]">
      <ChevronUpIcon />
      Add New Design
    </h2>

    <div className="mt-16">
      <Field
        id="testcard-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-11">
      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-[52px] flex gap-[36px]">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[126px] font-primary-black text-[20px] leading-none text-[#f2f2f2]">
      Recent Breakdowns
    </h2>
  </div>
);
