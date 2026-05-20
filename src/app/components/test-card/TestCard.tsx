// Icon components extracted for reusability and clarity
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 0V2M7 14V16M13.6569 2.34315L12.2426 3.75736M1.75736 12.2426L0.343146 13.6569M14 7H12M2 7H0M13.6569 13.6569L12.2426 12.2426M1.75736 3.75736L0.343146 2.34315"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 4V8M7.5 10.5V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Extracted form field component to reduce duplication
interface FormFieldProps {
  label: string;
  placeholder: string;
  labelColor: string;
  inputClassName: string;
}

const FormField = ({
  label,
  placeholder,
  labelColor,
  inputClassName,
}: FormFieldProps) => (
  <div className="mb-4">
    <div className="mb-2 flex items-center gap-1.5">
      <label
        className={`text-[11.5px] font-semibold leading-[13.92px] ${labelColor}`}
      >
        {label}
      </label>
      <InfoIcon className={labelColor} />
    </div>
    <input type="text" placeholder={placeholder} className={inputClassName} />
  </div>
);

export const TestCard = () => {
  return (
    <div className="font-sans w-64 bg-[#1C1D17] p-5 text-sm">
      {/* Header with agent name and status indicator */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SunIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible design form section */}
      <div className="mb-4 flex items-center gap-2">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Form inputs for Figma integration */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        labelColor="text-[#a4a4a3]"
        inputClassName="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder-[#737470] outline-none"
      />

      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        labelColor="text-[#a3a3a2]"
        inputClassName="w-full border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder-[#71726e] outline-none"
      />

      {/* Action buttons for the design submission workflow */}
      <div className="mb-8 flex gap-4">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying historical breakdown results */}
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with branding */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center">
        <p className="text-xs text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};
