const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0 text-icon-subtle"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
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
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <label className="text-base" htmlFor={id}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      className="mt-3 w-full rounded border border-border-bold bg-background-neutral px-4 py-4 text-base text-font placeholder:text-font-subtlest"
      id={id}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const Button = ({ children }: { children: string }) => (
  <button
    className="min-w-[140px] rounded-md bg-[var(--Orange800)] px-6 py-4 text-base text-font"
    type="button"
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div
      className="dark w-[508px] bg-elevation-surface px-10 pb-32 pt-8 font-primary text-font"
      id="testElem"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <GearIcon />
      </div>

      <div className="mt-10 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-36 flex items-center gap-2">
        <ChevronUpIcon />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-12 flex gap-5">
        <Button>Awesome</Button>
        <Button>Prepare</Button>
      </div>

      <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};
