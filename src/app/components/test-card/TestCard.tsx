
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component visually reproduces a Figma design for an AI agent control panel.
 * It uses arbitrary Tailwind values to match the exact dark-themed palette from the design.
 * All elements are presentational and do not have interactive state as per the initial requirements.
 */

// Color palette constants derived from Figma design specs
const COLORS = {
  BACKGROUND: "#1a1a16",
  INPUT_BG: "#272822",
  ACCENT_BUTTON: "#843a17",
  TEXT_PRIMARY: "#b5b5b5", // "UI magician Agent" header
  TEXT_SECONDARY: "#b2b2b1", // "Add New Design", icons
  TEXT_MUTED: "#8b9291", // "From entire frame to a singl..."
  TEXT_LABEL: "#a4a4a3", // Input labels
  TEXT_PLACEHOLDER: "#737470", // Input text
  TEXT_BUTTON: "#8c8078", // Button text
  TEXT_SECTION: "#b0b0b0", // "Recent Breakdowns"
  BORDER_LIGHT: "#a5adad", // PAT input border
  BORDER_DARK: "#929291", // Design URL input border
} as const;

export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.BACKGROUND }}
      className="w-[254px] min-h-[508px] p-5 flex flex-col font-sans"
    >
      {/* 1. Header row: Title and configuration settings icon */}
      <div className="flex items-center justify-between">
        <span
          style={{ color: COLORS.TEXT_PRIMARY }}
          className="text-[13.5px] font-semibold"
        >
          UI magician Agent
        </span>
        <IoSettingsOutline
          style={{ color: COLORS.TEXT_PRIMARY }}
          className="w-4 h-4"
        />
      </div>

      {/* 2. Context row: Information about the current frame selection scope */}
      <div className="flex items-center gap-2 mt-4">
        <FaChevronUp
          style={{ color: COLORS.TEXT_SECONDARY }}
          className="w-3 h-2"
        />
        <span
          style={{ color: COLORS.TEXT_MUTED }}
          className="text-[11.5px] font-semibold underline decoration-dotted decoration-[#8b9291] underline-offset-4"
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Section Header: Direct action to add a new figma design URL */}
      <div className="flex items-center gap-2 mt-8">
        <FaChevronUp
          style={{ color: COLORS.TEXT_SECONDARY }}
          className="w-3 h-2"
        />
        <span
          style={{ color: COLORS.TEXT_SECONDARY }}
          className="text-[13.5px] font-semibold"
        >
          Add New Design
        </span>
      </div>

      {/* 4. Personal Access Token: Required for fetching design assets */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <label
            style={{ color: COLORS.TEXT_LABEL }}
            className="text-[11.5px] font-semibold"
          >
            Personal Access Token
          </label>
          <AiOutlineInfoCircle
            style={{ color: COLORS.TEXT_LABEL }}
            className="w-[15px] h-[15px]"
          />
        </div>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: COLORS.INPUT_BG,
            color: COLORS.TEXT_PLACEHOLDER,
            borderColor: COLORS.BORDER_LIGHT,
          }}
          className="w-full text-[11.5px] font-semibold px-3 py-2 border outline-none"
        />
      </div>

      {/* 5. Design URL: Link to the specific Figma file to process */}
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-1">
          <label
            style={{ color: COLORS.TEXT_LABEL }}
            className="text-[11.5px] font-semibold"
          >
            Design URL
          </label>
          <AiOutlineInfoCircle
            style={{ color: COLORS.TEXT_LABEL }}
            className="w-[15px] h-[15px]"
          />
        </div>
        <input
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: COLORS.INPUT_BG,
            color: COLORS.TEXT_PLACEHOLDER,
            borderColor: COLORS.BORDER_DARK,
          }}
          className="w-full text-[11.5px] font-semibold px-3 py-2 border-2 outline-none"
        />
      </div>

      {/* 6. Controls: Action buttons to initiate background tasks */}
      <div className="flex gap-3 mt-4 justify-center">
        <button
          style={{
            backgroundColor: COLORS.ACCENT_BUTTON,
            color: COLORS.TEXT_BUTTON,
          }}
          className="text-[11.5px] font-semibold rounded px-6 py-2 w-[85px] h-[37px] hover:brightness-110 active:scale-95 transition-all"
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: COLORS.ACCENT_BUTTON,
            color: COLORS.TEXT_BUTTON,
          }}
          className="text-[11.5px] font-semibold rounded px-6 py-2 w-[85px] h-[37px] hover:brightness-110 active:scale-95 transition-all"
        >
          Prepare
        </button>
      </div>

      {/* 7. History section info */}
      <div className="mt-8">
        <span
          style={{ color: COLORS.TEXT_SECTION }}
          className="text-[13.5px] font-semibold"
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
