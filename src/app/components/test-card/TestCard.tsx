
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-4 max-w-sm mx-auto bg-[#1e1e1e] text-gray-100 rounded-lg shadow-lg"
    >
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="w-5 h-5 text-gray-400" />
      </div>

      {/* Subtitle Row: Muted orange description */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className="w-4 h-4 text-orange-400" />
        <p className="text-orange-400 text-sm">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Header: Collapsible-style design header */}
      <div className="flex items-center gap-2 mb-4 mt-6">
        <HiChevronUp className="w-5 h-5 text-gray-300" />
        <h2 className="text-md font-bold">Add New Design</h2>
      </div>

      {/* Input Fields for Token and URL */}
      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons: Thematic brown/orange buttons */}
      <div className="flex gap-4 justify-start mb-6">
        <button className="px-4 py-2 rounded-lg bg-[#7a3218] text-white font-medium hover:bg-[#8b3d1f] transition-colors">
          Awesome
        </button>
        <button className="px-4 py-2 rounded-lg bg-[#7a3218] text-white font-medium hover:bg-[#8b3d1f] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Activity Section Header */}
      <h2 className="text-md font-bold mt-6">Recent Breakdowns</h2>
    </div>
  );
};

/**
 * Reusable field component with label, info icon and dark-themed input.
 * Extracted to simplify the main layout while keeping it internal to this smoke test file.
 */
const InputField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded bg-[#2a2a2a] border border-zinc-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-400"
    />
  </div>
);
