
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * Smoke-test component to verify the Figma-to-code pipeline.
 * Replicates the "UI magician Agent" panel UI with hardcoded content.
 */
export const TestCard: React.FC = () => {
  // Shared button styles to ensure consistency and easier maintenance
  const actionButtonClasses = "bg-[#b85c38] text-[#c9a99a] font-semibold text-[14px] px-5 py-2 rounded-lg flex-1 hover:bg-[#a3512f] transition-colors";

  return (
    <div 
      id="testElem" 
      className="bg-elevation-surface-overlay p-5 w-64 font-primary flex flex-col gap-3 rounded-lg shadow-overlay shadow-color-shadow-overlay"
    >
      {/* Header section with brand title and settings icon */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-font text-[16px] font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-icon text-2xl" />
      </div>

      {/* Breadcrumb or status indicator row */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-icon-subtle text-lg" />
        <p className="text-font-subtle text-[14px] font-medium">From entire frame to a singl...</p>
      </div>

      {/* Main interactive section header */}
      <div className="flex items-center gap-2 mt-2 mb-2">
        <FiChevronUp className="text-font text-lg" />
        <h3 className="text-font text-[16px] font-semibold">Add New Design</h3>
      </div>

      {/* Configuration Inputs */}
      <div className="space-y-4">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <label htmlFor="pat" className="text-font-subtle text-[12px] font-semibold">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle className="text-icon-subtle text-sm" title="Your Figma PAT" />
          </div>
          <input
            id="pat"
            type="password" // Sensitive field, though placeholder is figd_...
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-border bg-background-input text-font px-3 py-2 rounded text-[12px] font-medium placeholder:text-font-subtlest focus:outline-border-brand"
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <label htmlFor="designUrl" className="text-font-subtle text-[12px] font-semibold">
              Design URL
            </label>
            <AiOutlineInfoCircle className="text-icon-subtle text-sm" title="Link to your Figma file" />
          </div>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-border bg-background-input text-font px-3 py-2 rounded text-[12px] font-medium placeholder:text-font-subtlest focus:outline-border-brand"
          />
        </div>
      </div>

      {/* Primary Actions */}
      <div className="flex gap-4 justify-between mt-4 mb-6">
        <button className={actionButtonClasses}>
          Awesome
        </button>
        <button className={actionButtonClasses}>
          Prepare
        </button>
      </div>

      {/* History/Footer Section */}
      <h3 className="text-font text-[16px] font-semibold mt-2">Recent Breakdowns</h3>
    </div>
  );
};
