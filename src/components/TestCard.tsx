import React from 'react';

/**
 * Design tokens from Figma spec
 * Using constants to ensure consistency across the component
 */
const COLORS = {
  BACKGROUND: '#272822',
  TEXT_PRIMARY: '#b5b5b5',
  TEXT_SECONDARY: '#8b9291',
  TEXT_MUTED: '#b2b2b1',
  TEXT_LABEL: '#a4a4a3',
  TEXT_LABEL_ALT: '#a3a3a2',
  TEXT_FOOTER: '#b0b0b0',
  TEXT_BUTTON: '#8c8078',
  BUTTON_BG: '#843a17',
  BORDER_PAT: '#a5adad',
  BORDER_URL: '#929291',
  PLACEHOLDER: '#737470',
} as const;

const FONT_SIZES = {
  HEADING: '13.5px',
  BODY: '11.5px',
} as const;

/**
 * Common style for form inputs
 */
const inputBaseStyle: React.CSSProperties = {
  backgroundColor: COLORS.BACKGROUND,
  fontSize: FONT_SIZES.BODY,
  fontWeight: 600,
  padding: '8px 12px',
};

/**
 * TestCard - A self-contained UI magician Agent panel.
 * Replicates the Figma design with pixel-approximate fidelity using Tailwind and inline styles.
 * Root element has id="testElem" for test targeting.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.BACKGROUND,
        width: '254px',
        height: '508px',
        fontFamily: 'Inter, sans-serif',
      }}
      className="p-4 rounded-lg shadow-lg flex flex-col gap-4"
    >
      {/* Header Row: Title and Gear Icon */}
      <div className="flex items-center justify-between">
        <h2 style={{ color: COLORS.TEXT_PRIMARY, fontSize: FONT_SIZES.HEADING, fontWeight: 600 }}>
          UI magician Agent
        </h2>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.TEXT_PRIMARY}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 6.2 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 6.2a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.09z" />
        </svg>
      </div>

      {/* Subtitle Row with Chevron */}
      <div className="flex items-center gap-1">
        <span style={{ color: COLORS.TEXT_SECONDARY, fontSize: FONT_SIZES.BODY }}>▲</span>
        <p style={{ color: COLORS.TEXT_SECONDARY, fontSize: FONT_SIZES.BODY, fontWeight: 600 }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center gap-2 mt-4">
        <span style={{ color: COLORS.TEXT_MUTED, fontSize: FONT_SIZES.HEADING }}>▲</span>
        <h3 style={{ color: COLORS.TEXT_MUTED, fontSize: FONT_SIZES.HEADING, fontWeight: 600 }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex flex-col gap-1 mt-4">
        <div className="flex items-center gap-2">
          <label htmlFor="pat" style={{ color: COLORS.TEXT_LABEL, fontSize: FONT_SIZES.BODY, fontWeight: 600 }}>
            Personal Access Token
          </label>
          <span style={{ color: COLORS.TEXT_LABEL, fontSize: FONT_SIZES.BODY }}>ⓘ</span>
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            ...inputBaseStyle,
            border: `1px solid ${COLORS.BORDER_PAT}`,
            color: COLORS.TEXT_LABEL,
          }}
          className="rounded-md outline-none"
        />
      </div>

      {/* Design URL Field - Slightly thicker border per design specs */}
      <div className="flex flex-col gap-1 mt-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="design-url"
            style={{ color: COLORS.TEXT_LABEL_ALT, fontSize: FONT_SIZES.BODY, fontWeight: 600 }}
          >
            Design URL
          </label>
          <span style={{ color: COLORS.TEXT_LABEL_ALT, fontSize: FONT_SIZES.BODY }}>ⓘ</span>
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            ...inputBaseStyle,
            border: `2px solid ${COLORS.BORDER_URL}`,
            color: COLORS.TEXT_LABEL_ALT,
          }}
          className="rounded-md outline-none"
        />
      </div>

      {/* Action Buttons Row */}
      <div className="flex gap-3 mt-4">
        <button
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.TEXT_BUTTON,
            fontSize: FONT_SIZES.BODY,
            fontWeight: 600,
            padding: '10px 20px',
            borderRadius: '4px',
            width: '85px',
            height: '37px',
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.TEXT_BUTTON,
            fontSize: FONT_SIZES.BODY,
            fontWeight: 600,
            padding: '10px 20px',
            borderRadius: '4px',
            width: '85px',
            height: '37px',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: Recent Breakdowns */}
      <div className="mt-auto pt-4">
        <h3 style={{ color: COLORS.TEXT_FOOTER, fontSize: FONT_SIZES.HEADING, fontWeight: 600 }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

