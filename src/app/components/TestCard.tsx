const GearIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[520px] w-full max-w-[360px] bg-[#1a1c16] px-5 py-5 font-sans text-[#e8e6e0]"
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[17px] font-medium tracking-wide text-[#e8e6e0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-[#9a9a90] hover:text-[#e8e6e0]"
          aria-label="Settings"
        >
          <GearIcon />
        </button>
      </div>

      {/* Crumb row */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-[13px] text-[#9a9a90]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl…</span>
      </button>

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2 text-[15px] font-medium text-[#c8c6c0]">
        <ChevronUpIcon />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2 text-[13px] text-[#b0b0a8]">
          <span>Personal Access Token</span>
          <span className="text-[#8a8a80]" aria-hidden="true">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxx"
          className="w-full rounded-sm border border-[#4a4a42] bg-[#2a2c24] px-3 py-2.5 text-[13px] text-[#c8c6c0] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2 text-[13px] text-[#b0b0a8]">
          <span>Design URL</span>
          <span className="text-[#8a8a80]" aria-hidden="true">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full rounded-sm border border-[#b0b0a8] bg-[#2a2c24] px-3 py-2.5 text-[13px] text-[#c8c6c0] outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-10 flex justify-center gap-3">
        <button
          type="button"
          className="min-w-[110px] rounded-md bg-[#a84f2a] px-5 py-2.5 text-[14px] font-medium text-[#e8c4b0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="min-w-[110px] rounded-md bg-[#a84f2a] px-5 py-2.5 text-[14px] font-medium text-[#e8c4b0]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-[15px] font-medium text-[#c8c6c0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
