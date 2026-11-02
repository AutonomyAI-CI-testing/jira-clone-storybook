const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px] shrink-0 text-[#c0c0c0]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0 text-[#c8c8c8]"
  >
    <circle cx="12" cy="12" r="3.5" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
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
    <span className="mb-3 flex items-center gap-3 text-[15px] text-[#d0d0d0]">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-12 w-full rounded border border-[#5a5a5a] bg-[#1b1b1b] px-4 text-[15px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
    />
  </label>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-8 pb-16 pt-7 font-primary text-[#d6d6d6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-3 text-[15px] text-[#b3b3b3]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[100px]">
      <div className="flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-lg">Add New Design</h2>
      </div>

      <div className="mt-7 space-y-5">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-9 flex gap-8">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-14 flex-1 rounded-md bg-[#9e4726] text-base text-[#d9d5d9]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-[110px] font-primary-bold text-lg">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
