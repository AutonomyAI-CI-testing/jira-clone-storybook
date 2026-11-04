const ACTIONS = ["Awesome", "Prepare"];

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className: string;
}) => (
  <div className={className}>
    <div className="flex items-center gap-2 text-font-subtle">
      <span className="text-2xs">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-2 w-full border border-border-bold bg-background-input px-4 py-2 text-2xs text-font placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark box-border w-[254px] bg-elevation-surface px-5 py-5 font-primary text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-sm">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon className="h-[5px] w-[8px] shrink-0" />
        <span className="truncate text-2xs">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[71px] flex items-center gap-2">
        <ChevronUpIcon className="h-[8px] w-[12px] shrink-0 text-font-subtle" />
        <h2 className="font-primary-bold text-sm">Add New Design</h2>
      </div>

      <Field
        className="mt-6"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        className="mt-3"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-8 flex justify-center gap-4">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-font-subtle"
          >
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-[44px] font-primary-bold text-sm">Recent Breakdowns</h2>
    </div>
  );
};
