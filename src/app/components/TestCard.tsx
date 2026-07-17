const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
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
      className="bg-[#1e1e1e] min-h-screen w-full max-w-xs p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-zinc-400">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-2 text-[#c1622a]">
        <ChevronUpIcon size={14} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Section header */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-white">
          <ChevronUpIcon size={18} />
        </span>
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Form area */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <label className="text-sm font-semibold text-zinc-200">
              Personal Access Token
            </label>
            <span className="text-zinc-400">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-zinc-600 bg-[#2a2a2a] px-3 py-2.5 text-sm text-zinc-300 placeholder-zinc-500 outline-none focus:border-zinc-400"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <label className="text-sm font-semibold text-zinc-200">
              Design URL
            </label>
            <span className="text-zinc-400">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-zinc-500 bg-[#2a2a2a] px-3 py-2.5 text-sm text-zinc-300 placeholder-zinc-500 outline-none focus:border-zinc-400"
            readOnly
          />
        </div>
      </div>

      {/* Button row */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#c1622a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a8531f] active:bg-[#8f4419]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#a8531f] px-4 py-3 text-sm font-semibold text-white hover:bg-[#8f4419] active:bg-[#7a3b15]">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
