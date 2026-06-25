import React from 'react';
import { FiSettings, FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design Constants - matching Figma specs EXACTLY
const COLORS = {
  BACKGROUND: '#2a2a2a',
  TEXT_PRIMARY: '#b5b5b5',
  TEXT_MUTED: '#8b9291',
  TEXT_HIGHLIGHT: '#b2b2b1',
  TEXT_LABEL: '#a4a4a3',
  BUTTON_BG: '#b5541c',
  BORDER: '#444444',
  PLACEHOLDER: '#737470',
} as const;

/**
 * Reusable Form Field component to ensure consistent layout and styling
 */
const FormField: React.FC<{
  id: string;
  label: string;
  placeholder: string;
  extraLabelClass?: string;
}> = ({ id, label, placeholder, extraLabelClass = '' }) => (
  <div className="mb-4">
    <div className="flex items-center mb-1">
      <label
        htmlFor={id}
        className={`text-[${COLORS.TEXT_LABEL}] text-[11.5px] font-semibold mr-1 ${extraLabelClass}`}
      >
        {label}
      </label>
      <AiOutlineInfoCircle className={`text-[${COLORS.TEXT_LABEL}] text-sm`} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded-md text-[11.5px] focus:outline-none border border-transparent"
      style={{
        backgroundColor: COLORS.BACKGROUND,
        borderColor: COLORS.BORDER,
        color: COLORS.PLACEHOLDER,
      }}
    />
  </div>
);

/**
 * Smoke test component verifying Figma-to-component pipeline.
 * Visual accuracy is prioritized over interactivity.
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-4 text-white font-sans rounded-lg"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-[${COLORS.TEXT_PRIMARY}] text-[13.5px] font-semibold`}>
          UI magician Agent
        </h2>
        <FiSettings className={`text-[${COLORS.TEXT_PRIMARY}] text-lg`} />
      </div>

      {/* Description / Subtitle */}
      <div className="flex items-center mb-4">
        <FiChevronUp className={`text-[${COLORS.TEXT_MUTED}] text-lg mr-1`} />
        <p className={`text-[${COLORS.TEXT_MUTED}] text-[11.5px] font-semibold`}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer to match design proportions */}
      <div className="h-4" aria-hidden="true" />

      {/* Section: Add New Design */}
      <div className="flex items-center mb-4">
        <FiChevronUp className={`text-[${COLORS.TEXT_HIGHLIGHT}] text-lg mr-1`} />
        <h3 className={`text-[${COLORS.TEXT_HIGHLIGHT}] text-[13.5px] font-semibold`}>
          Add New Design
        </h3>
      </div>

      <FormField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        extraLabelClass="py-0.5"
      />

      {/* Primary Actions */}
      <div className="flex justify-between gap-2 mb-6">
        {['Awesome', 'Prepare'].map((label) => (
          <button
            key={label}
            className="flex-1 py-2 text-white text-[11.5px] font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.BUTTON_BG }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Footer / Recent List */}
      <div>
        <h3 className={`text-[#b0b0b0] text-[13.5px] font-semibold`}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
