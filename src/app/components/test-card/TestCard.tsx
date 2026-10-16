/**
 * TestCard — a self-contained reproduction of the Figma "UI magician Agent"
 * panel. No props, no state: it exists to be dropped in and rendered once as a
 * smoke test, so the design's literal colours and sizes are used as arbitrary
 * Tailwind values rather than semantic tokens (the token set has no dark
 * canvas / rust pair). Deliberately not wired into any route.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary-bold text-[11.5px] leading-[13.92px]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[10px]">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="truncate text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[9px]">
        <ChevronUpIcon size={12} className="text-[#b2b2b1]" />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[24px]">
        <span className="text-[#a4a4a3]">Personal Access Token</span>
        <InfoIcon className="text-[#a4a4a3]" />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[#737470]">figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[24px]">
        <span className="text-[#a3a3a2]">Design URL</span>
        <InfoIcon className="text-[#a3a3a2]" />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[21px] flex gap-[15px] pl-[23px]">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[45px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="flex h-[37px] w-[87px] cursor-pointer items-center justify-center rounded bg-[#843a17] text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUpIcon = ({ size = 10, className = "" }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const GearIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11.5v5" />
    <path d="M12 7.75v.01" />
  </svg>
);
