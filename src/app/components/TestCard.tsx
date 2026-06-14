import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';

const COLORS = {
  bg: '#282420',
  textPrimary: '#d8d0c8',
  textSubtitle: '#c4956a',
  textLabel: '#c0b8b0',
  textPlaceholder: '#6b6360',
  borderInput: '#5a4a3a',
  btnBg: '#a03e17',
  iconMuted: '#8a8480',
};

export const TestCard = () => {
  return (
    <div
      style={{
        backgroundColor: COLORS.bg,
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto',
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '660px',
        borderRadius: '12px',
      }}
    >
      {/* Header Row */}
      <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h2 style={{ color: COLORS.textPrimary, fontWeight: 700, fontSize: '22px', lineHeight: 1.2, margin: 0 }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline size={24} style={{ color: COLORS.iconMuted, marginTop: '2px', flexShrink: 0, marginLeft: '12px' }} />
      </header>

      {/* Subtitle Row */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
        <MdKeyboardArrowUp size={16} style={{ color: COLORS.textSubtitle, flexShrink: 0 }} />
        <p style={{ color: COLORS.textSubtitle, fontSize: '14px', margin: 0, marginLeft: '4px' }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer */}
      <div style={{ height: '100px' }} />

      {/* Add New Design Section */}
      <section>
        {/* Section heading */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <MdKeyboardArrowUp size={20} style={{ color: COLORS.textPrimary, flexShrink: 0 }} />
          <h3 style={{ color: COLORS.textPrimary, fontWeight: 700, fontSize: '22px', margin: 0, marginLeft: '8px' }}>
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <label
              htmlFor="personalAccessToken"
              style={{ color: COLORS.textLabel, fontSize: '14px', fontWeight: 400, cursor: 'pointer' }}
            >
              Personal Access Token
            </label>
            <AiOutlineInfoCircle size={15} style={{ color: COLORS.iconMuted, flexShrink: 0 }} />
          </div>
          <input
            type="text"
            id="personalAccessToken"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{
              background: 'transparent',
              border: `1px solid ${COLORS.borderInput}`,
              borderRadius: '4px',
              padding: '10px 12px',
              width: '100%',
              fontSize: '14px',
              color: COLORS.textLabel,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Design URL */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <label
              htmlFor="designURL"
              style={{ color: COLORS.textLabel, fontSize: '14px', fontWeight: 400, cursor: 'pointer' }}
            >
              Design URL
            </label>
            <AiOutlineInfoCircle size={15} style={{ color: COLORS.iconMuted, flexShrink: 0 }} />
          </div>
          <input
            type="text"
            id="designURL"
            placeholder="https://www.figma.com/file/:"
            style={{
              background: 'transparent',
              border: `1px solid ${COLORS.borderInput}`,
              borderRadius: '4px',
              padding: '10px 12px',
              width: '100%',
              fontSize: '14px',
              color: COLORS.textLabel,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
          <button
            style={{
              flex: 1,
              backgroundColor: COLORS.btnBg,
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '16px',
              border: 'none',
              borderRadius: '10px',
              padding: '12px 0',
              cursor: 'pointer',
            }}
          >
            Awesome
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: COLORS.btnBg,
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '16px',
              border: 'none',
              borderRadius: '10px',
              padding: '12px 0',
              cursor: 'pointer',
            }}
          >
            Prepare
          </button>
        </div>
      </section>

      {/* Recent Breakdowns */}
      <section>
        <h3 style={{ color: COLORS.textPrimary, fontWeight: 700, fontSize: '22px', margin: 0 }}>
          Recent Breakdowns
        </h3>
      </section>
    </div>
  );
};

export default TestCard;
