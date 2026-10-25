interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.75"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.75"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
}

const Field = ({ className, label, placeholder }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span className="text-[19px] text-[#d6d0ca]">{label}</span>
      <InfoIcon className="h-5 w-5 shrink-0 text-[#d6d0ca]" />
    </div>
    <input
      aria-label={label}
      className="mt-4 h-[54px] w-full rounded-[4px] border border-[#3a3530] bg-[#242120] px-4 text-[19px] text-[#8b8580] outline-none placeholder:text-[#8b8580]"
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    className="h-[78px] flex-1 rounded-[8px] bg-[#8f3a17] text-[20px] text-[#b0a49c]"
    type="button"
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div
      className="w-[508px] bg-[#1c1a17] px-10 pb-28 pt-10 font-primary text-[#e7e2de]"
      id="testElem"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[26px] leading-none">
          UI magician Agent
        </h1>
        <GearIcon className="h-7 w-7 shrink-0 text-[#d9d3ce]" />
      </div>

      <div className="mt-[50px] flex items-center gap-2 text-[#9a938d]">
        <ChevronUpIcon className="h-4 w-4 shrink-0" />
        <span className="truncate text-[20px]">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-[170px] flex items-center gap-2 font-primary-bold text-[24px]">
        <ChevronUpIcon className="h-5 w-5 shrink-0" />
        Add New Design
      </h2>

      <Field
        className="mt-16"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        className="mt-11"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-14 flex gap-8 px-11">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-[104px] font-primary-bold text-[24px]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
