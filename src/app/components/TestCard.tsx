
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiChevronUp } from 'react-icons/fi';

/**
 * A specialized input field for the TestCard with an optional info icon.
 * Preserves the exact dark-themed styling and border widths from the original design.
 */
interface FormFieldProps {
  label: string;
  id: string;
  placeholder: string;
  borderWidth?: 'border' | 'border-2';
}

const FormField = ({ label, id, placeholder, borderWidth = 'border' }: FormFieldProps) => (
  <div className="mb-4">
    <div className="flex items-center gap-2 mb-1">
      <label htmlFor={id} className="text-[#a4a4a3] text-xs font-semibold">
        {label}
      </label>
      <AiOutlineInfoCircle className="text-[#a4a4a3] text-xs" aria-hidden="true" />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full p-2 bg-[#1e1e1b] ${borderWidth} border-[#a5adad] text-[#737470] placeholder:text-[#737470] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#843a17]`}
    />
  </div>
);

/**
 * Action button used in the TestCard.
 * Uses the specific burnt-orange (#843a17) brand color requested by the user.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="flex-1 bg-[#843a17] text-[#c4b8b0] rounded px-6 py-2 font-semibold text-xs text-center hover:opacity-90 transition-opacity">
    {children}
  </button>
);

/**
 * TestCard component based on the "UI magician Agent" design.
 * Features a compact, dark-mode layout optimized for design agency workflows.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 bg-[#1a1a1a] min-h-screen font-['Inter']">
      <div className="max-w-[254px] mx-auto p-4 bg-[#272822] rounded-lg shadow-lg">
        {/* Header section with brand title and settings */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
          <AiOutlineSetting className="text-[#b5b5b5] text-lg" aria-label="Settings" />
        </div>

        {/* Status/Context row */}
        <div className="flex items-center gap-2 mb-6">
          <FiChevronUp className="text-[#8b9291] text-sm" aria-hidden="true" />
          <p className="text-[#8b9291] text-xs font-semibold truncate">
            From entire frame to a singl...
          </p>
        </div>

        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp className="text-[#b2b2b1] text-sm" aria-hidden="true" />
          <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
        </div>

        {/* User Configuration Fields */}
        <FormField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <div className="mb-6">
          <FormField
            id="designUrl"
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            borderWidth="border-2"
          />
        </div>

        {/* Primary interactions */}
        <div className="flex justify-between gap-4 mb-4">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>

        {/* Historical records section */}
        <h3 className="text-[#b0b0b0] font-semibold text-sm mt-4">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
