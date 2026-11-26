const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 8 5"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-[14px] shrink-0 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.4v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const FieldLabel = ({ htmlFor, children }: { htmlFor: string; children: string }) => (
  <div className="flex items-center gap-6">
    <label htmlFor={htmlFor} className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      {children}
    </label>
    <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary-bold"
    >
      <div className="flex items-start justify-between">
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">UI magician Agent</h2>
        <GearIcon />
      </div>

      <button type="button" className="mt-[18px] flex items-center gap-2 text-left">
        <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </button>

      <button type="button" className="mt-[77px] flex items-center gap-2 text-left">
        <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">Add New Design</span>
      </button>

      <div className="mt-7 flex flex-col">
        <FieldLabel htmlFor="testcard-personal-access-token">Personal Access Token</FieldLabel>
        <input
          id="testcard-personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[11px] flex flex-col">
        <FieldLabel htmlFor="testcard-design-url">Design URL</FieldLabel>
        <input
          id="testcard-design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-5 flex gap-4 pl-6">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h3 className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">Recent Breakdowns</h3>
    </div>
  );
};
