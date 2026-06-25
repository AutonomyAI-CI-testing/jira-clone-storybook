import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

const C = {
  bg: '#2a2a2a',
  title: '#b5b5b5',
  subtitle: '#8b9291',
  section: '#c8c8c7',
  label: '#a4a4a3',
  inputBg: '#1e1e1e',
  inputBorder: '#4a4a4a',
  inputText: '#8a8a87',
  btnBg: '#8b4513',
  btnText: '#e0d5cc',
  footer: '#b0b0b0',
};

// Local helper for consistent button styling
const CardButton = ({ label }: { label: string }) => (
  <button
    style={{
      flex: 1,
      padding: '0.5rem',
      borderRadius: '0.375rem',
      backgroundColor: C.btnBg,
      color: C.btnText,
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
    }}
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: C.bg, color: C.title, padding: '1rem', width: '320px' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 style={{ color: C.title, fontWeight: 700, fontSize: '1.125rem', margin: 0 }}>
          UI magician Agent
        </h1>
        <FiSettings style={{ color: C.title, fontSize: '1.25rem' }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center mb-6" style={{ gap: '0.5rem' }}>
        <FiChevronUp style={{ color: C.subtitle }} />
        <p style={{ color: C.subtitle, fontSize: '0.875rem', margin: 0 }}>From entire frame to a singl...</p>
      </div>

      <div style={{ height: '1.5rem' }} />

      {/* Add New Design Section */}
      <div className="flex items-center mb-4" style={{ gap: '0.5rem' }}>
        <FiChevronUp style={{ color: C.section }} />
        <h2 style={{ color: C.section, fontWeight: 700, fontSize: '1rem', margin: 0 }}>Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="pat"
          style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: C.label, fontSize: '0.875rem', marginBottom: '0.5rem' }}
        >
          <span>Personal Access Token</span>
          <FiInfo style={{ color: C.label }} />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '0.25rem',
            backgroundColor: C.inputBg,
            border: `1px solid ${C.inputBorder}`,
            color: C.inputText,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Design URL Field */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label
          htmlFor="designUrl"
          style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: C.label, fontSize: '0.875rem', marginBottom: '0.5rem' }}
        >
          <span>Design URL</span>
          <FiInfo style={{ color: C.label }} />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '0.25rem',
            backgroundColor: C.inputBg,
            border: `1px solid ${C.inputBorder}`,
            color: C.inputText,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex" style={{ gap: '1rem', marginBottom: '2rem' }}>
        <CardButton label="Awesome" />
        <CardButton label="Prepare" />
      </div>

      {/* Footer */}
      <div>
        <h3 style={{ color: C.footer, fontWeight: 700, fontSize: '1rem', margin: 0 }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};
