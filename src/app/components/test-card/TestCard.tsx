/**
 * TestCard
 *
 * Smoke-test reproduction of the "UI magician Agent" Figma panel: a dark
 * settings card with a collapsed summary row, an "Add New Design" section
 * holding two labelled fields, two action buttons and a "Recent Breakdowns"
 * heading.
 *
 * Self-contained on purpose: no props, no state, no handlers. The card pins the
 * `dark` theme class on its root so every child can name a semantic colour role
 * and still resolve to the dark values — no literal greys, except the button
 * rust, which has no role in this token set.
 */

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.3}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2.5" />
    <path d="M8 1.4v2M8 12.6v2M1.4 8h2M12.6 8h2M3.3 3.3l1.5 1.5M11.2 11.2l1.5 1.5M12.7 3.3l-1.5 1.5M4.8 11.2l-1.5 1.5" />
  </svg>
);

const ChevronUpIcon = ({
  className = "h-[5px] w-2",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4M8 4.6v.9" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm">UI magician Agent</span>
      <GearIcon />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-4 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="text-2xs">From entire frame to a singl...</span>
    </div>

    {/* Section heading — the design leaves a large blank gap above it */}
    <div className="mt-20 flex items-center gap-3">
      <ChevronUpIcon className="h-2 w-3" />
      <span className="font-primary-bold text-sm">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7">
      <div className="flex items-center gap-3 text-font-subtle">
        <span className="text-2xs">Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-3 text-2xs placeholder:text-font-subtlest"
      />
    </div>

    {/* Design URL */}
    <div className="mt-3">
      <div className="flex items-center gap-3 text-font-subtle">
        <span className="text-2xs">Design URL</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-3 text-2xs placeholder:text-font-subtlest"
      />
    </div>

    {/* Actions */}
    <div className="mt-5 flex gap-4 pl-6">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Orange200)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Orange200)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-12 font-primary-bold text-sm">Recent Breakdowns</div>
  </div>
);
