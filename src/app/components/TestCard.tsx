import React from 'react';

// Colors matched to the Figma design specs
const COLORS = {
  background: '#2a2a2a',
  textPrimary: '#e5e5e5',
  textSecondary: '#9a9a9a',
  accentOrange: '#c1622a',
  mutedOrange: '#b07a55',
  inputBg: '#1a1a1a',
  inputBorder: '#555',
  inputPlaceholder: '#aaa',
};

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-5 rounded-lg shadow-lg"
      style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}
    >
      {/* Header row: Primary title and settings access */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h1>
        <span style={{ color: COLORS.textPrimary }}>
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row: Breadcrumb or status hint */}
      <div className="flex items-center mb-6" style={{ color: COLORS.mutedOrange }}>
        <ChevronUpIcon />
        <p className="ml-2 font-medium">From entire frame to a singl...</p>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center mb-4">
        <span style={{ color: COLORS.textPrimary }}>
          <ChevronUpIcon />
        </span>
        <h2 className="ml-2 text-lg font-bold" style={{ color: COLORS.textPrimary }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token field: Required for Figma API authentication */}
      <div className="mb-4">
        <label
          htmlFor="pat"
          className="flex items-center gap-2 mb-2 text-sm font-medium"
          style={{ color: COLORS.textPrimary }}
        >
          Personal Access Token
          <span style={{ color: COLORS.textSecondary }}>
            <InfoIcon />
          </span>
        </label>
        <input
          type="text"
          id="pat"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border outline-none"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputPlaceholder,
          }}
        />
      </div>

      {/* Design URL field: The specific Figma file to process */}
      <div className="mb-6">
        <label
          htmlFor="designUrl"
          className="flex items-center gap-2 mb-2 text-sm font-medium"
          style={{ color: COLORS.textPrimary }}
        >
          Design URL
          <span style={{ color: COLORS.textSecondary }}>
            <InfoIcon />
          </span>
        </label>
        <input
          type="text"
          id="designUrl"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border outline-none"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputPlaceholder,
          }}
        />
      </div>

      {/* Action buttons: Triggers for processing and confirmation */}
      <div className="flex gap-3 mb-6">
        <button
          className="px-5 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.accentOrange, color: '#fff' }}
        >
          Awesome
        </button>
        <button
          className="px-5 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.accentOrange, color: '#fff' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section: History of processed designs */}
      <div>
        <h2 className="text-lg font-bold" style={{ color: COLORS.textPrimary }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
