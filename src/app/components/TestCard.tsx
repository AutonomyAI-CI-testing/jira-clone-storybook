
import React from 'react';
import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  labelColor: string;
  borderColor: string;
  textColor: string;
}

/**
 * Helper component for consistent input field styling within the TestCard.
 * Preserves specific design tokens (colors, spacing) from the original implementation.
 */
const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  labelColor,
  borderColor,
  textColor,
}) => (
  <div className="flex flex-col gap-1 mt-2">
    <div className="flex items-center gap-1">
      <label htmlFor={id} className={`text-[${labelColor}] text-xs font-semibold`}>
        {label}
      </label>
      <IoInformationCircleOutline className={`text-[${labelColor}] text-sm`} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`bg-[#272822] border border-[${borderColor}] w-full px-3 py-2 text-xs text-[${textColor}] placeholder-[${textColor}] focus:outline-none`}
    />
  </div>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] w-[254px] p-4 font-sans flex flex-col gap-3 shadow-lg rounded-sm">
      {/* Header section with agency name and settings */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <button type="button" aria-label="Settings" className="text-[#b5b5b5] hover:opacity-80 transition-opacity">
          <IoSettingsOutline />
        </button>
      </div>

      {/* Breadcrumb or context indicator */}
      <div className="flex items-center gap-2">
        <IoChevronUp className="text-[#8b9291]" />
        <span className="text-[#8b9291] text-xs font-semibold truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer to match design hierarchy */}
      <div className="h-4"></div>

      {/* Main Action Section: Add New Design */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <IoChevronUp className="text-[#b2b2b1]" />
          <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
        </div>

        <div className="flex flex-col gap-2 ml-6">
          <InputField
            id="token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            labelColor="#a4a4a3"
            borderColor="#929291"
            textColor="#737470"
          />

          <InputField
            id="url"
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            labelColor="#a3a3a2"
            borderColor="#a5adad"
            textColor="#71726e"
          />

          {/* Action buttons with specific high-contrast color scheme */}
          <div className="flex justify-center gap-2 mt-4">
            <button className="bg-[#843a17] text-[#8c8078] hover:bg-[#9a441b] transition-colors text-xs font-semibold rounded px-6 py-2">
              Awesome
            </button>
            <button className="bg-[#843a17] text-[#8c8078] hover:bg-[#9a441b] transition-colors text-xs font-semibold rounded px-6 py-2">
              Prepare
            </button>
          </div>
        </div>
      </div>

      {/* Footer section for historical data */}
      <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
        <span className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</span>
      </div>
    </div>
  );
};

