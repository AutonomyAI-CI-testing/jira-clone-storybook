const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="flex w-[360px] flex-col gap-8 bg-[#1a1a1a] px-6 py-6 text-[#c8c8c8]">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-[18px] font-medium leading-tight text-[#d4d4d4]">
              UI magician Agent
            </h1>
            <button
              type="button"
              className="text-[#9a9a9a]"
              aria-label="Settings"
            >
              <GearIcon />
            </button>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-left text-[14px] text-[#a3a3a3]"
          >
            <ChevronUpIcon />
            <span className="truncate">From entire frame to a singl...</span>
          </button>
        </div>

        {/* Add New Design */}
        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="flex items-center gap-2 text-left text-[16px] font-medium text-[#c8c8c8]"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="text-[14px] text-[#b0b0b0]">
                Personal Access Token
              </label>
              <span className="text-[#8a8a8a]" aria-hidden>
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded-sm border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="text-[14px] text-[#b0b0b0]">Design URL</label>
              <span className="text-[#8a8a8a]" aria-hidden>
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded-sm border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="mt-1 flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#a0522d] px-8 py-2.5 text-[15px] font-medium text-[#c4a484]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a0522d] px-8 py-2.5 text-[15px] font-medium text-[#c4a484]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4">
          <h2 className="text-[16px] font-medium text-[#c8c8c8]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
