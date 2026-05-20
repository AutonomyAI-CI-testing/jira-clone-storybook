import cx from "classix";

// Icon components for reuse throughout the card
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M5 0L9.33 5.25H0.67L5 0Z" fill="currentColor" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 4.5V8M7.5 10.5H7.505"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 0.5L8.5 2L7 3.5L5.5 2L7 0.5ZM11.5 5L13 6.5L11.5 8L10 6.5L11.5 5ZM7 8L8.5 9.5L7 11L5.5 9.5L7 8ZM2.5 5L4 6.5L2.5 8L1 6.5L2.5 5ZM7 4.5C5.067 4.5 3.5 6.067 3.5 8C3.5 9.933 5.067 11.5 7 11.5C8.933 11.5 10.5 9.933 10.5 8C10.5 6.067 8.933 4.5 7 4.5ZM0 13V15H1.5V13H0ZM3 13V15H4.5V13H3ZM6 13V15H7.5V13H6ZM9 13V15H10.5V13H9ZM12 13V15H13.5V13H12Z"
      fill="currentColor"
    />
  </svg>
);

// Shared button styles to ensure consistency
const ACTION_BUTTON_STYLES = cx(
  "flex h-12 flex-1 items-center justify-center rounded-none",
  "bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]",
  "hover:opacity-90 active:opacity-80"
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "flex w-[254px] flex-col gap-8 rounded-none bg-[#1e1e1a] p-5",
        "font-sans font-semibold"
      )}
    >
      {/* Header with agent name and icon */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <SparkleIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle section */}
      <div className="flex items-center gap-1.5">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-12" />

      {/* Collapsible "Add New Design" section header */}
      <div className="flex items-center gap-1.5">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Personal Access Token
          </span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <div className="h-12 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field - thicker border to emphasize active/focused state */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <div className="h-12 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2">
          <span className="text-[11.5px] font-semibold text-[#71726e]">
            https://www.figma.com/...
          </span>
        </div>
      </div>

      {/* Primary action buttons */}
      <div className="flex gap-1">
        <button type="button" className={ACTION_BUTTON_STYLES}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_STYLES}>
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-12" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-[12px] text-center">
        <span className="text-[11.5px] font-semibold text-[#b5b5b5]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
