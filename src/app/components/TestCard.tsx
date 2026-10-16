const FIELDS = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

const Icon = ({ children, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {children}
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="m18 15-6-6-6 6" />
  </Icon>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="mt-12 block">
    <span className="flex items-center gap-3">
      <span className="font-primary-bold text-[18px]">{label}</span>
      <InfoIcon className="h-5 w-5 shrink-0" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[68px] w-full border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-4 font-primary-light text-[18px] text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral600)]"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-12 pt-12 text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px]">UI magician Agent</h1>
      <SettingsIcon className="h-7 w-7 shrink-0" />
    </div>

    <div className="mt-12 flex items-center gap-4">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <p className="font-primary-light text-[20px]">
        From entire frame to a singl…
      </p>
    </div>

    <div className="mt-24 flex items-center gap-4">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h2 className="font-primary-bold text-[24px]">Add New Design</h2>
    </div>

    {FIELDS.map((field) => (
      <Field key={field.label} {...field} />
    ))}

    <div className="mt-11 flex justify-center gap-9">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="h-20 w-[150px] rounded bg-[var(--Orange800)] font-primary text-[20px] text-[var(--DarkNeutral800)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-20 font-primary-bold text-[24px]">Recent Breakdowns</h2>
  </div>
);

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
