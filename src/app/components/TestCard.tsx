const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.7 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.7a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.3 9v.01A1.7 1.7 0 0 0 20.86 10H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2 text-font">
      <span className="font-primary-bold text-sm">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      aria-label={label}
      className="w-full rounded-md border border-border-bold bg-elevation-surface-overlay px-3 py-2 font-primary-light text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[340px] bg-elevation-surface p-4 font-primary-light text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-lg">UI magician Agent</span>
      <span className="text-font-subtle">
        <GearIcon />
      </span>
    </div>

    <div className="mt-3 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="font-primary-black text-lg">Add New Design</span>
    </div>

    <div className="mt-6 space-y-4">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-6 flex gap-3">
      <button
        type="button"
        className="flex-1 rounded-md bg-background-danger-bold px-6 py-2 font-primary-bold text-sm text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-md bg-background-danger-bold px-6 py-2 font-primary-bold text-sm text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <div className="mt-10 font-primary-black text-lg">Recent Breakdowns</div>
  </div>
);
