// Reusable icon button component for information tooltips
const ICON_INFO_BUTTON = (
  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#7a7a7a]">
    <span className="text-[9px] text-[#7a7a7a]">i</span>
  </div>
);

const SETTINGS_ICON = (
  <svg
    className="h-7 w-7 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Reusable component for collapsible section headers
interface CollapsibleSectionProps {
  label: string;
  textSize: string;
  textColor: string;
  lineHeight: string;
  marginBottom: string;
}

const CollapsibleSection = ({
  label,
  textSize,
  textColor,
  lineHeight,
  marginBottom,
}: CollapsibleSectionProps) => (
  <div className={marginBottom}>
    <div className="flex items-center gap-3">
      <span className="text-[18px] text-[#b5b5b5]">^</span>
      <span
        className={`font-bold ${textColor} leading-[${lineHeight}] text-[${textSize}]`}
      >
        {label}
      </span>
    </div>
  </div>
);

// Reusable component for read-only input fields with labels
interface InputFieldProps {
  label: string;
  placeholder: string;
  marginBottom: string;
  textSize: string;
  lineHeight: string;
  textColor: string;
}

const InputField = ({
  label,
  placeholder,
  marginBottom,
  textSize,
  lineHeight,
  textColor,
}: InputFieldProps) => (
  <div className={marginBottom}>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-[11.5px] font-bold leading-[13.92px] text-[#7a7a7a]">
        {label}
      </label>
      {ICON_INFO_BUTTON}
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full rounded border border-[#5a5a5a] bg-[#3a3a3a] text-[${textSize}] text-[${textColor}] placeholder-[${textColor}] px-3 py-2.5 font-bold leading-[${lineHeight}]`}
      readOnly
    />
  </div>
);

export const TestCard = () => {
  return (
    <div className="w-[508px] bg-[#2b2b2b] p-10 font-primary-bold">
      {/* Header with title and settings icon */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[24px] font-bold leading-[29px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {SETTINGS_ICON}
      </div>

      {/* Collapsible sections */}
      <CollapsibleSection
        label="From entire frame to a singl..."
        textSize="11.5px"
        textColor="text-[#8b9291]"
        lineHeight="13.92px"
        marginBottom="mb-16"
      />
      <CollapsibleSection
        label="Add New Design"
        textSize="13.5px"
        textColor="text-[#b2b2b1]"
        lineHeight="16.34px"
        marginBottom="mb-8"
      />

      {/* Input fields for credentials */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        marginBottom="mb-6"
        textSize="11.5px"
        lineHeight="13.92px"
        textColor="text-[#737470]"
      />
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        marginBottom="mb-8"
        textSize="10.5px"
        lineHeight="12.71px"
        textColor="text-[#71726e]"
      />

      {/* Action buttons */}
      <div className="mb-8 flex gap-3">
        <button className="flex-1 rounded bg-[#8B4513] px-4 py-2.5 text-[11.5px] font-bold leading-[13.92px] text-white transition-opacity hover:opacity-90">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#8B4513] px-4 py-2.5 text-[11.5px] font-bold leading-[13.92px] text-white transition-opacity hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="border-gray-300 text-gray-400 border-t pt-3 text-center text-[12px]">
        © AutonomyAI
      </div>
    </div>
  );
};
