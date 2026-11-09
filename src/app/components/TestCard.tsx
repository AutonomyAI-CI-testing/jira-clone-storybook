const inputClass =
  "rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-3 py-3 text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral700)]";

const actionButtonClass =
  "w-[150px] rounded bg-[var(--Orange800)] px-4 py-3 text-center text-[color:var(--DarkNeutral1000)]";

const ChevronUpIcon = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={className}
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className="h-5 w-5 shrink-0 text-[color:var(--DarkNeutral700)]"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className="h-4 w-4 shrink-0 text-[color:var(--DarkNeutral700)]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const FieldLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}): JSX.Element => (
  <div className="flex items-center gap-2">
    <label htmlFor={htmlFor} className="text-[color:var(--DarkNeutral900)]">
      {children}
    </label>
    <InfoIcon />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[400px] bg-[var(--DarkNeutral100)] px-6 py-6 font-primary text-sm text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <ChevronUpIcon className="h-4 w-4 shrink-0 text-[color:var(--DarkNeutral700)]" />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[color:var(--DarkNeutral800)]" />
      <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-6 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="test-card-access-token">
          Personal Access Token
        </FieldLabel>
        <input
          id="test-card-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="test-card-design-url">Design URL</FieldLabel>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-center gap-8">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-14 font-primary-black text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
