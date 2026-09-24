const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const FieldLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
    <span>{label}</span>
    <InfoIcon className="h-[15px] w-[15px] shrink-0" />
  </div>
);

const inputClasses =
  "mt-[10px] w-full rounded-none bg-[#272822] px-3 placeholder:text-[#737470] focus:outline-none";

const buttonClasses =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]";

const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] rounded-lg bg-[#0d0d0d] p-5 font-['Inter',sans-serif] text-[11.5px] font-semibold text-[#a4a4a3]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[34px] flex items-center gap-2">
      <ChevronUpIcon className="h-[10px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[75px] flex items-center gap-2">
      <ChevronUpIcon className="h-[10px] w-2 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-[22px]">
      <FieldLabel label="Personal Access Token" />
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${inputClasses} h-9 border border-[#a5adad] text-[11.5px] text-[#737470]`}
      />
    </div>

    <div className="mt-[12px]">
      <FieldLabel label="Design URL" />
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={`${inputClasses} h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]`}
      />
    </div>

    {/* Buttons */}
    <div className="mt-[21px] flex justify-center gap-[17px]">
      <button type="button" className={buttonClasses}>
        Awesome
      </button>
      <button type="button" className={buttonClasses}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[46px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

export default TestCard;
