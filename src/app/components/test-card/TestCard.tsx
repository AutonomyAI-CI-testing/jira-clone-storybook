export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark flex w-[508px] flex-col gap-8 bg-elevation-surface-sunken p-5 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      <div className="flex items-center gap-2 text-sm text-font-subtle">
        <ChevronUp />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <ChevronUp />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="flex justify-center gap-6">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </div>

      <h2 className="font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex items-center gap-2 font-primary-bold text-sm text-font-subtle">
        {label}
        <InfoIcon />
      </span>
      <input
        readOnly
        placeholder={placeholder}
        className="rounded border border-border-input bg-background-input px-3 py-2 font-primary-light text-sm text-font outline-none placeholder:text-font-subtlest"
      />
    </div>
  );
};

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="w-[85px] rounded bg-[var(--Orange700)] px-4 py-2 font-primary text-sm text-white"
    >
      {children}
    </button>
  );
};

const ChevronUp = (): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
};

const SettingsIcon = (): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-font-subtle"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: string;
}
