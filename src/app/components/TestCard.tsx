export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1C1C1C] px-10 pt-10 pb-16 font-primary text-[#D6D6D6]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[22px] leading-tight">UI magician Agent</span>
        <SettingsIcon />
      </div>

      <div className="mt-7 flex items-center gap-3">
        <ChevronUpIcon className="size-5 shrink-0" />
        <span className="text-[18px] text-[#C9C9C9]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <ChevronUpIcon className="size-6 shrink-0" />
        <span className="text-[26px] leading-tight">Add New Design</span>
      </div>

      <TextField
        className="mt-12"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <TextField
        className="mt-4"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-9 flex justify-center gap-9">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      <div className="mt-16 text-[26px] leading-tight">Recent Breakdowns</div>
    </div>
  );
};

const TextField = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="text-[15px] text-[#CFCFCF]">{label}</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        aria-label={label}
        placeholder={placeholder}
        className="mt-2 h-[68px] w-full border border-[#6E6E6E] bg-[#262626] px-6 text-[18px] text-[#D6D6D6] outline-none placeholder:text-[#7E7E7E]"
      />
    </div>
  );
};

const CardButton = ({ children }: { children: string }) => {
  return (
    <button
      type="button"
      className="h-16 w-[167px] rounded-[2px] bg-[#A33E17] text-[18px] text-[#D9A18A]"
    >
      {children}
    </button>
  );
};

const SettingsIcon = () => {
  return (
    <svg
      className="size-6 shrink-0 text-[#D6D6D6]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const ChevronUpIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      className="size-5 shrink-0 text-[#CFCFCF]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};
