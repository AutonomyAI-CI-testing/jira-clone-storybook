type IconProps = {
  className?: string;
};

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

const Field = ({ id, label, placeholder, className }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[17px] text-[#d0d0d0]">
        {label}
      </label>
      <InfoIcon className="h-[19px] w-[19px] shrink-0 text-[#c0c0c0]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-4 h-[66px] w-full rounded-[2px] border border-[#6e6e6e] bg-[#262626] px-4 text-[17px] text-[#d0d0d0] placeholder:text-[#7f7f7f]"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1f1f1f] px-10 pt-10 pb-16 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-[20px] leading-none">
          UI magician Agent
        </h2>
        <GearIcon className="h-[26px] w-[26px] shrink-0 text-[#e6e6e6]" />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#e6e6e6]" />
        <span className="truncate text-[16px] text-[#9e9e9e]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <ChevronUpIcon className="h-[22px] w-[22px] shrink-0 text-[#e6e6e6]" />
        <h3 className="font-primary-black text-[22px] leading-none">
          Add New Design
        </h3>
      </div>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-12"
      />

      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-9"
      />

      <div className="mt-12 flex items-center gap-[35px] pl-[50px]">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[72px] w-[168px] rounded bg-[#8f3f0d] text-[20px] text-[#d8d8d8]"
          >
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-24 font-primary-black text-[22px] leading-none">
        Recent Breakdowns
      </h3>
    </div>
  );
};
