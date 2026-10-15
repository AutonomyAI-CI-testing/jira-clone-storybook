const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 text-icon-subtle"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.5h.01" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const fieldClassName =
  "mt-3 w-full rounded-md bg-background-input p-3 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus-visible:outline-border-brand";

const actionButtonClassName =
  "cursor-pointer rounded-lg bg-[var(--Orange800)] px-6 py-4 font-primary text-base text-font-inverse hover:bg-[var(--Orange900)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded bg-elevation-surface-raised p-8 font-primary text-font shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-icon-subtle hover:bg-background-neutral hover:text-icon"
        >
          <GearIcon />
        </button>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full cursor-pointer items-center gap-3 text-left"
      >
        <ChevronUpIcon />
        <span className="truncate text-base text-font-subtle">
          From entire frame to a singl...
        </span>
      </button>

      <h2 className="mt-14 flex items-center gap-3 font-primary-bold text-xl">
        <ChevronUpIcon />
        Add New Design
      </h2>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testCardPersonalAccessToken"
            className="font-primary-light text-base text-font-subtle"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="testCardPersonalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={fieldClassName}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testCardDesignUrl"
            className="font-primary-light text-base text-font-subtle"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="testCardDesignUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldClassName}
        />
      </div>

      <div className="mt-10 flex gap-8">
        <button type="button" className={actionButtonClassName}>
          Awesome
        </button>
        <button type="button" className={actionButtonClassName}>
          Prepare
        </button>
      </div>

      <h2 className="mt-14 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
