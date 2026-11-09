/**
 * TestCard
 *
 * A self-contained render of the "UI magician Agent" panel from the attached
 * Figma frame. Smoke test only: no props, no state, no handlers, and it is not
 * wired into any route.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <GearIcon className="h-7 w-7 shrink-0 text-font-subtle" />
    </div>

    {/* Collapsed row */}
    <div className="mt-8 flex items-center gap-4 text-font-subtle">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="max-w-[300px] truncate text-lg">
        From entire frame to a single component
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-40 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-16">
      <div className="flex items-center gap-4">
        <label
          htmlFor="personal-access-token"
          className="font-primary-bold text-base"
        >
          Personal Access Token
        </label>
        <InfoIcon className="h-5 w-5 shrink-0 text-font-subtle" />
      </div>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-5 w-full rounded border border-border-bold bg-elevation-surface-raised px-5 py-4 font-primary-light text-font placeholder:text-font-subtlest"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6">
      <div className="flex items-center gap-4">
        <label htmlFor="design-url" className="font-primary-bold text-base">
          Design URL
        </label>
        <InfoIcon className="h-5 w-5 shrink-0 text-font-subtle" />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-5 w-full rounded border border-border-bold bg-elevation-surface-raised px-5 py-4 font-primary-light text-font placeholder:text-font-subtlest"
      />
    </div>

    {/* Actions */}
    <div className="mt-12 flex gap-6">
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-4 text-base text-[color:var(--Neutral0)] hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-4 text-base text-[color:var(--Neutral0)] hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

/* Icons — no settings, chevron or info glyph exists in the shared icon set, so
   they are drawn here as inline SVG on `currentColor`. */

const GearIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
