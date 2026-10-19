const fieldLabelClassName =
  "flex items-center gap-2 text-base text-[color:var(--DarkNeutral700)]";

const fieldInputClassName =
  "mt-2 h-14 w-full rounded-md border border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral100)] px-4 text-base text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral600)]";

const actionButtonClassName =
  "h-14 w-[170px] rounded-md bg-[color:var(--Orange800)] font-primary-bold text-base text-[color:var(--DarkNeutral700)]";

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="22"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="22"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.1 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03Z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="22"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="22"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="18"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" strokeLinecap="round" />
    <circle cx="12" cy="7.5" fill="currentColor" r="1" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[color:var(--DarkNeutral-100)] px-10 py-8 font-primary-light text-[color:var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-7 flex items-center gap-2 text-[color:var(--DarkNeutral700)]">
      <ChevronUpIcon />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-40 flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="font-primary-black text-xl">Add New Design</h2>
    </div>

    <div className="mt-10">
      <label className={fieldLabelClassName} htmlFor="personal-access-token">
        Personal Access Token
        <InfoIcon />
      </label>
      <input
        className={fieldInputClassName}
        id="personal-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        type="text"
      />
    </div>

    <div className="mt-5">
      <label className={fieldLabelClassName} htmlFor="design-url">
        Design URL
        <InfoIcon />
      </label>
      <input
        className={fieldInputClassName}
        id="design-url"
        placeholder="https://www.figma.com/file/"
        type="text"
      />
    </div>

    <div className="mt-9 flex gap-9">
      <button className={actionButtonClassName} type="button">
        Awesome
      </button>
      <button className={actionButtonClassName} type="button">
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
