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
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
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
    <div
      id="testElem"
      className="w-full max-w-md rounded-lg bg-[#1a1a1a] px-6 py-5 text-[#e5e5e5] font-sans"
    >
      <div className="mb-6 flex items-start justify-between">
        <h1 className="text-lg font-medium tracking-wide text-[#c8c8c8]">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-[#888] hover:text-[#c8c8c8]"
          aria-label="Settings"
        >
          <GearIcon />
        </button>
      </div>

      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9a9a]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      <div className="mb-8">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-base text-[#b0b0b0]"
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        <div className="space-y-4">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-[#a3a3a3]">
              Personal Access Token
              <span className="text-[#6b6b6b]">
                <InfoIcon />
              </span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#bdbdbd] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-[#a3a3a3]">
              Design URL
              <span className="text-[#6b6b6b]">
                <InfoIcon />
              </span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border-2 border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#bdbdbd] outline-none"
            />
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              type="button"
              className="rounded-lg bg-[#c45c2a] px-8 py-2.5 text-sm font-medium text-[#e8c4b0]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#c45c2a] px-8 py-2.5 text-sm font-medium text-[#e8c4b0]"
            >
              Prepare
            </button>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <h2 className="text-base text-[#c8c8c8]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
