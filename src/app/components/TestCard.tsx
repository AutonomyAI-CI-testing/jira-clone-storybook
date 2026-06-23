import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

/**
 * TestCard component replicates the "UI magician Agent" design panel from Figma.
 * It is a self-contained, dark-themed UI component for testing purposes.
 * Note: Uses arbitrary hex values to match the specific Figma dark palette which
 * is separate from the project's primary Tailwind theme.
 */

// Color Constants - exactly matching the provided design requirements
const COLORS = {
  CARD_BG: "#282828",
  INPUT_BG: "#272822",
  INPUT_TEXT: "#9a9a97",
  BUTTON_BG: "#843a17",
  BUTTON_TEXT: "#c9b8ae",
  HEADER_TEXT: "#c8c8c8",
  BREADCRUMB_TEXT: "#8b7d6b",
  SUBDUED_ICON: "#8b9291",
  SECTION_HEADER_TEXT: "#c8c8c4",
  LABEL_TEXT: "#b0b0ae",
  FOOTER_TEXT: "#c0c0be",
};

export const TestCard = (): JSX.Element => {
  const inputStyle: React.CSSProperties = {
    backgroundColor: COLORS.INPUT_BG,
    color: COLORS.INPUT_TEXT,
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: COLORS.BUTTON_BG,
    color: COLORS.BUTTON_TEXT,
  };

  return (
    <div
      id="testElem"
      className="w-[280px] font-sans"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header: Title and Settings icon */}
      <div className="flex items-center justify-between px-5 pt-6 pb-3">
        <span className="text-base font-bold" style={{ color: COLORS.HEADER_TEXT }}>
          UI magician Agent
        </span>
        <IoSettingsOutline style={{ color: COLORS.HEADER_TEXT }} size={22} />
      </div>

      {/* Breadcrumb: Sub-label with chevron */}
      <div className="flex items-center gap-2 px-5 pb-10">
        <HiChevronUp style={{ color: COLORS.SUBDUED_ICON }} size={16} />
        <span className="text-sm font-semibold" style={{ color: COLORS.BREADCRUMB_TEXT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header: "Add New Design" collapsible control style */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <HiChevronUp style={{ color: COLORS.SECTION_HEADER_TEXT }} size={18} />
        <span className="text-base font-bold" style={{ color: COLORS.SECTION_HEADER_TEXT }}>
          Add New Design
        </span>
      </div>

      {/* Field: Personal Access Token */}
      <div className="px-5 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold" style={{ color: COLORS.LABEL_TEXT }}>
            Personal Access Token
          </span>
          <HiInformationCircle style={{ color: COLORS.LABEL_TEXT }} size={18} />
        </div>
        <input
          className="w-full border border-[#929291] text-sm px-3 py-2 outline-none"
          style={inputStyle}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Field: Design URL */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold" style={{ color: COLORS.LABEL_TEXT }}>
            Design URL
          </span>
          <HiInformationCircle style={{ color: COLORS.LABEL_TEXT }} size={18} />
        </div>
        <input
          className="w-full border-2 border-[#a5adad] text-sm px-3 py-2 outline-none"
          style={inputStyle}
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Action Buttons row */}
      <div className="flex gap-4 px-5 pb-10 justify-center">
        <button
          className="rounded text-sm font-semibold px-8 py-3 transition-opacity hover:opacity-90"
          style={buttonStyle}
        >
          Awesome
        </button>
        <button
          className="rounded text-sm font-semibold px-8 py-3 transition-opacity hover:opacity-90"
          style={buttonStyle}
        >
          Prepare
        </button>
      </div>

      {/* Footer / Results Label */}
      <div className="px-5 pb-6">
        <span className="text-base font-bold" style={{ color: COLORS.FOOTER_TEXT }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

