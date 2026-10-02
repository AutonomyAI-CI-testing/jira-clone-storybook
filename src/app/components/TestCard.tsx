/**
 * Smoke-test component: a self-contained rendering of the attached Figma frame.
 *
 * Deliberately standalone — it takes no props, holds no state and reads no data.
 * It carries the `dark` theme class on its own root so the app's semantic colour
 * variables resolve to their dark values (see `.dark` in `src/app/styles/app.css`),
 * which is what makes the panel match the design's dark register.
 */

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <polyline points="5 15 12 8 19 15" />
  </svg>
);

// Stand-in for the frame's settings gear — the design's own exported asset is not
// available, so this is drawn rather than sourced.
const GearIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <circle cx="12" cy="12" r="7.75" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="12"
        y1="2.25"
        x2="12"
        y2="4.75"
        transform={`rotate(${angle} 12 12)`}
      />
    ))}
  </svg>
);

// Stand-in for the frame's information icon — again drawn, not sourced.
const InfoIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.25" />
    <line x1="12" y1="11.25" x2="12" y2="16.75" strokeLinecap="round" />
    <line x1="12" y1="7.5" x2="12" y2="7.6" strokeLinecap="round" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-full max-w-md flex-col rounded-md bg-elevation-surface p-8 text-font"
  >
    {/* Title row */}
    <div className="flex items-center justify-between gap-4">
      <h1 className="text-xl font-bold">UI magician Agent</h1>
      <GearIcon />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    {/* Section header */}
    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="text-xl font-bold">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-8 flex items-center gap-2">
      <label
        htmlFor="testElem-personal-access-token"
        className="text-base font-medium"
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="testElem-personal-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-3 w-full rounded border border-border-bold bg-transparent px-4 py-5 text-base placeholder:text-font-subtlest"
    />

    {/* Design URL */}
    <div className="mt-4 flex items-center gap-2">
      <label htmlFor="testElem-design-url" className="text-base font-medium">
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="testElem-design-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-1 w-full rounded border border-border-bold bg-transparent px-4 py-5 text-base placeholder:text-font-subtlest"
    />

    {/* Action buttons */}
    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-5 text-base font-medium text-font"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-5 text-base font-medium text-font"
      >
        Prepare
      </button>
    </div>

    {/* Closing heading */}
    <h2 className="mt-24 text-xl font-bold text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
