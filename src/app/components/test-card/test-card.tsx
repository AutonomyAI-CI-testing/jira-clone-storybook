/**
 * Reusable info icon for form field labels
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className={className}
    aria-label="More information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 7v3M7.5 5v.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Atom icon representing settings or configuration
 * Three orbital ellipses rotated at 60° intervals around a central nucleus
 */
const AtomIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-label="Settings"
  >
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="4"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="4"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="4"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

/**
 * Upward chevron icon used for collapse/expand indicators
 */
const ChevronUpIcon = ({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) => {
  const dimensions = size === "sm" ? { width: 8, height: 5 } : { width: 12, height: 8 };
  const pathD = size === "sm" ? "M1 4l3-3 3 3" : "M2 6l4-4 4 4";
  const strokeWidth = size === "sm" ? "1" : "1.5";

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={pathD}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-md bg-[#1e1e1c] p-5">
      {/* Header: Agent title and settings icon */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="font-semibold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <AtomIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle - intentionally truncated to hint at expandable content */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon size="sm" className="text-[#8b9291]" />
        <p className="truncate font-semibold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Collapsible section header for design input form */}
      <div className="mb-5 flex items-center gap-2">
        <ChevronUpIcon size="md" className="text-[#b2b2b1]" />
        <h2 className="font-semibold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field - displays masked value */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-1">
          <label
            htmlFor="token-input"
            className="font-semibold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <div
          id="token-input"
          className="h-9 rounded border border-[#a5adad] bg-[#272822] px-3 py-2"
        >
          <span className="font-semibold text-[11.5px] leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL Field - accepts Figma file URLs */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-1">
          <label
            htmlFor="url-input"
            className="font-semibold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <div
          id="url-input"
          className="h-[37px] rounded border-2 border-[#929291] bg-[#272822] px-3 py-2"
        >
          <span className="font-semibold text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons - equal width with burnt orange styling */}
      <div className="mb-10 flex gap-3">
        <button
          type="button"
          className="flex h-10 flex-1 items-center justify-center rounded bg-[#843a17] px-4 py-2"
        >
          <span className="font-semibold text-[11.5px] leading-[13.92px] text-[#8c8078]">
            Awesome
          </span>
        </button>
        <button
          type="button"
          className="flex h-10 flex-1 items-center justify-center rounded bg-[#843a17] px-4 py-2"
        >
          <span className="font-semibold text-[11.5px] leading-[13.92px] text-[#8c8078]">
            Prepare
          </span>
        </button>
      </div>

      {/* Recent Breakdowns Section - lists previous design parsing results */}
      <div className="mb-3">
        <h2 className="font-semibold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with branding */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};
