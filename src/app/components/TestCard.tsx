export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[400px] bg-[#16181a] px-6 py-10 font-primary text-[#c7cdd4]"
  >
    {/* 1. Header row */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] text-[#d6dade]">
        UI magician Agent
      </h1>
      <GearIcon className="text-[#c7cdd4]" />
    </div>

    {/* 2. Collapsible sub-row (indented, muted, truncated) */}
    <div className="mt-5 flex items-center gap-2 pl-1">
      <ChevronUpIcon className="shrink-0 text-[#9aa1a9]" />
      <span className="truncate text-[15px] text-[#8b9199]">
        From entire frame to a singl...
      </span>
    </div>
    <div className="h-20" />

    {/* 3. Section header */}
    <div className="flex items-center gap-2">
      <ChevronUpIcon className="text-[#c7cdd4]" />
      <h2 className="font-primary-bold text-[22px] text-[#d6dade]">
        Add New Design
      </h2>
    </div>

    {/* 4. Field: Personal Access Token */}
    <div className="mt-7">
      <div className="flex items-center gap-2">
        <span className="text-[15px] text-[#c7cdd4]">Personal Access Token</span>
        <InfoCircleIcon className="text-[#c7cdd4]" />
      </div>
      <input
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-sm border border-[#6b7075] bg-[#24272a] px-3 py-3 text-[15px] text-[#c7cdd4] placeholder:text-[#8b9199]"
      />
    </div>

    {/* 5. Field: Design URL */}
    <div className="mt-5">
      <div className="flex items-center gap-2">
        <span className="text-[15px] text-[#c7cdd4]">Design URL</span>
        <InfoCircleIcon className="text-[#c7cdd4]" />
      </div>
      <input
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded-sm border border-[#6b7075] bg-[#24272a] px-3 py-3 text-[15px] text-[#c7cdd4] placeholder:text-[#8b9199]"
      />
    </div>

    {/* 6. Button row */}
    <div className="mt-8 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded-sm bg-[#a8481f] px-4 py-3 text-[15px] text-[#d8cfc9]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-sm bg-[#a8481f] px-4 py-3 text-[15px] text-[#d8cfc9]"
      >
        Prepare
      </button>
    </div>

    {/* 7. Trailing heading + empty space */}
    <h2 className="mt-10 font-primary-bold text-[20px] text-[#d6dade]">
      Recent Breakdowns
    </h2>
    <div className="h-10" />
  </div>
);

const iconProps = {
  viewBox: "0 0 24 24",
  width: 16,
  height: 16,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoCircleIcon = ({ className = "" }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <circle cx="12" cy="8" r="0.6" fill="currentColor" />
  </svg>
);

const GearIcon = ({ className = "" }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);
