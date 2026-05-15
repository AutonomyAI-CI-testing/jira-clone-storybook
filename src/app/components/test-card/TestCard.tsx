// Gear/settings icon for card header
const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="#b5b5b5"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M12 7L13 8L12 9M2 7L1 8L2 9M7 1L8 0L9 1M7 13L8 14L9 13M10.5 2.5L11.5 1.5L12.5 2.5M3.5 11.5L2.5 12.5L3.5 13.5M10.5 11.5L11.5 12.5L10.5 13.5M3.5 2.5L2.5 1.5L3.5 0.5"
      stroke="#b5b5b5"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// Chevron up icon - size varies by context
const ChevronUpIcon = ({
  width,
  height,
  strokeWidth,
  color,
}: {
  width: number;
  height: number;
  strokeWidth: number;
  color: string;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Info icon for form field labels
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
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
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7.5 10.5V7.5M7.5 4.5H7.51"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FormFieldProps {
  label: string;
  value: string;
  labelColor: string;
  valueColor: string;
  borderClass: string;
}

// Reusable form field with label, info icon, and read-only input display
const FormField = ({
  label,
  value,
  labelColor,
  valueColor,
  borderClass,
}: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-1.5">
      <label className={`font-primary-bold text-xs text-[${labelColor}]`}>
        {label}
      </label>
      <InfoIcon color={labelColor} />
    </div>
    <div className={`rounded ${borderClass} bg-[#272822] px-3 py-2.5`}>
      <span className={`font-primary-bold text-xs text-[${valueColor}]`}>
        {value}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded-lg bg-[#1a1a14] p-5">
      {/* Header with agent name and settings icon */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-sm text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      {/* Subtitle with collapse indicator */}
      <div className="mt-3 flex items-center gap-2">
        <ChevronUpIcon width={8} height={5} strokeWidth={1.5} color="#8b9291" />
        <p className="font-primary-bold text-xs text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-6" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon width={12} height={8} strokeWidth={2} color="#b2b2b1" />
        <h3 className="font-primary-bold text-sm text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Form fields for Figma integration */}
      <div className="mt-4 space-y-4">
        <FormField
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="#a4a4a3"
          valueColor="#737470"
          borderClass="border border-[#a5adad]"
        />
        <FormField
          label="Design URL"
          value="https://www.figma.com/file/:"
          labelColor="#a3a3a2"
          valueColor="#71726e"
          borderClass="border-2 border-[#929291]"
        />

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          <button className="rounded bg-[#843a17] px-6 py-2 font-primary-bold text-xs text-[#f5e6d3]">
            Awesome
          </button>
          <button className="rounded bg-[#843a17] px-6 py-2 font-primary-bold text-xs text-[#f5e6d3]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-8">
        <h3 className="font-primary-bold text-sm text-[#d0d0d0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-gray-300 mt-4 border-t pt-3 text-center">
        <p className="text-xs text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};
