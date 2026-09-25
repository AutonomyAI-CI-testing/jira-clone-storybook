/**
 * TestCard — static recreation of the "UI magician Agent" panel from the
 * Figma frame (node 2-2). Smoke test only: no props, no state, no data.
 */

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const GearIcon = ({ className = "" }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = ({ className = "" }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[#1e1e1e] px-10 py-10 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-primary-bold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="h-7 w-7 text-[#8f8f8f]" />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <ChevronUpIcon className="h-3 w-3 shrink-0 text-[#a3a3a2]" />
        <span className="truncate text-xl text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#a3a3a2]" />
        <h2 className="text-2xl font-primary-bold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-2">
          <span className="text-xl text-[#a4a4a3]">Personal Access Token</span>
          <InfoIcon className="h-5 w-5 shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[78px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-xl text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="text-xl text-[#a3a3a2]">Design URL</span>
          <InfoIcon className="h-5 w-5 shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-[82px] w-full border border-[#a5adad] bg-[#272822] px-4 text-xl text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-10 flex gap-6">
        <button
          type="button"
          className="h-[74px] w-[170px] rounded bg-[#843a17] text-xl font-primary-bold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[74px] w-[170px] rounded bg-[#843a17] text-xl font-primary-bold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 text-2xl font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

export default TestCard;
