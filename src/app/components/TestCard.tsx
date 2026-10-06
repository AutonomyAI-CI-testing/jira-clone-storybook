// Smoke-test component: a static reproduction of the attached Figma frame.
// Deliberately self-contained — no props, no imports, no shared components.
// Values are approximate by design; this file is not part of the design system.

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoCircleIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="11" x2="12" y2="16" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const DesignField = ({
  id,
  label,
  labelClassName,
  placeholder,
  inputClassName,
}: {
  id: string;
  label: string;
  labelClassName: string;
  placeholder: string;
  inputClassName: string;
}): JSX.Element => (
  <div>
    <div className={`mb-2 flex items-center gap-2 ${labelClassName}`}>
      <label htmlFor={id}>{label}</label>
      <InfoCircleIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`h-9 w-full rounded-none bg-[#272822] px-3 font-[monospace] text-[11.5px] text-[#b5b5b5] focus:outline-none ${inputClassName}`}
    />
  </div>
);

const CardButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter] text-[11.5px] font-semibold text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px]">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-6 flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-24 flex items-center gap-2 text-[13.5px] text-[#b2b2b1]">
        <ChevronUpIcon />
        <h2>Add New Design</h2>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <DesignField
          id="personal-access-token"
          label="Personal Access Token"
          labelClassName="text-[#a4a4a3]"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          inputClassName="border border-[#a5adad] placeholder:text-[#737470]"
        />
        <DesignField
          id="design-url"
          label="Design URL"
          labelClassName="text-[#a3a3a2]"
          placeholder="https://www.figma.com/file/"
          inputClassName="border-2 border-[#929291] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-6 flex gap-[17px]">
        <CardButton label="Awesome" />
        <CardButton label="Prepare" />
      </div>

      <h2 className="mt-20 text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};
