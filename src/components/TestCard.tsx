
import React from 'react';

/**
 * TestCard component
 * 
 * A self-contained smoke test component that visually approximates a "UI magician Agent" panel.
 * Uses inline styles for specific Figma colors to ensure they render correctly even if 
 * Tailwind's theme is not fully configured for these specific dark mode values.
 */

// Design Constants
const COLORS = {
  panelBg: '#272822',
  titleText: '#b5b5b5',
  sectionTitle: '#b2b2b1',
  subText: '#8b9291',
  labelText: '#a4a4a3',
  inputPlaceholder: '#737470',
  buttonBg: '#843a17',
  buttonText: '#8c8078',
  inputBorderPat: '#a5adad',
  inputBorderUrl: '#929291',
};

const FONT_SETTINGS = {
  base: { fontWeight: '600', fontFamily: 'sans-serif' },
  title: { fontSize: '14px' },
  label: { fontSize: '12px' },
};

// Reusable Icon Components
const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const TestCard = () => {
  return (
    <div 
      id="testElem" 
      style={{ ...FONT_SETTINGS.base, backgroundColor: COLORS.panelBg }} 
      className="p-5 w-[254px]"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 style={{ ...FONT_SETTINGS.title, color: COLORS.titleText }}>UI magician Agent</h2>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.titleText} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.05S20 17 21 17c.5 1 1 2 1 3s-.5 2-1 3c-1.2.6-2 .7-3.2.7A2 2 0 0 0 15 22h-6A2 2 0 0 0 6 20a1.65 1.65 0 0 0 .3-1.05C6 17 5 16 3 16c-1-1-1-2-1-3s1-2 1-3c.5-1 1-2 2-3a2 2 0 0 1 .3-1.05C6 7 7 6 9 6h6a2 2 0 0 1 2-2c1-1 2-1 3-1s2 1 3 1c.5 1 1 2 1 3c-1.2.6-2 .7-3.2.7A2 2 0 0 0 15 22h-6A2 2 0 0 0 6 20c.5-1 1-2 1-3a1.65 1.65 0 0 0-.3-1.05z" />
        </svg>
      </div>

      {/* Collapsible Label */}
      <div className="flex items-center mb-4 text-[12px]">
        <ChevronUpIcon color={COLORS.subText} />
        <span style={{ color: COLORS.subText }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4 mt-6">
        <ChevronUpIcon color={COLORS.sectionTitle} />
        <h3 style={{ ...FONT_SETTINGS.title, color: COLORS.sectionTitle }}>Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="pat" className="flex items-center mb-1">
          <span style={{ ...FONT_SETTINGS.label, color: COLORS.labelText }}>Personal Access Token</span>
          <InfoIcon color={COLORS.labelText} />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            ...FONT_SETTINGS.label,
            backgroundColor: COLORS.panelBg,
            color: COLORS.inputPlaceholder,
            border: `1px solid ${COLORS.inputBorderPat}`,
          }}
          className="w-full p-2 rounded outline-none"
          readOnly // Explicitly marking as readOnly for this smoke test display
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="design-url" className="flex items-center mb-1">
          <span style={{ ...FONT_SETTINGS.label, color: COLORS.labelText }}>Design URL</span>
          <InfoIcon color={COLORS.labelText} />
        </label>
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          style={{
            ...FONT_SETTINGS.label,
            backgroundColor: COLORS.panelBg,
            color: COLORS.inputPlaceholder,
            border: `2px solid ${COLORS.inputBorderUrl}`,
          }}
          className="w-full p-2 rounded outline-none"
          readOnly // Explicitly marking as readOnly for this smoke test display
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-2 mb-6">
        <button
          style={{
            ...FONT_SETTINGS.label,
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
          className="w-1/2 p-2 rounded-md transition-opacity hover:opacity-90"
        >
          Awesome
        </button>
        <button
          style={{
            ...FONT_SETTINGS.label,
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
          className="w-1/2 p-2 rounded-md transition-opacity hover:opacity-90"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Header */}
      <div>
        <h3 style={{ ...FONT_SETTINGS.title, color: COLORS.sectionTitle }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;

