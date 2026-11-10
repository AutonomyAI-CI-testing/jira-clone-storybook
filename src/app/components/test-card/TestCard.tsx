/**
 * TestCard — a self-contained, static rendering of the attached Figma frame
 * ("UI magician Agent" settings panel). Smoke test only: no props, no state,
 * no event handlers. Colours are literal values taken from the design because
 * the repo's token set defines no warm-dark / rust role (see task PLAN.md).
 */
export default function TestCard() {
  const inputStyles =
    "mt-3 w-full rounded border border-[#57534e] bg-[#1f1b19] px-4 py-5 text-base text-[#e7e5e4] outline-none placeholder:text-[#78716c]";

  const buttonStyles =
    "rounded-md bg-[#a03c14] px-6 py-4 text-base font-primary-bold text-[#f3e7e0]";

  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1917] px-10 pt-8 pb-12 font-primary text-[#e7e5e4]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-xl leading-7 font-primary-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Collapsed section label */}
      <div className="mt-10 flex items-center gap-2 text-[#a8a29e]">
        <ChevronUpIcon className="h-5 w-5 shrink-0" />
        <span className="truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-40 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <h2 className="text-2xl leading-8 font-primary-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-14">
        <div className="flex items-center gap-3">
          <label htmlFor="testcard-pat" className="text-base">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="testcard-pat"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputStyles}
        />
      </div>

      {/* Design URL */}
      <div className="mt-7">
        <div className="flex items-center gap-3">
          <label htmlFor="testcard-url" className="text-base">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="testcard-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={inputStyles}
        />
      </div>

      {/* Actions */}
      <div className="mt-14 grid grid-cols-2 gap-6">
        <button type="button" className={buttonStyles}>
          Awesome
        </button>
        <button type="button" className={buttonStyles}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-28 text-2xl leading-8 font-primary-bold">
        Recent Breakdowns
      </h2>
    </div>
  );
}

function GearIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0 text-[#e7e5e4]"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-[#a8a29e]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
