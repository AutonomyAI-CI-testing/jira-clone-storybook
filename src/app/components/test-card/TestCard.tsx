
const COLORS = {
  headerText: "#b5b5b5",
  sectionText: "#8b9291",
  labelText: "#a4a4a3",
  placeholderText: "#737470",
  headingText: "#b2b2b1",
  recentHeading: "#b0b0b0",
  inputBg: "#333333",
  inputBorder: "#4a4a4a",
  buttonBg: "#b85c2a",
  buttonText: "#8c8078",
  cardBg: "#2a2a2a",
};

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] p-4 text-white font-sans"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          style={{ color: COLORS.headerText }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Collapsed Section Row */}
      <div className="flex items-center space-x-1 mb-4">
        <ChevronUpIcon className="h-3 w-3" style={{ color: COLORS.sectionText }} />
        <span
          className="text-[11.5px] font-semibold"
          style={{ color: COLORS.sectionText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <div className="flex items-center space-x-1 mb-3">
          <ChevronUpIcon className="h-3 w-3" style={{ color: COLORS.headingText }} />
          <h3
            className="text-[13.5px] font-semibold"
            style={{ color: COLORS.headingText }}
          >
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-3">
          <label
            className="flex items-center space-x-1 text-[11.5px] font-semibold mb-1"
            style={{ color: COLORS.labelText }}
          >
            <span>Personal Access Token</span>
            <InfoIcon className="h-3 w-3" style={{ color: COLORS.labelText }} />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 border rounded text-[11.5px] focus:outline-none"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: COLORS.inputBorder,
              color: "white",
            }}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-4">
          <label
            className="flex items-center space-x-1 text-[11.5px] font-semibold mb-1"
            style={{ color: COLORS.labelText }}
          >
            <span>Design URL</span>
            <InfoIcon className="h-3 w-3" style={{ color: COLORS.labelText }} />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 border rounded text-[11.5px] focus:outline-none"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: COLORS.inputBorder,
              color: "white",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between space-x-2">
          <button
            className="flex-1 py-2 rounded-lg text-[11.5px] font-semibold"
            style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded-lg text-[11.5px] font-semibold"
            style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h3
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.recentHeading }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}
