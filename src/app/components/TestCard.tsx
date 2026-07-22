const GearIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
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
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-md bg-[#1a1a1a] px-6 py-6 text-[#c8c8c8]">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-wide text-[#c8c8c8]">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="text-[#a0a0a0] hover:text-[#c8c8c8]"
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        <div className="mb-10 flex items-center gap-2 text-sm text-[#a8a8a8]">
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        <div className="mb-10">
          <div className="mb-6 flex items-center gap-2 text-base font-medium text-[#bdbdbd]">
            <ChevronUpIcon />
            <span>Add New Design</span>
          </div>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2 text-sm text-[#b0b0b0]">
              <span>Personal Access Token</span>
              <span className="text-[#888888]">
                <InfoIcon />
              </span>
            </div>
            <div className="rounded border border-[#555555] bg-[#272822] px-3 py-2.5 text-sm text-[#888888]">
              figd_xxxxxxxxxxxxxxx
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2 text-sm text-[#b0b0b0]">
              <span>Design URL</span>
              <span className="text-[#888888]">
                <InfoIcon />
              </span>
            </div>
            <div className="rounded border border-[#A5ADAD] bg-[#272822] px-3 py-2.5 text-sm text-[#888888]">
              https://www.figma.com/file/:
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#b54a2a] px-8 py-2.5 text-sm font-medium text-[#c9a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#b54a2a] px-8 py-2.5 text-sm font-medium text-[#c9a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="mt-8 text-base font-medium text-[#c8c8c8]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
}

export default TestCard;
