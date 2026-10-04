const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 text-[var(--DarkNeutral700)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[var(--DarkNeutral700)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-3.5 w-3.5 shrink-0 text-[var(--DarkNeutral700)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const inputClassName =
  "w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-3 py-2.5 font-primary text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full max-w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-8 py-8 font-primary text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-lg text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-10 flex flex-col">
        <div className="flex items-center gap-2 py-3">
          <ChevronUpIcon />
          <span className="truncate font-primary-light text-sm text-[var(--DarkNeutral800)]">
            From entire frame to a singl...
          </span>
        </div>
        <div className="flex items-center gap-2 py-3">
          <ChevronUpIcon />
          <span className="font-primary-black text-base text-[var(--DarkNeutral1100)]">
            Add New Design
          </span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <label
              htmlFor="test-card-access-token"
              className="font-primary text-sm text-[var(--DarkNeutral900)]"
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            id="test-card-access-token"
            className={inputClassName}
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <label
              htmlFor="test-card-design-url"
              className="font-primary text-sm text-[var(--DarkNeutral900)]"
            >
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            id="test-card-design-url"
            className={inputClassName}
            placeholder="https://www.figma.com/file/"
          />
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-6 py-2.5 font-primary text-sm text-[var(--DarkNeutral1100)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-6 py-2.5 font-primary text-sm text-[var(--DarkNeutral1100)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-14 font-primary-black text-lg text-[var(--DarkNeutral800)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
