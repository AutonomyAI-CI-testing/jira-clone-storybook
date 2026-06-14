import React from "react";
import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

// Design tokens from Figma design
const COLORS = {
  BACKGROUND: "#2b2b2b",
  BUTTON_BG: "#c1622a",
  MUTED_AMBER: "#a0856a",
  INPUT_BG: "#3a3a3a",
  INPUT_BORDER: "#4a4a4a",
  INPUT_TEXT: "#ccc",
};

export const TestCard: React.FC = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 rounded-lg shadow-lg max-w-sm"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header section: Contains the main title and settings access */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-lg font-bold">UI magician Agent</h1>
        <FiSettings className="text-white text-xl cursor-not-allowed" />
      </div>

      {/* Status row: Shows the current processing scope (visual only) */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-gray-400 text-lg mr-2" />
        <span className="text-sm" style={{ color: COLORS.MUTED_AMBER }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Decorative spacer to match Figma vertical rhythm */}
      <div className="my-6 border-t border-gray-700" />

      {/* Configuration Header */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-white text-lg mr-2" />
        <h2 className="text-white text-md font-bold">Add New Design</h2>
      </div>

      {/* Integration Fields */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token field */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="pat" className="text-white text-sm mr-2">
              Personal Access Token
            </label>
            <FiInfo className="text-gray-400 text-sm" title="Your Figma PAT" />
          </div>
          <input
            type="password" // Use password type for security (standard practice for tokens)
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md border text-sm outline-none focus:ring-1 focus:ring-orange-500"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              borderColor: COLORS.INPUT_BORDER,
              color: COLORS.INPUT_TEXT,
            }}
          />
        </div>

        {/* Design URL field */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="designUrl" className="text-white text-sm mr-2">
              Design URL
            </label>
            <FiInfo className="text-gray-400 text-sm" title="Link to your Figma file" />
          </div>
          <input
            type="url"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md border text-sm outline-none focus:ring-1 focus:ring-orange-500"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              borderColor: COLORS.INPUT_BORDER,
              color: COLORS.INPUT_TEXT,
            }}
          />
        </div>
      </div>

      {/* Action Buttons: Rust-orange color provides primary CTA prominence */}
      <div className="flex gap-4 mb-6">
        <button
          className="flex-1 text-white rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_BG }}
        >
          Awesome
        </button>
        <button
          className="flex-1 text-white rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_BG }}
        >
          Prepare
        </button>
      </div>

      {/* History section */}
      <div className="border-t border-gray-700 pt-4">
        <h2 className="text-white text-md font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
