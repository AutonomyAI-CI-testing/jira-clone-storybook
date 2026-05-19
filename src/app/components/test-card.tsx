// Info icon used next to input field labels
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Information"
  >
    <circle
      cx="6"
      cy="6"
      r="5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M6 4V6.5M6 8.5H6.005"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// Chevron icon for collapsible sections
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Star/compass icon in the header
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 7L13 8L13.5 6.5L12 7ZM2 7L1 8L0.5 6.5L2 7ZM7 2L8 1L6.5 0.5L7 2ZM7 12L6 13L7.5 13.5L7 12Z"
      fill="currentColor"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-80 flex-col gap-6 bg-[#1e1e1a] p-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-primary text-[18px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <StarIcon className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle row - collapsible description */}
      <div className="flex items-center gap-1.5">
        <ChevronIcon className="text-[#8b9291]" />
        <span className="font-primary text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-12" />

      {/* Add New Design section - collapsible form */}
      <div className="flex items-center gap-1.5">
        <ChevronIcon className="text-[#b2b2b1]" />
        <span className="font-primary text-base text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Form fields */}
      <div className="mt-6 flex flex-col gap-3">
        {/* Personal Access Token input field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <span className="font-primary text-[11.5px] text-[#a4a4a3]">
              Personal Access Token
            </span>
            <InfoIcon className="text-[#a4a4a3]" />
          </div>
          <div className="border border-[#a5adad] bg-[#272822] px-3 py-4">
            <span className="font-primary text-[11.5px] text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL input field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <span className="font-primary text-[11.5px] text-[#a4a4a3]">
              Design URL
            </span>
            <InfoIcon className="text-[#a4a4a3]" />
          </div>
          <div className="border border-[#929291] bg-[#272822] px-3 py-4">
            <span className="font-primary text-[11.5px] text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-2 flex gap-2">
        <button className="flex h-[40px] flex-1 items-center justify-center rounded bg-[#843a17]">
          <span className="font-primary text-[12px] font-semibold text-[#8c8078]">
            Awesome
          </span>
        </button>
        <button className="flex h-[40px] flex-1 items-center justify-center rounded bg-[#843a17]">
          <span className="font-primary text-[12px] font-semibold text-[#8c8078]">
            Prepare
          </span>
        </button>
      </div>

      {/* Spacer */}
      <div className="h-20" />

      {/* Recent Breakdowns section */}
      <span className="font-primary text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>

      {/* Footer section */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="font-primary text-sm text-[#b5b5b5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
