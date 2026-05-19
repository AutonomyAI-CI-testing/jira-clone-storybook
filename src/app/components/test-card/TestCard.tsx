/**
 * TestCard component displays a card UI for the UI Magician Agent
 * with form inputs for Personal Access Token and Design URL.
 */

// SVG icon components for better reusability and clarity
const SunIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#B5B5B5]"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7 0V2M7 14V16M14 7H12M2 7H0M11.5 11.5L10 10M4 4L2.5 2.5M11.5 2.5L10 4M4 10L2.5 11.5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

const TriangleUpSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8B9291]"
  >
    <path d="M4 0L8 5H0L4 0Z" fill="currentColor" />
  </svg>
);

const TriangleUpLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#B2B2B1]"
  >
    <path d="M6 0L12 8H0L6 0Z" fill="currentColor" />
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
    <circle
      cx="7.5"
      cy="7.5"
      r="7"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fontWeight="600"
      textAnchor="middle"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

// Action button with consistent styling across the card
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843A17] text-[11.5px] font-semibold leading-[13.92px] text-[#8C8078]">
    {children}
  </button>
);

// Form field with label, info icon, and styled input display
const FormField = ({
  id,
  label,
  placeholder,
  borderStyle,
  height,
  fontSize,
  textColor,
  labelColor,
}: {
  id: string;
  label: string;
  placeholder: string;
  borderStyle: string;
  height: string;
  fontSize: string;
  textColor: string;
  labelColor: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label
        htmlFor={id}
        className={`text-[11.5px] font-semibold leading-[13.92px] ${labelColor}`}
      >
        {label}
      </label>
      <InfoIcon className={labelColor} />
    </div>
    <div
      id={id}
      className={`flex ${height} w-[211px] items-center ${borderStyle} bg-[#272822] px-3`}
    >
      <span className={`${fontSize} font-semibold ${textColor}`}>
        {placeholder}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans max-w-[254px] rounded bg-[#1C1D17] p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <SunIcon />
      </div>

      {/* Subtitle/Collapsible Row */}
      <div className="mb-12 flex items-center gap-2">
        <TriangleUpSmall />
        <p className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8B9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center gap-2">
        <TriangleUpLarge />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#B2B2B1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <FormField
          id="token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderStyle="border border-[#A5ADAD]"
          height="h-[36px]"
          fontSize="text-[11.5px]"
          textColor="leading-[13.92px] text-[#737470]"
          labelColor="text-[#A4A4A3]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <FormField
          id="url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderStyle="border-2 border-[#929291]"
          height="h-[37px]"
          fontSize="text-[10.5px]"
          textColor="leading-[12.71px] text-[#71726E]"
          labelColor="text-[#A3A3A2]"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-12 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mb-4">
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#B0B0B0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
