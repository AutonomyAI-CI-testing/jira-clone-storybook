import { Tooltip } from "@app/components/tooltip";

const ICON_CLASS_NAME = "h-5 w-5 shrink-0";

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={ICON_CLASS_NAME}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.08a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={ICON_CLASS_NAME}
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const IconButton = ({
  label,
  children,
}: {
  label: string;
  children: JSX.Element;
}): JSX.Element => (
  <Tooltip title={label}>
    <button
      type="button"
      aria-label={label}
      className="flex h-5 w-5 items-center justify-center rounded-full text-font-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
    >
      {children}
    </button>
  </Tooltip>
);

const Field = ({ id, label, placeholder, hint }: FieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="mb-2 flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-base text-font">
        {label}
      </label>
      <IconButton label={hint}>
        <InfoIcon />
      </IconButton>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border-none bg-background-input p-3 font-primary text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="rounded bg-[#a5441f] px-8 py-3 font-primary-bold text-base text-font hover:bg-[#8f3a19]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  // The design is a fixed dark surface, so the panel pins the dark theme class
  // instead of following the user's active theme.
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface-raised px-10 py-10 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <Tooltip title="Settings">
        <button
          type="button"
          aria-label="Open settings"
          className="flex h-6 w-6 items-center justify-center rounded-full text-font-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
        >
          <GearIcon />
        </button>
      </Tooltip>
    </header>

    <div className="mt-7 flex items-center gap-4">
      <ChevronUpIcon />
      <span className="truncate font-primary-light text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-32">
      <h2 className="flex items-center gap-4 font-primary-black text-lg">
        <ChevronUpIcon />
        Add New Design
      </h2>

      <Field
        id="figma-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        hint="Your personal Figma access token"
      />
      <Field
        id="figma-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
        hint="Link to the Figma file to break down"
      />

      <div className="mt-10 flex gap-8">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>
    </section>

    <h2 className="mt-24 font-primary-black text-lg">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  hint: string;
}
