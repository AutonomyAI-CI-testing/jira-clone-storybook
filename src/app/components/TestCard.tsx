import React from "react";
import { Settings, ChevronUp, Info } from "lucide-react";

// Consistent styling for all text input fields in the form
const INPUT_FIELD_CLASS =
  "w-full p-3 bg-[#2f2f2f] border border-gray-600 rounded text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400";

// Consistent styling for primary action buttons
const BUTTON_CLASS =
  "flex-1 bg-[#b5541c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#a04a18] transition-colors";

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="min-h-screen bg-[#252525] text-gray-100 p-6 font-sans">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-white">UI magician Agent</h1>
        <Settings className="h-6 w-6 text-gray-300" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-10">
        <ChevronUp className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
        <p className="text-sm text-[#b5541c] truncate">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center mb-5">
        <ChevronUp className="h-5 w-5 text-white mr-2 flex-shrink-0" />
        <h2 className="text-xl font-semibold text-white">Add New Design</h2>
      </div>

      {/* Form Field 1: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="accessToken" className="text-sm font-medium text-gray-200 mr-2">
            Personal Access Token
          </label>
          <Info className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          id="accessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={INPUT_FIELD_CLASS}
        />
      </div>

      {/* Form Field 2: Design URL */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="designUrl" className="text-sm font-medium text-gray-200 mr-2">
            Design URL
          </label>
          <Info className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className={INPUT_FIELD_CLASS}
        />
      </div>

      {/* Action Buttons Row */}
      <div className="flex space-x-4 mb-12">
        {["Awesome", "Prepare"].map((buttonLabel) => (
          <button key={buttonLabel} className={BUTTON_CLASS}>
            {buttonLabel}
          </button>
        ))}
      </div>

      {/* Footer: Recent Breakdowns */}
      <div>
        <h2 className="text-xl font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
