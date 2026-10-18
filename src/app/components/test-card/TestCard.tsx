const SettingsIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-light text-lg text-[var(--DarkNeutral700)]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[68px] w-full rounded-[2px] border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-8 font-primary-light text-lg text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral700)]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[64px] w-[170px] rounded-md bg-[var(--Orange800)] font-primary text-lg text-[var(--DarkNeutral1000)] hover:brightness-110 active:brightness-95"
  >
    {children}
  </button>
);

interface ActionButtonProps {
  children: string;
}

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pt-12 pb-16 font-primary-light text-[var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[var(--DarkNeutral700)] hover:text-[var(--DarkNeutral1000)]"
        >
          <SettingsIcon />
        </button>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center gap-4 text-left text-base text-[var(--DarkNeutral700)]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      <div className="h-[150px]" />

      <div className="flex items-center gap-4">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-14 flex flex-col gap-8">
        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex gap-9 pl-12">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};
