import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Design tokens for consistent styling throughout the component
const COLORS = {
  background: "#282828",
  surfaceBackground: "#272822",
  headerText: "#b5b5b5",
  collapsedText: "#8b9291",
  sectionText: "#b2b2b1",
  labelText: "#a4a4a3",
  labelText2: "#a3a3a2",
  inputText: "#737470",
  inputText2: "#71726e",
  inputPlaceholder: "#737470",
  inputPlaceholder2: "#71726e",
  inputBorder: "#a5adad",
  inputBorder2: "#929291",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
};

const FONT_SIZES = {
  large: "13.5px",
  medium: "11.5px",
  small: "10.5px",
};

const ICON_SIZES = {
  large: 18,
  medium: 14,
  small: 15,
};

interface LabelWithIconProps {
  label: string;
  color: string;
}

// Reusable component for label rows with info icon
const LabelWithIcon = ({ label, color }: LabelWithIconProps) => (
  <div className="mb-1 flex items-center gap-2">
    <span
      className="font-semibold"
      style={{ fontSize: FONT_SIZES.medium, color }}
    >
      {label}
    </span>
    <AiOutlineInfoCircle style={{ color }} size={ICON_SIZES.small} />
  </div>
);

interface ReadOnlyInputProps {
  placeholder: string;
  fontSize: string;
  color: string;
  borderColor: string;
  borderWidth?: string;
}

// Reusable component for read-only input fields
const ReadOnlyInput = ({
  placeholder,
  fontSize,
  color,
  borderColor,
  borderWidth = "1px",
}: ReadOnlyInputProps) => (
  <input
    readOnly
    style={{
      fontSize,
      fontWeight: 600,
      backgroundColor: COLORS.surfaceBackground,
      borderColor,
      borderWidth,
      color,
    }}
    className="w-full rounded border p-2 outline-none"
    placeholder={placeholder}
  />
);

interface CollapsibleSectionProps {
  text: string;
  color: string;
  fontSize: string;
}

// Reusable component for collapsible section headers
const CollapsibleSection = ({
  text,
  color,
  fontSize,
}: CollapsibleSectionProps) => (
  <div className="flex items-center gap-2">
    <FiChevronUp style={{ color }} size={ICON_SIZES.medium} />
    <span className="font-semibold" style={{ fontSize, color }}>
      {text}
    </span>
  </div>
);

interface ActionButtonProps {
  children: string;
}

// Reusable component for action buttons
const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    style={{
      backgroundColor: COLORS.buttonBackground,
      color: COLORS.buttonText,
      fontSize: FONT_SIZES.medium,
    }}
    className="flex-1 rounded-[4px] px-6 py-3 font-semibold"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.background }}
      className="font-sans min-h-screen w-full p-4"
    >
      {/* Header row with agent title and settings icon */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className="font-semibold"
          style={{ fontSize: FONT_SIZES.large, color: COLORS.headerText }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline
          style={{ color: COLORS.headerText }}
          size={ICON_SIZES.large}
        />
      </div>

      {/* Collapsed row - appears to be a collapsed section */}
      <div className="mb-8">
        <CollapsibleSection
          text="From entire frame to a singl..."
          color={COLORS.collapsedText}
          fontSize={FONT_SIZES.medium}
        />
      </div>

      {/* Add New Design section - collapsible section header */}
      <div className="mb-4">
        <CollapsibleSection
          text="Add New Design"
          color={COLORS.sectionText}
          fontSize={FONT_SIZES.large}
        />
      </div>

      {/* Personal Access Token field - read-only input for token display */}
      <div className="mb-3">
        <LabelWithIcon label="Personal Access Token" color={COLORS.labelText} />
        <ReadOnlyInput
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          fontSize={FONT_SIZES.medium}
          color={COLORS.inputText}
          borderColor={COLORS.inputBorder}
        />
      </div>

      {/* Design URL field - read-only input for URL display */}
      <div className="mb-5">
        <LabelWithIcon label="Design URL" color={COLORS.labelText2} />
        <ReadOnlyInput
          placeholder="https://www.figma.com/file/:"
          fontSize={FONT_SIZES.small}
          color={COLORS.inputText2}
          borderColor={COLORS.inputBorder2}
          borderWidth="2px"
        />
      </div>

      {/* Action buttons - two primary CTAs for the configuration flow */}
      <div className="mb-8 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns section header - placeholder for future content */}
      <div className="mt-8">
        <span
          className="font-semibold"
          style={{
            fontSize: FONT_SIZES.large,
            color: COLORS.recentBreakdownsText,
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
