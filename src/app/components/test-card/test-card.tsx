// SVG icon components
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-[#222220] p-8 text-[#b5b5b5]">
      {/* Header Row */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Subtitle Row */}
      <div className="mb-4 flex items-center gap-3 text-[#8b9291]">
        <ChevronIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mb-16" />

      {/* Add New Design Section */}
      <div className="mb-8 flex items-center gap-3 text-[#b2b2b1]">
        <ChevronIcon />
        <h2 className="text-lg font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-6">
        <label className="mb-2 flex items-center justify-between text-sm font-semibold text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#7a7a75] bg-[#1e1e1b] px-4 py-3 text-sm placeholder-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-8">
        <label className="mb-2 flex items-center justify-between text-sm font-semibold text-[#a3a3a2]">
          <span>Design URL</span>
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#7a7a75] bg-[#1e1e1b] px-4 py-3 text-sm placeholder-[#71726e] focus:outline-none"
        />
      </div>

      {/* Button Row */}
      <div className="mb-16 flex gap-4">
        <button className="rounded-lg bg-[#843a17] px-8 py-3 text-sm font-semibold text-[#c8b8a8] transition-opacity hover:opacity-90">
          Awesome
        </button>
        <button className="rounded-lg bg-[#843a17] px-8 py-3 text-sm font-semibold text-[#c8b8a8] transition-opacity hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-xl font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
