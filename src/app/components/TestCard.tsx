
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const COLORS = {
  background: '#2a2a2a',
  rust: '#b05a2f',
  mutedOrange: '#c07040',
};

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * A reusable form field for the TestCard.
 * Encapsulates the label with info icon and standard input styling.
 */
const FormField: React.FC<FormFieldProps> = ({ id, label, placeholder }) => (
  <div className="mb-4 last:mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
      {label} <AiOutlineInfoCircle className="inline-block ml-1" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:border-blue-500"
      style={{ backgroundColor: COLORS.background }}
    />
  </div>
);

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-white min-h-screen" style={{ backgroundColor: COLORS.background, color: '#ffffff' }}>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-xl" />
      </div>

      {/* Subtitle row with muted orange text to match Figma design */}
      <div className="flex items-center text-[#c07040] mb-6" style={{ color: COLORS.mutedOrange }}>
        <FiChevronUp className="mr-2" />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="flex items-center mb-4">
        <FiChevronUp className="text-lg mr-2" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

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

      {/* Action buttons with rust/orange background */}
      <div className="flex justify-start space-x-3 mb-6">
        <button className="px-6 py-2 bg-[#b05a2f] rounded-lg text-white font-semibold" style={{ backgroundColor: COLORS.rust }}>
          Awesome
        </button>
        <button className="px-6 py-2 bg-[#b05a2f] rounded-lg text-white font-semibold" style={{ backgroundColor: COLORS.rust }}>
          Prepare
        </button>
      </div>

      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
