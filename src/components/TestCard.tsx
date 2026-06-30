import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

// Inline styles are used for colors because this file is outside the Tailwind content glob.
const COLORS = {
  background: '#2a2a2a',
  title: '#b5b5b5',
  subtitle: '#8b9291',
  sectionHeader: '#b2b2b1',
  labelText: '#a4a4a3',
  inputBackground: '#3a3a3a',
  inputBorder: '#3a3a3a',
  inputPlaceholder: '#737470',
  buttonBackground: '#7a4030',
  buttonText: '#ffffff',
};

interface FormFieldProps {
  label: string;
  infoId: string;
  inputId: string;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, infoId, inputId, placeholder }) => (
  <div>
    <label htmlFor={inputId} className="flex items-center space-x-1 text-sm mb-1" style={{ color: COLORS.labelText }}>
      <span>{label}</span>
      <FiInfo size={14} style={{ color: COLORS.labelText }} id={infoId} />
    </label>
    <input
      type="text"
      id={inputId}
      placeholder={placeholder}
      className="w-full p-2 rounded text-sm"
      style={{
        backgroundColor: COLORS.inputBackground,
        borderColor: COLORS.inputBorder,
        borderWidth: '1px',
        color: COLORS.inputPlaceholder,
      }}
    />
  </div>
);

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" style={{ backgroundColor: COLORS.background }} className="p-4 space-y-4 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex justify-between items-center text-white">
        <h2 className="text-xl font-semibold" style={{ color: COLORS.title }}>UI magician Agent</h2>
        <span aria-label="Settings">
          <FiSettings size={20} style={{ color: COLORS.title }} />
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <FiChevronUp size={16} style={{ color: COLORS.subtitle }} />
        <p className="text-sm" style={{ color: COLORS.subtitle }}>From entire frame to a singl...</p>
      </div>

      <div className="h-4"></div> {/* Spacer */}

      <div className="flex items-center space-x-2">
        <FiChevronUp size={16} style={{ color: COLORS.sectionHeader }} />
        <h3 className="text-base font-semibold" style={{ color: COLORS.sectionHeader }}>Add New Design</h3>
      </div>

      <FormField
        label="Personal Access Token"
        infoId="pat-info"
        inputId="pat-input"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <FormField
        label="Design URL"
        infoId="design-url-info"
        inputId="design-url-input"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="flex space-x-2 mt-4">
        <button
          className="flex-1 p-2 rounded-lg font-semibold"
          style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 p-2 rounded-lg font-semibold"
          style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      <div className="mt-4 pt-4 border-t" style={{ borderColor: COLORS.inputBorder }}>
        <h3 className="text-base font-semibold" style={{ color: COLORS.sectionHeader }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
}
