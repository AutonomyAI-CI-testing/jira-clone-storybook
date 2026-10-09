const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
  >
    <path
      d="M1 7L6 1.8L11 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.7V10.3"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.8" fill="currentColor" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }) => (
  <div className="mt-3 flex items-center gap-2 text-[#a4a4a3]">
    <span className="font-primary-bold text-[11.5px]">{children}</span>
    <InfoIcon />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black px-5 py-5 font-primary">
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-[#8f8f8f]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-5 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="truncate font-primary-bold text-[11.5px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="font-primary-bold text-[13.5px]">Add New Design</span>
    </div>

    <FieldLabel>Personal Access Token</FieldLabel>
    <input
      type="text"
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-2 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 font-primary text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470] focus:outline-none"
    />

    <FieldLabel>Design URL</FieldLabel>
    <input
      type="text"
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-2 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 font-primary text-[10.5px] text-[#b5b5b5] placeholder:text-[#71726e] focus:outline-none"
    />

    <div className="mt-5 flex justify-end gap-[18px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <div className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
