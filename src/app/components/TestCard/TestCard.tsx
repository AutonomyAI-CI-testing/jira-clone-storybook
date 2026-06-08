import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Color values for button states
const BUTTON_BG_COLOR = "#8c4b2d";
const BUTTON_HOVER_COLOR = "#a65d3a";

// Common input className for consistency
const INPUT_CLASSNAME =
  "shadow appearance-none border border-neutral-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-neutral-800";

// Button event handlers for hover state changes
const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = BUTTON_HOVER_COLOR;
};

const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.backgroundColor = BUTTON_BG_COLOR;
};

// Reusable label component with icon for input fields
interface InputLabelProps {
  htmlFor: string;
  children: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="text-neutral-400 mb-2 block text-sm font-bold"
  >
    {children}
    <FiInfo className="text-neutral-400 ml-1 inline-block" size={16} />
  </label>
);

// Reusable button component with hover color transition
interface StyledButtonProps {
  label: string;
  marginClass: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ label, marginClass }) => (
  <button
    style={{ backgroundColor: BUTTON_BG_COLOR }}
    className={`focus:shadow-outline ${marginClass} flex-1 rounded px-4 py-2 font-bold text-white hover:opacity-90 focus:outline-none`}
    onMouseEnter={handleButtonMouseEnter}
    onMouseLeave={handleButtonMouseLeave}
  >
    {label}
  </button>
);

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-neutral-900 min-h-screen p-4 text-white">
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-neutral-400" size={20} />
      </div>

      {/* Subtitle Row */}
      <div className="text-neutral-400 mb-4 flex items-center">
        <FiChevronUp className="text-neutral-400 mr-2" size={20} />
        <p className="text-neutral-400">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-4 flex items-center text-white">
        <FiChevronUp className="mr-2 text-white" size={20} />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <InputLabel htmlFor="personalAccessToken">
          Personal Access Token
        </InputLabel>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={INPUT_CLASSNAME}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <InputLabel htmlFor="designURL">
          Design URL
        </InputLabel>
        <input
          type="text"
          id="designURL"
          placeholder="https://www.figma.com/file:/"
          className={INPUT_CLASSNAME}
        />
      </div>

      {/* Buttons */}
      <div className="mb-6 flex justify-between">
        <StyledButton label="Awesome" marginClass="mr-2" />
        <StyledButton label="Prepare" marginClass="ml-2" />
      </div>

      {/* Recent Breakdowns Header */}
      <div>
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
