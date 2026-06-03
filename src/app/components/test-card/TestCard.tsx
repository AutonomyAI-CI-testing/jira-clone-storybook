import { MdSettings, MdKeyboardArrowUp, MdInfo } from "react-icons/md";

// Color palette for the UI magician card
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
const ICON_SIZES = {
  settings: { h: 5, w: 5 },
  arrow: { h: 5, w: 5 },
  info: { h: 4, w: 4 },
} as const;

// Form field configuration
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
          className={`h-${ICON_SIZES.settings.h} w-${ICON_SIZES.settings.w}`}
          style={{ color: COLORS.icon }}
        />
      </div>

      {/* Subtitle Section */}
      <div className="mb-12 flex items-center gap-3">
        <MdKeyboardArrowUp
          className={`h-${ICON_SIZES.arrow.h} w-${ICON_SIZES.arrow.w}`}
          style={{ color: COLORS.subtitleText }}
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
          className={`h-${ICON_SIZES.arrow.h} w-${ICON_SIZES.arrow.w}`}
          style={{ color: COLORS.icon }}
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
        className={`h-${ICON_SIZES.info.h} w-${ICON_SIZES.info.w}`}
        style={{ color: COLORS.icon }}
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
