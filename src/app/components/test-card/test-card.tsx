// SVG icon components for better organization and reusability
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M13.5 8C13.5 8.83 13.35 9.62 13.08 10.34L11.5 9.56C11.66 9.06 11.75 8.54 11.75 8C11.75 7.46 11.66 6.94 11.5 6.44L13.08 5.66C13.35 6.38 13.5 7.17 13.5 8ZM7 2.25C7.54 2.25 8.06 2.34 8.56 2.5L9.34 0.92C8.62 0.65 7.83 0.5 7 0.5C6.17 0.5 5.38 0.65 4.66 0.92L5.44 2.5C5.94 2.34 6.46 2.25 7 2.25ZM2.5 5.44L0.92 4.66C0.65 5.38 0.5 6.17 0.5 8C0.5 8.83 0.65 9.62 0.92 10.34L2.5 9.56C2.34 9.06 2.25 8.54 2.25 8C2.25 7.46 2.34 6.94 2.5 5.44ZM4.66 15.08C5.38 15.35 6.17 15.5 7 15.5C7.83 15.5 8.62 15.35 9.34 15.08L8.56 13.5C8.06 13.66 7.54 13.75 7 13.75C6.46 13.75 5.94 13.66 5.44 13.5L4.66 15.08ZM9 8C9 9.1 8.1 10 7 10C5.9 10 5 9.1 5 8C5 6.9 5.9 6 7 6C8.1 6 9 6.9 9 8Z"
      fill="#b5b5b5"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Expand"
  >
    <path d="M1 4L4 1L7 4" stroke="#6a6b68" strokeWidth="1.5" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Expand section"
  >
    <path d="M2 6L6 2L10 6" stroke="#959593" strokeWidth="2" />
  </svg>
);

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <path
      d="M7.5 5C7.78 5 8 5.22 8 5.5C8 5.78 7.78 6 7.5 6C7.22 6 7 5.78 7 5.5C7 5.22 7.22 5 7.5 5ZM7 10H8V7H7V10Z"
      fill={color}
    />
  </svg>
);

interface TestCardProps {
  /** Whether to show the footer with copyright information */
  showFooter?: boolean;
}

export const TestCard = ({ showFooter = true }: TestCardProps): JSX.Element => {
  return (
    <div className="flex w-[254px] flex-col gap-4 rounded-md bg-[#1a1a17] p-5">
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <span className="font-sans text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      {/* Collapsible section with truncated subtitle */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <span className="font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#6a6b68]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Expandable section for adding new designs */}
      <div className="flex items-center gap-2">
        <ChevronIcon />
        <span className="font-sans text-[13.5px] font-semibold leading-[16.34px] text-[#959593]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field with info tooltip */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon color="#a4a4a3" />
        </div>
        <div className="flex h-[44px] w-full items-center rounded border border-[#a5adad] bg-[#272822] px-3">
          <span className="font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#5a5a56]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field with info tooltip */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon color="#a3a3a2" />
        </div>
        <div className="flex h-[44px] w-full items-center rounded border-2 border-[#929291] bg-[#272822] px-3">
          <span className="font-sans text-[10.5px] font-semibold leading-[12.71px] text-[#5a5a56]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-6">
        <div className="flex h-[44px] w-[90px] items-center justify-center rounded bg-[#843a17]">
          <span className="font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex h-[44px] w-[90px] items-center justify-center rounded bg-[#843a17]">
          <span className="font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-4">
        <span className="font-sans text-[13.5px] font-semibold leading-[16.34px] text-[#939390]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer - conditionally rendered based on prop */}
      {showFooter && (
        <div className="border-t border-gray-300 pt-3 text-center">
          <span className="text-xs text-gray-400">© AutonomyAI</span>
        </div>
      )}
    </div>
  );
};
