// Icon Components
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
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

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Form Field Component
interface FormFieldProps {
  label: string;
  placeholder: string;
  borderStyle?: string;
  textColor?: string;
}

const FormField = ({
  label,
  placeholder,
  borderStyle,
  textColor,
}: FormFieldProps) => {
  // Extract the color value for use in both text and placeholder
  // FormField is used for Personal Access Token and Design URL inputs
  const inputTextColor =
    textColor === "text-[#a4a4a3]" ? "text-[#737470]" : "text-[#71726e]";
  const inputPlaceholderColor = inputTextColor;

  return (
    <div>
      <div className="mb-2 flex items-center gap-1.5">
        <span className={`font-primary text-sm font-semibold ${textColor}`}>
          {label}
        </span>
        <InfoIcon className={`h-4 w-4 ${textColor}`} />
      </div>
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className={`w-full rounded bg-[#272822] px-3 py-4 font-primary text-sm font-semibold ${inputTextColor} ${borderStyle} placeholder:${inputPlaceholderColor}`}
      />
    </div>
  );
};

// Collapsible Header Component
interface CollapsibleHeaderProps {
  text: string;
  textSize: string;
  textColor: string;
  iconColor: string;
}

const CollapsibleHeader = ({
  text,
  textSize,
  textColor,
  iconColor,
}: CollapsibleHeaderProps) => (
  <div className="flex items-center gap-2">
    <ChevronUpIcon className={`h-5 w-5 ${iconColor}`} />
    <span className={`font-primary font-semibold ${textSize} ${textColor}`}>
      {text}
    </span>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-96 rounded-lg bg-[#1C1D17] p-10">
      {/* Header section */}
      <div className="mb-8 flex items-center justify-between">
        <span className="font-primary text-xl font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <SettingsIcon className="h-6 w-6 text-[#8b9291]" />
      </div>

      {/* Collapsible-style row */}
      <div className="mb-10">
        <CollapsibleHeader
          text="From entire frame to a singl..."
          textSize="text-sm"
          textColor="text-[#8b9291]"
          iconColor="text-[#8b9291]"
        />
      </div>

      {/* Add New Design section */}
      <div className="mb-8">
        <CollapsibleHeader
          text="Add New Design"
          textSize="text-base"
          textColor="text-[#b2b2b1]"
          iconColor="text-[#b2b2b1]"
        />
      </div>

      {/* Personal Access Token field */}
      <div className="mb-8">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderStyle="border border-[#a5adad]"
          textColor="text-[#a4a4a3]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderStyle="border-2 border-[#929291]"
          textColor="text-[#a3a3a2]"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-16 flex gap-4">
        <button className="flex-1 rounded bg-[#b5612f] px-4 py-6 font-primary text-sm font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#b5612f] px-4 py-6 font-primary text-sm font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <span className="font-primary text-lg font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer section */}
      <div className="border-gray-300 mt-8 border-t pt-3 text-center">
        <span className="text-gray-500 text-sm">© AutonomyAI</span>
      </div>
    </div>
  );
};
