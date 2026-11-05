const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <InfoIcon className="h-5 w-5 shrink-0" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[#8a8a8a] bg-[#1c1c1c] px-4 py-3.5 text-base text-[#d8d8d8] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#0d0d0d] px-10 pb-28 pt-9 font-primary text-[#d8d8d8]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-2xl">UI magician Agent</span>
      <GearIcon className="h-6 w-6 shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#8a8a8a]">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-44" />

    <div className="flex items-center gap-3">
      <ChevronUpIcon className="h-[22px] w-[22px] shrink-0" />
      <span className="font-primary-bold text-xl">Add New Design</span>
    </div>

    <div className="mt-8 space-y-6">
      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[168px] rounded-lg bg-[var(--Orange800)] font-primary text-lg text-[#c9b6ad]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-14 font-primary-bold text-xl">Recent Breakdowns</div>
  </div>
);
