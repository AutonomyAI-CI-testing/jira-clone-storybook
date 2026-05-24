import { IoSettingsOutline, IoChevronUpOutline, IoInformationCircle } from "react-icons/io5";

// Color and spacing configuration for the agent card UI
const CARD_CONFIG = {
  // Dark theme colors
  bg: "bg-black",
  textPrimary: "text-gray-400",
  textSecondary: "text-gray-500",
  textTertiary: "text-gray-600",
  borderColor: "border-gray-600",
  inputBg: "bg-gray-900/50",
  buttonBg: "bg-amber-700",
  buttonBgHover: "hover:bg-amber-600",
  buttonBgActive: "active:bg-amber-800",
  textPlaceholder: "placeholder-gray-700",
  // Layout spacing
  padding: "p-8",
  maxWidth: "max-w-[508px]",
  formGap: "space-y-8",
} as const;

const ICON_SIZE = 16;
const HEADER_ICON_SIZE = 20;
const INPUT_ICON_SIZE = 16;

export const TestCard = () => {
  return (
    <div className={`w-full ${CARD_CONFIG.maxWidth} ${CARD_CONFIG.bg} ${CARD_CONFIG.padding} ${CARD_CONFIG.textPrimary}`}>
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-gray-400">
          UI magician Agent
        </h1>
        <IoSettingsOutline size={HEADER_ICON_SIZE} className={CARD_CONFIG.textSecondary} />
      </div>

      {/* Collapsible section - collapsed state indicator */}
      <div className="mb-16 flex items-center gap-2">
        <IoChevronUpOutline size={ICON_SIZE} className={CARD_CONFIG.textSecondary} />
        <span className="text-[11.5px] font-semibold text-gray-500">
          From entire frame to a singl...
        </span>
      </div>

      {/* Form section header with collapse indicator */}
      <div className="mb-12 flex items-center gap-2">
        <IoChevronUpOutline size={ICON_SIZE} className={CARD_CONFIG.textSecondary} />
        <h2 className="text-[13.5px] font-semibold text-gray-400">
          Add New Design
        </h2>
      </div>

      {/* Form fields for design configuration */}
      <div className={`mb-12 ${CARD_CONFIG.formGap}`}>
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-14 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Section header for recent breakdowns list */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-gray-400">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-gray-500">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

/**
 * Form field component with label and info icon
 * Extracts common pattern used for both token and URL inputs
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
}

const FormField = ({ label, placeholder }: FormFieldProps) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-[11.5px] font-semibold text-gray-500">
        {label}
      </label>
      <IoInformationCircle size={INPUT_ICON_SIZE} className={CARD_CONFIG.textTertiary} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border-2 ${CARD_CONFIG.borderColor} ${CARD_CONFIG.inputBg} px-3 py-3 text-[10.5px] font-semibold ${CARD_CONFIG.textTertiary} ${CARD_CONFIG.textPlaceholder} focus:outline-none`}
    />
  </div>
);

/**
 * Action button component
 * Standardizes styling for primary action buttons (Awesome, Prepare)
 */
interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ActionButton = ({ children, onClick }: ActionButtonProps) => (
  <button
    onClick={onClick}
    className={`flex-1 rounded ${CARD_CONFIG.buttonBg} px-4 py-3 text-[11.5px] font-semibold text-gray-300 ${CARD_CONFIG.buttonBgHover} ${CARD_CONFIG.buttonBgActive} transition-colors`}
  >
    {children}
  </button>
);
