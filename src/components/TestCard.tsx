import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component follows a specific theme for the "UI magician Agent" tool.
 * The colors and spacing are intentional to match the tool's design aesthetic.
 */
const THEME = {
  colors: {
    panelBg: '#272822',
    title: '#b5b5b5',
    subtitle: '#8b9291',
    section: '#b2b2b1',
    label: '#a4a4a3',
    borderLight: '#a5adad',
    borderDark: '#929291',
    buttonBg: '#843a17',
    buttonText: '#c8a898',
    footer: '#b0b0b0',
  },
  spacing: {
    padding: '20px',
    width: '256px',
  },
} as const;

export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: THEME.colors.panelBg,
        padding: THEME.spacing.padding,
        width: THEME.spacing.width,
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: THEME.colors.title, fontWeight: 600, fontSize: '14px' }}>
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <FiSettings style={{ color: THEME.colors.title, fontSize: '16px' }} />
        </button>
      </div>

      {/* Subtitle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
        <FiChevronUp size={10} style={{ color: THEME.colors.subtitle }} aria-hidden="true" />
        <span style={{ color: THEME.colors.subtitle, fontSize: '12px', fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: '32px' }} aria-hidden="true" />

      {/* Add New Design Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <FiChevronUp size={12} style={{ color: THEME.colors.section }} aria-hidden="true" />
        <span style={{ color: THEME.colors.section, fontWeight: 600, fontSize: '14px' }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
          <label
            htmlFor="pat-input"
            style={{ color: THEME.colors.label, fontSize: '12px', fontWeight: 600 }}
          >
            Personal Access Token
          </label>
          <FiInfo size={12} style={{ color: THEME.colors.label }} aria-hidden="true" />
        </div>
        <input
          id="pat-input"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor: THEME.colors.panelBg,
            border: `1px solid ${THEME.colors.borderLight}`,
            borderRadius: '4px',
            padding: '6px 8px',
            color: THEME.colors.label,
            fontSize: '12px',
            outline: 'none',
          }}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
          <label
            htmlFor="design-url-input"
            style={{ color: THEME.colors.label, fontSize: '12px', fontWeight: 600 }}
          >
            Design URL
          </label>
          <FiInfo size={12} style={{ color: THEME.colors.label }} aria-hidden="true" />
        </div>
        <input
          id="design-url-input"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor: THEME.colors.panelBg,
            border: `2px solid ${THEME.colors.borderDark}`,
            borderRadius: '4px',
            padding: '6px 8px',
            color: THEME.colors.label,
            fontSize: '12px',
            outline: 'none',
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '32px' }}>
        <button
          style={{
            backgroundColor: THEME.colors.buttonBg,
            color: THEME.colors.buttonText,
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '8px',
            padding: '8px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: THEME.colors.buttonBg,
            color: THEME.colors.buttonText,
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '8px',
            padding: '8px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span style={{ color: THEME.colors.footer, fontWeight: 600, fontSize: '16px' }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

