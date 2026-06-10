
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

const COLORS = {
  bg: '#272822',
  textMain: '#b5b5b5',
  textSecondary: '#8b9291',
  textTertiary: '#b2b2b1',
  textLabels: '#a4a4a3',
  textLabelsUrl: '#a3a3a2',
  textPlaceholder: '#737470',
  textPlaceholderUrl: '#71726e',
  textBtn: '#c8b8b0',
  textRecent: '#b0b0b0',
  borderInput: '#a5adad',
  borderInputUrl: '#929291',
  btnBg: '#843a17',
  iconSettings: '#9ca3af',
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.bg,
        padding: '16px',
        borderRadius: '8px',
        width: '320px',
        color: COLORS.textMain,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}
      >
        <h2
          style={{
            fontSize: '13.5px',
            fontWeight: '600',
            color: COLORS.textMain,
          }}
        >
          UI magician Agent
        </h2>
        <IoSettingsOutline color={COLORS.iconSettings} size="18px" />
      </div>

      {/* Subtitle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginBottom: '20px',
        }}
      >
        <HiChevronUp color={COLORS.textSecondary} size="18px" />
        <p style={{ color: COLORS.textSecondary, fontSize: '14px' }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '12px',
          }}
        >
          <HiChevronUp color={COLORS.textTertiary} size="18px" />
          <h3
            style={{
              color: COLORS.textTertiary,
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Input */}
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginBottom: '6px',
            }}
          >
            <label
              htmlFor="pat"
              style={{
                color: COLORS.textLabels,
                fontSize: '11.5px',
                fontWeight: '600',
              }}
            >
              Personal Access Token
            </label>
            <HiInformationCircle color={COLORS.textLabels} size="14px" />
          </div>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
            style={{
              backgroundColor: COLORS.bg,
              border: `1px solid ${COLORS.borderInput}`,
              color: COLORS.textPlaceholder,
              padding: '8px',
              borderRadius: '4px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Design URL Input */}
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginBottom: '6px',
            }}
          >
            <label
              htmlFor="designUrl"
              style={{
                color: COLORS.textLabelsUrl,
                fontSize: '11.5px',
                fontWeight: '600',
              }}
            >
              Design URL
            </label>
            <HiInformationCircle color={COLORS.textLabelsUrl} size="14px" />
          </div>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/"
            style={{
              backgroundColor: COLORS.bg,
              border: `2px solid ${COLORS.borderInputUrl}`,
              color: COLORS.textPlaceholderUrl,
              padding: '8px',
              borderRadius: '4px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          <button
            style={{
              backgroundColor: COLORS.btnBg,
              color: COLORS.textBtn,
              fontWeight: '600',
              fontSize: '14px',
              padding: '8px 0',
              borderRadius: '6px',
              flex: '1',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: COLORS.btnBg,
              color: COLORS.textBtn,
              fontWeight: '600',
              fontSize: '14px',
              padding: '8px 0',
              borderRadius: '6px',
              flex: '1',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h3
        style={{
          color: COLORS.textRecent,
          fontSize: '13.5px',
          fontWeight: '600',
          marginTop: '20px',
        }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;

