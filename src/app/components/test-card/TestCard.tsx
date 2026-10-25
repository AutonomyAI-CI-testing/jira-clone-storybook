const ChevronUp = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5v-5" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 pb-28 pt-12 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-[var(--DarkNeutral1000)]"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3 text-[var(--DarkNeutral700)]">
      <ChevronUp />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-40" />

    <div className="flex items-center gap-3">
      <ChevronUp />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-16 flex flex-col">
      <div className="flex items-center gap-4">
        <label
          htmlFor="test-card-token"
          className="font-primary-light text-base text-[var(--DarkNeutral700)]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        name="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-5 h-16 rounded-sm border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral0)] px-9 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)]"
      />

      <div className="mt-10 flex items-center gap-4">
        <label
          htmlFor="test-card-url"
          className="font-primary-light text-base text-[var(--DarkNeutral700)]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        name="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-5 h-16 rounded-sm border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral0)] px-9 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-12 flex justify-end gap-8">
      <button
        type="button"
        className="h-[78px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary text-base text-[var(--DarkNeutral1000)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[78px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary text-base text-[var(--DarkNeutral1000)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);
