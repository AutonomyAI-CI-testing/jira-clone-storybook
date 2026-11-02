const SettingsIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm">
        {label}
      </label>
      <span className="text-icon-subtle">
        <InfoIcon />
      </span>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border border-border-input bg-background-input p-3 font-primary text-font placeholder:text-font-subtlest"
    />
  </div>
);

const actionClassName =
  "rounded-md bg-[#a8442a] px-8 py-2 font-primary-bold text-font hover:bg-[#8f3a24]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface-sunken p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-8 w-8 items-center justify-center rounded-full text-icon hover:bg-background-neutral"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate font-primary text-lg">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-lg">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
      />
    </div>

    <div className="mt-8 flex gap-6">
      <button type="button" className={actionClassName}>
        Awesome
      </button>
      <button type="button" className={actionClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
