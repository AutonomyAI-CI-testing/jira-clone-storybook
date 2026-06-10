import React from 'react';

/**
 * Icon components for the TestCard.
 * Extracted to keep the main component clean and focused on layout.
 */
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127 1.03.523 1.81.75 2.16.63.155-.05.3-.146.416-.27l.199-.253c.212-.267.47-.47.75-.6.667-.34 1.416-.383 2-.175v.75c-.75 .207-1.37.59-1.37 1.37V9.5c0 .78.62 1.163 1.37 1.37v.75c-.584.208-1.334.166-2-.175l-.199-.253c-.116-.124-.26-.22-.416-.27-.35-.118-1.13.11-2.16.63-.073.044-.146.088-.22.127-.332.184-.582.496-.645.87l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.397-1.11-.94l-.213-1.28c-.063-.374-.313-.686-.645-.87a.972.972 0 0 0-.22-.127c-1.03-.523-1.81-.75-2.16-.63-.155.05-.3.146-.416.27l-.199.253c-.212.267-.47.47-.75.6-.667.34-1.416.383-2 .175v-.75c.75-.207 1.37-.59 1.37-1.37V9.5c0-.78-.62-1.163-1.37-1.37v-.75c.584-.208 1.334-.166 2-.175l.199-.253c.116-.124.26-.22.416-.27.35-.118 1.13-.11 2.16-.63.073-.044.146-.088.22-.127.332-.184.582-.496.645-.87l.213-1.28Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

const MagicWandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25 1.5 1.5m-1.5-1.5 7.08-7.08c1.513-1.513 3.197-1.513 4.71 0-1.513 1.513-3.197 1.513-4.71 0m-1.5-1.5-1.5-1.5m7.08-7.08c1.513-1.513 3.197-1.513 4.71 0-1.513 1.513-3.197 1.513-4.71 0" />
  </svg>
);

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder }) => (
  <div className="mb-4 last:mb-6">
    <label htmlFor={id} className="block text-sm text-gray-400 mb-1 flex items-center">
      {label}
      <MagicWandIcon />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
    />
  </div>
);

/**
 * TestCard component for managing UI design breakdowns.
 * Uses a dark theme with amber accents for primary actions.
 */
const TestCard: React.FC = () => {
  // Common style for action buttons to ensure consistent visual weight
  const actionButtonClassName = "flex-1 bg-amber-700 hover:bg-amber-600 text-white py-2 rounded-md font-medium transition-colors";

  return (
    <div id="testElem" className="bg-gray-900 text-gray-100 p-4 rounded-lg shadow-lg w-64">
      {/* Header section with title and settings */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* Navigation/Status indicators - using truncate for long breadcrumbs */}
      <div className="flex items-center text-gray-400 text-sm mb-4">
        <ChevronUpIcon className="w-4 h-4 mr-1" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="flex items-center text-gray-50 text-base font-medium mb-4">
        <ChevronUpIcon className="w-4 h-4 mr-1" />
        Add New Design
      </div>

      {/* Configuration fields */}
      <InputField 
        id="token" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      
      <InputField 
        id="designUrl" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Primary actions - Amber theme provides strong visual hierarchy against dark background */}
      <div className="flex justify-between space-x-2 mb-6">
        <button className={actionButtonClassName}>
          Awesome
        </button>
        <button className={actionButtonClassName}>
          Prepare
        </button>
      </div>

      <h2 className="text-lg font-semibold mt-4">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;

