import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard is a standalone display widget used as a smoke test
 * to verify Figma-to-Storybook rendering pipeline.
 *
 * It replicates a "UI magician Agent" panel with hardcoded content.
 */
const TestCard = (): JSX.Element => {
  // Brand colors from Figma design - not in project design tokens
  const COLORS = {
    CARD_BG: "bg-[#2a2a2a]",
    INPUT_BG: "bg-[#1e1e1e]",
    INPUT_BORDER: "border-[#444]",
    ORANGE_ACCENT: "text-[#c47a45]",
    PRIMARY_BUTTON: "bg-[#b05a2f]",
  };

  // Shared styling for form inputs to ensure visual consistency
  const INPUT_CLASSES = `${COLORS.INPUT_BG} border ${COLORS.INPUT_BORDER} rounded p-2 text-white outline-none focus:ring-1 focus:ring-gray-500`;

  // Shared styling for primary action buttons
  const BUTTON_CLASSES = `${COLORS.PRIMARY_BUTTON} rounded px-4 py-2 flex-grow font-medium hover:opacity-90 transition-opacity`;

  return (
    <div
      id="testElem"
      className={`${COLORS.CARD_BG} rounded-lg p-5 w-[300px] flex flex-col gap-4 text-white shadow-xl`}
    >
      {/* Header row: Agent identity and settings access */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">UI magician Agent</span>
        <button
          type="button"
          aria-label="Settings"
          className="hover:text-gray-300 transition-colors"
        >
          <IoSettingsOutline size={20} />
        </button>
      </div>

      {/* Status/Breadcrumb row: Indicates current operation scope */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={20} />
        <span className={COLORS.ORANGE_ACCENT}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header: Primary action group for design ingestion */}
      <div className="flex items-center gap-2 pt-4">
        <IoChevronUp size={20} />
        <span className="font-bold">Add New Design</span>
      </div>

      {/* Field: Personal Access Token - Required for Figma API auth */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="pat" className="text-sm font-medium text-gray-300">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={16} className="text-gray-400" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          className={INPUT_CLASSES}
        />
      </div>

      {/* Field: Design URL - Source Figma file link */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="designUrl"
            className="text-sm font-medium text-gray-300"
          >
            Design URL
          </label>
          <AiOutlineInfoCircle size={16} className="text-gray-400" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className={INPUT_CLASSES}
        />
      </div>

      {/* Action Buttons: Non-functional in this smoke test component */}
      <div className="flex gap-3 justify-between pt-2">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      {/* Activity Log Header */}
      <h3 className="font-bold pt-4 border-t border-white/10">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;

