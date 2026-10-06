export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter,sans-serif] text-[11.5px] font-semibold text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-none text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="text-[#e6e6e6]" />
      </div>

      {/* Collapsible summary row */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronUpIcon className="text-[#b5b5b5]" />
        <span className="truncate text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Breathing room before the form section */}
      <div className="mt-[104px]" />

      {/* Section heading */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-none text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[26px]">
        <div className="flex items-center gap-2 text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <InfoCircleIcon className="text-[#c9c9c8]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-2 font-[monospace] text-[11.5px] text-[#d5d5d5] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-5">
        <div className="flex items-center gap-2 text-[#a3a3a2]">
          <span>Design URL</span>
          <InfoCircleIcon className="text-[#c9c9c8]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-2 h-[36px] w-[211px] border-2 border-[#929291] bg-[#272822] px-2 font-[monospace] text-[11.5px] text-[#d5d5d5] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[13px] text-[#b3ada8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[13px] text-[#b3ada8]"
        >
          Prepare
        </button>
      </div>

      {/* Section heading */}
      <h2 className="mt-[56px] text-[13.5px] leading-none text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const GearIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoCircleIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}
