
import React from 'react';
import { HiChevronUp, HiCog } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard component builds a UI magician Agent panel.
 * Designed to showcase Figma-to-React translation using Tailwind CSS.
 * This is a standalone component with hardcoded values.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-xl p-5 max-w-xs text-white">
      {/* Header Row: Title and Settings icon */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">UI magician Agent</h1>
        <HiCog className="text-gray-400 text-xl" />
      </div>

      {/* Subtitle Row: Status/Context with Chevron */}
      <div className="flex items-center gap-1 mt-2">
        <HiChevronUp className="text-orange-700" />
        <span className="text-orange-700 text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8" />

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-white" />
        <span className="text-white font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Design URL Field */}
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Activity Section */}
      <h2 className="mt-8 text-white font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};

/**
 * Reusable input field component for the card.
 */
const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="mt-4">
    <div className="flex items-center gap-1 text-gray-300 text-sm">
      <label>{label}</label>
      <AiOutlineInfoCircle />
    </div>
    <input
      type="text"
      readOnly
      className="bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 mt-1 w-full text-gray-500 text-sm focus:outline-none"
      placeholder={placeholder}
    />
  </div>
);

/**
 * Reusable action button component for the card.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="bg-[#b5541b] text-white rounded-lg px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90">
    {label}
  </button>
);

