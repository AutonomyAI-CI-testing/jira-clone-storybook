const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const GearIcon = () => (
  <svg {...iconProps} width={26} height={26}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg {...iconProps} width={20} height={20}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg {...iconProps} width={20} height={20}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <span className="font-primary text-[15px] text-[#cfcfcf]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="h-12 w-full rounded-md border border-[#8a8a8a] bg-[#2b2b2b] px-5 font-primary text-[15px] text-[#d8d8d8] placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-6 pb-24 pt-6 font-primary text-[#d8d8d8]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[20px]">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="text-[17px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="text-[22px]">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-6">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[52px] w-[140px] rounded-lg bg-[#a1441c] font-primary text-[18px] text-[#d9d0cb]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 text-[20px]">Recent Breakdowns</h2>
  </div>
);
