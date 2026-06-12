import React from "react";
import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Design-specific colors from Figma that are not currently part of the semantic token system.
const COLORS = {
  CARD_BG: "#2a2a2a",
  INPUT_BG: "#1a1a1a",
  ACCENT: "#b85c38", // Orange-brown for buttons and certain text
  SUBTITLE: "#c47a5a",
  BORDER: "#555",
} as const;

/**
 * TestCard is a smoke-test component designed to verify the Tailwind CSS pipeline.
 * It reproduces a specific Figma design panel called "UI magician Agent".
 * This component is static and self-contained.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem">
      <div 
        className="p-5 w-[320px] mx-auto rounded-lg shadow-lg text-white"
        style={{ backgroundColor: COLORS.CARD_BG }}
      >
        {/* Header row */}
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-white text-lg">UI magician Agent</h1>
          <HiCog className="text-white text-xl" />
        </div>

        {/* Subtitle row */}
        <div 
          className="flex items-center gap-1 mb-6 text-sm"
          style={{ color: COLORS.SUBTITLE }}
        >
          <HiChevronUp className="text-md" />
          <span>From entire frame to a singl...</span>
        </div>

        {/* Add New Design section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <HiChevronUp className="text-white text-md" />
            <h2 className="font-bold text-white text-md">Add New Design</h2>
          </div>

          {/* Personal Access Token */}
          <div className="mb-4">
            <label htmlFor="pat" className="flex items-center gap-1 text-white text-sm mb-1">
              Personal Access Token
              <HiInformationCircle className="text-gray-400 text-md" />
            </label>
            <input
              id="pat"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full p-2 rounded-md text-gray-400 text-sm border"
              style={{ 
                backgroundColor: COLORS.INPUT_BG,
                borderColor: COLORS.BORDER 
              }}
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <label htmlFor="design-url" className="flex items-center gap-1 text-white text-sm mb-1">
              Design URL
              <HiInformationCircle className="text-gray-400 text-md" />
            </label>
            <input
              id="design-url"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full p-2 rounded-md text-gray-400 text-sm border"
              style={{ 
                backgroundColor: COLORS.INPUT_BG,
                borderColor: COLORS.BORDER 
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <button 
              className="text-white px-6 py-2 rounded-lg text-sm font-semibold"
              style={{ backgroundColor: COLORS.ACCENT }}
            >
              Awesome
            </button>
            <button 
              className="text-white px-6 py-2 rounded-lg text-sm font-semibold"
              style={{ backgroundColor: COLORS.ACCENT }}
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section Header */}
        <h2 className="font-bold text-white text-md mt-4">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
