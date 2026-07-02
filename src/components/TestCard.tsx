
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

/**
 * TestCard is a static, dark-themed UI panel used as a smoke test
 * to verify component rendering pipelines against a Figma reference.
 */
export const TestCard = () => {
  // Design constants from Figma reference to ensure fidelity and maintainability.
  // Values are hardcoded as this is a static smoke test component.
  const THEME = {
    BACKGROUND: "#272822",
    TEXT_MUTED: "#8b9291",
    TEXT_Muted_LIGHT: "#b5b5b5",
    SECTION_HEADER: "#b2b2b1",
    LABEL: "#a4a4a3",
    LABEL_ALT: "#a3a3a2",
    INPUT_PLACEHOLDER: "#737470",
    INPUT_PLACEHOLDER_ALT: "#71726e",
    INPUT_BORDER: "#a5adad",
    INPUT_BORDER_ALT: "#929291",
    BUTTON_BG: "#843a17",
    BUTTON_TEXT: "#8c8078",
    FOOTER_TEXT: "#b0b0b0",
  };

  return (
    <div
      id="testElem"
      className="w-[254px] p-4 text-white"
      style={{ backgroundColor: THEME.BACKGROUND }}
    >
      {/* Header Row: Identity and Global Settings */}
      <div className="flex justify-between items-center">
        <h1
          className="font-semibold text-base"
          style={{ color: THEME.TEXT_Muted_LIGHT }}
        >
          UI magician Agent
        </h1>
        <AiOutlineSetting className="text-white text-lg" />
      </div>

      {/* Breadcrumb/Context: Displays narrow scope of current task */}
      <div className="flex items-center gap-1 mt-2">
        <BiChevronUp style={{ color: THEME.TEXT_MUTED }} />
        <p className="text-xs" style={{ color: THEME.TEXT_MUTED }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Visual spacer to separate header from content */}
      <div className="h-8" aria-hidden="true" />

      {/* Section Header: Component Purpose */}
      <div className="flex items-center gap-1">
        <BiChevronUp style={{ color: THEME.SECTION_HEADER }} />
        <h2
          className="font-bold text-sm"
          style={{ color: THEME.SECTION_HEADER }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field: Credentials for Figma API access */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label
            htmlFor="pat"
            className="text-xs"
            style={{ color: THEME.LABEL }}
          >
            Personal Access Token
          </label>
          <AiOutlineInfoCircle
            className="text-xs"
            style={{ color: THEME.LABEL }}
          />
        </div>
        <div
          id="pat"
          className="mt-1 p-2 border-[1px] rounded text-xs"
          style={{
            backgroundColor: THEME.BACKGROUND,
            borderColor: THEME.INPUT_BORDER,
            color: THEME.INPUT_PLACEHOLDER,
          }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL Field: Link to the Figma board to be processed */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label
            htmlFor="designUrl"
            className="text-xs"
            style={{ color: THEME.LABEL_ALT }}
          >
            Design URL
          </label>
          <AiOutlineInfoCircle
            className="text-xs"
            style={{ color: THEME.LABEL_ALT }}
          />
        </div>
        <div
          id="designUrl"
          className="mt-1 p-2 border-[2px] rounded text-xs"
          style={{
            backgroundColor: THEME.BACKGROUND,
            borderColor: THEME.INPUT_BORDER_ALT,
            color: THEME.INPUT_PLACEHOLDER_ALT,
          }}
        >
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Action Row: Primary buttons for the workflow */}
      <div className="flex gap-2 mt-6">
        <button
          className="flex-1 font-semibold py-2 rounded-lg text-sm"
          style={{ backgroundColor: THEME.BUTTON_BG, color: THEME.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="flex-1 font-semibold py-2 rounded-lg text-sm"
          style={{ backgroundColor: THEME.BUTTON_BG, color: THEME.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Navigation Footer: Links to historical data */}
      <div className="mt-8">
        <h3 className="font-bold text-sm" style={{ color: THEME.FOOTER_TEXT }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
