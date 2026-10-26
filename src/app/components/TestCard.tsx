const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 7.8h.01" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const TestField = ({ id, label, placeholder }: TestFieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-[15px]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full rounded-md border-2 border-[#8f8f8f] bg-[#1c1c1c] px-10 py-4 font-primary-light text-[15px] text-[#c7c7c7] placeholder:text-[#8f8f8f]"
    />
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col rounded-md bg-[#0e0e0e] px-10 py-10 font-primary-light text-[#c7c7c7]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex-center h-7 w-7 rounded-full hover:bg-white/10"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-12 flex items-center gap-3 pl-4 text-[#8f8f8f]">
      <ChevronUpIcon />
      <span className="truncate font-primary text-[15px]">
        From entire frame to a singl...
      </span>
    </div>

    <div aria-hidden="true" className="h-[150px]" />

    <div className="flex items-center gap-3 pl-4">
      <ChevronUpIcon />
      <h2 className="font-primary-black text-xl">Add New Design</h2>
    </div>

    <div className="mt-12 flex flex-col gap-6">
      <TestField
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <TestField
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-12 flex gap-6 px-8">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 rounded-md bg-[#a8412a] py-4 font-primary text-[15px] text-[#d5d5d5]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);

interface TestFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
