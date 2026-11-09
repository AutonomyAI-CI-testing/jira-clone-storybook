/**
 * TestCard — a static approximation of a Figma frame (dark "UI magician Agent"
 * settings panel). Self-contained: no props, no state, no data fetching.
 *
 * Colours use this repo's raw palette variables as arbitrary values because the
 * panel is deliberately pinned to a dark look and no semantic role exists for a
 * non-theme surface. Type uses the font families, which are the weights here.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-10 bg-[var(--DarkNeutral0)] p-10 font-primary"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg text-[color:var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      <div className="flex items-center gap-2 text-sm text-[color:var(--DarkNeutral700)]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a single component</span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <ChevronUpIcon />
          <h3 className="font-primary-bold text-base text-[color:var(--DarkNeutral1100)]">
            Add New Design
          </h3>
        </div>

        <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxx" />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="flex justify-end gap-9 pt-4">
          <button type="button" className={BUTTON_CLASSES}>
            Awesome
          </button>
          <button type="button" className={BUTTON_CLASSES}>
            Prepare
          </button>
        </div>
      </div>

      <h3 className="font-primary-bold text-base text-[color:var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const BUTTON_CLASSES =
  "h-16 w-[172px] rounded bg-[var(--Orange800)] font-primary-bold text-base text-[color:var(--Orange300)]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-xs text-[color:var(--DarkNeutral700)]">
        {label}
        <InfoIcon />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="h-14 w-full rounded border border-[color:var(--DarkNeutral400)] bg-transparent px-4 text-sm text-[color:var(--DarkNeutral1000)] outline-none placeholder:text-[color:var(--DarkNeutral600)]"
      />
    </label>
  );
};

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[color:var(--DarkNeutral900)]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
