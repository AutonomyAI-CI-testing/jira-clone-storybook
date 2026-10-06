const INPUT_CLASSES =
  "rounded border border-border-bold bg-background-input px-3 py-3 text-sm text-font placeholder:text-font-subtlest";

const BUTTON_CLASSES =
  "rounded-md bg-background-danger-bold px-8 py-3 font-primary-bold text-sm text-font-inverse";

const ACTION_LABELS = ["Awesome", "Prepare"];

const ChevronUpIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`shrink-0 fill-current ${className}`}
  >
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 shrink-0 fill-current"
  >
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 shrink-0 fill-current"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z" />
  </svg>
);

const Field = ({ label, value, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2 text-sm">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      defaultValue={value}
      placeholder={placeholder}
      className={INPUT_CLASSES}
    />
  </div>
);

interface FieldProps {
  label: string;
  value?: string;
  placeholder?: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-full max-w-sm flex-col gap-6 bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <span className="text-font-subtle">
        <SettingsIcon />
      </span>
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon />
      <span>From entire frame to a singl...</span>
    </div>

    <h2 className="mt-6 flex items-center gap-2 font-primary-bold text-base">
      <ChevronUpIcon className="h-5 w-5" />
      Add New Design
    </h2>

    <Field
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="flex gap-4">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-6 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);
