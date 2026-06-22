import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * TestCard is a static UI component that recreates a "UI Magician Agent" design.
 * It is used for demonstration and visual testing of the Figma-to-Code workflow.
 */
const TestCard: React.FC = () => {
  // Design-specific colors extracted from Figma
  const colors = {
    cardBg: "bg-[#2a2a2a]",
    inputBg: "bg-[#1e1e1e]",
    accentText: "text-[#c47b4b]",
    buttonBg: "bg-[#b85c2c]",
    border: "border-[#444]",
  };

  const sharedInputClasses = `w-full ${colors.inputBg} border ${colors.border} text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#b85c2c]`;
  const sharedButtonClasses = `${colors.buttonBg} text-white px-6 py-3 rounded-lg flex-1 transition-opacity hover:opacity-90 active:transform active:scale-[0.98]`;

  return (
    <div id="testElem">
      <div className={`${colors.cardBg} p-6 rounded-lg shadow-lg max-w-lg mx-auto`}>
        {/* Header: Title and Settings affordance */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-bold">UI magician Agent</h2>
          <FiSettings className="text-white text-lg cursor-pointer" />
        </div>

        {/* Breadcrumb/Context: Displays the current scope of the agent */}
        <div className="flex items-center mb-6">
          <FiChevronUp className="text-white mr-2" />
          <span className={`${colors.accentText} text-sm`}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Primary Action Section Toggle */}
        <div className="flex items-center mb-4">
          <FiChevronUp className="text-white mr-2" />
          <h3 className="text-white text-lg font-bold">Add New Design</h3>
        </div>

        {/* Configuration: Personal Access Token for Figma API */}
        <div className="mb-4">
          <label
            htmlFor="pat"
            className="text-white text-sm mb-2 flex items-center"
          >
            Personal Access Token
            <FiInfo className="text-white ml-2 text-xs" title="Your Figma Personal Access Token" />
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={sharedInputClasses}
          />
        </div>

        {/* Configuration: Target Design URL */}
        <div className="mb-6">
          <label
            htmlFor="design-url"
            className="text-white text-sm mb-2 flex items-center"
          >
            Design URL
            <FiInfo className="text-white ml-2 text-xs" title="URL of the Figma file or frame" />
          </label>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className={sharedInputClasses}
          />
        </div>

        {/* Form Actions */}
        <div className="flex gap-3 mb-6">
          <button className={sharedButtonClasses}>
            Awesome
          </button>
          <button className={sharedButtonClasses}>
            Prepare
          </button>
        </div>

        {/* Footer: List of previous processings */}
        <div>
          <h3 className="text-white text-lg font-bold">Recent Breakdowns</h3>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
