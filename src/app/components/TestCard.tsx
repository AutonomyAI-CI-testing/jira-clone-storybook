import React from 'react';

/**
 * Icons extracted as constants for better readability.
 * All paths and viewboxes are preserved exactly from the original implementation.
 */
const ICON_GEAR = (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ICON_CHEVRON_UP = (
  <svg
    className="w-4 h-4 transform rotate-180"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

const ICON_INFO = (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Design colors matching the Figma spec
const COLORS = {
  CARD_BG: '#2a2a2a',
  INPUT_BG: '#1e1e1e',
  INPUT_BORDER: '#3a3a3a',
  TEXT_ORANGE: '#c8733a',
  BUTTON_ORANGE: '#b55a2a',
  BUTTON_HOVER: '#c0622d',
};

/**
 * TestCard component replicating a Figma Agent settings panel.
 * Uses inline styles for specific hex codes to ensure consistent rendering in Storybook.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="p-6 rounded-lg shadow-lg max-w-sm mx-auto my-10"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-white">UI magician Agent</h2>
        {ICON_GEAR}
      </div>

      {/* Subtitle Row - shows current context scope */}
      <div className="flex items-center mb-6" style={{ color: COLORS.TEXT_ORANGE }}>
        <div className="mr-2">{ICON_CHEVRON_UP}</div>
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Visual Divider */}
      <div className="border-t border-gray-700 my-4" />

      {/* Expandable Section Header */}
      <div className="flex items-center font-bold mb-4 text-white">
        <div className="mr-2">{ICON_CHEVRON_UP}</div>
        <span>Add New Design</span>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token Field */}
        <div>
          <label
            htmlFor="pat"
            className="block text-sm font-medium mb-2 flex items-center text-white"
          >
            Personal Access Token
            <span className="ml-1">{ICON_INFO}</span>
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              border: `1px solid ${COLORS.INPUT_BORDER}`,
              color: '#fff',
            }}
          />
        </div>

        {/* Design URL Field */}
        <div>
          <label
            htmlFor="design-url"
            className="block text-sm font-medium mb-2 flex items-center text-white"
          >
            Design URL
            <span className="ml-1">{ICON_INFO}</span>
          </label>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              border: `1px solid ${COLORS.INPUT_BORDER}`,
              color: '#fff',
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4 mb-6">
        <button
          type="button"
          className="flex-1 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: COLORS.BUTTON_ORANGE }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.BUTTON_HOVER)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.BUTTON_ORANGE)}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: COLORS.BUTTON_ORANGE }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.BUTTON_HOVER)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.BUTTON_ORANGE)}
        >
          Prepare
        </button>
      </div>

      {/* Section Footer */}
      <h3 className="text-lg font-bold text-white">Recent Breakdowns</h3>
    </div>
  );
};
