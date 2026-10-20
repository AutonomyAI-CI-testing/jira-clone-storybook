const PANEL_TEXT = "text-[#d9d9d9]";
const FIELD_BORDER = "border border-[#6e6e6e] bg-[#1c1c1c]";
const ACTION_BUTTON =
  "flex-1 cursor-pointer rounded bg-[#8f3a1a] px-4 py-4 font-primary-bold text-[#b9aea6]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className={`w-[508px] bg-[#131313] px-10 py-8 font-primary ${PANEL_TEXT}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex cursor-pointer items-center justify-center rounded p-1"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="min-w-0 truncate text-base text-[#9e9e9e]">
          From entire frame to a single component
        </span>
      </div>

      <div className="h-[150px]" />

      <div className="flex items-center gap-3 pl-5">
        <ChevronUpIcon />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file:"
        />
      </div>

      <div className="mt-10 flex gap-4 px-6">
        <button type="button" className={ACTION_BUTTON}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON}>
          Prepare
        </button>
      </div>

      <h3 className="mt-[110px] font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-base">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-4 text-base text-[#8c8c8c] placeholder:text-[#8c8c8c] ${FIELD_BORDER}`}
      />
    </div>
  );
};

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
