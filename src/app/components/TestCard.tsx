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

const CaretUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
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
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2a2a] px-5 py-6 font-sans text-white"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <span className="text-[#a0a0a0]">
          <GearIcon />
        </span>
      </div>

      {/* Collapsed row */}
      <div className="mb-2 flex items-center gap-2 text-[#c07850]">
        <CaretUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="my-8" />

      {/* Add New Design section heading */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-[#c07850]">
          <CaretUpIcon />
        </span>
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm font-medium text-[#d4cfc9]">
          Personal Access Token
        </span>
        <span className="text-[#a0a0a0]">
          <InfoIcon />
        </span>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="mb-4 w-full rounded-md border border-[#4a4a4a] bg-[#333333] px-4 py-3 text-sm text-[#888888] placeholder-[#888888] outline-none"
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm font-medium text-[#d4cfc9]">Design URL</span>
        <span className="text-[#a0a0a0]">
          <InfoIcon />
        </span>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mb-6 w-full rounded-md border border-[#5a5a5a] bg-[#333333] px-4 py-3 text-sm text-[#888888] placeholder-[#888888] outline-none"
      />

      {/* Buttons row */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#c1612a] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-75">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#c1612a] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-75">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
