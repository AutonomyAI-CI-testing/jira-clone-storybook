import React from 'react';
import { RiSettings3Line, RiArrowUpSLine, RiInformationLine } from 'react-icons/ri';

/**
 * Design-specific colors extracted from Figma reference.
 * Using absolute hex values to ensure fidelity without modifying global theme.
 */
const COLORS = {
  PANEL_BG: '#2a2a2a',
  INPUT_BG: '#272822',
  INPUT_BORDER_TOKEN: '#a5adad',
  INPUT_BORDER_URL: '#929291',
  BUTTON_BG: '#843a17',
  TEXT_PRIMARY: '#b5b5b5',
  TEXT_MUTED: '#8b9291',
  TEXT_HEADING: '#b2b2b1',
  TEXT_LABEL: '#a4a4a3',
  TEXT_PLACEHOLDER_TOKEN: '#737470',
  TEXT_PLACEHOLDER_URL: '#71726e',
  TEXT_BUTTON: '#c8b0a4',
} as const;

/**
 * Shared input label component with info icon.
 */
const InputLabel = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
    <label
      htmlFor={htmlFor}
      style={{ color: COLORS.TEXT_LABEL, fontWeight: 600, fontSize: '0.9rem' }}
    >
      {children}
    </label>
    <RiInformationLine style={{ color: COLORS.TEXT_LABEL }} />
  </div>
);

/**
 * Primary action button for the card footer.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      backgroundColor: COLORS.BUTTON_BG,
      color: COLORS.TEXT_BUTTON,
      fontWeight: 600,
      borderRadius: '12px',
      padding: '12px 24px',
      flex: 1,
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.95rem',
    }}
  >
    {children}
  </button>
);

/**
 * TestCard: A self-contained component replicating the UI magician Agent panel.
 * Built for visual verification against Figma design.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.PANEL_BG,
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '380px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header Row: Agent Title and Settings */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: COLORS.TEXT_PRIMARY, fontWeight: 600, fontSize: '1.25rem', margin: 0 }}>
          UI magician Agent
        </h2>
        <RiSettings3Line style={{ color: COLORS.TEXT_PRIMARY, fontSize: '1.5rem' }} />
      </div>

      {/* Collapsible Row: Status/Description */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
        <RiArrowUpSLine style={{ color: COLORS.TEXT_MUTED }} />
        <span style={{ color: COLORS.TEXT_MUTED, fontSize: '0.875rem' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer between sections */}
      <div style={{ marginTop: '28px' }} />

      {/* Section: Add New Design */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <RiArrowUpSLine style={{ color: COLORS.TEXT_HEADING, fontSize: '1.25rem' }} />
        <h3 style={{ color: COLORS.TEXT_HEADING, fontWeight: 600, fontSize: '1.25rem', margin: 0 }}>
          Add New Design
        </h3>
      </div>

      {/* Form Area: Figma Design Credentials */}
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Personal Access Token Field */}
        <div>
          <InputLabel htmlFor="personalAccessToken">Personal Access Token</InputLabel>
          <input
            id="personalAccessToken"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              border: `1px solid ${COLORS.INPUT_BORDER_TOKEN}`,
              borderRadius: '4px',
              padding: '8px 12px',
              width: '100%',
              color: COLORS.TEXT_PLACEHOLDER_TOKEN,
              fontWeight: 600,
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
        </div>

        {/* Design URL Field */}
        <div>
          <InputLabel htmlFor="designURL">Design URL</InputLabel>
          <input
            id="designURL"
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={{
              backgroundColor: COLORS.INPUT_BG,
              border: `2px solid ${COLORS.INPUT_BORDER_URL}`,
              borderRadius: '4px',
              padding: '8px 12px',
              width: '100%',
              color: COLORS.TEXT_PLACEHOLDER_URL,
              fontWeight: 600,
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Button Row: Action Triggers */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer Section: Recent History */}
      <h3
        style={{
          marginTop: '32px',
          color: COLORS.TEXT_HEADING,
          fontWeight: 600,
          fontSize: '1.25rem',
        }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};
