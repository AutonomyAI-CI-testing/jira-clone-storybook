const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
    fill="none"
    height="16"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
    width="16"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="12"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width="12"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="15"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
    width="15"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2 text-[#a4a4a3]">
      <label className="text-2xs" htmlFor={id}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      className="h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-2xs text-[#b5b5b5] placeholder:text-[#737470]"
      id={id}
      placeholder={placeholder}
      readOnly
      type="text"
    />
  </div>
);

const PanelButton = ({ label }: PanelButtonProps): JSX.Element => (
  <button
    className="h-9 w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
    type="button"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="flex w-[254px] flex-col bg-[#000000] p-5 font-primary"
      id="testElem"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs text-[#b5b5b5]">UI magician Agent</span>
        <GearIcon />
      </div>

      <div className="mt-4 flex min-w-0 items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate text-2xs">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="text-xs">Add New Design</span>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <Field
          id="testElem-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <PanelButton label="Awesome" />
        <PanelButton label="Prepare" />
      </div>

      <h2 className="mt-12 text-xs text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface PanelButtonProps {
  label: string;
}
