
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Common input field for the TestCard component.
 * Uses hardcoded colors from Figma spec to maintain exact visual match.
 */
const CardInput = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <label htmlFor={id} className="text-[#a3a3a2] text-[11.5px] mr-2">
        {label}
      </label>
      <FiInfo className="text-[#a3a3a2] text-[14px]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      // Specific hex codes used to match the brand's dark mode design exactly
      className="w-full p-2 rounded bg-[#333] border border-[#555] text-[#737470] text-[11.5px] placeholder-[#71726e]"
    />
  </div>
);

/**
 * Action button used in the TestCard.
 * Uses the specific orange-brown brand color (#b85c38).
 */
const CardButton = ({ children }: { children: React.ReactNode }) => (
  <button className="flex-1 py-2 rounded bg-[#b85c38] text-[#8c8078] text-[11.5px] hover:brightness-110 active:brightness-90 transition-all">
    {children}
  </button>
);

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 text-[#b5b5b5] font-semibold max-w-[260px]">
      {/* Header with Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[13.5px]">UI magician Agent</span>
        <FiSettings className="text-[#b5b5b5] text-[16px] cursor-pointer" />
      </div>

      {/* Context/Status row */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="text-[#8b9291] text-[16px] mr-2" />
        <span className="text-[#8b9291] text-[11.5px] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer to match design rhythm */}
      <div className="h-6" aria-hidden="true" />

      {/* Functional Section header */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-[#b2b2b1] text-[16px] mr-2" />
        <span className="text-[#b2b2b1] text-[13.5px]">Add New Design</span>
      </div>

      <CardInput
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mb-2">
        <CardInput
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Main Actions */}
      <div className="flex justify-between space-x-4 mb-6">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      {/* Footer Section */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px]">Recent Breakdowns</span>
      </div>
    </div>
  );
}
