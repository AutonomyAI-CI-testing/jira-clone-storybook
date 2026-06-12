
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard is a dark-themed UI component for managing Figma design integrations.
 * It provides inputs for access tokens and design URLs, mimicking a professional agent interface.
 * 
 * Design matches the specific requirements for a "UI magician Agent" panel.
 */

// Design constants matching the Figma spec provided in the planner
const COLORS = {
  bg: '#2a2a2a',
  accent: '#b5451b', // Orange-brown primary action color
  accentHover: '#a03d17',
};

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 rounded-lg shadow-lg text-white max-w-sm mx-auto" style={{ backgroundColor: COLORS.bg }}>
      {/* Header: Identity and primary settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="text-gray-400 text-xl cursor-not-allowed" />
      </div>

      {/* Status/Context row - truncated text suggests a breadcrumb or status message */}
      <div className="flex items-center mb-6" style={{ color: COLORS.accent }}>
        <FiChevronUp className="mr-2" />
        <p className="text-sm truncate">From entire frame to a singl...</p>
      </div>

      {/* Main Action Section: Add New Design */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="mr-2" />
        <h2 className="text-lg font-semibold">Add New Design</h2>
      </div>

      {/* Form Fields: Uncontrolled for simplicity as per requirements */}
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="pat" className="block text-sm font-medium text-gray-300 flex items-center mb-1">
            Personal Access Token
            <FiInfo className="ml-1 text-gray-400 cursor-help" />
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="designUrl" className="block text-sm font-medium text-gray-300 flex items-center mb-1">
            Design URL
            <FiInfo className="ml-1 text-gray-400 cursor-help" />
          </label>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Primary Actions: Awesome/Prepare */}
      <div className="flex justify-around gap-4 mb-6">
        <button 
          className="flex-1 py-2 px-4 rounded font-semibold transition-colors text-white"
          style={{ backgroundColor: COLORS.accent }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.accentHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
        >
          Awesome
        </button>
        <button 
          className="flex-1 py-2 px-4 rounded font-semibold transition-colors text-white"
          style={{ backgroundColor: COLORS.accent }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.accentHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
        >
          Prepare
        </button>
      </div>

      {/* Secondary Section: History/Recent actions */}
      <div>
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
