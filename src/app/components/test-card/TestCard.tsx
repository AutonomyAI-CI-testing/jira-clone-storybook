const GearIcon = (): JSX.Element => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="7.5" strokeDasharray="1.8 3.4" />
  </svg>
);

const ChevronUpIcon = ({
  size = 18,
  strokeWidth = 1.5,
}: ChevronUpIconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[17px] text-[#b9b9b9]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[60px] w-full rounded border border-[#8a8a8a] bg-[#242424] px-8 text-[16px] text-[#d4d4d4] outline-none placeholder:text-[#6b6b6b]"
    />
  </div>
);

const CardButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    type="button"
    className="h-[68px] w-[168px] rounded-lg bg-[#9e3c1c] font-primary-bold text-[20px] text-[#e0b9ae]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-9 pb-10 pt-12 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] text-[#d4d4d4]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-3 flex items-center gap-2 text-[17px] text-[#8a8a8a]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-36">
      <div className="flex items-center gap-3">
        <ChevronUpIcon size={22} strokeWidth={2.5} />
        <h2 className="font-primary-bold text-[24px] text-[#d4d4d4]">
          Add New Design
        </h2>
      </div>

      <Field
        className="mt-12"
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        className="mt-8"
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-14 flex gap-[34px]">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>
    </div>

    <div className="mt-16 font-primary-bold text-[22px] text-[#d4d4d4]">
      Recent Breakdowns
    </div>
  </div>
);

interface ChevronUpIconProps {
  size?: number;
  strokeWidth?: number;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
