const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0 text-icon-subtle"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
  >
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 7.3v3.9" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronUpIcon = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    className={`shrink-0 text-icon-subtle ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const fieldInputClass =
  "mt-3 h-9 w-full rounded border border-border-bold bg-background-input px-4 font-primary-light text-xs text-font placeholder:text-font-subtlest";

const actionButtonClass =
  "flex-center h-9 w-[85px] rounded bg-background-danger-bold font-primary text-xs text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-elevation-surface-overlay p-5 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary text-sm">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex-center rounded-full p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon-brand"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2" />
      <span className="truncate font-primary-light text-xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3" />
      <h3 className="font-primary text-sm text-font-subtle">Add New Design</h3>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="font-primary text-xs text-font-subtle"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="font-primary text-xs text-font-subtle"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-5 flex gap-4 pl-6">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary text-sm text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
