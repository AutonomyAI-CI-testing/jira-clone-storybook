
import React from 'react';
import { IoSettingsOutline, IoChevronUpOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" style={{ backgroundColor: '#2a2a2a' }} className="p-4 rounded-lg max-w-sm text-white shadow-xl">
      {/* 
        Header section with title and gear icon.
        The dark background #2a2a2a is a custom theme color outside the standard Tailwind palette.
      */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-xl" />
      </div>

      {/* Primary status/instruction row */}
      <div className="flex items-center mb-6">
        <IoChevronUpOutline className="text-sm mr-2" />
        <span className="text-sm text-gray-400">From entire frame to a singl...</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <IoChevronUpOutline className="text-sm mr-2" />
          <h3 className="text-lg font-medium">Add New Design</h3>
        </div>

        <ReadOnlyInput
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <ReadOnlyInput
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          containerClassName="mb-6"
        />
      </div>

      {/* Action buttons with custom theme color #c1622b */}
      <div className="flex space-x-4 mb-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <div>
        <h3 className="text-lg font-medium">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

/**
 * Reusable read-only input field with a label and info icon.
 * Used for displaying tokens and URLs that are not yet editable in this preview.
 */
const ReadOnlyInput = ({ 
  id, 
  label, 
  placeholder, 
  containerClassName = "mb-4" 
}: { 
  id: string; 
  label: string; 
  placeholder: string; 
  containerClassName?: string;
}) => (
  <div className={containerClassName}>
    <div className="flex items-center text-sm mb-1">
      <label htmlFor={id}>{label}</label>
      <AiOutlineInfoCircle className="ml-1 text-xs text-gray-400" />
    </div>
    <input
      type="text"
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 text-gray-300 placeholder-gray-500 focus:outline-none"
    />
  </div>
);

/**
 * Action button with the brand's orange-brown color.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button
    style={{ backgroundColor: '#c1622b' }}
    className="flex-1 py-2 rounded text-white font-medium hover:opacity-90 transition-opacity"
  >
    {label}
  </button>
);
