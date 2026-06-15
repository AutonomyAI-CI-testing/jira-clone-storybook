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
        backgroundColor: '#1a1914',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '36px 28px 48px',
        minHeight: '100vh',
        boxSizing: 'border-box',
        fontFamily: 'Circular Std, sans-serif',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '28px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '500',
            color: '#e8e8e8',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          UI magician Agent
        </h2>
        <IoSettingsOutline
          style={{ color: '#a0a0a0', fontSize: '28px', flexShrink: 0, marginLeft: '12px', strokeWidth: '1px' }}
        />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '84px',
        }}
      >
        <HiChevronUp style={{ color: '#a0a0a0', fontSize: '22px', flexShrink: 0 }} />
        <p
          style={{
            color: '#a0a0a0',
            fontSize: '18px',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontWeight: '400',
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
          gap: '14px',
          marginBottom: '40px',
        }}
      >
        <HiChevronUp style={{ color: '#a0a0a0', fontSize: '26px', flexShrink: 0 }} />
        <h3 style={{ color: '#e8e8e8', fontSize: '24px', fontWeight: '500', margin: 0 }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: '32px' }}>
        <label
          htmlFor="personalAccessToken"
          style={{
            color: '#d0d0d0',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '14px',
            fontWeight: '400',
          }}
        >
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle style={{ color: '#888888', fontSize: '20px', flexShrink: 0 }} />
        </label>
        <input
          type="text"
          id="personalAccessToken"
          style={{
            width: '100%',
            padding: '18px 14px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid #585858',
            borderRadius: '4px',
            color: '#888888',
            fontSize: '18px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          value={personalAccessToken}
          onChange={(e) => setPersonalAccessToken(e.target.value)}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: '52px' }}>
        <label
          htmlFor="designUrl"
          style={{
            color: '#d0d0d0',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '14px',
            fontWeight: '400',
          }}
        >
          <span>Design URL</span>
          <AiOutlineInfoCircle style={{ color: '#888888', fontSize: '20px', flexShrink: 0 }} />
        </label>
        <input
          type="text"
          id="designUrl"
          style={{
            width: '100%',
            padding: '18px 14px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid #585858',
            borderRadius: '4px',
            color: '#888888',
            fontSize: '18px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
          placeholder="https://www.figma.com/file/:"
          value={designUrl}
          onChange={(e) => setDesignUrl(e.target.value)}
        />
      </div>

      {/* Two CTA buttons */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '100px' }}>
        <button
          style={{
            flex: 1,
            backgroundColor: '#8B3A1C',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '18px 20px',
            fontWeight: '500',
            fontSize: '20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: '#8B3A1C',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '18px 20px',
            fontWeight: '500',
            fontSize: '20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h3 style={{ color: '#e8e8e8', fontSize: '24px', fontWeight: '500', margin: 0 }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
