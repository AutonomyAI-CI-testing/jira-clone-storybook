// SVG icon components — reused throughout the card
const SettingsIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-font-subtlest"
  >
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
    <path
      d="M8 1V2M8 14V15M15 8H14M2 8H1M12.8 3.2L12.1 3.9M3.9 12.1L3.2 12.8M12.8 12.8L12.1 12.1M3.9 3.9L3.2 3.2"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-font-subtlest"
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-font-subtlest"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path d="M7.5 5V11" stroke="currentColor" strokeWidth="1" />
    <circle cx="7.5" cy="4" r="0.5" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-[500px] bg-[#2b2b2b] p-8 text-sm font-semibold">
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-base text-[#b5b5b5]">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible Section 2 - Add New Design */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-base text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-xs text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#4a4a4a] bg-[#1a1a1a] px-4 py-3 text-xs text-[#737470] placeholder-[#737470] focus-visible:outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-xs text-[#a3a3a2]">Design URL</label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#4a4a4a] bg-[#1a1a1a] px-4 py-3 text-xs text-[#71726e] placeholder-[#71726e] focus-visible:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex gap-5">
        <button className="flex-1 rounded bg-[#843a17] px-6 py-3 text-xs font-semibold text-[#8c8078] hover:bg-[#963f1c] active:bg-[#743015]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-6 py-3 text-xs font-semibold text-[#8c8078] hover:bg-[#963f1c] active:bg-[#743015]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2 className="text-base text-[#b0b0b0]">Recent Breakdowns</h2>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center text-xs text-[#737470]">
        © AutonomyAI
      </div>
    </div>
  );
};
