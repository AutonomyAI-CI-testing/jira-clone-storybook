import { AiFillSetting } from "react-icons/ai";
import { IoChevronUp } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi";

// Design system colors for the test card UI
// These values come from the Figma design spec and use inline styles
// because Tailwind's color system is mapped to CSS variables
const COLORS = {
  background: {
    card: "#1a1a17",
    input: "#272822",
    button: "#843a17",
  },
  text: {
    primary: "#b5b5b5",
    secondary: "#8b9291",
    tertiary: "#b2b2b1",
    label: "#a4a4a3",
    labelAlt: "#a3a3a2",
    muted: "#b0b0b0",
    inputPlaceholder: "#737470",
    inputPlaceholderAlt: "#71726e",
    button: "#8c8078",
  },
  border: {
    input: "#a5adad",
    inputFocused: "#929291",
    footer: "#d1d5db",
  },
} as const;

interface FormFieldProps {
  label: string;
  placeholder: string;
  labelColor: string;
  border: string;
  placeholderColor: string;
}

/**
 * Renders a labeled input field with an information icon.
 * All form fields in this card follow the same pattern: label + icon + input.
 */
const FormField = ({
  label,
  placeholder,
  labelColor,
  border,
  placeholderColor,
}: FormFieldProps): JSX.Element => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-semibold" style={{ color: labelColor }}>
          {label}
        </span>
        <HiInformationCircle size={16} style={{ color: labelColor }} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded px-3 py-3 text-sm font-semibold focus:outline-none"
        style={{
          backgroundColor: COLORS.background.input,
          border,
          color: placeholderColor,
        }}
        readOnly
      />
    </div>
  );
};

interface SectionHeaderProps {
  text: string;
  color: string;
  iconSize?: number;
  fontSize?: "xs" | "sm";
}

/**
 * Renders a collapsible section header with a chevron icon.
 * Used for expandable sections throughout the card.
 */
const SectionHeader = ({
  text,
  color,
  iconSize = 20,
  fontSize = "sm",
}: SectionHeaderProps): JSX.Element => {
  const textSizeClass = fontSize === "xs" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-2">
      <IoChevronUp size={iconSize} style={{ color }} />
      <span
        className={`truncate font-semibold ${textSizeClass}`}
        style={{ color }}
      >
        {text}
      </span>
    </div>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="font-sans w-64 rounded p-5"
      style={{ backgroundColor: COLORS.background.card }}
    >
      {/* Header with agent name and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <span
          className="text-sm font-semibold"
          style={{ color: COLORS.text.primary }}
        >
          UI magician Agent
        </span>
        <AiFillSetting size={24} style={{ color: COLORS.text.primary }} />
      </div>

      {/* Subtitle showing truncated context */}
      <div className="mb-16">
        <SectionHeader
          text="From entire frame to a singl..."
          color={COLORS.text.secondary}
          fontSize="xs"
        />
      </div>

      {/* Add New Design expandable section */}
      <div className="mb-10">
        <SectionHeader text="Add New Design" color={COLORS.text.tertiary} />
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-8">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          labelColor={COLORS.text.label}
          border={`1px solid ${COLORS.border.input}`}
          placeholderColor={COLORS.text.inputPlaceholder}
        />
      </div>

      {/* Design URL input field with stronger border to indicate focus/selection */}
      <div className="mb-10">
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          labelColor={COLORS.text.labelAlt}
          border={`2px solid ${COLORS.border.inputFocused}`}
          placeholderColor={COLORS.text.inputPlaceholderAlt}
        />
      </div>

      {/* Primary action buttons */}
      <div className="mb-16 flex gap-3">
        <button
          className="flex-1 rounded px-4 py-3 text-sm font-semibold"
          style={{
            backgroundColor: COLORS.background.button,
            color: COLORS.text.button,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-3 text-sm font-semibold"
          style={{
            backgroundColor: COLORS.background.button,
            color: COLORS.text.button,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section title */}
      <div
        className="text-base font-semibold"
        style={{ color: COLORS.text.muted }}
      >
        Recent Breakdowns
      </div>

      {/* Footer with copyright notice */}
      <div
        className="mt-3 border-t pt-3 text-center text-sm"
        style={{
          borderColor: COLORS.border.footer,
          color: COLORS.text.primary,
        }}
      >
        © AutonomyAI
      </div>
    </div>
  );
};
