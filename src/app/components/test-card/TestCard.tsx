// Icon components extracted for reusability and clarity
const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
      fill="#B5B5B5"
    />
    <path
      d="M6.5 0.5L6.8 1.8C7.1 1.9 7.4 2 7.6 2.2L8.9 1.7L10.4 4.3L9.3 5.2C9.3 5.5 9.3 5.8 9.3 6.1L10.4 7L8.9 9.6L7.6 9.1C7.4 9.3 7.1 9.4 6.8 9.5L6.5 10.8H3.5L3.2 9.5C2.9 9.4 2.6 9.3 2.4 9.1L1.1 9.6L-0.4 7L0.7 6.1C0.7 5.8 0.7 5.5 0.7 5.2L-0.4 4.3L1.1 1.7L2.4 2.2C2.6 2 2.9 1.9 3.2 1.8L3.5 0.5H6.5Z"
      transform="translate(3 2.5)"
      fill="#B5B5B5"
    />
  </svg>
);

const ChevronUpIcon = ({ size = 'small' }: { size?: 'small' | 'large' }) => {
  if (size === 'large') {
    return (
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M2 6L6 2L10 6" stroke="#B2B2B1" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M1 4L4 1L7 4" stroke="#8B9291" strokeWidth="1.5" />
    </svg>
  );
};

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fill={color}
      textAnchor="middle"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

interface FormFieldProps {
  label: string;
  placeholder: string;
  infoIconColor: string;
  inputClassName: string;
}

/**
 * Reusable form field component with label and info icon
 * Inputs are read-only as this is a display/preview component
 */
const FormField = ({
  label,
  placeholder,
  infoIconColor,
  inputClassName,
}: FormFieldProps) => (
  <div className="mb-2 flex items-center gap-2">
    <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#A4A4A3]">
      {label}
    </label>
    <InfoIcon color={infoIconColor} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-[#1C1D17] p-5">
      {/* Header with settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-16 flex items-center gap-2">
        <ChevronUpIcon size="small" />
        <p className="text-[11.5px] font-semibold leading-[13.92px] text-[#8B9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon size="large" />
        <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#B2B2B1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          infoIconColor="#A4A4A3"
          inputClassName="h-[36px] w-full rounded-sm border border-[#A5ADAD] bg-[#272822] px-3 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-[36px] w-full rounded-sm border border-[#A5ADAD] bg-[#272822] px-3 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          infoIconColor="#A3A3A2"
          inputClassName="h-[37px] w-full rounded-sm border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold leading-[12.71px] text-[#71726E] placeholder:text-[#71726E]"
        />
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="h-[37px] w-full rounded-sm border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold leading-[12.71px] text-[#71726E] placeholder:text-[#71726E]"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-16 flex gap-4">
        <button className="h-[37px] w-[85px] rounded-sm bg-[#843A17] text-[11.5px] font-semibold leading-[13.92px] text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[37px] w-[85px] rounded-sm bg-[#843A17] text-[11.5px] font-semibold leading-[13.92px] text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#A4A4A3]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
