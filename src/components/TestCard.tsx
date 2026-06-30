import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaChevronUp } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard - A self-contained smoke-test component approximating a Figma design.
 * 
 * Note: Uses inline styles for all visual properties (colors, dimensions) 
 * because this component lives outside the Tailwind 'content' scanning range
 * as configured in this project's tailwind.config.js.
 */
const TestCard: React.FC = () => {
  // Theme Constants (source: Figma design #2-2)
  const COLORS = {
    bg: '#1a1a1a',
    headerText: '#b5b5b5',
    sectionText: '#b2b2b1',
    mutedText: '#8b9291',
    labelText: '#a4a4a3',
    placeholderText: '#737470',
    buttonBg: '#8B4513', // Orange-brown approximation
    buttonText: '#8c8078',
    borderColor: '#737470',
    footerText: '#b0b0b0',
  };

  const FONT_SIZES = {
    heading: '13.5px',
    body: '11.5px',
  };

  // Shared Styles
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: COLORS.bg,
    border: `1px solid ${COLORS.borderColor}`,
    borderRadius: '0.25rem',
    color: COLORS.headerText,
    fontSize: FONT_SIZES.body,
    outline: 'none',
  };

  const buttonStyle: React.CSSProperties = {
    flex: 1,
    padding: '0.5rem 1rem',
    backgroundColor: COLORS.buttonBg,
    color: COLORS.buttonText,
    borderRadius: '0.25rem',
    fontSize: FONT_SIZES.body,
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  };

  const sectionHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const labelRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  };

  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.bg,
        padding: '1rem', // Match original baseline
        borderRadius: '0.5rem',
        width: '350px',
        color: COLORS.headerText,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ color: COLORS.headerText, fontSize: FONT_SIZES.heading, fontWeight: '600', margin: 0 }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline style={{ color: COLORS.headerText, fontSize: '1.2rem' }} />
      </div>

      {/* Subtitle Row - "From entire frame to a single element" snippet */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <FaChevronUp style={{ color: COLORS.mutedText, fontSize: '0.8rem', marginRight: '0.5rem' }} />
        <p style={{ color: COLORS.mutedText, fontSize: FONT_SIZES.body, margin: 0 }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div style={sectionHeaderStyle}>
        <FaChevronUp style={{ color: COLORS.sectionText, fontSize: '0.8rem', marginRight: '0.5rem' }} />
        <h3 style={{ color: COLORS.sectionText, fontSize: FONT_SIZES.heading, fontWeight: '600', margin: 0 }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Input */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={labelRowStyle}>
          <label htmlFor="pat" style={{ color: COLORS.labelText, fontSize: FONT_SIZES.body, marginRight: '0.5rem' }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.labelText, fontSize: '1rem' }} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={inputStyle}
          readOnly // Design is static/hardcoded per spec
        />
      </div>

      {/* Design URL Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={labelRowStyle}>
          <label htmlFor="design-url" style={{ color: COLORS.labelText, fontSize: FONT_SIZES.body, marginRight: '0.5rem' }}>
            Design URL
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.labelText, fontSize: '1rem' }} />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={inputStyle}
          readOnly // Design is static/hardcoded per spec
        />
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        <button style={buttonStyle} type="button">Awesome</button>
        <button style={buttonStyle} type="button">Prepare</button>
      </div>

      {/* Footer Section List Preview */}
      <h3 style={{ color: COLORS.footerText, fontSize: FONT_SIZES.heading, fontWeight: '600', margin: 0 }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
