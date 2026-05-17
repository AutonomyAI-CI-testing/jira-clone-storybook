// Info icon helper component - used for field tooltips
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.5" />
    <path
      d="M7.5 6.5V10.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7.5" cy="4.5" r="0.75" fill={color} />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[480px] bg-[#1C1D17] px-6 py-8 font-semibold text-[#B5B5B5]">
      {/* Header with agent title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <div className="text-[13.5px] leading-[16.34px]">UI magician Agent</div>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Settings"
        >
          <path
            d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
            stroke="#B5B5B5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 2L11.5 4L13 5L11.5 6L11 8L10 6L8 5L10 4L11 2Z"
            stroke="#B5B5B5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 14L3.5 12L5 11L3.5 10L3 8L2 10L0 11L2 12L3 14Z"
            stroke="#B5B5B5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Collapsible hint section - collapsed state */}
      <div className="mb-20 flex items-center gap-2">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 4L4 1L1 4"
            stroke="#8B9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-[11.5px] leading-[13.92px] text-[#8B9291]">
          From entire frame to a singl...
        </div>
      </div>

      {/* Expandable section for adding new design */}
      <div className="mb-10 flex items-center gap-2">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 7L6 2L1 7"
            stroke="#B2B2B1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-[13.5px] leading-[16.34px] text-[#B2B2B1]">Add New Design</div>
      </div>

      {/* Personal Access Token field with info tooltip */}
      <div className="mb-4 flex items-center gap-2">
        <div className="text-[11.5px] leading-[13.92px] text-[#A4A4A3]">Personal Access Token</div>
        <InfoIcon color="#A4A4A3" />
      </div>

      {/* Token input - displays placeholder value */}
      <div className="mb-12 h-[40px] w-full border border-[#A5ADAD] bg-[#272822] px-3 py-2">
        <div className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL field with info tooltip */}
      <div className="mb-4 flex items-center gap-2">
        <div className="text-[11.5px] leading-[13.92px] text-[#A3A3A2]">Design URL</div>
        <InfoIcon color="#A3A3A2" />
      </div>

      {/* URL input - displays Figma URL placeholder */}
      <div className="mb-14 h-[40px] w-full border-2 border-[#929291] bg-[#272822] px-3 py-2">
        <div className="text-[10.5px] leading-[12.71px] text-[#71726E]">
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Primary action buttons */}
      <div className="mb-24 flex gap-8">
        <button className="h-[48px] w-[120px] rounded bg-[#843A17] text-[12px] leading-[14.52px] text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[48px] w-[120px] rounded bg-[#843A17] text-[12px] leading-[14.52px] text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Section for viewing recent breakdowns */}
      <div className="text-[13.5px] leading-[16.34px] text-[#B0B0B0]">Recent Breakdowns</div>

      {/* Footer with company branding */}
      <div className="border-t border-gray-300 pt-3 text-center">
        © AutonomyAI
      </div>
    </div>
  );
};
