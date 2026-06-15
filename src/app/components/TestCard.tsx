import React from 'react';

/**
 * Icons extracted as local components for clarity.
 * These match the visual design specifications for the TestCard.
 */
const ChevronUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const GearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21" />
  </svg>
);

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);


/**
 * TestCard component replicates the "UI magician Agent" panel.
 * Hardcoded component for visual demo and regression testing.
 *
 * NOTE: Inline styles are used here instead of Tailwind classes because the project's
 * Tailwind configuration is highly customized (overriding base colors), which prevents
 * standard arbitrary-value background/text classes from rendering correctly.
 */

const colors = {
  bg: '#2a2a2a',
  headerText: '#ffffff',
  text: '#e0e0e0',
  textMuted: '#c0823f',
  inputBg: '#1e1e1e',
  inputBorder: '#444444',
  placeholderText: '#666666',
  btnBg: '#b5522a',
};

export const TestCard = () => (
  <div
    id="testElem"
    style={{
      backgroundColor: colors.bg,
      color: colors.text,
      padding: '20px',
      maxWidth: '380px',
      width: '100%',
      fontFamily: 'sans-serif',
    }}
  >
    {/* 1. Header row */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
      <span style={{ fontWeight: 700, fontSize: '18px', color: colors.headerText }}>UI magician Agent</span>
      <GearIcon />
    </div>

    {/* 2. Subtitle row */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: colors.textMuted, fontSize: '14px', marginBottom: '24px' }}>
      <ChevronUpIcon />
      <span>From entire frame to a singl...</span>
    </div>

    {/* 3. Section header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
      <ChevronUpIcon />
      <span style={{ fontWeight: 700, fontSize: '16px', color: colors.headerText }}>Add New Design</span>
    </div>

    {/* 4. Personal Access Token field */}
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', marginBottom: '6px', color: colors.text }}>
        Personal Access Token <InfoIcon />
      </label>
      <input
        style={{
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: colors.inputBg,
          border: `1px solid ${colors.inputBorder}`,
          borderRadius: '4px',
          padding: '8px 12px',
          fontSize: '14px',
          color: colors.placeholderText,
          outline: 'none',
        }}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />
    </div>

    {/* 5. Design URL field */}
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', marginBottom: '6px', color: colors.text }}>
        Design URL <InfoIcon />
      </label>
      <input
        style={{
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: colors.inputBg,
          border: `1px solid ${colors.inputBorder}`,
          borderRadius: '4px',
          padding: '8px 12px',
          fontSize: '14px',
          color: colors.placeholderText,
          outline: 'none',
        }}
        placeholder="https://www.figma.com/file/:"
        readOnly
      />
    </div>

    {/* 6. Buttons */}
    <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
      <button
        style={{
          flex: 1,
          backgroundColor: colors.btnBg,
          color: '#ffffff',
          borderRadius: '8px',
          padding: '10px 0',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
        }}
      >
        Awesome
      </button>
      <button
        style={{
          flex: 1,
          backgroundColor: colors.btnBg,
          color: '#ffffff',
          borderRadius: '8px',
          padding: '10px 0',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
        }}
      >
        Prepare
      </button>
    </div>

    {/* 7. Footer */}
    <div style={{ fontWeight: 700, fontSize: '16px', color: colors.headerText }}>Recent Breakdowns</div>
  </div>
);

