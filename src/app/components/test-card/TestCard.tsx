import { Settings, Info, ChevronUp } from "lucide-react";

// Color palette for the dark-themed card
const COLORS = {
  background: "#1e1f1a",
  headerText: "#b5b5b5",
  secondaryText: "#8b9291",
  sectionHeading: "#b2b2b1",
  labelText: "#a4a4a3",
  inputBackground: "#272822",
  inputBorder: "#a5adad",
  inputText: "#737470",
  designUrlBorder: "#929291",
  designUrlText: "#71726e",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
} as const;

const ICON_SIZE = {
  header: 16,
  collapsible: 14,
  sectionHeading: 16,
  info: 14,
} as const;

// Reusable input field component with consistent styling
const InputField = ({
  label,
  placeholder,
  borderColor = COLORS.inputBorder,
  borderWidth = 1,
}: {
  label: string;
  placeholder: string;
  borderColor?: string;
  borderWidth?: number;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-1">
      <label className="text-sm" style={{ color: COLORS.labelText }}>
        {label}
      </label>
      <Info size={ICON_SIZE.info} color={COLORS.labelText} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded px-3 py-2 text-sm outline-none"
      style={{
        backgroundColor: COLORS.inputBackground,
        color: COLORS.inputText,
        borderColor,
        borderWidth,
        borderStyle: "solid",
      }}
    />
  </div>
);

// Reusable button component
const ActionButton = ({ label }: { label: string }) => (
  <button
    className="rounded px-6 py-2 text-sm font-semibold"
    style={{
      backgroundColor: COLORS.buttonBackground,
      color: COLORS.buttonText,
    }}
  >
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-4 px-4 py-5"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <span
          className="text-base font-bold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </span>
        <Settings size={ICON_SIZE.header} color={COLORS.headerText} />
      </div>

      {/* Collapsible section for current design/task description */}
      <div className="flex items-center gap-2">
        <ChevronUp size={ICON_SIZE.collapsible} color={COLORS.secondaryText} />
        <span className="text-sm" style={{ color: COLORS.secondaryText }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer */}
      <div className="h-6" />

      {/* Section heading for the form below */}
      <div className="flex items-center gap-2">
        <ChevronUp
          size={ICON_SIZE.sectionHeading}
          color={COLORS.sectionHeading}
        />
        <span
          className="text-xl font-semibold"
          style={{ color: COLORS.sectionHeading }}
        >
          Add New Design
        </span>
      </div>

      {/* Input fields for Figma integration credentials */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderColor={COLORS.inputBorder}
      />

      {/* Design URL field with stronger visual emphasis via border-2 */}
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderColor={COLORS.designUrlBorder}
        borderWidth={2}
      />

      {/* Action buttons for form submission */}
      <div className="mt-1 flex justify-center gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section heading for list of recent designs */}
      <div className="mt-2">
        <span
          className="text-xl font-semibold"
          style={{ color: COLORS.recentBreakdownsText }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
