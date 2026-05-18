/**
 * TestCard - A settings/configuration card component for the UI magician Agent
 * Displays personal access token and design URL inputs with action buttons
 */

// Icon components extracted for reusability
const SettingsGearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Settings"
  >
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      stroke="#8B9291"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 10C16.5 10.4 16.54 10.79 16.6 11.17L18.5 12.5L17 15L14.9 14.2C14.4 14.7 13.81 15.1 13.15 15.38L12.75 17.5H9.25L8.85 15.38C8.19 15.1 7.6 14.7 7.1 14.2L5 15L3.5 12.5L5.4 11.17C5.46 10.79 5.5 10.4 5.5 10C5.5 9.6 5.46 9.21 5.4 8.83L3.5 7.5L5 5L7.1 5.8C7.6 5.3 8.19 4.9 8.85 4.62L9.25 2.5H12.75L13.15 4.62C13.81 4.9 14.4 5.3 14.9 5.8L17 5L18.5 7.5L16.6 8.83C16.54 9.21 16.5 9.6 16.5 10Z"
      stroke="#8B9291"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="#8B9291"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpMedium = () => (
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 8L7 2L13 8"
      stroke="#B2B2B1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color = "#A4A4A3" }: { color?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <path
      d="M7.5 6.5V11M7.5 4.5V5"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

interface InputFieldProps {
  label: string;
  labelColor: string;
  placeholder: string;
  placeholderColor: string;
  borderStyle: string;
  className?: string;
}

/**
 * Reusable input field component with label and info icon
 */
const InputField = ({
  label,
  labelColor,
  placeholder,
  placeholderColor,
  borderStyle,
  className = "",
}: InputFieldProps) => (
  <div className={className}>
    <div className="mb-2 flex items-center gap-2">
      <span className={`text-[11.5px] font-semibold text-[${labelColor}]`}>
        {label}
      </span>
      <InfoIcon color={labelColor} />
    </div>
    <div
      className={`bg-[#272822] ${borderStyle} flex h-[42px] items-center rounded px-3`}
    >
      <span
        className={`text-[11.5px] font-semibold text-[${placeholderColor}]`}
      >
        {placeholder}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="font-sans h-[508px] w-[254px] bg-[#1C1D17] p-5"
      role="region"
      aria-label="UI magician Agent configuration card"
    >
      {/* Header Section */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#B5B5B5]">
          UI magician Agent
        </span>
        <SettingsGearIcon />
      </div>

      {/* Subtitle Row */}
      <div className="mb-20 flex items-center gap-2">
        <ChevronUpSmall />
        <span className="truncate text-[11.5px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-7 flex items-center gap-2">
        <ChevronUpMedium />
        <span className="text-[13.5px] font-semibold text-[#B2B2B1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <InputField
        label="Personal Access Token"
        labelColor="#A4A4A3"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        placeholderColor="#737470"
        borderStyle="border border-[#A5ADAD]"
        className="mb-6"
      />

      {/* Design URL Field */}
      <InputField
        label="Design URL"
        labelColor="#A3A3A2"
        placeholder="https://www.figma.com/file/:"
        placeholderColor="#71726E"
        borderStyle="border-2 border-[#929291]"
        className="mb-8"
      />

      {/* Action Buttons */}
      <div className="mb-10 flex gap-5">
        <button
          className="flex h-[42px] flex-1 items-center justify-center rounded bg-[#843A17]"
          aria-label="Awesome"
        >
          <span className="text-[11.5px] font-semibold text-[#8C8078]">
            Awesome
          </span>
        </button>
        <button
          className="flex h-[42px] flex-1 items-center justify-center rounded bg-[#843A17]"
          aria-label="Prepare"
        >
          <span className="text-[11.5px] font-semibold text-[#8C8078]">
            Prepare
          </span>
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-16">
        <span className="text-[13.5px] font-semibold text-[#B0B0B0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer Section */}
      <footer className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[11.5px] text-[#B5B5B5]">© AutonomyAI</span>
      </footer>
    </div>
  );
};
