import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Color palette for the dark-themed UI
const COLORS = {
  bg: "#272822",
  headerText: "#b5b5b5",
  collapsibleIcon: "#8b9291",
  collapsibleText: "#8b9291",
  sectionHeadingText: "#b2b2b1",
  sectionHeadingIcon: "#b2b2b1",
  labelText: "#a4a4a3",
  labelIcon: "#a4a4a3",
  inputText: "#737470",
  inputPlaceholder: "#737470",
  inputBorder: "#a5adad",
  inputBorderAlt: "#929291",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  footerText: "#b0b0b0",
};

const FormFieldLabel = ({
  label,
  showIcon = true,
}: {
  label: string;
  showIcon?: boolean;
}): JSX.Element => (
  <div className="flex items-center gap-2">
    <span className="text-sm font-medium" style={{ color: COLORS.labelText }}>
      {label}
    </span>
    {showIcon && (
      <HiInformationCircle
        className="flex-shrink-0"
        size={18}
        style={{ color: COLORS.labelIcon }}
      />
    )}
  </div>
);

const FormInput = ({
  placeholder,
  useBorderAlt = false,
}: {
  placeholder: string;
  useBorderAlt?: boolean;
}): JSX.Element => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full rounded-[4px] px-3 py-3 text-sm outline-none"
    style={{
      backgroundColor: COLORS.bg,
      borderWidth: useBorderAlt ? "2px" : "1px",
      borderColor: useBorderAlt ? COLORS.inputBorderAlt : COLORS.inputBorder,
      color: COLORS.inputText,
    }}
  />
);

// Reusable action button with consistent styling
const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    className="flex-1 rounded-lg px-6 py-3 text-base font-medium"
    style={{
      backgroundColor: COLORS.buttonBg,
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
      className="flex min-h-screen w-full flex-col gap-4 p-5"
      style={{ backgroundColor: COLORS.bg, fontFamily: "Inter, sans-serif" }}
    >
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between pt-2">
        <span
          className="text-xl font-bold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </span>
        <AiOutlineSetting
          className="flex-shrink-0"
          size={24}
          style={{ color: COLORS.headerText }}
        />
      </div>

      {/* Collapsible row with chevron and description */}
      <div className="flex items-center gap-2">
        <HiChevronUp
          className="flex-shrink-0"
          size={18}
          style={{ color: COLORS.collapsibleIcon }}
        />
        <span
          className="text-sm italic"
          style={{ color: COLORS.collapsibleText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacing */}
      <div className="h-8" />

      {/* Section heading with chevron */}
      <div className="flex items-center gap-2">
        <HiChevronUp
          className="flex-shrink-0"
          size={20}
          style={{ color: COLORS.sectionHeadingIcon }}
        />
        <span
          className="text-lg font-bold"
          style={{ color: COLORS.sectionHeadingText }}
        >
          Add New Design
        </span>
      </div>

      {/* Form fields section */}
      <div className="mt-2 flex flex-col gap-4">
        {/* Personal Access Token field */}
        <div className="flex flex-col gap-2">
          <FormFieldLabel label="Personal Access Token" />
          <FormInput placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        </div>

        {/* Design URL field with thicker border for emphasis to signal primary CTA */}
        <div className="flex flex-col gap-2">
          <FormFieldLabel label="Design URL" />
          <FormInput placeholder="https://www.figma.com/file/:" useBorderAlt />
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-2 flex items-center justify-center gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Vertical spacing */}
      <div className="h-6" />

      {/* Footer section */}
      <div>
        <span
          className="text-xl font-bold"
          style={{ color: COLORS.footerText }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
