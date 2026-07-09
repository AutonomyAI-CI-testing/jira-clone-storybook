import React from 'react';

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: '#2a2a2a', minHeight: '100vh', width: '100%', padding: '20px', fontFamily: 'sans-serif' }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: '#e8e8e8', fontSize: '20px', fontWeight: 'bold' }}>
          UI magician Agent
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '24px', width: '24px', color: '#e8e8e8' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#e8e8e8"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Chevron + muted subtitle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '16px', width: '16px' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#a0652a"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span style={{ color: '#a0652a', fontSize: '14px' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '20px', width: '20px' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#cccccc"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span style={{ color: '#cccccc', fontSize: '20px', fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ color: '#cccccc', fontSize: '14px', fontWeight: 500 }}>
            Personal Access Token
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '16px', width: '16px' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#888888"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: '100%',
            backgroundColor: '#363636',
            border: '1px solid #555555',
            borderRadius: '4px',
            color: '#888888',
            fontSize: '14px',
            padding: '12px',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ color: '#cccccc', fontSize: '14px', fontWeight: 500 }}>Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '16px', width: '16px' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#888888"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: '100%',
            backgroundColor: '#363636',
            border: '1px solid #555555',
            borderRadius: '4px',
            color: '#888888',
            fontSize: '14px',
            padding: '12px',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
        <button
          style={{
            flex: 1,
            backgroundColor: '#a0522d',
            color: 'white',
            fontWeight: 600,
            padding: '16px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: '#a0522d',
            color: 'white',
            fontWeight: 600,
            padding: '16px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span style={{ color: '#cccccc', fontSize: '20px', fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
