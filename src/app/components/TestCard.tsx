const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const chevronUpIcon = (
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
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const infoIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const settingsIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-10 font-primary text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-2xl text-[var(--Neutral300)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[var(--Neutral300)] hover:text-[var(--DarkNeutral800)]"
      >
        {settingsIcon}
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      {chevronUpIcon}
      <p className="min-w-0 truncate text-lg">From entire frame to a singl...</p>
    </div>

    <div className="mt-16 flex items-center gap-3 text-[var(--Neutral300)]">
      {chevronUpIcon}
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8 space-y-6">
      {FIELDS.map(({ id, label, placeholder }) => (
        <div key={id}>
          <div className="flex items-center gap-3 text-[var(--Neutral300)]">
            <label htmlFor={id} className="font-primary-bold text-lg">
              {label}
            </label>
            {infoIcon}
          </div>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className="mt-3 w-full border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-4 py-5 text-lg text-[var(--Neutral300)] placeholder:text-[var(--DarkNeutral700)]"
          />
        </div>
      ))}
    </div>

    <div className="mt-8 flex gap-8">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="flex-1 rounded-lg bg-[var(--Orange800)] py-5 text-lg font-primary-bold text-[var(--DarkNeutral800)] hover:bg-[var(--Orange900)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-[var(--Neutral300)]">
      Recent Breakdowns
    </h2>
  </div>
);
