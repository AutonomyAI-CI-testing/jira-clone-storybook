const buttonClass =
  "h-[72px] w-[168px] rounded-lg bg-[#8a3f16] text-lg text-[#9e9e9e]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen w-full bg-[#1e1e1e] px-10 py-12">
      <div className="flex items-center justify-between">
        <span className="text-xl text-[#d4d4d4]">UI magician Agent</span>
        <SettingsIcon />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="text-lg text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-44">
        <div className="flex items-center gap-3">
          <ChevronUpIcon />
          <h2 className="text-xl text-[#d4d4d4]">Add New Design</h2>
        </div>

        <div className="mt-14 space-y-8">
          <Field
            id="personal-access-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          />
          <Field
            id="design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-12 flex gap-9 pl-12">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>
      </section>

      <h2 className="mt-28 text-2xl text-[#d4d4d4]">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-base text-[#9a9a9a]">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-2 h-[72px] w-full rounded-sm border border-[#d4d4d4] bg-[#2a2a2a] px-5 text-lg text-[#d4d4d4] placeholder:text-[#9a9a9a] focus:outline-none"
      />
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const iconClass = "shrink-0 text-[#d4d4d4]";

const ChevronUpIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={iconClass}
    >
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
};

const SettingsIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={iconClass}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={iconClass}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-5" />
      <path d="M12 8h.01" />
    </svg>
  );
};
