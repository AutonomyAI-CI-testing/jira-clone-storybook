/**
 * MenuIcon - Grid of dots indicating more options are available
 */
const MenuIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <circle cx="8" cy="4" r="1.5" fill="currentColor" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" />
    <circle cx="4" cy="8" r="1.5" fill="currentColor" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * ChevronIcon - Upward-pointing arrow for collapsible sections
 * @param className - Tailwind classes for color and sizing
 */
const ChevronIcon = ({ className }: { className: string }) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 1L4 4L7 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(180 4 2.5)"
    />
  </svg>
);

/**
 * ExpandIcon - Larger upward-pointing arrow for primary sections
 * @param className - Tailwind classes for color and sizing
 */
const ExpandIcon = ({ className }: { className: string }) => (
  <svg
    width="24"
    height="16"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 2L6 6L10 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(180 6 4)"
    />
  </svg>
);

/**
 * InfoIcon - Help icon for field labels
 * @param className - Tailwind classes for color and sizing
 */
const InfoIcon = ({ className }: { className: string }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 4.5V8.5M7.5 10.5H7.51"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component - UI for configuring a Figma design breakdown agent
 *
 * This card displays configuration fields for the UI magician agent with:
 * - Collapsible sections for organizing options
 * - Input fields for Personal Access Token and Design URL
 * - Action buttons for workflow control
 * - Recent activity section
 * - Optional footer for branding
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] rounded bg-[#1a1a17] p-10 font-['Inter'] font-semibold">
      {/* Header with agent title and menu */}
      <div className="mb-8 flex items-center justify-between">
        <span className="text-[24px] leading-[29px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MenuIcon />
      </div>

      {/* Collapsible subtitle - shows current operation context */}
      <div className="mb-12 flex items-center gap-4">
        <ChevronIcon className="text-[#8b9291]" />
        <span className="text-[23px] leading-[28px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Primary collapsible section - contains configuration inputs */}
      <div className="mb-12 flex items-center gap-4">
        <ExpandIcon className="text-[#b2b2b1]" />
        <span className="text-[27px] leading-[33px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Figma Personal Access Token input with help icon */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[23px] leading-[28px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-6 py-5">
          <span className="text-[23px] leading-[28px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Figma Design URL input with help icon */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[23px] leading-[28px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-6 py-5">
          <span className="text-[21px] leading-[25px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons for workflow control */}
      <div className="mb-16 flex gap-6">
        <button className="flex-1 rounded bg-[#843a17] px-12 py-4 text-[23px] leading-[28px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-12 py-4 text-[23px] leading-[28px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent activity section - displays breakdown history */}
      <div className="text-[27px] leading-[33px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>

      {/* Optional footer for branding */}
      <div className="border-gray-300 border-t pt-3 text-center">
        © AutonomyAI
      </div>
    </div>
  );
};
