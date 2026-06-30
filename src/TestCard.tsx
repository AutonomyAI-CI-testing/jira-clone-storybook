import React from 'react';
import './TestCard.css';

/**
 * Icons used in the TestCard component.
 * Extracted as internal components to keep the main JSX clean and readable.
 */

const GearIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * Common input field with label and info icon.
 */
interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="mb-1 flex items-center text-sm font-medium">
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full rounded-md border border-zinc-600 bg-zinc-700 p-2 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />
  </div>
);

/**
 * TestCard: A smoke test component that visually replicates a Figma design panel.
 * Root element has id="testElem" as required by functional specs.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="mx-auto max-w-sm rounded-lg bg-zinc-800 p-6 text-white">
      {/* 1. Header row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* 2. Collapsible-looking info row */}
      <div className="mb-4 flex items-center space-x-2">
        <ChevronUpIcon />
        <p className="text-sm text-amber-600">From entire frame to a singl...</p>
      </div>

      {/* 3. Vertical spacer mirroring original layout */}
      <div className="h-8" aria-hidden="true" />

      {/* 4. Add New Design section header */}
      <div className="mb-4 flex items-center space-x-2">
        <ChevronUpIcon />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* 5 & 6. Input fields */}
      <InputField
        id="personalAccessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <InputField
        id="designURL"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* 7. Action Buttons */}
      <div className="mb-8 flex justify-end space-x-4">
        <button className="rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-600">
          Awesome
        </button>
        <button className="rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-600">
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns footer header */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
