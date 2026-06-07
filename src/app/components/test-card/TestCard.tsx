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
  borderWidth = "border",
}: {
  label: string;
  placeholder: string;
  borderColor?: string;
  borderWidth?: string;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-1">
      <label className={`text-[${COLORS.labelText}] text-sm`}>
        {label}
      </label>
      <Info size={ICON_SIZE.info} color={COLORS.labelText} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full bg-[${COLORS.inputBackground}] ${borderWidth}-[${borderColor}] rounded px-3 py-2 text-[${COLORS.inputText}] placeholder-[${COLORS.inputText}] text-sm outline-none`}
    />
  </div>
);

// Reusable button component
const ActionButton = ({ label }: { label: string }) => (
  <button className={`bg-[${COLORS.buttonBackground}] text-[${COLORS.buttonText}] font-semibold rounded px-6 py-2 text-sm`}>
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className={`w-[254px] bg-[${COLORS.background}] px-4 py-5 flex flex-col gap-4`}
    >
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <span className={`font-bold text-[${COLORS.headerText}] text-base`}>
          UI magician Agent
        </span>
        <Settings size={ICON_SIZE.header} color={COLORS.headerText} />
      </div>

      {/* Collapsible section for current design/task description */}
      <div className="flex items-center gap-2">
        <ChevronUp size={ICON_SIZE.collapsible} color={COLORS.secondaryText} />
        <span className={`text-[${COLORS.secondaryText}] text-sm`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer */}
      <div className="h-6" />

      {/* Section heading for the form below */}
      <div className="flex items-center gap-2">
        <ChevronUp size={ICON_SIZE.sectionHeading} color={COLORS.sectionHeading} />
        <span className={`text-[${COLORS.sectionHeading}] font-semibold text-xl`}>
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
        borderWidth="border-2"
      />

      {/* Action buttons for form submission */}
      <div className="flex gap-3 mt-1 justify-center">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section heading for list of recent designs */}
      <div className="mt-2">
        <span className={`text-[${COLORS.recentBreakdownsText}] font-semibold text-xl`}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
