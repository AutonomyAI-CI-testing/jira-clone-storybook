const ChevronUp = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 7 6 1l5 6"
      stroke="#d4d4d4"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    fill="none"
    stroke="#e0e0e0"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  className: string;
  label: string;
  labelClassName: string;
  iconClassName: string;
  inputClassName: string;
  placeholder: string;
}

const Field = ({
  className,
  label,
  labelClassName,
  iconClassName,
  inputClassName,
  placeholder,
}: FieldProps) => (
  <div className={className}>
    <div className="flex h-[15px] items-center">
      <span className={`text-[11.5px] ${labelClassName}`}>{label}</span>
      <span className={iconClassName}>
        <InfoIcon />
      </span>
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className={`mt-[11px] w-[211px] bg-[#272822] px-5 outline-none ${inputClassName}`}
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] overflow-hidden bg-black px-5 pt-5 font-['Inter',sans-serif] text-[13.5px] font-semibold"
  >
    <div className="flex h-4 items-center justify-between">
      <span className="text-[#b5b5b5]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex h-[14px] items-center">
      <ChevronUp className="ml-[3px] h-[5px] w-2" />
      <span className="ml-[9px] min-w-0 truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex h-4 items-center">
      <ChevronUp className="ml-[6px] h-2 w-3" />
      <span className="ml-[5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      labelClassName="text-[#a4a4a3]"
      iconClassName="ml-6"
      inputClassName="h-[36px] border border-[#a5adad] text-[11.5px] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-[11px]"
      label="Design URL"
      labelClassName="text-[#a3a3a2]"
      iconClassName="ml-5"
      inputClassName="h-[37px] border-2 border-[#929291] text-[10.5px] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
