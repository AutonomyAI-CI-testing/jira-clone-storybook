export const TestCard = () => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[var(--DarkNeutral100)] p-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded text-[var(--DarkNeutral1100)] hover:text-[var(--DarkNeutral800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
      >
        <GearIcon className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <section className="mt-20">
      <div className="flex items-center gap-2">
        <ChevronUpIcon className="h-4 w-4 shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <TextField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />

      <TextField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-8 flex gap-6">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </section>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const TextField = ({ id, label, placeholder }: TextFieldProps) => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-sm">
        {label}
      </label>
      <InfoIcon className="h-4 w-4 text-[var(--DarkNeutral800)]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-3 py-3 text-sm placeholder:text-[var(--DarkNeutral700)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
    />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="rounded bg-[var(--Orange800)] px-10 py-3 font-primary-bold text-sm hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
  >
    {children}
  </button>
);

const Icon = ({ className, children }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M6 15l6-6 6 6" />
  </Icon>
);

const InfoIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.5v.5" />
  </Icon>
);

interface IconProps {
  className?: string;
  children?: React.ReactNode;
}

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
