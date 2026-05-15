/**
 * Atom icon representing the AI agent - three orbital rings around a central core
 */
const AtomIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="2" fill="#b5b5b5" />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="4"
      stroke="#b5b5b5"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="4"
      stroke="#b5b5b5"
      strokeWidth="1.5"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="4"
      stroke="#b5b5b5"
      strokeWidth="1.5"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

/**
 * Chevron icon used for collapsible sections - rotated 90deg to point up
 */
const ChevronIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4L12 8L8 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(-90 8 8)"
    />
  </svg>
);

/**
 * Info icon for tooltips/help text
 */
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="8" stroke={color} strokeWidth="1" />
    <text
      x="9"
      y="13"
      textAnchor="middle"
      fill={color}
      fontSize="12"
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

/**
 * TestCard component - displays a UI magician agent configuration form
 *
 * This card provides a dark-themed interface for configuring Figma design imports
 * with personal access token and design URL inputs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="flex h-[508px] w-[508px] flex-col gap-6 rounded bg-[#1a1a17] p-8 font-[Inter] font-semibold">
      {/* Header with agent name and icon */}
      <div className="flex items-center justify-between">
        <div className="text-[20px] leading-[24px] text-[#b5b5b5]">
          UI magician Agent
        </div>
        <AtomIcon />
      </div>

      {/* Collapsible subtitle showing current context */}
      <div className="flex items-center gap-2">
        <ChevronIcon color="#8b9291" />
        <div className="text-[14px] leading-[17px] text-[#8b9291]">
          From entire frame to a singl...
        </div>
      </div>

      {/* Vertical spacer to push form section down */}
      <div className="h-28"></div>

      {/* Collapsible "Add New Design" section */}
      <div className="flex items-center gap-2">
        <ChevronIcon color="#b2b2b1" />
        <div className="text-[18px] leading-[22px] text-[#b2b2b1]">
          Add New Design
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {/* Personal Access Token input field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-[14px] leading-[17px] text-[#a4a4a3]">
              Personal Access Token
            </div>
            <InfoIcon color="#a4a4a3" />
          </div>
          <div className="rounded border border-[#a5adad] bg-[#2d2e27] px-4 py-4 text-[14px] leading-[17px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL input field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-[14px] leading-[17px] text-[#a3a3a2]">
              Design URL
            </div>
            <InfoIcon color="#a3a3a2" />
          </div>
          <div className="rounded border border-[#929291] border-opacity-50 bg-[#2d2e27] px-4 py-4 text-[14px] leading-[17px] text-[#71726e]">
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Action buttons with disabled styling */}
        <div className="mt-4 flex gap-8">
          <div className="flex flex-1 items-center justify-center rounded bg-[#843a17] px-6 py-[14px] text-[14px] leading-[17px] text-[#8c8078]">
            Awesome
          </div>
          <div className="flex flex-1 items-center justify-center rounded bg-[#843a17] px-6 py-[14px] text-[14px] leading-[17px] text-[#8c8078]">
            Prepare
          </div>
        </div>
      </div>

      {/* Recent Breakdowns section header */}
      <div className="mt-16 text-[16px] leading-[19px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center text-[14px] leading-[17px] text-[#b5b5b5]">
        © AutonomyAI
      </div>
    </div>
  );
};
