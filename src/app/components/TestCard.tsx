import React from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

const COLORS = {
  background: "#1e1e1e", // Dark near-black background matching the Figma design
  inputBackground: "#2a2a2a", // Slightly lighter grey for input fields
  borderColor: "#3a3a3a", // Subtle border for inputs
  accentAmber: "#c87941", // Amber/orange color for specific labels and text
  buttonPrimary: "#b85c28", // Core orange-brown for primary action buttons
  buttonHover: "#a35123", // Darker shade for button hover states
} as const;

export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-xl p-5 text-white shadow-lg"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Row: Contains the tool title and configuration access */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <AiOutlineSetting size={22} className="cursor-pointer text-white" />
      </div>

      {/* Collapsed Row: Showcasing design context/status */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp className="text-gray-400" />
        <span
          className="truncate text-sm"
          style={{ color: COLORS.accentAmber }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Heading: Entry point for adding new Figma designs */}
      <div className="mb-4 mt-4 flex items-center gap-2">
        <FiChevronUp className="text-white" />
        <h3 className="text-lg font-bold">Add New Design</h3>
      </div>

      {/* Form Area: Collection point for Figma credentials and design link */}
      <div className="flex flex-col gap-3">
        {/* Personal Access Token Input */}
        <div>
          <label className="mb-1 flex items-center gap-2 text-sm text-white">
            Personal Access Token
            <AiOutlineInfoCircle size={14} className="text-gray-400" />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="text-gray-400 focus:border-blue-500 w-full rounded border p-2 text-sm placeholder:text-[#555] focus:outline-none"
            style={{
              backgroundColor: COLORS.inputBackground,
              borderColor: COLORS.borderColor,
            }}
          />
        </div>

        {/* Design URL Input */}
        <div>
          <label className="mb-1 flex items-center gap-2 text-sm text-white">
            Design URL
            <AiOutlineInfoCircle size={14} className="text-gray-400" />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="text-gray-400 focus:border-blue-500 w-full rounded border p-2 text-sm placeholder:text-[#555] focus:outline-none"
            style={{
              backgroundColor: COLORS.inputBackground,
              borderColor: COLORS.borderColor,
            }}
          />
        </div>

        {/* Action Buttons: Unified primary operations */}
        <div className="mt-4 flex gap-3">
          <button
            className="flex-1 rounded-lg py-2.5 text-sm font-medium text-white transition-colors duration-200"
            style={{ backgroundColor: COLORS.buttonPrimary }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonHover)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonPrimary)
            }
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-lg py-2.5 text-sm font-medium text-white transition-colors duration-200"
            style={{ backgroundColor: COLORS.buttonPrimary }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonHover)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.buttonPrimary)
            }
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Progress tracking / History section */}
      <h3 className="mt-8 text-lg font-bold text-white">Recent Breakdowns</h3>
    </div>
  );
};
