const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0 text-[var(--DarkNeutral800)]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className ?? "h-4 w-4 shrink-0"}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0 text-[var(--DarkNeutral900)]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral-100)] px-8 py-6 font-primary text-sm text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <h3 className="font-primary-bold text-lg">Add New Design</h3>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="personal-access-token" className="text-[var(--DarkNeutral1000)]">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="personal-access-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-12 w-full rounded border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-4 text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="design-url" className="text-[var(--DarkNeutral1000)]">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="design-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-12 w-full rounded border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-4 text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-10 flex gap-8">
      <button
        type="button"
        className="h-14 w-[170px] rounded-lg bg-[var(--Orange800)] text-lg text-[var(--DarkNeutral1100)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-14 w-[170px] rounded-lg bg-[var(--Orange800)] text-lg text-[var(--DarkNeutral1100)]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
