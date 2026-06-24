import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Design Constants
 * Colors and dimensions are derived from Figma design specs at
 * /home/user/.autonomyai/integrations/figma/2-2/style.md
 */
const COLORS = {
  CARD_BG: '#272822',
  TEXT_PRIMARY: '#b5b5b5',
  TEXT_MUTED: '#8b9291',
  TEXT_HEADING: '#b2b2b1',
  TEXT_LABEL: '#a4a4a3',
  TEXT_LABEL_URL: '#a3a3a2',
  TEXT_PLACEHOLDER_PAT: '#737470',
  TEXT_PLACEHOLDER_URL: '#71726e',
  TEXT_BUTTON: '#c8b8b0',
  TEXT_RECENT: '#b0b0b0',
  BORDER_PAT: '#a5adad',
  BORDER_URL: '#929291',
  BUTTON_BG: '#843a17',
} as const;

/**
 * TestCard Component
 * A static, self-contained UI panel reproducing the "UI magician Agent" Figma design.
 * Uses inline styles to match exact pixel and color requirements from the spec.
 * Root element has id="testElem" for automated testing.
 */
export const TestCard: React.FC = () => {
  // Shared text style for section headers
  const headingStyle: React.CSSProperties = {
    color: COLORS.TEXT_HEADING,
    fontSize: '13.5px',
    fontWeight: 600,
    margin: 0,
  };

  // Shared label style for form fields
  const labelStyle: React.CSSProperties = {
    fontSize: '11.5px',
    fontWeight: 600,
  };

  // Shared input style base
  const inputBaseStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px',
    backgroundColor: COLORS.CARD_BG,
    fontSize: '11.5px',
    fontWeight: 600,
    outline: 'none',
    boxSizing: 'border-box',
  };

  // Shared button style
  const buttonStyle: React.CSSProperties = {
    backgroundColor: COLORS.BUTTON_BG,
    color: COLORS.TEXT_BUTTON,
    fontSize: '11.5px',
    fontWeight: 600,
    borderRadius: '6px',
    padding: '8px 24px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div
      id="testElem"
      style={{
        width: '254px',
        padding: '20px',
        backgroundColor: COLORS.CARD_BG,
        color: COLORS.TEXT_PRIMARY,
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
      }}
    >
      {/* Header: Title and Settings icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ ...headingStyle, color: COLORS.TEXT_PRIMARY }}>UI magician Agent</h2>
        <FiSettings style={{ color: COLORS.TEXT_PRIMARY, fontSize: '16px' }} />
      </div>

      {/* Collapsed row: Muted descriptive text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
        <FiChevronUp style={{ color: COLORS.TEXT_MUTED, fontSize: '13px', flexShrink: 0 }} />
        <span style={{ color: COLORS.TEXT_MUTED, fontSize: '11.5px', fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header: Add New Design */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '24px' }}>
        <FiChevronUp style={{ color: COLORS.TEXT_HEADING, fontSize: '13.5px', flexShrink: 0 }} />
        <h3 style={headingStyle}>Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginTop: '16px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
          }}
        >
          <label htmlFor="pat-input" style={{ ...labelStyle, color: COLORS.TEXT_LABEL }}>
            Personal Access Token
          </label>
          <FiInfo style={{ color: COLORS.TEXT_LABEL, fontSize: '12px' }} />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            ...inputBaseStyle,
            border: `1px solid ${COLORS.BORDER_PAT}`,
            color: COLORS.TEXT_PLACEHOLDER_PAT,
          }}
        />
      </div>

      {/* Design URL field: Thicker 2px border per Figma spec */}
      <div style={{ marginTop: '16px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
          }}
        >
          <label htmlFor="url-input" style={{ ...labelStyle, color: COLORS.TEXT_LABEL_URL }}>
            Design URL
          </label>
          <FiInfo style={{ color: COLORS.TEXT_LABEL_URL, fontSize: '12px' }} />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            ...inputBaseStyle,
            border: `2px solid ${COLORS.BORDER_URL}`,
            color: COLORS.TEXT_PLACEHOLDER_URL,
          }}
        />
      </div>

      {/* Primary Actions: Awesome and Prepare buttons */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px', justifyContent: 'center' }}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* Footer Heading: Recent Breakdowns */}
      <h4
        style={{
          ...headingStyle,
          marginTop: '32px',
          color: COLORS.TEXT_RECENT,
          marginBottom: 0,
        }}
      >
        Recent Breakdowns
      </h4>
    </div>
  );
};
