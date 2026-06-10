import React from 'react';

/**
 * InfoIcon - A small informational (question mark) icon used for field labels.
 */
const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-3 h-3 text-[#a4a4a3] ml-1"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.75A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * ChevronUpIcon - Used for collapsible sections (currently static).
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * InputField - Reusable labeled input field for the form.
 */
interface InputFieldProps {
  label: string;
  placeholder: string;
  showInfo?: boolean;
}

const InputField = ({ label, placeholder, showInfo = true }: InputFieldProps) => (
  <div className="mb-4 last:mb-6">
    <label className="flex items-center text-[#a4a4a3] text-xs font-semibold mb-1">
      {label}
      {showInfo && <InfoIcon />}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded border border-[#a5adad] bg-[#272822] text-[#737470] text-xs focus:outline-none focus:border-[#8b9291]"
    />
  </div>
);

/**
 * TestCard - Main UI component for the "UI magician Agent" configuration panel.
 * Uses a fixed width and Monokai-esque color palette to match the dev-tool aesthetic.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#272822] w-[254px] p-4 text-white font-inter rounded-md shadow-lg">
      {/* Header: Displays agent name and status icon */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-[#b5b5b5]"
        >
          <path
            fillRule="evenodd"
            d="M11.646 2.158a5.964 5.964 0 00-.797-.502 6.072 6.072 0 00-1.125-.467M12 2.25c-5.792 0-10.5 4.708-10.5 10.5S6.208 23.25 12 23.25s10.5-4.708 10.5-10.5S17.792 2.25 12 2.25zM12 9a3 3 0 100 6 3 3 0 000-6z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Subtitle / Context indicator */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon className="w-4 h-4 text-[#8b9291] mr-1" />
        <span className="italic text-[#8b9291] text-xs truncate">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-6" aria-hidden="true" />

      {/* Section Header: Collapsible design trigger */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon className="w-4 h-4 text-[#b2b2b1] mr-1" />
        <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
      </div>

      {/* Form Fields for Figma Integration */}
      <InputField 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      
      <InputField 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Buttons: Dual-primary style matches Figma plugin aesthetics */}
      <div className="flex gap-2 mb-6">
        <button className="flex-1 bg-[#843a17] hover:bg-[#9c451b] transition-colors text-[#8c8078] text-xs font-semibold rounded px-4 py-2">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] hover:bg-[#9c451b] transition-colors text-[#8c8078] text-xs font-semibold rounded px-4 py-2">
          Prepare
        </button>
      </div>

      {/* Footer Section: List of recent activities */}
      <div>
        <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
