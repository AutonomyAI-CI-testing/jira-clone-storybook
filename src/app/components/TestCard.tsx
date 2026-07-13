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

const ChevronUpIcon = () => (
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-zinc-800 px-5 py-6 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-zinc-400">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-2 text-orange-600">
        <ChevronUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 text-white">
        <ChevronUpIcon />
        <h2 className="text-2xl font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-300">
            Personal Access Token
          </label>
          <span className="text-zinc-400">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-zinc-600 bg-zinc-700 px-4 py-3 text-sm text-zinc-400 placeholder-zinc-500 outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-300">
            Design URL
          </label>
          <span className="text-zinc-400">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-zinc-600 bg-zinc-700 px-4 py-3 text-sm text-zinc-400 placeholder-zinc-500 outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="mt-7 flex gap-4">
        <button className="flex-1 rounded-lg bg-orange-700 px-6 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-orange-700 px-6 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
