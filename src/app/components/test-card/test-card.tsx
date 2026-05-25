// Color palette for dark-themed UI card
const COLORS = {
  background: "bg-black",
  border: "border-[#333333]",
  headerText: "text-[#b5b5b5]",
  secondaryText: "text-[#b2b2b1]",
  tertiaryText: "text-[#8b9291]",
  labelText: "text-[#a4a4a3]",
  labelTextAlt: "text-[#a3a3a2]",
  inputText: "text-[#737470]",
  inputTextAlt: "text-[#71726e]",
  footerText: "text-[#737470]",
  buttonPrimary: "bg-[#b86c4a]",
  buttonHover: "hover:bg-[#a85c3a]",
} as const;

// Reusable field component for consistent styling
const FormField = ({
  label,
  placeholder,
  value,
}: {
  label: string;
  placeholder: string;
  value: string;
}): JSX.Element => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1.5">
      <label className={`text-[11.5px] font-semibold ${COLORS.labelText}`}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border ${COLORS.border} bg-transparent px-3 py-2 text-[11.5px] font-semibold ${COLORS.inputText} placeholder-[#737470]`}
      value={value}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className={`w-[254px] ${COLORS.background} p-5`}>
      {/* Header with agent name and settings icon */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className={`text-[13.5px] font-semibold ${COLORS.headerText}`}>
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section showing connected design frame */}
      <div className="mb-5 flex items-center gap-2">
        <ChevronIcon />
        <p className={`text-[11.5px] font-semibold ${COLORS.tertiaryText}`}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2">
        <ChevronIcon />
        <p className={`text-[13.5px] font-semibold ${COLORS.secondaryText}`}>
          Add New Design
        </p>
      </div>

      {/* Form fields for authentication and design file configuration */}
      <div className="mb-5 space-y-4">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          value="figd_xxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          value="https://www.figma.com/file/:"
        />
      </div>

      {/* Primary action buttons for workflow initiation */}
      <div className="mb-5 flex gap-3">
        <button
          className={`flex-1 rounded-md ${COLORS.buttonPrimary} py-2 text-center text-[11.5px] font-semibold text-white transition-colors ${COLORS.buttonHover}`}
        >
          Awesome
        </button>
        <button
          className={`flex-1 rounded-md ${COLORS.buttonPrimary} py-2 text-center text-[11.5px] font-semibold text-white transition-colors ${COLORS.buttonHover}`}
        >
          Prepare
        </button>
      </div>

      {/* Section heading for recent design analysis history */}
      <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Copyright footer */}
      <div
        className={`border-gray-300 border-t pt-3 text-center text-[11.5px] font-semibold ${COLORS.footerText}`}
      >
        © AutonomyAI
      </div>
    </div>
  );
};

const ChevronIcon = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#9ca3af">
    <path d="M3 5L6 8L9 5H3Z" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#9ca3af">
    <circle cx="8" cy="8" r="3" />
    <circle cx="8" cy="2.5" r="1" />
    <circle cx="8" cy="13.5" r="1" />
    <circle cx="2.5" cy="8" r="1" />
    <circle cx="13.5" cy="8" r="1" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#9ca3af">
    <circle cx="7" cy="7" r="6" />
    <circle cx="7" cy="4.5" r="0.75" fill="#000000" />
    <rect x="6" y="6" width="2" height="4" fill="#000000" />
  </svg>
);
