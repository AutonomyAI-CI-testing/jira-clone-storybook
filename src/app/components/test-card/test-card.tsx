import { FiChevronUp, FiInfo } from "react-icons/fi";
import { TbAtom2 } from "react-icons/tb";

// Color palette for the UI
const COLORS = {
  primary: "#b5b5b5",
  secondary: "#8b9291",
  tertiary: "#b2b2b1",
  label: "#a4a4a3",
  labelAlt: "#a3a3a2",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  inputBorder: "#929291",
  inputBorderAlt: "#a5adad",
  inputBg: "#272822",
  buttonBg: "#a0522d",
  buttonText: "#8c8078",
  sectionText: "#b0b0b0",
} as const;

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  labelColor: string;
  inputColor: string;
  borderColor: string;
}

/**
 * Reusable form field component for input fields with label and info icon.
 * Both fields are read-only for display purposes.
 */
const FormField = ({
  label,
  type,
  placeholder,
  labelColor,
  inputColor,
  borderColor,
}: FormFieldProps) => (
  <div className="mb-12 mt-10">
    <div className="mb-4 flex items-center justify-between">
      <label className="text-sm font-semibold" style={{ color: labelColor }}>
        {label}
      </label>
      <FiInfo size={16} color={labelColor} />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-600 placeholder-gray-500 focus:border-gray-400 w-full rounded border bg-black px-3 py-5 text-sm font-semibold focus:outline-none"
      style={{
        color: inputColor,
        borderColor: borderColor,
        backgroundColor: COLORS.inputBg,
      }}
      readOnly
    />
  </div>
);

/**
 * Reusable button component for the action buttons.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button
    className="flex-1 rounded px-6 py-4 text-sm font-semibold transition-colors"
    style={{
      backgroundColor: COLORS.buttonBg,
      color: COLORS.buttonText,
    }}
  >
    {label}
  </button>
);

/**
 * TestCard component that displays a form interface for entering design specifications.
 * Includes header, collapsible sections, form fields, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-sm bg-black p-5 text-white">
      {/* Header section with title and icon */}
      <div className="mb-20 flex items-center justify-between">
        <h1 className="text-lg font-semibold" style={{ color: COLORS.primary }}>
          UI magician Agent
        </h1>
        <TbAtom2 size={20} color={COLORS.primary} />
      </div>

      {/* Collapsible section for previous state */}
      <div className="mb-20 mt-20 flex items-center gap-2">
        <FiChevronUp size={16} color={COLORS.primary} />
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.secondary }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-20 mt-20 flex items-center gap-2">
        <FiChevronUp size={24} color={COLORS.tertiary} />
        <h2
          className="text-base font-semibold"
          style={{ color: COLORS.tertiary }}
        >
          Add New Design
        </h2>
      </div>

      {/* Form fields for design configuration */}
      <FormField
        label="Personal Access Token"
        type="password"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        labelColor={COLORS.label}
        inputColor={COLORS.inputText}
        borderColor={COLORS.inputBorder}
      />

      <FormField
        label="Design URL"
        type="text"
        placeholder="https://www.figma.com/file/:"
        labelColor={COLORS.labelAlt}
        inputColor={COLORS.inputTextAlt}
        borderColor={COLORS.inputBorderAlt}
      />

      {/* Action buttons */}
      <div className="mb-16 mt-12 flex gap-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Breakdowns section header */}
      <div className="mt-12">
        <h3
          className="text-base font-semibold"
          style={{ color: COLORS.sectionText }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-12 border-t pt-3 text-center">
        <p className="text-sm" style={{ color: COLORS.primary }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
