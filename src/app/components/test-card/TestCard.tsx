const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 6.5L6 1.5L11 6.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 11V7"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.75" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] border border-[#3f3f3f] bg-[#1e1e1e] px-5 py-5 font-primary"
    >
      <div className="flex items-center justify-between text-[#b5b5b5]">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <ChevronUp className="h-[5px] w-[8px] shrink-0" />
        <span className="text-[11.5px] leading-[13.92px]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-[74px] flex items-center gap-[5px] text-[#b2b2b1]">
        <ChevronUp className="h-[8px] w-[12px] shrink-0" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-2 text-[#a4a4a3]">
        <span className="text-[11.5px] leading-[13.92px]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-2 text-[#a3a3a2]">
        <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
        <InfoIcon />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        defaultValue="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-[15px] pl-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
