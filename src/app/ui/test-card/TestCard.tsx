
import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * Constants for the component's design system to ensure consistency
 * and make future adjustments easier.
 */
const COLORS = {
  BACKGROUND: '#2a2a2a',
  INPUT_BACKGROUND: '#2e2e2e',
  INPUT_BORDER: '#3a3a3a',
  INPUT_TEXT: '#737470',
  TEXT_PRIMARY: '#b5b5b5',
  TEXT_SECONDARY: '#8b9291',
  TEXT_LABEL: '#a4a4a3',
  HEADING_SECONDARY: '#b2b2b1',
  BUTTON_BG: '#b05a2a',
  BUTTON_TEXT: '#c8a898',
};

const FONT_SIZES = {
  LABEL: '11.5px',
  TEXT: '11.5px',
  HEADING: '13.5px',
};

/**
 * Reusable layout for input fields with labels and info icons.
 */
interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder }) => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <label
        htmlFor={id}
        className="text-xs font-semibold mr-1"
        style={{ color: COLORS.TEXT_LABEL, fontSize: FONT_SIZES.LABEL }}
      >
        {label}
      </label>
      <HiInformationCircle className="text-gray-500" style={{ fontSize: '14px' }} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded border focus:outline-none focus:ring-1"
      style={{
        backgroundColor: COLORS.INPUT_BACKGROUND,
        borderColor: COLORS.INPUT_BORDER,
        color: COLORS.INPUT_TEXT,
        fontSize: FONT_SIZES.TEXT,
      }}
    />
  </div>
);

const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-4"
      style={{ backgroundColor: COLORS.BACKGROUND, width: '254px' }}
    >
      {/* Header Row: Main title and settings */}
      <div className="flex justify-between items-center mb-4">
        <span
          className="font-semibold text-sm"
          style={{ color: COLORS.TEXT_PRIMARY, fontSize: FONT_SIZES.HEADING }}
        >
          UI magician Agent
        </span>
        <HiCog className="text-gray-400" style={{ fontSize: '20px' }} />
      </div>

      {/* Subtitle Row: Contextual information */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-gray-500 mr-1" style={{ fontSize: '16px' }} />
        <span
          className="text-xs font-semibold"
          style={{ color: COLORS.TEXT_SECONDARY, fontSize: FONT_SIZES.LABEL }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical Space: Intentional gap for visual breathing room */}
      <div className="my-6"></div>

      {/* Add New Design Section Header */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-gray-400 mr-1" style={{ fontSize: '16px' }} />
        <span
          className="font-semibold text-sm"
          style={{ color: COLORS.HEADING_SECONDARY, fontSize: FONT_SIZES.HEADING }}
        >
          Add New Design
        </span>
      </div>

      <InputField
        id="pat-input"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mb-2"></div>

      <InputField
        id="design-url-input"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons: Principal CTAs for the card */}
      <div className="flex justify-between gap-2 mb-6">
        <button
          className="flex-1 py-2 px-4 rounded-lg font-semibold text-xs"
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.BUTTON_TEXT,
            fontSize: FONT_SIZES.TEXT,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-4 rounded-lg font-semibold text-xs"
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.BUTTON_TEXT,
            fontSize: FONT_SIZES.TEXT,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div>
        <h3
          className="font-semibold text-sm"
          style={{ color: COLORS.TEXT_PRIMARY, fontSize: FONT_SIZES.HEADING }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
