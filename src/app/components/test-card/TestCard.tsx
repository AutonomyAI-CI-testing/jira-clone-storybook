const ChevronUp = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M1 7l5-5 5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.2v4.2" />
    <circle cx="8" cy="4.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const PanelButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="relative h-[508px] w-[254px] bg-[#000000] px-5 pt-5 text-[11.5px] font-primary-bold"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</h1>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-3.5 shrink-0 text-[#b5b5b5]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M19.1 4.9l-2.2 2.2M7.1 16.9l-2.2 2.2" />
      </svg>
    </div>

    {/* Collapsed source row */}
    <div className="mt-5 flex min-w-0 items-center gap-2">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[84px] flex items-center gap-2">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] text-[#b2b2b1]">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-2">
      <span className="text-[#a4a4a3]">Personal Access Token</span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] pl-[19px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-2">
      <span className="text-[#a3a3a2]">Design URL</span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
    </div>
    <div className="mt-3 flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    {/* Actions */}
    <div className="mt-5 flex justify-end gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-12 text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);

export default TestCard;
