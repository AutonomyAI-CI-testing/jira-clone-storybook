
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Colors derived from the Figma design.
 * These are kept as constants to maintain design fidelity since they
 * don't map directly to the project's standard Tailwind palette.
 */
const COLORS = {
  background: '#2a2a2a',
  accent: '#b85c2a',
} as const;

/**
 * TestCard renders a configuration panel for the "UI magician Agent".
 * It includes Figma integration inputs and action buttons.
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-4 rounded-lg shadow-lg flex flex-col space-y-4 text-white w-80"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header with Tool Title and Settings */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <button type="button" aria-label="Settings">
          <FiSettings className="text-xl" />
        </button>
      </div>

      {/* Summary of current state - collapsed view */}
      <div className="flex items-center space-x-2">
        <FiChevronUp className="text-orange-500" aria-hidden="true" />
        <span className="text-orange-500 text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section for adding new Figma designs */}
      <div className="flex items-center space-x-2">
        <FiChevronUp className="text-white" aria-hidden="true" />
        <h3 className="text-white font-bold text-sm">Add New Design</h3>
      </div>

      {/* Input Field: Personal Access Token */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label htmlFor="personalAccessToken" className="text-white text-sm">
            Personal Access Token
          </label>
          <FiInfo className="text-xs opacity-70" aria-label="Help information" />
        </div>
        <input
          id="personalAccessToken"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      {/* Input Field: Design URL */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <label htmlFor="designUrl" className="text-white text-sm">
            Design URL
          </label>
          <FiInfo className="text-xs opacity-70" aria-label="Help information" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex justify-between space-x-4 pt-2">
        <button
          type="button"
          className="flex-1 py-2 rounded-lg text-white font-semibold hover:brightness-110 transition-all"
          style={{ backgroundColor: COLORS.accent }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 rounded-lg text-white font-semibold hover:brightness-110 transition-all"
          style={{ backgroundColor: COLORS.accent }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: Recent Activity */}
      <h3 className="text-white font-bold text-sm pt-4 border-t border-zinc-700">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
