const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    className="h-[18px] w-[18px] shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6" />
    <path d="M12 7.5v0.5" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
  </svg>
);

const Field = ({ className, label, placeholder }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3 text-font-subtle">
      <span className="font-primary text-base">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border-bold bg-background-input px-6 py-4 font-primary-light text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-elevation-surface-raised px-10 pb-10 pt-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex cursor-pointer items-center justify-center rounded p-1 text-font-subtle"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate font-primary-light text-lg">
        From entire frame to a singl…
      </span>
    </div>

    <h2 className="mt-24 flex items-center gap-3 font-primary-black text-2xl">
      <ChevronUpIcon />
      Add New Design
    </h2>

    <Field
      className="mt-8"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-6"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-9">
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-10 py-4 font-primary text-base text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-10 py-4 font-primary text-base text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
}
