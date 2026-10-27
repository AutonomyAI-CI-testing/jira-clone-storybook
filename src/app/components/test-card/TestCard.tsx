/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel.
 *
 * Smoke test: the frame's dark palette is not one of this app's six themes, so it
 * is approximated with the raw ramp custom properties declared in
 * src/app/styles/app.css instead of the semantic theme tokens, which would render
 * a light panel. No props, no imports, no app state.
 */

const ChevronUp = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-[var(--DarkNeutral1100)]"
  >
    <path
      d="M6 15l6-6 6 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-[var(--DarkNeutral1100)]"
  >
    <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19.14 14.6a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.08a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-[var(--DarkNeutral1000)]"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 11.25v5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="7.6" r="1.1" fill="currentColor" />
  </svg>
);

const FieldLabel = ({ label }: { label: string }): JSX.Element => (
  <div className="flex items-center gap-4">
    <span className="font-primary-bold text-lg text-[var(--DarkNeutral1100)]">{label}</span>
    <InfoIcon />
  </div>
);

const StaticInput = ({ placeholder }: { placeholder: string }): JSX.Element => (
  <div className="mt-7 flex h-[68px] items-center border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-6">
    <span className="truncate text-lg text-[var(--DarkNeutral700)]">{placeholder}</span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral0)] px-10 py-10 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUp />
      <span className="text-lg text-[var(--DarkNeutral700)]">From entire frame to a singl…</span>
    </div>

    <div className="mt-40">
      <div className="flex items-center gap-3">
        <ChevronUp />
        <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">Add New Design</h2>
      </div>

      <div className="mt-14">
        <FieldLabel label="Personal Access Token" />
        <StaticInput placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx" />

        <div className="mt-6">
          <FieldLabel label="Design URL" />
          <StaticInput placeholder="https://www.figma.com/file/" />
        </div>
      </div>

      <div className="mt-12 flex gap-9 pl-12">
        <button
          type="button"
          className="flex h-[72px] w-[170px] items-center justify-center rounded-md bg-[var(--Orange800)] text-xl text-[var(--DarkNeutral1100)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[72px] w-[170px] items-center justify-center rounded-md bg-[var(--Orange800)] text-xl text-[var(--DarkNeutral1100)]"
        >
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
