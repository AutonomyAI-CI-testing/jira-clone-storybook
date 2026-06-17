import React from 'react';
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard component for the UI Magician Agent.
 * Displays configuration fields for Personal Access Token and Design URL,
 * along with action buttons and a list of recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: '#1e1e1e',
        color: '#c9c9c9',
        padding: '2.5rem 2rem',
        maxWidth: '440px',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#e1e1e1', margin: 0 }}>UI magician Agent</h1>
        <HiOutlineCog style={{ color: '#a0a0a0', fontSize: '1.5rem', flexShrink: 0 }} />
      </div>

      {/* Subtitle row */}
      <div style={{ display: 'flex', alignItems: 'center', color: '#c4703a', fontSize: '0.9rem', marginBottom: '2.5rem', cursor: 'pointer' }}>
        <HiChevronUp style={{ marginRight: '0.5rem', fontSize: '1.1rem' }} aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={{ display: 'flex', alignItems: 'center', color: '#e1e1e1', fontWeight: 700, fontSize: '1.15rem', marginBottom: '1.5rem', cursor: 'pointer' }}>
        <HiChevronUp style={{ marginRight: '0.75rem', fontSize: '1.25rem' }} aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label
          htmlFor="pat"
          style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#c9c9c9', marginBottom: '0.5rem' }}
        >
          Personal Access Token
          <HiInformationCircle
            style={{ marginLeft: '0.4rem', color: '#a0a0a0', fontSize: '1rem' }}
            aria-label="Information about Personal Access Token"
          />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '4px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #4a4a4a',
            color: '#f0f0f0',
            fontSize: '0.9rem',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: '1.75rem' }}>
        <label
          htmlFor="designUrl"
          style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#c9c9c9', marginBottom: '0.5rem' }}
        >
          Design URL
          <HiInformationCircle
            style={{ marginLeft: '0.4rem', color: '#a0a0a0', fontSize: '1rem' }}
            aria-label="Information about Design URL"
          />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '4px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #4a4a4a',
            color: '#f0f0f0',
            fontSize: '0.9rem',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Action buttons row */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
        <button
          style={{
            flex: 1,
            padding: '0.75rem 1.25rem',
            backgroundColor: '#b85c2a',
            color: '#f0f0f0',
            fontWeight: 600,
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            padding: '0.75rem 1.25rem',
            backgroundColor: '#b85c2a',
            color: '#f0f0f0',
            fontWeight: 600,
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h2 style={{ color: '#e1e1e1', fontWeight: 700, fontSize: '1.25rem', margin: 0 }}>Recent Breakdowns</h2>
      </div>
    </div>
  );
};
