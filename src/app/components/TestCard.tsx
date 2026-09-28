const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 8 5"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 0.5L7.5 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 0.5L0.5 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 15 15"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.5 6.75V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7.5" cy="4.25" r="0.9" fill="currentColor" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 14 16"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 10.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M6.1 1.2h1.8l.4 1.7 1.5.7 1.6-.8 1.3 1.3-.8 1.6.7 1.5 1.7.4v1.8l-1.7.4-.7 1.5.8 1.6-1.3 1.3-1.6-.8-1.5.7-.4 1.7H6.1l-.4-1.7-1.5-.7-1.6.8-1.3-1.3.8-1.6-.7-1.5-1.7-.4V7.6l1.7-.4.7-1.5-.8-1.6 1.3-1.3 1.6.8 1.5-.7.4-1.7Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const Field = ({
  label,
  placeholder,
  placeholderClassName,
  inputClassName,
}: {
  label: string;
  placeholder: string;
  placeholderClassName?: string;
  inputClassName?: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className={`mt-[13px] h-[37px] w-full bg-[#272822] px-[19px] text-[11.5px] font-semibold placeholder:font-semibold focus:outline-none ${placeholderClassName ?? "text-[#737470] placeholder:text-[#737470]"} ${inputClassName ?? "border border-[#a5adad]"}`}
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-[Inter,sans-serif]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="mt-[2px] h-4 w-[14px] text-[#b5b5b5]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-[18px] flex items-center gap-3">
        <ChevronUp className="h-[8px] w-[12px] shrink-0 text-[#b5b5b5]" />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[80px] flex items-center gap-[5px]">
        <ChevronUp className="h-[8px] w-[12px] shrink-0 text-[#b5b5b5]" />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Fields */}
      <div className="mt-[29px] space-y-[11px]">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          placeholderClassName="text-[#71726e] placeholder:text-[#71726e]"
          inputClassName="border-2 border-[#929291]"
        />
      </div>

      {/* Buttons */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
