const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
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

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
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
  <label className="block">
    <span className="flex items-center gap-3 text-base text-[#d0d0d0]">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-5 w-full rounded-[3px] border border-[#4d4d4d] bg-[#232323] px-6 py-4 text-base text-[#d4d4d4] placeholder-[#8a8a8a] outline-none"
    />
  </label>
);

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 pt-11 pb-32 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3 pl-2 text-sm text-[#b0b0b0]">
      <ChevronUpIcon />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-36 flex items-center gap-3 pl-2">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-14">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-10">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex gap-8 pl-12">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="w-[168px] rounded-md bg-[#8f3a17] py-4 text-base text-[#a3a3a3]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-28 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
