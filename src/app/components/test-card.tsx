// SVG icons for the UI
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <circle
      cx="8"
      cy="8"
      r="7"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="8" cy="8" r="2" fill="currentColor" />
    <circle cx="8" cy="3.5" r="0.8" fill="currentColor" />
    <circle cx="8" cy="12.5" r="0.8" fill="currentColor" />
    <circle cx="3.5" cy="8" r="0.8" fill="currentColor" />
    <circle cx="12.5" cy="8" r="0.8" fill="currentColor" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 4.5L4 1.5L7 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const InfoIcon = ({ color = "text-[#a4a4a3]" }: { color?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1"
      className={color}
    />
    <circle cx="7.5" cy="5" r="0.6" fill="currentColor" className={color} />
    <path
      d="M7 8H7.5V11"
      stroke="currentColor"
      strokeWidth="1"
      className={color}
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-black p-5"
    >
      <div className="w-full max-w-sm">
        {/* Header with title and settings icon */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <SettingsIcon />
        </div>

        {/* Collapsible sections - collapsed state shown with rotated chevron */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[11.5px] font-semibold text-[#8b9291]">
            <ChevronUpIcon className="rotate-180" />
            <span>From entire frame to a singl...</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1]">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M1 7L6 2L11 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span>Add New Design</span>
          </div>
        </div>

        {/* Personal Access Token field with info icon */}
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon color="text-[#a4a4a3]" />
        </div>

        {/* Personal Access Token input */}
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mb-6 w-full border border-[#929291] bg-[#272822] px-4 py-2.5 text-[10.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
        />

        {/* Design URL field with info icon */}
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon color="text-[#a3a3a2]" />
        </div>

        {/* Design URL input */}
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mb-8 w-full border border-[#a5adad] bg-[#272822] px-4 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
        />

        {/* Action buttons */}
        <div className="mb-12 flex gap-6">
          <button className="flex-1 rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#943d1b]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#943d1b]">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
