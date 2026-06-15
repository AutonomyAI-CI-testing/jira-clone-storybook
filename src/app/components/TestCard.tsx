import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { HiChevronUp } from 'react-icons/hi';

export const TestCard = (): JSX.Element => {
  const [personalAccessToken, setPersonalAccessToken] = useState('');
  const [designUrl, setDesignUrl] = useState('');

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '390px',
        backgroundColor: '#272220',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 24px 40px',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '14px',
        }}
      >
        <h2
          style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#e8e8e8',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          UI magician Agent
        </h2>
        <IoSettingsOutline
          style={{ color: '#a0a0a0', fontSize: '26px', flexShrink: 0, marginLeft: '12px' }}
        />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '40px',
        }}
      >
        <HiChevronUp style={{ color: '#a0a0a0', fontSize: '18px', flexShrink: 0 }} />
        <p
          style={{
            color: '#a0a0a0',
            fontSize: '15px',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '24px',
        }}
      >
        <HiChevronUp style={{ color: '#a0a0a0', fontSize: '22px', flexShrink: 0 }} />
        <h3 style={{ color: '#e8e8e8', fontSize: '22px', fontWeight: '700', margin: 0 }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: '18px' }}>
        <label
          htmlFor="personalAccessToken"
          style={{
            color: '#d0d0d0',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
          }}
        >
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle style={{ color: '#888888', fontSize: '18px', flexShrink: 0 }} />
        </label>
        <input
          type="text"
          id="personalAccessToken"
          style={{
            width: '100%',
            padding: '14px 12px',
            backgroundColor: 'transparent',
            border: '1px solid #585858',
            borderRadius: '4px',
            color: '#888888',
            fontSize: '15px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          value={personalAccessToken}
          onChange={(e) => setPersonalAccessToken(e.target.value)}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: '32px' }}>
        <label
          htmlFor="designUrl"
          style={{
            color: '#d0d0d0',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
          }}
        >
          <span>Design URL</span>
          <AiOutlineInfoCircle style={{ color: '#888888', fontSize: '18px', flexShrink: 0 }} />
        </label>
        <input
          type="text"
          id="designUrl"
          style={{
            width: '100%',
            padding: '14px 12px',
            backgroundColor: 'transparent',
            border: '1px solid #585858',
            borderRadius: '4px',
            color: '#888888',
            fontSize: '15px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
          placeholder="https://www.figma.com/file/:"
          value={designUrl}
          onChange={(e) => setDesignUrl(e.target.value)}
        />
      </div>

      {/* Two CTA buttons */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
        <button
          style={{
            flex: 1,
            backgroundColor: '#b5451b',
            color: '#ffffff',
            borderRadius: '10px',
            padding: '16px 20px',
            fontWeight: '600',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: '#b5451b',
            color: '#ffffff',
            borderRadius: '10px',
            padding: '16px 20px',
            fontWeight: '600',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h3 style={{ color: '#e8e8e8', fontSize: '22px', fontWeight: '700', margin: 0 }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
