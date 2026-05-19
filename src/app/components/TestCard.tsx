/**
 * Icon components extracted for reusability and clarity
 */

// Clock icon displayed in the header
const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#B5B5B5]"
    aria-hidden="true"
  >
    <path
      d="M10 6V10L13 13"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle
      cx="10"
      cy="10"
      r="8.5"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <circle cx="10" cy="10" r="2.5" fill="currentColor" />
  </svg>
);

// Chevron up icon used for collapsible sections
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 7L6 4L9 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Info icon for tooltips or help text
const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="More information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#A5ADAD" strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fill="#A5ADAD"
      textAnchor="middle"
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="min-h-[508px] w-[254px] rounded bg-[#1C1D17] p-5 font-primary">
      {/* Header with agent name and status indicator */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[15px] font-bold text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <ClockIcon />
      </div>

      {/* Subtitle with truncated description - ellipsis intentional for overflow */}
      <div className="mb-[72px] flex items-center gap-3">
        <ChevronUpIcon className="text-[#8B9291]" />
        <p className="whitespace-nowrap text-[13px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Main form section for adding new design */}
      <div className="mb-8">
        <div className="mb-10 flex items-center gap-2">
          <ChevronUpIcon className="text-[#B2B2B1]" />
          <h2 className="text-[16px] font-semibold text-[#B2B2B1]">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token field - read-only to show expected format */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label
              htmlFor="token"
              className="text-[12.5px] font-semibold text-[#A4A4A3]"
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            id="token"
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#C5CDCD] bg-[#272822] px-3 py-6 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
          />
        </div>

        {/* Design URL field - read-only to show expected format, border-2 emphasizes this is the primary input */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label
              htmlFor="url"
              className="text-[12.5px] font-semibold text-[#A3A3A2]"
            >
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            id="url"
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#B2B2B1] bg-[#272822] px-3 py-6 text-[10.5px] font-semibold text-[#71726E] outline-none placeholder:text-[#71726E]"
          />
        </div>

        {/* Action buttons - equal width for visual balance */}
        <div className="flex items-center gap-5">
          <button className="flex-1 rounded bg-[#843A17] px-6 py-6 text-[13px] font-semibold text-[#8C8078]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#843A17] px-6 py-6 text-[13px] font-semibold text-[#8C8078]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section placeholder */}
      <div className="mt-20">
        <h2 className="text-[16px] font-semibold text-[#B0B0B0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center">
        <p className="text-xs text-[#B5B5B5]">© AutonomyAI</p>
      </div>
    </div>
  );
};
