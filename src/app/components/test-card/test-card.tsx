// Button styling applied to both action buttons
const BUTTON_CLASS =
  "flex-1 rounded bg-[#a0522d] px-6 py-4 text-[14px] font-semibold leading-[17px] text-[#e5d4c8] transition hover:bg-[#8b4513]";

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] bg-[#1a1a1a] px-10 py-8">
      {/* Header Section */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[20px] font-normal leading-[24px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section 1: From entire frame */}
      <CollapsibleRow
        icon={<ChevronUpIcon />}
        label="From entire frame to a singl..."
        labelClass="text-[14px] font-normal leading-[16px] text-[#8b9291]"
      />

      {/* Collapsible Section 2: Add New Design */}
      <CollapsibleRow
        icon={<ChevronUpIcon />}
        label="Add New Design"
        labelClass="text-[16px] font-normal leading-[19px] text-[#b2b2b1]"
      />

      {/* Form Section */}
      <div className="mb-10 space-y-8">
        <FormField
          label="Personal Access Token"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          inputClass="border-[#929291] text-[#737470]"
        />
        <FormField
          label="Design URL"
          type="text"
          placeholder="https://www.figma.com/file/:"
          inputClass="border-[#a5adad] text-[#71726e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-16 flex gap-6">
        <button className={BUTTON_CLASS}>Awesome</button>
        <button className={BUTTON_CLASS}>Prepare</button>
      </div>

      {/* Recent Breakdowns Section */}
      <h2 className="text-[16px] font-normal leading-[19px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[12px] font-normal leading-[14px] text-[#8b9291]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};

// Extracted helper component for collapsible rows
interface CollapsibleRowProps {
  icon: React.ReactNode;
  label: string;
  labelClass: string;
}

const CollapsibleRow = ({ icon, label, labelClass }: CollapsibleRowProps) => (
  <div className="mb-16 flex items-center gap-3 py-2">
    {icon}
    <span className={labelClass}>{label}</span>
  </div>
);

// Extracted helper component for form fields with consistent styling
interface FormFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  inputClass: string;
}

const FormField = ({
  label,
  type = "text",
  placeholder,
  inputClass,
}: FormFieldProps) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <label className="text-[13px] font-normal leading-[15px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full border bg-[#272822] px-4 py-4 text-[12px] font-normal leading-[14px] placeholder-[#888] ${inputClass}`}
    />
  </div>
);

// Icon Components - Inline SVGs for header and form interactions
// These icons use currentColor to inherit text color from parent className
const SettingsIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="11.5" stroke="currentColor" strokeWidth="1" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path
      d="M12 5V3M12 21V19M5 12H3M21 12H19"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <path
      d="M1 9L8 2L15 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8b9291]"
  >
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1" />
    <text
      x="10"
      y="12.5"
      textAnchor="middle"
      fontSize="12"
      fill="currentColor"
      className="font-bold"
    >
      i
    </text>
  </svg>
);
