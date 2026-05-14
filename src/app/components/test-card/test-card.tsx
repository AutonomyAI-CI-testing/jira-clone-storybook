import { IoSettingsSharp } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * Common styles extracted as constants for consistency and maintainability
 */
const STYLES = {
  primaryText: "text-[#b6c2cf]",
  secondaryText: "text-[#8c9bab]",
  inputBase:
    "w-full rounded border border-[#3d4449] bg-[#22272b] px-3 py-2 text-sm text-[#8c9bab] placeholder-[#8c9bab] focus:outline-none",
  buttonPrimary:
    "flex-1 rounded bg-[#b65c02] px-6 py-2 font-primary-bold text-sm text-white hover:bg-[#a04f01] focus:outline-none",
} as const;

/**
 * Renders a label with an info icon
 */
const LabelWithInfo = ({ text }: { text: string }) => (
  <div className="mb-2 flex items-center gap-2">
    <label className={`text-sm ${STYLES.primaryText}`}>{text}</label>
    <FiInfo className={`h-4 w-4 ${STYLES.secondaryText}`} />
  </div>
);

/**
 * Renders a collapsible section header with chevron icon
 */
const CollapsibleHeader = ({
  text,
  size = "base",
}: {
  text: string;
  size?: "small" | "base";
}) => (
  <div className="mb-6 flex items-center gap-2">
    <FiChevronUp
      className={`${size === "small" ? "h-4 w-4" : "h-5 w-5"} ${
        STYLES.primaryText
      }`}
    />
    <h2 className={`font-primary-bold text-base ${STYLES.primaryText}`}>
      {text}
    </h2>
  </div>
);

/**
 * TestCard component displays a UI configuration card for design automation.
 * This is a static presentation component with read-only inputs and placeholder content.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className={`w-full max-w-[480px] rounded-lg bg-[#1d2125] p-10 ${STYLES.primaryText}`}
    >
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className={`font-primary-bold text-xl ${STYLES.primaryText}`}>
          UI magician Agent
        </h1>
        <IoSettingsSharp className={`h-6 w-6 ${STYLES.primaryText}`} />
      </div>

      {/* Collapsible description preview */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp className={`h-4 w-4 ${STYLES.secondaryText}`} />
        <span className={`text-sm ${STYLES.secondaryText}`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <CollapsibleHeader text="Add New Design" />

      {/* Personal Access Token input */}
      <LabelWithInfo text="Personal Access Token" />
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mb-6 ${STYLES.inputBase}`}
      />

      {/* Design URL input */}
      <LabelWithInfo text="Design URL" />
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={`mb-6 ${STYLES.inputBase}`}
      />

      {/* Action buttons for primary interactions */}
      <div className="mb-10 flex gap-4">
        <button type="button" className={STYLES.buttonPrimary}>
          Awesome
        </button>
        <button type="button" className={STYLES.buttonPrimary}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <h2 className={`font-primary-bold text-base ${STYLES.primaryText}`}>
        Recent Breakdowns
      </h2>

      {/* Footer with copyright */}
      <div className="border-gray-700 border-t pt-3 text-center">
        <p className={`text-sm ${STYLES.primaryText}`}>© AutonomyAI</p>
      </div>
    </div>
  );
};
