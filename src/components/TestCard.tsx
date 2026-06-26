import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
  className?: string;
}

/**
 * Shared input component for Design-related configuration
 * Encapsulates the label, info icon, and styled input field
 */
const InputField = ({ label, id, placeholder, className = '' }: InputFieldProps) => (
  <div className="mb-4">
    <div className="flex items-center mb-1">
      <label htmlFor={id} className="text-[#a4a4a3] text-xs mr-1">
        {label}
      </label>
      <AiOutlineInfoCircle className="text-[#a4a4a3] text-xs" />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-[211px] h-[36px] bg-[#272822] text-[#b5b5b5] border border-[#a5adad] rounded px-2 py-1 text-sm outline-none focus:border-white ${className}`}
    />
  </div>
);

/**
 * TestCard provides an interface for the "UI magician Agent"
 * Allows users to add new designs via Figma PAT and URL
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="w-[254px] p-4 bg-[#1a1a1a] text-white rounded-lg shadow-lg"
      role="region" 
      aria-label="UI Magician Agent Controls"
    >
      {/* Header Row */}
      <header className="flex justify-between items-center mb-2">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        <button 
          aria-label="Settings" 
          className="hover:text-white transition-colors"
        >
          <IoSettingsOutline className="text-[#b5b5b5] text-lg" />
        </button>
      </header>

      {/* Status/Subtitle Row */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-[#8b9291] mr-1" aria-hidden="true" />
        <p className="text-[#8b9291] text-xs truncate">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <section className="mt-6 mb-4">
        <div className="flex items-center mb-2">
          <HiChevronUp className="text-[#b2b2b1] mr-1" aria-hidden="true" />
          <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
        </div>

        <InputField 
          id="pat" 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />

        <InputField 
          id="designUrl" 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
          className="h-[37px] border-2 border-[#929291]"
        />

        {/* Action Buttons */}
        <div className="flex space-x-2 justify-between mb-8">
          {/* Note: specific colors and sizes are user-intended design choices */}
          <button className="w-[85px] h-[37px] bg-[#843a17] text-[#8c8078] font-semibold text-xs rounded button-focus-ring flex items-center justify-center hover:opacity-90 transition-opacity">
            Awesome
          </button>
          <button className="w-[85px] h-[37px] bg-[#843a17] text-[#8c8078] font-semibold text-xs rounded button-focus-ring flex items-center justify-center hover:opacity-90 transition-opacity">
            Prepare
          </button>
        </div>
      </section>

      {/* Recent Activity Footer */}
      <footer>
        <p className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</p>
      </footer>
    </div>
  );
};
