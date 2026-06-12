import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard component reproduces a "UI magician Agent" panel design.
 * It is a static smoke test component used to verify the design implementation.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: '#2a2a2a',
        color: '#d4d4d4',
        padding: '1rem',
        minWidth: '320px',
        maxWidth: '500px',
      }}
    >
      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>UI magician Agent</h2>
        <IoSettingsOutline style={{ fontSize: '1.5rem' }} />
      </div>

      {/* Subrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
        <HiChevronUp style={{ color: '#c47a3a', fontSize: '1rem' }} />
        <p style={{ color: '#c47a3a', fontSize: '0.875rem', margin: 0 }}>From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
        <HiChevronUp style={{ fontSize: '1rem' }} />
        <h3 style={{ fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>Add New Design</h3>
      </div>

      {/* Form Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        <FormField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>Recent Breakdowns</h4>
      </div>
    </div>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Shared FormField component for the card's inputs.
 * Uses inline styles to ensure design fidelity with custom Tailwind configs.
 */
const FormField: React.FC<FormFieldProps> = ({ id, label, placeholder }) => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
      <label htmlFor={id} style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
        {label}
      </label>
      <AiOutlineInfoCircle style={{ color: '#b0b0b0', fontSize: '1rem' }} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      readOnly
      style={{
        width: '100%',
        padding: '10px 12px',
        backgroundColor: '#383838',
        border: '1px solid #555',
        borderRadius: '6px',
        color: '#b0b0b0',
        fontSize: '0.875rem',
        boxSizing: 'border-box',
        outline: 'none',
      }}
    />
  </div>
);

interface ActionButtonProps {
  label: string;
}

/**
 * Shared ActionButton component for the consistent orange-brown buttons.
 */
const ActionButton: React.FC<ActionButtonProps> = ({ label }) => (
  <button
    style={{
      flex: 1,
      padding: '10px 0',
      backgroundColor: '#a0522d',
      color: '#f0d0b0',
      border: 'none',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
    }}
  >
    {label}
  </button>
);

