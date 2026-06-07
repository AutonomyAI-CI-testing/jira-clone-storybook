// Icon components - small, reusable SVG assets
const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.49 2.16a1.65 1.65 0 0 0-2.98 0L8.1 2.9a1.65 1.65 0 0 1-1.75.8l-.8-.16a1.65 1.65 0 0 0-1.83 2.23l.33.74a1.65 1.65 0 0 1-.37 1.88l-.6.54a1.65 1.65 0 0 0 0 2.46l.6.54c.51.46.69 1.19.37 1.88l-.33.74a1.65 1.65 0 0 0 1.83 2.23l.8-.16a1.65 1.65 0 0 1 1.75.8l.41.74a1.65 1.65 0 0 0 2.98 0l.41-.74a1.65 1.65 0 0 1 1.75-.8l.8.16a1.65 1.65 0 0 0 1.83-2.23l-.33-.74a1.65 1.65 0 0 1 .37-1.88l.6-.54a1.65 1.65 0 0 0 0-2.46l-.6-.54a1.65 1.65 0 0 1-.37-1.88l.33-.74A1.65 1.65 0 0 0 14.45 3.54l-.8.16a1.65 1.65 0 0 1-1.75-.8l-.41-.74ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10.5L8 5.5L13 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.5V11"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="5.5" r="0.7" fill="currentColor" />
  </svg>
);

// Design integration preview card showing agent configuration for Figma design syncing
export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-full bg-[#1e1e1e] p-4">
        {/* Header with title and settings icon */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#b5b5b5]">
            UI magician Agent
          </span>
          <span className="text-[#b5b5b5]">
            <GearIcon />
          </span>
        </div>

        {/* Subtitle showing agent description */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[#8b9291]">
            <ChevronUpIcon />
          </span>
          <span className="text-sm text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Visual spacer */}
        <div className="mt-8" />

        {/* Action row for adding new design configurations */}
        <div className="flex items-center gap-2">
          <span className="text-[#b2b2b1]">
            <ChevronUpIcon />
          </span>
          <span className="text-base font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token input field - read-only for display */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#a4a4a3]">
              Personal Access Token
            </span>
            <span className="text-[#a4a4a3]">
              <InfoIcon />
            </span>
          </div>
          <input
            className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-sm text-[#737470] placeholder:text-[#737470] focus:outline-none"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL input field - read-only for display */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#a4a4a3]">Design URL</span>
            <span className="text-[#a4a4a3]">
              <InfoIcon />
            </span>
          </div>
          <input
            className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-sm text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
            placeholder="https://www.figma.com/file/:"
            readOnly
          />
        </div>

        {/* Action buttons for design operations */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="rounded-lg bg-[#843a17] px-6 py-3 font-semibold text-white">
            Awesome
          </button>
          <button className="rounded-lg bg-[#843a17] px-6 py-3 font-semibold text-white">
            Prepare
          </button>
        </div>

        {/* Section header for recent design breakdowns */}
        <div className="mt-8">
          <span className="text-base font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
