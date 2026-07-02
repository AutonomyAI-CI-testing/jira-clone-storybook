
import React from 'react';

/**
 * Design tokens extracted from Figma to ensure visual consistency.
 * These match the rust-themed dark UI panel requirements.
 */
const COLORS = {
  BACKGROUND_CARD: '#1a1a18',
  BACKGROUND_INPUT: '#272822',
  BORDER_INPUT: '#929291',
  BORDER_INPUT_URL: '#a5adad',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  TEXT_TITLE: '#b5b5b5',
  TEXT_SUBTITLE: '#8b9291',
  TEXT_SECTION: '#b2b2b1',
  TEXT_LABEL: '#a4a4a3',
  TEXT_LABEL_URL: '#a3a3a2',
  TEXT_PLACEHOLDER: '#737470',
  TEXT_PLACEHOLDER_URL: '#71726e',
  TEXT_FOOTER: '#b0b0b0',
};

// --- Sub-components for better readability ---

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ color: COLORS.TEXT_TITLE }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronUpIcon = ({ className = 'h-4 w-4 mr-1' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * TestCard: A self-contained UI panel matching a Figma design for a "UI magician Agent".
 * Uses absolute hex values where Tailwind defaults don't match the specific rust-themed dark mode.
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.BACKGROUND_CARD }}
      className="p-4 w-64 font-sans text-white"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold" style={{ color: COLORS.TEXT_TITLE }}>
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center text-sm mb-6" style={{ color: COLORS.TEXT_SUBTITLE }}>
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section Header: Add New Design */}
      <div
        className="flex items-center text-base font-semibold mb-3"
        style={{ color: COLORS.TEXT_SECTION }}
      >
        <ChevronUpIcon />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-3">
        <label
          htmlFor="pat"
          className="flex items-center text-sm font-medium mb-1"
          style={{ color: COLORS.TEXT_LABEL }}
        >
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded text-sm"
          style={{
            backgroundColor: COLORS.BACKGROUND_INPUT,
            borderColor: COLORS.BORDER_INPUT,
            borderWidth: '1px',
            color: COLORS.TEXT_PLACEHOLDER,
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label
          htmlFor="designUrl"
          className="flex items-center text-sm font-medium mb-1"
          style={{ color: COLORS.TEXT_LABEL_URL }}
        >
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded text-sm"
          style={{
            backgroundColor: COLORS.BACKGROUND_INPUT,
            borderColor: COLORS.BORDER_INPUT_URL,
            borderWidth: '1px',
            color: COLORS.TEXT_PLACEHOLDER_URL,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between space-x-2 mb-6">
        <button
          className="flex-1 p-2 rounded-xl text-sm font-semibold"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Awesome
        </button>
        <button
          className="flex-1 p-2 rounded-xl text-sm font-semibold"
          style={{ backgroundColor: COLORS.BUTTON_BG, color: COLORS.BUTTON_TEXT }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="text-sm font-semibold" style={{ color: COLORS.TEXT_FOOTER }}>
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;

