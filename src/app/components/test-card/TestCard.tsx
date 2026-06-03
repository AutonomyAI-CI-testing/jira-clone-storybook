import { MdSettings, MdKeyboardArrowUp, MdInfo } from "react-icons/md";

/**
 * A UI card component for the UI magician agent.
 * Displays a form with token and design URL fields, along with action buttons.
 * Uses a dark theme with specific brand colors for visual consistency.
 */

// Color palette for the UI magician card
// Defines all visual colors used throughout the component for consistent theming
const COLORS = {
  background: "#000000",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  placeholderText: "#737470",
  inputBorder: "#3a3a3a",
  inputBackground: "#1a1a1a",
  buttonBackground: "#c85a28",
  buttonHoverBackground: "#b84d20",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
  designUrlLabelText: "#a3a3a2",
  designUrlPlaceholder: "#71726e",
  icon: "#ffffff",
} as const;

// Icon sizes for consistent sizing throughout the component
// Using rem units to ensure proper scaling with base font size
const ICON_SIZES = {
  settings: { size: '1.25rem' },
  arrow: { size: '1.25rem' },
  info: { size: '1rem' },
} as const;

// Form field configuration
// Contains labels and placeholder text for both form input fields
const FORM_FIELDS = {
  token: {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  url: {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
} as const;

// Button labels
// Action button text for form submission
const BUTTON_LABELS = {
  awesome: "Awesome",
  prepare: "Prepare",
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col p-8 font-primary text-sm"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <h1
          className="font-primary-bold text-base"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <MdSettings
          style={{ width: ICON_SIZES.settings.size, height: ICON_SIZES.settings.size, color: COLORS.icon }}
        />
      </div>

      {/* Subtitle Section */}
      <div className="mb-12 flex items-center gap-3">
        <MdKeyboardArrowUp
          style={{ width: ICON_SIZES.arrow.size, height: ICON_SIZES.arrow.size, color: COLORS.subtitleText }}
        />
        <span
          className="font-primary-bold text-[11.5px]"
          style={{ color: COLORS.subtitleText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-12 flex items-center gap-3">
        <MdKeyboardArrowUp
          style={{ width: ICON_SIZES.arrow.size, height: ICON_SIZES.arrow.size, color: COLORS.icon }}
        />
        <h2
          className="font-primary-bold text-base"
          style={{ color: COLORS.sectionText }}
        >
          Add New Design
        </h2>
      </div>

      {/* Form Section */}
      <div className="mb-8 flex flex-col gap-6">
        {/* Personal Access Token Field */}
        <FormField
          label={FORM_FIELDS.token.label}
          placeholder={FORM_FIELDS.token.placeholder}
          placeholderColor={COLORS.placeholderText}
        />

        {/* Design URL Field */}
        <FormField
          label={FORM_FIELDS.url.label}
          placeholder={FORM_FIELDS.url.placeholder}
          placeholderColor={COLORS.designUrlPlaceholder}
        />
      </div>

      {/* Buttons Section */}
      <div className="mb-12 flex gap-4">
        <ActionButton>{BUTTON_LABELS.awesome}</ActionButton>
        <ActionButton>{BUTTON_LABELS.prepare}</ActionButton>
      </div>

      {/* Recent Breakdowns Section */}
      <h3
        className="font-primary-bold text-base"
        style={{ color: COLORS.recentBreakdownsText }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};

/**
 * FormField component for displaying labeled input fields with info icons.
 * Used for displaying read-only form fields in the UI magician card.
 * The component accepts a custom placeholder color to allow different styling per field,
 * which is necessary because different fields may have different visual emphasis in the design.
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  placeholderColor: string;
}

const FormField = ({
  label,
  placeholder,
  placeholderColor,
}: FormFieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label
        className="font-primary-bold text-[11.5px]"
        style={{ color: COLORS.labelText }}
      >
        {label}
      </label>
      <MdInfo
        style={{ width: ICON_SIZES.info.size, height: ICON_SIZES.info.size, color: COLORS.icon }}
      />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="border px-3 py-2 font-primary-bold text-[11.5px]"
      style={{
        borderColor: COLORS.inputBorder,
        backgroundColor: COLORS.inputBackground,
        color: placeholderColor,
      }}
      readOnly
    />
  </div>
);

/**
 * ActionButton component for the primary action buttons in the card.
 * Provides consistent styling and hover states across the form.
 * Uses inline onMouseEnter/onMouseLeave handlers to update background color on hover,
 * as this provides better visual feedback than CSS-only alternatives in this dark theme.
 */
interface ActionButtonProps {
  children: React.ReactNode;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    className="flex-1 rounded-md px-4 py-3 font-primary-bold text-[11.5px]"
    style={{
      backgroundColor: COLORS.buttonBackground,
      color: COLORS.buttonText,
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
        COLORS.buttonHoverBackground;
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
        COLORS.buttonBackground;
    }}
  >
    {children}
  </button>
);
