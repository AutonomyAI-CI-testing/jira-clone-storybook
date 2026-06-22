import React from "react";
import { AiFillSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

/**
 * TestCard component
 * A self-contained smoke-test component that replicates a specific Figma design panel.
 * Used to verify the component rendering pipeline.
 */
export const TestCard: React.FC = () => {
  // Brand colors and styles from design reference
  const COLORS = {
    bg: "#2a2a2a",
    inputBg: "#1e1e1e",
    buttonBg: "#b5522a",
    textMain: "#b5b5b5",
    textMuted: "#8b9291",
    textHeader: "#b2b2b1",
    textLabel: "#a4a4a3",
    textPlaceholder: "#737470",
    textFooter: "#b0b0b0",
  };

  const inputClasses = "mt-1 w-full border border-[#3a3a3a] rounded px-3 py-2 text-xs";
  const labelClasses = "flex items-center gap-1 text-xs font-semibold";
  const buttonClasses = "text-white rounded-lg px-4 py-2 text-sm font-medium flex-1";

  return (
    <div id="testElem" className="w-[254px] bg-[#2a2a2a] p-4 pb-8 text-sm">
      {/* Header section with title and settings icon */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold" style={{ color: COLORS.textMain }}>
          UI magician Agent
        </span>
        <AiFillSetting style={{ color: COLORS.textMain }} />
      </div>

      {/* Subtitle with chevron and status/description */}
      <div className="mt-1 flex items-center gap-1">
        <FiChevronUp style={{ color: COLORS.textMuted }} />
        <span className="text-xs italic" style={{ color: COLORS.textMuted }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacing matching design layout */}
      <div className="mt-8"></div>

      {/* Accordion-style section header for Add New Design */}
      <div className="flex items-center gap-2">
        <FiChevronUp style={{ color: COLORS.textHeader }} />
        <span className="text-sm font-semibold" style={{ color: COLORS.textHeader }}>
          Add New Design
        </span>
      </div>

      {/* Form fields for design configuration */}
      <div className="mt-4">
        <label className={labelClasses} style={{ color: COLORS.textLabel }}>
          Personal Access Token <AiOutlineInfoCircle />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClasses}
          style={{ 
            backgroundColor: COLORS.inputBg, 
            color: COLORS.textPlaceholder 
          }}
        />
      </div>

      <div className="mt-3">
        <label className={labelClasses} style={{ color: COLORS.textLabel }}>
          Design URL <AiOutlineInfoCircle />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={inputClasses}
          style={{ 
            backgroundColor: COLORS.inputBg, 
            color: COLORS.textPlaceholder 
          }}
        />
      </div>

      {/* Action buttons footer section */}
      <div className="mt-4 flex gap-2">
        <button className={buttonClasses} style={{ backgroundColor: COLORS.buttonBg }}>Awesome</button>
        <button className={buttonClasses} style={{ backgroundColor: COLORS.buttonBg }}>Prepare</button>
      </div>

      {/* Recent activity footer */}
      <div className="mt-8">
        <span className="text-base font-semibold" style={{ color: COLORS.textFooter }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
