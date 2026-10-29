const ChevronUp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.4 6 1.6l5 4.8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 15 15" fill="none" aria-hidden="true" className={className}>
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M7.5 6.7v3.6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="7" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M7 1.4v2.1M7 12.5v2.1M1.6 8h2.1M10.3 8h2.1M3.2 4.2l1.5 1.5M9.3 10.3l1.5 1.5M10.8 4.2l-1.5 1.5M4.7 10.3l-1.5 1.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  inputClassName,
}: {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}) => (
  <>
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      {label}
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`mt-3 h-[36px] w-full bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] placeholder:text-[#737470] ${inputClassName}`}
    />
  </>
);

const actions = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 py-5 font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <GearIcon className="h-4 w-3.5 shrink-0" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUp className="h-[5px] w-[7.5px] shrink-0" />
      <span className="text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
      <ChevronUp className="h-2 w-3 shrink-0" />
      <span>Add New Design</span>
    </div>

    <div className="mt-7">
      <Field
        id="testCard-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        inputClassName="border border-[#a5adad]"
      />
    </div>

    <div className="mt-3">
      <Field
        id="testCard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        inputClassName="border-2 border-[#929291]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
