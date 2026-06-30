import React from 'react';

/**
 * Figma design color tokens used in the TestCard component.
 * These are extracted from the design spec to maintain visual consistency.
 */
const COLORS = {
  bg: '#2a2a2a',
  text: {
    primary: '#b5b5b5',
    secondary: '#8b9291',
    accent: '#b2b2b1',
    label: '#a4a4a3',
    placeholder: '#737470',
    placeholderAlt: '#71726e',
    button: '#8c8078',
    heading: '#b0b0b0',
  },
  border: '#555',
  buttonBg: '#b5541c',
} as const;

/**
 * TestCard component
 * 
 * A self-contained UI panel inspired by a Figma design.
 * Displays a header, form inputs for Figma credentials, and action buttons.
 * Used for Storybook visual testing and component reference.
 */
const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-5 font-sans flex flex-col gap-3 rounded-sm"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text.primary }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{`UI magician Agent`}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.text.secondary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1">
        <span className="text-xs font-semibold" style={{ color: COLORS.text.secondary }}>
          ▲
        </span>
        <span className="text-xs font-semibold" style={{ color: COLORS.text.secondary }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="my-2" aria-hidden="true" />

      {/* "Add New Design" section header */}
      <div className="flex items-center gap-1">
        <span className="text-xs font-semibold" style={{ color: COLORS.text.accent }}>
          ▲
        </span>
        <span className="text-sm font-semibold" style={{ color: COLORS.text.accent }}>
          Add New Design
        </span>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-3">
        {/* Personal Access Token Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <label htmlFor="pat-input" className="text-xs font-semibold" style={{ color: COLORS.text.label }}>
              Personal Access Token
            </label>
            <InfoIcon color={COLORS.text.label} />
          </div>
          <input
            id="pat-input"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border rounded text-xs px-2 py-1.5 outline-none placeholder:text-[#737470]"
            style={{ borderColor: COLORS.border }}
          />
        </div>

        {/* Design URL Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <label htmlFor="url-input" className="text-xs font-semibold" style={{ color: COLORS.text.label }}>
              Design URL
            </label>
            <InfoIcon color={COLORS.text.label} />
          </div>
          <input
            id="url-input"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border rounded text-xs px-2 py-1.5 outline-none placeholder:text-[#71726e]"
            style={{ borderColor: COLORS.border }}
          />
        </div>
      </div>

      {/* Buttons Row */}
      <div className="flex gap-2 mt-4">
        <button
          type="button"
          className="flex-1 text-xs font-semibold rounded-lg py-2 px-3 cursor-pointer border-none hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.text.button }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 text-xs font-semibold rounded-lg py-2 px-3 cursor-pointer border-none hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.text.button }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h2 className="text-sm font-semibold mt-4" style={{ color: COLORS.text.heading }}>
        Recent Breakdowns
      </h2>
    </div>
  );
};

/**
 * Reusable Info Icon SVG component
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default TestCard;

