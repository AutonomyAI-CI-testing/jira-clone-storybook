import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

// Inline styles are used for all color values because src/components/ is outside
// the Tailwind JIT content glob (which only scans src/app/**/*).
const COLORS = {
  bg: '#2a2a2a',
  inputBg: '#1e1e1e',
  inputBorder: '#3a3a3a',
  headerText: '#b5b5b5',
  subtitleText: '#8b9291',
  labelText: '#a4a4a3',
  sectionText: '#b2b2b1',
  buttonBg: '#7a4030',
  placeholderText: '#737470',
} as const;

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, placeholder }) => (
  <div style={{ marginBottom: '20px' }}>
    <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
      <label htmlFor={id} style={{ color: COLORS.labelText, fontSize: '16px' }}>
        {label}
      </label>
      <FiInfo size={18} style={{ color: COLORS.labelText }} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="testcard-input"
      style={{
        width: '100%',
        padding: '16px 14px',
        borderRadius: '6px',
        border: `1.5px solid ${COLORS.inputBorder}`,
        backgroundColor: COLORS.inputBg,
        color: COLORS.headerText,
        fontSize: '16px',
        boxSizing: 'border-box',
        outline: 'none',
      }}
    />
  </div>
);

const BUTTONS = ['Awesome', 'Prepare'] as const;

const TestCard = (): JSX.Element => (
  <>
    {/* Scoped placeholder style — cannot use Tailwind arbitrary values here */}
    <style>{`.testcard-input::placeholder { color: ${COLORS.placeholderText}; }`}</style>

    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.bg,
        padding: '24px 20px',
        width: '100%',
        maxWidth: '508px',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
        <h1 style={{ color: COLORS.headerText, fontSize: '22px', fontWeight: 600, margin: 0 }}>
          UI magician Agent
        </h1>
        <FiSettings size={26} style={{ color: COLORS.headerText }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2" style={{ marginBottom: '40px' }}>
        <FiChevronUp size={22} style={{ color: COLORS.subtitleText }} />
        <p style={{ color: COLORS.subtitleText, fontSize: '16px', margin: 0 }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2" style={{ marginBottom: '20px' }}>
        <FiChevronUp size={22} style={{ color: COLORS.sectionText }} />
        <h2 style={{ color: COLORS.sectionText, fontSize: '18px', fontWeight: 600, margin: 0 }}>
          Add New Design
        </h2>
      </div>

      {/* Form fields */}
      <FormField
        id="pat-input"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="url-input"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action buttons */}
      <div className="flex gap-4" style={{ marginBottom: '40px' }}>
        {BUTTONS.map((label) => (
          <button
            key={label}
            type="button"
            style={{
              flex: 1,
              padding: '14px 0',
              borderRadius: '10px',
              fontSize: '17px',
              fontWeight: 600,
              color: '#fff',
              backgroundColor: COLORS.buttonBg,
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.15s',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <h2 style={{ color: COLORS.sectionText, fontSize: '18px', fontWeight: 600, margin: 0 }}>
        Recent Breakdowns
      </h2>
    </div>
  </>
);

export default TestCard;
