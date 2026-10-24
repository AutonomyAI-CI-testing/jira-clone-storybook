const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }) => (
  <span className="flex items-center gap-3 text-lg text-[color:var(--DarkNeutral700)]">
    {children}
    <InfoIcon />
  </span>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-8 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-primary-black text-[color:var(--DarkNeutral1000)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[color:var(--DarkNeutral1000)]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex min-w-0 items-center gap-3 text-[color:var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-3 text-[color:var(--DarkNeutral1000)]">
      <ChevronUpIcon />
      <h2 className="text-2xl font-primary-black">Add New Design</h2>
    </div>

    <div className="mt-10">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-12 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-4 text-lg font-primary-light text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-8">
      <FieldLabel>Design URL</FieldLabel>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-12 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-4 text-lg font-primary-light text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-10 flex justify-center gap-12">
      <button
        type="button"
        className="h-14 w-44 rounded-md bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral700)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-14 w-44 rounded-md bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral700)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 text-2xl font-primary-black text-[color:var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);
