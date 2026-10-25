/**
 * TestCard — self-contained rendering of the "UI magician Agent" Figma panel.
 * Smoke-test component: no props, no state, no data. Approximate fidelity.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col rounded bg-[var(--DarkNeutral100)] px-5 py-5 font-primary-bold text-sm text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center text-[var(--DarkNeutral900)] hover:text-[var(--DarkNeutral1100)]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-2xs text-[var(--DarkNeutral600)]">
      <ChevronUpIcon width={8} height={5} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpIcon width={12} height={8} />
      <span>Add New Design</span>
    </div>

    <div className="mt-7 flex items-center gap-2 text-2xs text-[var(--DarkNeutral800)]">
      <label htmlFor="test-card-token">Personal Access Token</label>
      <InfoIcon />
    </div>
    <input
      id="test-card-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 text-2xs text-[var(--DarkNeutral800)] placeholder:text-[var(--DarkNeutral600)]"
    />

    <div className="mt-3 flex items-center gap-2 text-2xs text-[var(--DarkNeutral800)]">
      <label htmlFor="test-card-url">Design URL</label>
      <InfoIcon />
    </div>
    <input
      id="test-card-url"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-9 w-full rounded border-2 border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-3 text-2xs text-[var(--DarkNeutral800)] placeholder:text-[var(--DarkNeutral600)]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[var(--DarkNeutral800)] hover:bg-[var(--Orange900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[var(--DarkNeutral800)] hover:bg-[var(--Orange900)]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-12">Recent Breakdowns</p>
  </div>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.2 7.2 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M8 7.3v4.1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="1" fill="currentColor" />
  </svg>
);
