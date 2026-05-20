// Info icon SVG used for input field labels
const InfoIcon = ({ stroke }: { stroke: string }) => (
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
      stroke={stroke}
      strokeWidth="1"
      fill="none"
    />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fontWeight="600"
      textAnchor="middle"
      fill={stroke}
    >
      i
    </text>
  </svg>
);

// Settings gear icon for header
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8C10.5 9.38071 9.38071 10.5 8 10.5Z"
      stroke="#b5b5b5"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M8 1V3M8 13V15M15 8H13M3 8H1M13.5 13.5L12 12M4 4L2.5 2.5M13.5 2.5L12 4M4 12L2.5 13.5"
      stroke="#b5b5b5"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// Chevron up icon - small variant for collapsed sections
const ChevronUpSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="#8b9291"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chevron up icon - larger variant for expanded sections
const ChevronUpLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 6.5L6 2L10.5 6.5"
      stroke="#b2b2b1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex min-h-[508px] w-[254px] flex-col gap-4 bg-[#1a1a17] p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-sans text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle row - shows truncated description */}
      <div className="mt-3 flex items-center gap-2">
        <ChevronUpSmall />
        <span className="font-sans text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer between subtitle and main form section */}
      <div className="mt-12" />

      {/* "Add New Design" section - main form area */}
      <div className="flex items-center gap-2">
        <ChevronUpLarge />
        <span className="font-sans text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input - displays masked token for Figma API */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon stroke="#a4a4a3" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
          <span className="font-sans text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input - thicker border to emphasize as primary input field */}
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon stroke="#a3a3a2" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2">
          <span className="font-sans text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Button row */}
      <div className="mt-4 flex gap-3">
        <button className="font-sans flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843A17] text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="font-sans flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843A17] text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* "Recent Breakdowns" footer */}
      <div className="mt-6">
        <span className="font-sans text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="font-sans text-[11.5px] font-semibold text-[#b0b0b0]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
