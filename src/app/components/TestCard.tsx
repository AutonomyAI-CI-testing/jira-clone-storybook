/**
 * TestCard — a self-contained recreation of the "UI magician Agent" panel from
 * the Figma frame, used as a smoke test for the design-to-code path.
 *
 * No props, no state, no behaviour: it exists only to be rendered and looked at.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-11 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <SettingsIcon />
    </div>

    <div className="mt-9 flex items-center gap-3 text-[15px] text-font-subtle">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="max-w-[330px] truncate">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-36 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 shrink-0 text-font" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-14">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="text-base text-font-subtle"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-16 w-full rounded-md border border-border-bold bg-elevation-surface-raised px-10 text-base text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-url" className="text-base text-font-subtle">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <textarea
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[70px] w-full resize-none rounded-md border border-border-bold bg-elevation-surface-raised px-10 py-4 text-base text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-10 flex justify-end gap-9">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-14 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-16 w-[170px] rounded-md bg-[var(--Orange700)] text-lg text-font"
  >
    {children}
  </button>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
