export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-8 bg-[#1e1e1e] px-8 py-6 text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">UI magician Agent</h2>
        <SettingsIcon />
      </div>

      <div className="flex items-center gap-2 text-sm text-[#cfcfcf]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="flex flex-col gap-4 pt-6">
        <div className="flex items-center gap-2 text-base font-semibold text-white">
          <ChevronUpIcon />
          <h3>Add New Design</h3>
        </div>

        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="flex gap-4">
          <button type="button" className={buttonClassName}>
            Awesome
          </button>
          <button type="button" className={buttonClassName}>
            Prepare
          </button>
        </div>
      </div>

      <h3 className="pt-10 text-base font-semibold text-white">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const buttonClassName =
  "rounded-md bg-[#8a3d18] px-6 py-2 text-sm font-semibold text-[#d9a48a]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm">
        <label htmlFor={id}>{label}</label>
        <InfoIcon />
      </div>
      <input
        id={id}
        placeholder={placeholder}
        className="w-full rounded border border-[#3a3a3a] bg-[#111111] px-3 py-3 text-sm placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

const ChevronUpIcon = (): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
};

const SettingsIcon = (): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
