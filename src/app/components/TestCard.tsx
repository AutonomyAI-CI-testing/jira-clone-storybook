const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 7.75h.01" />
  </svg>
);

const BUTTON_CLASS =
  "rounded-md bg-[#a0421d] px-7 py-3 font-primary-bold text-[20px] text-[#d98a63]";

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-[20px]">{label}</span>
      <InfoIcon className="h-6 w-6 shrink-0" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-14 w-full border-2 border-[#c4c4c4] bg-transparent px-4 text-[18px] placeholder:text-[#8b8b8b]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1c1c1c] font-primary text-[#d6d6d6]"
    >
      <div className="mx-auto flex w-full max-w-[508px] flex-col px-10 py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-[22px] leading-none">
            UI magician Agent
          </h1>
          <GearIcon className="h-6 w-6 shrink-0" />
        </div>

        <div className="mt-7 flex min-w-0 items-center gap-3 text-[#8b8b8b]">
          <ChevronUpIcon className="h-5 w-5 shrink-0" />
          <span className="truncate text-[18px]">
            From entire frame to a single component
          </span>
        </div>

        <div className="mt-20 flex items-center gap-3">
          <ChevronUpIcon className="h-6 w-6 shrink-0" />
          <h2 className="font-primary-bold text-[24px] leading-none">
            Add New Design
          </h2>
        </div>

        <div className="mt-14">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-8">
          <Field label="Design URL" placeholder="https://www.figma.com/file:" />
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button type="button" className={BUTTON_CLASS}>
            Awesome
          </button>
          <button type="button" className={BUTTON_CLASS}>
            Prepare
          </button>
        </div>

        <h2 className="mt-20 font-primary-bold text-[24px] leading-none">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

interface IconProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
