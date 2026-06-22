
import React from "react";
import { IoSettingsOutline, IoChevronUpOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component
 * 
 * Replicates a Figma design panel for a "UI magician Agent".
 * Uses a custom dark palette with specialized amber and burnt-orange accents.
 * 
 * Note: Uses inline styles for specific hex values to ensure fidelity 
 * across different rendering environments.
 */
export const TestCard = () => {
  const COLORS = {
    CARD_BG: "#2a2a2a",
    INPUT_BG: "#1e1e1e",
    INPUT_BORDER: "#555",
    AMBER_TEXT: "#c8784a",
    PRIMARY_BUTTON: "#b05a2f",
    PLACEHOLDER: "#666",
  };

  return (
    <div
      id="testElem"
      className="p-6 rounded-lg shadow-lg flex flex-col gap-4 min-w-[300px]"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header row: Primary title and settings gear */}
      <div className="flex justify-between items-center">
        <span className="font-primary-bold text-white text-lg">UI magician Agent</span>
        <IoSettingsOutline className="text-white text-xl cursor-not-allowed" />
      </div>

      {/* Collapsible hint row: Decorative element showing scope summary */}
      <div className="flex items-center gap-1">
        <IoChevronUpOutline className="text-lg" style={{ color: COLORS.AMBER_TEXT }} />
        <span className="text-sm" style={{ color: COLORS.AMBER_TEXT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section: Form fields for Figma integration */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-2">
          <IoChevronUpOutline className="text-white text-xl" />
          <span className="font-primary-bold text-white text-lg">Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pat-input" className="text-white text-sm flex items-center gap-1">
            Personal Access Token <AiOutlineInfoCircle className="text-white text-sm cursor-help" />
          </label>
          <input
            id="pat-input"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="border p-2 text-white rounded-lg focus:outline-none focus:border-white transition-colors"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              borderColor: COLORS.INPUT_BORDER,
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-1.5 mt-2">
          <label htmlFor="design-url-input" className="text-white text-sm flex items-center gap-1">
            Design URL <AiOutlineInfoCircle className="text-white text-sm cursor-help" />
          </label>
          <input
            id="design-url-input"
            type="text"
            placeholder="https://www.figma.com/file:/"
            className="border p-2 text-white rounded-lg focus:outline-none focus:border-white transition-colors"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              borderColor: COLORS.INPUT_BORDER,
            }}
          />
        </div>

        {/* Primary Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            className="text-white rounded-lg px-6 py-2 font-primary-bold flex-1 hover:opacity-90 active:scale-[0.98] transition-all"
            style={{ backgroundColor: COLORS.PRIMARY_BUTTON }}
          >
            Awesome
          </button>
          <button
            className="text-white rounded-lg px-6 py-2 font-primary-bold flex-1 hover:opacity-90 active:scale-[0.98] transition-all"
            style={{ backgroundColor: COLORS.PRIMARY_BUTTON }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Activity section footer */}
      <h2 className="text-white font-primary-bold text-lg mt-4">Recent Breakdowns</h2>

      <style>{`
        #testElem input::placeholder {
          color: ${COLORS.PLACEHOLDER};
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
