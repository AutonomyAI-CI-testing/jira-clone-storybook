const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ value }: { value: string }): JSX.Element => (
  <div className="flex h-14 items-center rounded border border-border-bold bg-background-input px-5 text-lg text-font-subtlest">
    {value}
  </div>
);

const Label = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-5 text-font">
    <span className="text-lg">{children}</span>
    <InfoIcon />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="h-14 w-[170px] rounded-md bg-background-danger-bold font-primary text-lg text-white transition-colors hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-8 font-primary-light text-font"
  >
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-font-subtle transition-colors hover:text-font"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-24 flex items-center gap-3 font-primary-bold text-2xl">
      <ChevronUpIcon />
      Add New Design
    </h2>

    <div className="mt-8 flex flex-col gap-2">
      <Label>Personal Access Token</Label>
      <Field value="figd_xxxxxxxxxxxxxxxxxx" />
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <Label>Design URL</Label>
      <Field value="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex justify-center gap-9">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-28 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
