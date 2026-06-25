
import React from 'react';

// Design tokens from Figma
const COLORS = {
  bg: '#2b2b28',
  inputBg: '#272822',
  buttonBg: '#843a17',
  textPrimary: '#b5b5b5',
  textMuted: '#a3a3a2',
  textInput: '#8c8078',
} as const;

// Reusable Icon Components for cleaner JSX
const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400"
  >
    <path
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.9298C18.7842 4.64396 18.4489 4.41739 18.0823 4.26915M4.92996 19.0701C5.21579 19.356 5.55113 19.5826 5.91771 19.7309M4.92996 4.9298C5.21579 4.64396 5.55113 4.41739 5.91771 4.26915M19.07 19.0701C18.7842 19.356 18.4489 19.5826 18.0823 19.7309"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400 mr-1"
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400 ml-1"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * TestCard component
 * Renders a dark-themed UI panel for UI magician Agent based on Figma design specs.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col p-4 font-sans select-none"
      style={{
        backgroundColor: COLORS.bg,
        width: '254px',
        fontFamily: 'Inter, sans-serif',
        color: COLORS.textPrimary,
      }}
    >
      {/* Header section with title and settings icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      {/* Subtitle with status/info */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon />
        <p className="text-sm truncate" style={{ color: COLORS.textMuted }}>
          From entire frame to a singl...
        </p>
      </div>

      <div className="my-4" />

      {/* Collapsible section heading: Add New Design */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon />
        <h3 className="text-base font-semibold" style={{ color: COLORS.textPrimary }}>
          Add New Design
        </h3>
      </div>

      {/* Input Group: Personal Access Token */}
      <label className="text-sm mb-1 flex items-center justify-between" style={{ color: COLORS.textPrimary }}>
        Personal Access Token
        <InfoIcon />
      </label>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="p-2 mb-4 rounded text-sm focus:outline-none"
        style={{ backgroundColor: COLORS.inputBg, color: COLORS.textInput }}
      />

      {/* Input Group: Design URL */}
      <label className="text-sm mb-1 flex items-center justify-between" style={{ color: COLORS.textPrimary }}>
        Design URL
        <InfoIcon />
      </label>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="p-2 mb-4 rounded text-sm focus:outline-none"
        style={{ backgroundColor: COLORS.inputBg, color: COLORS.textInput }}
      />

      {/* Action Buttons */}
      <div className="flex justify-between space-x-2 mb-4">
        <button
          className="flex-1 p-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.textInput }}
        >
          Awesome
        </button>
        <button
          className="flex-1 p-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.textInput }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section heading */}
      <h3 className="text-base font-semibold" style={{ color: COLORS.textPrimary }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
