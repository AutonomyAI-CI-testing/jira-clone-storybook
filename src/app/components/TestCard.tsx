const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M3.5 10 8 5.5 12.5 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 10.6 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.25" />
    <path
      d="M10 9.25v4"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <circle cx="10" cy="6.5" r="0.9" fill="currentColor" />
  </svg>
);

const CollapsibleRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <ChevronUpIcon />
    {children}
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-sm text-font-subtle">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full rounded bg-background-input p-3 text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

const ACTIONS = ["Awesome", "Prepare"] as const;

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-elevation-surface-sunken p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex h-6 w-6 items-center justify-center rounded-full text-font-subtle hover:bg-background-neutral"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-6">
        <CollapsibleRow>
          <span className="truncate text-font-subtle">
            From entire frame to a singl...
          </span>
        </CollapsibleRow>
      </div>

      <div className="mt-16">
        <CollapsibleRow>
          <h3 className="font-primary-bold text-lg">Add New Design</h3>
        </CollapsibleRow>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <Field
          id="testcard-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testcard-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-6">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="rounded bg-[var(--Orange700)] px-8 py-3 text-white hover:bg-[var(--Orange800)] active:bg-[var(--Orange900)]"
          >
            {action}
          </button>
        ))}
      </div>

      <h3 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
};
