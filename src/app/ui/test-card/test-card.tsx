// Settings/gear icon used in header
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Chevron/dropdown icon
const ChevronIcon = (): JSX.Element => (
  <svg
    className="h-3 w-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

// Info/help icon used in input labels
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-lg bg-black p-5">
      {/* Header Section */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          UI magician Agent
        </h1>
        <button className="flex items-center justify-center text-[#b0b0b0] hover:text-[#b5b5b5]">
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-5 flex items-center gap-2">
        <button className="flex items-center text-[#8b9291]">
          <ChevronIcon />
        </button>
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-4 flex items-center gap-2">
        <button className="flex items-center text-[#b0b0b0]">
          <ChevronIcon />
        </button>
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-[11.5px] text-[#a3a3a2]">
            Personal Access Token
          </label>
          <button className="flex items-center text-[#a3a3a2]">
            <InfoIcon />
          </button>
        </div>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#333333] bg-black px-3 py-2 text-[10.5px] text-[#727070] placeholder-[#545450] focus:border-[#444444] focus:outline-none"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-[11.5px] text-[#a3a3a2]">Design URL</label>
          <button className="flex items-center text-[#a3a3a2]">
            <InfoIcon />
          </button>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#333333] bg-black px-3 py-2 text-[10.5px] text-[#727070] placeholder-[#545450] focus:border-[#444444] focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-5 flex gap-3">
        <button className="flex-1 rounded bg-[#964a26] px-4 py-2 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#a0522f] active:bg-[#8b3d1f]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#964a26] px-4 py-2 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#a0522f] active:bg-[#8b3d1f]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] text-[#a3a3a2]">© AutonomyAI</p>
      </div>
    </div>
  );
};
