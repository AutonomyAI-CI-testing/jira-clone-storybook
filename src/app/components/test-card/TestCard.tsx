// Icon component for settings gear in header
const SettingsIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="#b5b5b5"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M1 8.5V5.5L3.5 4L4.5 1.5H9.5L10.5 4L13 5.5V8.5L10.5 10L9.5 12.5H4.5L3.5 10L1 8.5Z"
      stroke="#b5b5b5"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

// Icon component for chevrons used throughout the UI
const ChevronIcon = ({ stroke, strokeWidth = "1.5", size = "small" }: { stroke: string; strokeWidth?: string; size?: "small" | "large" }) => {
  if (size === "large") {
    return (
      <svg
        width="14"
        height="10"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.5 6.5L6 2L10.5 6.5" stroke={stroke} strokeWidth={strokeWidth} fill="none" />
      </svg>
    );
  }
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 4L4 1L7 4" stroke={stroke} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
};

// Icon component for info tooltips
const InfoIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={stroke} strokeWidth="1.5" fill="none" />
    <text
      x="7.5"
      y="11"
      textAnchor="middle"
      fontSize="10"
      fill={stroke}
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

// Reusable labeled input field with info icon
const LabeledField = ({
  label,
  labelColor,
  borderStyle,
  children,
}: {
  label: string;
  labelColor: string;
  borderStyle: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-3">
      <label className={`text-[${labelColor}] text-[16px] font-semibold leading-[19.36px]`}>
        {label}
      </label>
      <InfoIcon stroke={labelColor} />
    </div>
    <div className={`bg-[#272822] ${borderStyle} h-[48px] flex items-center px-4 py-3`}>
      {children}
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] min-h-[508px] bg-[#1a1a17] px-5 pt-8 pb-8 font-['Inter']">
      {/* Header with title and settings */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-[#b5b5b5] text-[13.5px] font-bold leading-[16.34px]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle section */}
      <div className="flex items-center gap-2 mb-20">
        <ChevronIcon stroke="#8b9291" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-10">
        <ChevronIcon stroke="#b2b2b1" strokeWidth="2" size="large" />
        <h2 className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <LabeledField
        label="Personal Access Token"
        labelColor="#a4a4a3"
        borderStyle="border border-[#a5adad]"
      >
        <span className="text-[#737470] text-[11.5px] font-semibold leading-[13.92px]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </LabeledField>

      {/* Design URL input field */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <label className="text-[#a3a3a2] text-[16px] font-semibold leading-[19.36px]">
            Design URL
          </label>
          <InfoIcon stroke="#a3a3a2" />
        </div>
        <div className="bg-[#272822] border-2 border-[#929291] h-[48px] flex items-center px-4 py-3">
          <span className="text-[#71726e] text-[10.5px] font-semibold leading-[12.71px]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-6 mb-24">
        <button className="flex-1 bg-[#843a17] h-[48px] rounded flex items-center justify-center text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] py-4">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] h-[48px] rounded flex items-center justify-center text-[#8c8078] text-[11.5px] font-semibold leading-[13.92px] py-4">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <h2 className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright */}
      <div className="pt-3 border-t border-gray-300 text-center">
        <span className="text-[#b5b5b5] text-xs">© AutonomyAI</span>
      </div>
    </div>
  );
};
