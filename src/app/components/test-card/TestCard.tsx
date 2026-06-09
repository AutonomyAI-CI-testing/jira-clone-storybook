/* eslint-disable react/prop-types */
import React from 'react';

// Constants for reused SVG paths and Tailind classes
const ICON_CHEVRON_UP = "M5 15l7-7 7 7";
const ICON_INFO = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

const INPUT_CLASSES = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600";
const BUTTON_CLASSES = "bg-[#b35e3c] hover:bg-[#a05030] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-colors";

/**
 * Common Icon component for simple single-path SVGs
 */
const Icon = ({ d, className = 'h-5 w-5', ...props }: { d: string; className?: string } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
  </svg>
);

/**
 * Reusable Button component matching the design spec
 */
const Button = ({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`${BUTTON_CLASSES} ${className}`} {...props}>
    {children}
  </button>
);

/**
 * Reusable input field with label and info icon
 */
const InputField = ({ label, id, placeholder }: { label: string; id: string; placeholder: string }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-400 text-sm font-bold mb-2 flex items-center">
      {label}
      <Icon d={ICON_INFO} className="h-4 w-4 ml-1" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={INPUT_CLASSES}
    />
  </div>
);

const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-white min-h-screen">
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Settings"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Primary navigation/state indicator */}
      <div className="flex items-center text-gray-400 mb-6">
        <Icon d={ICON_CHEVRON_UP} className="h-5 w-5 mr-2" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Main design configuration section */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Icon d={ICON_CHEVRON_UP} className="h-5 w-5 mr-2 text-gray-400" />
          <h2 className="text-lg font-semibold">Add New Design</h2>
        </div>

        <InputField 
          label="Personal Access Token" 
          id="accessToken" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        
        <InputField 
          label="Design URL" 
          id="designURL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      {/* Footer actions */}
      <div className="flex justify-between mb-8">
        <Button>Awesome</Button>
        <Button>Prepare</Button>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
