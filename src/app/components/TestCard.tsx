import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

/**
 * TestCard component
 * Renders a dark-themed UI panel resembling a "UI magician Agent" tool card.
 * This is a standalone component for testing and demonstration purposes.
 */
const TestCard: React.FC = () => {
  // Shared styles for form labels
  const labelClassName = "flex items-center text-[#d4d4d8] text-sm mb-2";

  // Shared styles for text inputs
  const inputClassName = twMerge(
    "w-full p-3 bg-[#3a3a3a] border border-[#52525b] rounded-lg",
    "text-[#d4d4d8] outline-none box-border",
    "focus:border-[#b5521b] transition-colors"
  );

  // Shared styles for primary buttons
  const buttonClassName = twMerge(
    "flex-1 bg-[#b5521b] text-white border-none rounded-xl",
    "p-3 font-semibold cursor-pointer text-base",
    "hover:bg-[#c96a3a] transition-colors shadow-sm"
  );

  return (
    <div
      id="testElem"
      className="shadow-xl font-sans mx-auto my-10 max-w-[420px] rounded-2xl bg-[#2a2a2a] p-5 text-white"
    >
      {/* Header row: Title and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="m-0 text-xl font-bold">UI magician Agent</h2>
        <FiSettings
          className="cursor-pointer text-[#a1a1aa] transition-transform hover:rotate-45"
          size={20}
        />
      </div>

      {/* Context row: Chevron with muted orange text */}
      <div className="mb-6 flex items-center text-[#c96a3a]">
        <FiChevronUp className="mr-2" size={20} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Divider to separate header from main form */}
      <div className="mb-5 border-b border-[#3f3f46]" />

      {/* Expandable section header (Add New Design) */}
      <div className="mb-5 flex cursor-pointer items-center">
        <FiChevronUp className="mr-2" size={20} />
        <h3 className="m-0 text-lg font-bold">Add New Design</h3>
      </div>

      {/* Field: Personal Access Token */}
      <div className="mb-4">
        <label htmlFor="pat" className={labelClassName}>
          Personal Access Token
          <FiInfo className="ml-2 cursor-help text-[#a1a1aa]" size={16} />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      {/* Field: Design URL */}
      <div className="mb-6">
        <label htmlFor="designUrl" className={labelClassName}>
          Design URL
          <FiInfo className="ml-2 cursor-help text-[#a1a1aa]" size={16} />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className={inputClassName}
        />
      </div>

      {/* Action buttons (Awesome and Prepare) */}
      <div className="mb-6 flex gap-4">
        <button className={buttonClassName}>Awesome</button>
        <button className={buttonClassName}>Prepare</button>
      </div>

      {/* Footer section: Recent history heading */}
      <h3 className="m-0 text-lg font-bold">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
