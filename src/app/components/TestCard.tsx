// Icon components extracted for reusability and cleaner JSX
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <path
      d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M7.5 2h5l.7 2 2 .7 2-.7 2 3-1.3 2 .7 2h-1.3l-.7 2-2 .7-2 2h-3l-2-2-2-.7-.7-2H4l.7-2-1.3-2 2-3 2 .7 2-.7L7.5 2Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 6l5-5 5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
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

// Form field component to reduce duplication between token and URL inputs
interface FormFieldProps {
  label: string;
  placeholder: string;
  borderStyle: string;
  textSize: string;
  lineHeight: string;
  placeholderColor: string;
}

const FormField = ({
  label,
  placeholder,
  borderStyle,
  textSize,
  lineHeight,
  placeholderColor,
}: FormFieldProps) => (
  <div className="mb-8">
    <div className="mb-2 flex items-center gap-1.5">
      <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full rounded-sm ${borderStyle} bg-[#272822] px-3 py-2 ${textSize} font-semibold ${lineHeight} text-white ${placeholderColor} focus:outline-none focus:ring-1`}
    />
  </div>
);

// Action button component to reduce duplication
const ActionButton = ({ label }: { label: string }) => (
  <button className="flex h-[37px] w-[85px] items-center justify-center rounded-sm bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078] transition-opacity hover:opacity-90 active:opacity-80">
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div className="w-[254px] rounded bg-[#1C1D17] p-5 font-sans text-white">
      {/* Header with agent title and settings gear */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle section - truncated text indicates expandable content */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Form inputs for Figma integration */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderStyle="border-[1.5px] border-[#a5adad]"
        textSize="text-[11.5px]"
        lineHeight="leading-[13.92px]"
        placeholderColor="placeholder-[#737470]"
      />

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderStyle="border-[2px] border-[#929291]"
        textSize="text-[10.5px]"
        lineHeight="leading-[12.71px]"
        placeholderColor="placeholder-[#71726e]"
      />

      {/* Action buttons for primary workflows */}
      <div className="mb-16 flex gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent activity section */}
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div className="mt-3 border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-gray-400">© AutonomyAI</p>
      </div>
    </div>
  );
};
