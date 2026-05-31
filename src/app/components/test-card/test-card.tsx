// SVG icon components to avoid repetition
const InfoIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className="text-[#737470]"
  >
    <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
    <text x="6" y="8" fontSize="8" textAnchor="middle" fill="currentColor">
      i
    </text>
  </svg>
);

const HelpIcon = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeWidth="1" />
    <circle cx="8" cy="6" r="1" fill="currentColor" />
    <path d="M8 8v3" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const ChevronDownIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className="text-[#8b9291]"
  >
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className="text-[#8c8078]"
  >
    <path
      d="M3.5 4.5L8.5 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8.5 4.5L3.5 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Common style constants
const INPUT_CLASS =
  "w-full bg-[#0a0a0a] px-3 py-2 text-[10.5px] font-semibold text-[#b2b2b1] placeholder-[#5a5a5a] outline-none";
const LABEL_CLASS =
  "mb-2 flex items-center gap-1 text-[11.5px] font-semibold text-[#a4a4a3]";
const BUTTON_CLASS =
  "flex-1 bg-[#a85a38] px-4 py-2 text-[11.5px] font-semibold text-white hover:bg-[#b86840] active:bg-[#985030]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-black p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="flex items-center justify-center text-[#b5b5b5] hover:text-[#c0c0c0]">
          <HelpIcon />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-6">
        <button className="flex w-full items-center gap-2 pb-2">
          <ChevronDownIcon />
          <span className="text-[11.5px] font-semibold text-[#b5b5b5]">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center justify-between border-t border-[#2a2a2a] pt-4">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Add New Design
        </span>
        <CloseIcon />
      </div>

      {/* Input Fields */}
      <div className="mb-6 space-y-4">
        {/* Personal Access Token */}
        <div>
          <label className={LABEL_CLASS}>
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className={INPUT_CLASS}
          />
        </div>

        {/* Design URL */}
        <div>
          <label className={LABEL_CLASS}>
            Design URL
            <InfoIcon />
          </label>
          <input
            type="text"
            placeholder="https://figma.com/file/..."
            className={INPUT_CLASS}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-2">
        <button className={BUTTON_CLASS}>Awesome</button>
        <button className={BUTTON_CLASS}>Prepare</button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-[#2a2a2a] pt-4">
        <span className="text-[11.5px] font-semibold text-[#71726e]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
