const ChevronUp = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="h-4 w-4 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-screen w-full max-w-[508px] flex-col bg-[#1b1b1b] px-6 pb-16 pt-6"
  >
    {/* 1. Header row */}
    <div className="flex items-center justify-between">
      <h1 className="text-[22px] font-bold text-[#f5f5f5]">UI magician Agent</h1>
      <GearIcon />
    </div>

    {/* 2. Collapsible section header (static) */}
    <div className="mt-6 flex items-center gap-2 text-[15px] text-[#cfcfcf]">
      <ChevronUp />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* 3. Section header */}
    <div className="mt-10 flex items-center gap-2">
      <ChevronUp />
      <h2 className="text-[20px] font-bold text-[#f5f5f5]">Add New Design</h2>
    </div>

    {/* 4. Personal Access Token field */}
    <div className="mt-6">
      <div className="flex items-center gap-2 text-[15px] text-[#cfcfcf]">
        <label htmlFor="pat">Personal Access Token</label>
        <InfoIcon />
      </div>
      <input
        id="pat"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[#8a8a8a] bg-[#2b2b2b] px-3 py-3 text-[15px] text-[#f5f5f5] placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* 5. Design URL field */}
    <div className="mt-6">
      <div className="flex items-center gap-2 text-[15px] text-[#cfcfcf]">
        <label htmlFor="design-url">Design URL</label>
        <InfoIcon />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file:"
        className="mt-2 w-full rounded border border-[#8a8a8a] bg-[#2b2b2b] px-3 py-3 text-[15px] text-[#f5f5f5] placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* 6. Button row */}
    <div className="mt-8 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded bg-[#a04a22] px-4 py-3 text-[16px] text-[#d78a55]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[#a04a22] px-4 py-3 text-[16px] text-[#d78a55]"
      >
        Prepare
      </button>
    </div>

    {/* 7. Trailing section heading */}
    <h2 className="mt-12 text-[20px] font-bold text-[#f5f5f5]">
      Recent Breakdowns
    </h2>
  </div>
);
