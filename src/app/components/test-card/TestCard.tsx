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
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp
          style={{ color: COLORS.collapsedText }}
          size={ICON_SIZES.medium}
        />
        <span
          className="font-semibold"
          style={{ fontSize: FONT_SIZES.medium, color: COLORS.collapsedText }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - collapsible section header */}
      <div className="mb-4 flex items-center gap-2">
        <FiChevronUp
          style={{ color: COLORS.sectionText }}
          size={ICON_SIZES.medium}
        />
        <span
          className="font-semibold"
          style={{ fontSize: FONT_SIZES.large, color: COLORS.sectionText }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field - read-only input for token display */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-2">
          <span
            className="font-semibold"
            style={{ fontSize: FONT_SIZES.medium, color: COLORS.labelText }}
          >
            Personal Access Token
          </span>
          <AiOutlineInfoCircle
            style={{ color: COLORS.labelText }}
            size={ICON_SIZES.small}
          />
        </div>
        <input
          readOnly
          style={{
            fontSize: FONT_SIZES.medium,
            fontWeight: 600,
            backgroundColor: COLORS.surfaceBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
          className="w-full rounded border p-2 outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL field - read-only input for URL display */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-2">
          <span
            className="font-semibold"
            style={{ fontSize: FONT_SIZES.medium, color: COLORS.labelText2 }}
          >
            Design URL
          </span>
          <AiOutlineInfoCircle
            style={{ color: COLORS.labelText2 }}
            size={ICON_SIZES.small}
          />
        </div>
        <input
          readOnly
          style={{
            fontSize: FONT_SIZES.small,
            fontWeight: 600,
            backgroundColor: COLORS.surfaceBackground,
            borderColor: COLORS.inputBorder2,
            borderWidth: "2px",
            color: COLORS.inputText2,
          }}
          className="w-full rounded border p-2 outline-none"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons - two primary CTAs for the configuration flow */}
      <div className="mb-8 flex gap-4">
        <button
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
            fontSize: FONT_SIZES.medium,
          }}
          className="flex-1 rounded-[4px] px-6 py-3 font-semibold"
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
            fontSize: FONT_SIZES.medium,
          }}
          className="flex-1 rounded-[4px] px-6 py-3 font-semibold"
        >
          Prepare
        </button>
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
