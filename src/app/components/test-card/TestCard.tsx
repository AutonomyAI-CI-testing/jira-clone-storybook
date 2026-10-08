/**
 * TestCard — static, self-contained reproduction of the "Add New Design" panel
 * from the Figma "Test Page — Simple" frame. Smoke test only: no props, no
 * state, no interactivity.
 *
 * Colours come from the palette variables declared in src/app/styles/app.css
 * (DarkNeutral / Neutral / Orange ramps) rather than literals, since the source
 * frame's greys sit within a few percent of those ramp values.
 */

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0 text-[var(--DarkNeutral1000)]"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CaretUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px] shrink-0 text-[var(--DarkNeutral900)]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <path d="M12 7.6h.01" />
  </svg>
);

const inputClasses =
  "mt-3 h-16 w-full rounded-sm border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-3 font-primary-light text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--Neutral500)]";

const buttonClasses =
  "h-16 min-w-[168px] rounded-md bg-[var(--Orange800)] px-6 font-primary-bold text-[17px] text-[var(--DarkNeutral1100)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="mx-auto flex min-h-screen w-full max-w-[508px] flex-col bg-[var(--DarkNeutral0)] px-11 py-8 font-primary text-[var(--DarkNeutral1100)]"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-black text-[22px] leading-tight text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-6 flex items-center gap-3 font-primary-light text-[15px] text-[var(--DarkNeutral900)]">
        <CaretUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <h2 className="mt-32 flex items-center gap-3 font-primary-black text-[20px] leading-tight text-[var(--DarkNeutral1100)]">
        <CaretUpIcon />
        Add New Design
      </h2>

      <div className="mt-8">
        <label
          htmlFor="testCardToken"
          className="flex items-center gap-2 font-primary-light text-[15px] text-[var(--DarkNeutral1000)]"
        >
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          id="testCardToken"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputClasses}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="testCardUrl"
          className="flex items-center gap-2 font-primary-light text-[15px] text-[var(--DarkNeutral1000)]"
        >
          Design URL
          <InfoIcon />
        </label>
        <input
          id="testCardUrl"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={inputClasses}
        />
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-center gap-9">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>

      <h2 className="mt-28 font-primary-black text-[20px] leading-tight text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
