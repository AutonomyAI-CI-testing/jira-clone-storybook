
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * Design-specific color constants from Figma spec.
 * Used arbitrary Tailwind values to match the custom dark palette.
 */
const COLORS = {
  textSecondary: 'text-[#b5b5b5]',
  textMuted: 'text-[#8b9291]',
  textLabel: 'text-[#a4a4a3]',
  textPlaceholder: 'text-[#737470]',
  headerLabel: 'text-[#b2b2b1]',
  inputBg: 'bg-[#2a2a2a]',
  inputBorder: 'border-[#444444]',
  buttonPrimary: 'bg-[#a0522d]',
  buttonSecondary: 'bg-[#b5622d]',
  buttonText: 'text-[#8c8078]',
} as const;

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  placeholderColorClass: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder, placeholderColorClass }) => (
  <div className="mb-4">
    <label htmlFor={id} className={`flex items-center space-x-2 ${COLORS.textLabel} text-[11.5px] font-semibold mb-2`}>
      {label}
      <AiOutlineInfoCircle />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full p-2 ${COLORS.inputBg} border ${COLORS.inputBorder} rounded ${placeholderColorClass} text-[11.5px] font-semibold focus:outline-none`}
    />
  </div>
);

/**
 * TestCard component
 * A self-contained smoke test component visually approximating the "UI magician Agent" Figma design.
 * All values are hardcoded as per requirements for design-to-code verification.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-[#1c1c1c] text-white min-h-screen">
      {/* Header row: Primary title and settings affordance */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={`${COLORS.textSecondary} text-[13.5px] font-semibold`}>UI magician Agent</h2>
        <IoSettingsOutline className={`${COLORS.textSecondary} text-lg`} />
      </div>

      {/* Collapsed context section */}
      <div className="flex items-center space-x-2 mb-6">
        <FiChevronUp className={COLORS.textMuted} />
        <p className={`${COLORS.textMuted} text-[11.5px] font-semibold`}>From entire frame to a singl...</p>
      </div>

      {/* Spacer for visual rhythm matching the design */}
      <div className="h-6" aria-hidden="true" />

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <FiChevronUp className={COLORS.headerLabel} />
          <h3 className={`${COLORS.headerLabel} text-[13.5px] font-semibold`}>Add New Design</h3>
        </div>

        <InputField
          id="pat-input"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          placeholderColorClass={COLORS.textPlaceholder}
        />

        <InputField
          id="design-url-input"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          placeholderColorClass="text-[#71726e]" // Slightly different tone for URL placeholder in spec
        />

        {/* Action Buttons: Brownish-orange palette for design contrast */}
        <div className="flex space-x-4 mb-8">
          <button className={`flex-1 py-2 ${COLORS.buttonPrimary} ${COLORS.buttonText} text-[11.5px] font-semibold rounded-lg hover:opacity-90 transition-opacity`}>
            Awesome
          </button>
          <button className={`flex-1 py-2 ${COLORS.buttonSecondary} ${COLORS.buttonText} text-[11.5px] font-semibold rounded-lg hover:opacity-90 transition-opacity`}>
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Activity Footer */}
      <div>
        <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
