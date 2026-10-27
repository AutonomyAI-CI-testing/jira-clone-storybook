/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * This is a smoke test of the design-to-component path: it reproduces the frame's
 * structure and copy only. Nothing here is wired to state or to the app.
 *
 * Colours come from the raw palette ramps declared in src/app/styles/app.css
 * (--DarkNeutral*, --Orange*) because the frame's dark panel matches none of the
 * app's six themes, so no semantic token describes it.
 */

interface IconProps {
  className?: string;
}

const SettingsIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const FIELD_CLASS =
  "h-[72px] w-full rounded border-2 border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral100)] px-9 font-primary text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl leading-none">
        UI magician Agent
      </h1>
      <SettingsIcon className="h-6 w-6 text-[var(--DarkNeutral1100)]" />
    </div>

    {/* Collapsed section row */}
    <div className="mt-8 flex items-center gap-3 text-[var(--DarkNeutral900)]">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="font-primary text-lg">From entire frame to a singl...</span>
    </div>

    {/* Section heading */}
    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h2 className="font-primary-black text-xl leading-none">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-14">
      <div className="flex items-center gap-3">
        <label
          htmlFor="test-card-token"
          className="font-primary text-lg text-[var(--DarkNeutral900)]"
        >
          Personal Access Token
        </label>
        <InfoIcon className="h-6 w-6 shrink-0 text-[var(--DarkNeutral900)]" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className={`mt-6 ${FIELD_CLASS}`}
      />
    </div>

    {/* Design URL */}
    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label
          htmlFor="test-card-url"
          className="font-primary text-lg text-[var(--DarkNeutral900)]"
        >
          Design URL
        </label>
        <InfoIcon className="h-6 w-6 shrink-0 text-[var(--DarkNeutral900)]" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={`mt-6 ${FIELD_CLASS}`}
      />
    </div>

    {/* Actions */}
    <div className="mt-12 flex justify-center gap-9">
      <button
        type="button"
        className="h-[70px] w-[170px] rounded-md bg-[var(--Orange700)] font-primary text-xl text-[var(--DarkNeutral1100)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[70px] w-[170px] rounded-md bg-[var(--Orange700)] font-primary text-xl text-[var(--DarkNeutral1100)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-20 font-primary-black text-xl leading-none">
      Recent Breakdowns
    </h2>
  </div>
);
