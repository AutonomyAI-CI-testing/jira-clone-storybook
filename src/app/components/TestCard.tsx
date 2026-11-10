interface IconProps {
  className?: string;
}

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 15.5 12 8.5l7 7" />
  </svg>
);

const SettingsIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9.25" />
    <path d="M12 11v5.5" />
    <path d="M12 7.5v.5" />
  </svg>
);

const inputStyle =
  "mt-4 h-14 w-full rounded border border-border-bold bg-background-input px-8 text-base text-font placeholder:text-font-subtle";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <label htmlFor={id} className="flex items-center gap-3 text-base text-font">
      {label}
      <InfoIcon className="size-5 shrink-0 text-font-subtle" />
    </label>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={inputStyle}
    />
  </div>
);

const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-14 w-[168px] rounded-md bg-[var(--Red800)] font-primary-bold text-lg text-[color:var(--Red300)]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] max-w-full bg-elevation-surface px-10 pb-12 pt-10 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-font">UI magician Agent</h2>
      <SettingsIcon className="size-6 shrink-0 text-font" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon className="size-4 shrink-0 text-font-subtle" />
      <span className="min-w-0 truncate text-base text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon className="size-6 shrink-0 text-font" />
      <span className="font-primary-bold text-xl text-font">
        Add New Design
      </span>
    </div>

    <div className="mt-12">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8">
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-14 flex gap-10 pl-12">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
