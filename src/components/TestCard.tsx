
import React from 'react';

/**
 * TestCard component
 * 
 * This is a smoke test component designed to verify Figma-to-code translation.
 * It uses exact hex codes from Figma design tokens and custom Tailwind spacing.
 * All content is presentational as per requirements.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#232320] min-h-screen font-sans">
      <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg max-w-md mx-auto">
        <TestCardHeader />

        {/* Visibility toggle placeholder - matches Figma 'From entire frame...' row */}
        <div className="flex items-center mb-6">
          <span className="text-[#8b9291] text-lg mr-2">∧</span>
          <p className="text-[#8b9291] text-[11.5px] font-medium">From entire frame to a singl...</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="text-[#b2b2b1] text-lg mr-2">∧</span>
            <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
          </div>

          <FormField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            // Specific grey-blue border for token field per Figma spec
            borderColor="border-[#a5adad]"
          />

          <FormField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            // Thicker 2px border for URL field per Figma spec
            borderColor="border-2 border-[#929291]"
            className="mb-6"
          />

          <div className="flex space-x-4">
            <ActionButton label="Awesome" />
            <ActionButton label="Prepare" />
          </div>
        </div>

        <div>
          <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Recent Breakdowns</h3>
        </div>
      </div>
    </div>
  );
};

const TestCardHeader = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
    <span className="text-[#b5b5b5] text-lg" aria-hidden="true">⚙</span>
  </div>
);

const FormField = ({ 
  label, 
  placeholder, 
  borderColor, 
  className = "mb-4" 
}: { 
  label: string; 
  placeholder: string; 
  borderColor: string;
  className?: string;
}) => (
  <div className={className}>
    <label className="flex items-center text-[#a4a4a3] text-[11.5px] font-medium mb-2">
      {label} <span className="text-[#a4a4a3] ml-1" aria-label="info">ⓘ</span>
    </label>
    <input
      type="text"
      placeholder={placeholder}
      readOnly
      className={`w-full p-2 rounded bg-[#272822] text-[#737470] text-[11.5px] font-medium ${borderColor} outline-none`}
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button 
    className="flex-1 py-2 bg-[#843a17] text-[#8c8078] text-[13.5px] font-semibold rounded-md hover:brightness-110 transition-all"
  >
    {label}
  </button>
);

