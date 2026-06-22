import { JSX } from "react";

/**
 * TestCard component
 * Renders a dark-themed card matching the "UI magician Agent" design reference.
 * Used for smoke testing styled elements (icons, inputs, buttons) in isolation.
 */
export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="p-4 rounded-lg shadow-lg bg-[#2a2a2a] text-white w-full max-w-[400px]">
      {/* Header with bold title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Primary subtitle row with accent color */}
      <div className="flex items-center text-[#b85c38] mb-6">
        <ChevronUpIcon className="h-5 w-5 mr-1" />
        <p className="text-sm">From entire frame to a singl...</p>
      </div>

      {/* Configuration Section */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <ChevronUpIcon className="h-5 w-5 mr-1 text-white" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>

        <LabeledInput 
          id="pat" 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        
        <LabeledInput 
          id="designUrl" 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
          containerClassName="mb-6"
        />

        {/* Action Buttons using consistent accent color */}
        <div className="flex space-x-4">
          <button className="flex-1 py-2 px-4 rounded-md bg-[#b85c38] hover:bg-[#c1622a] text-white font-semibold transition-colors">
            Awesome
          </button>
          <button className="flex-1 py-2 px-4 rounded-md bg-[#b85c38] hover:bg-[#c1622a] text-white font-semibold transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

/**
 * Reusable labeled input with an info icon for consistent styling.
 */
function LabeledInput({ 
  id, 
  label, 
  placeholder, 
  containerClassName = "mb-4" 
}: { 
  id: string; 
  label: string; 
  placeholder: string;
  containerClassName?: string;
}): JSX.Element {
  return (
    <div className={containerClassName}>
      <div className="flex items-center mb-2">
        <label htmlFor={id} className="block text-sm text-gray-400 mr-2">{label}</label>
        <InfoIcon />
      </div>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full p-2 rounded-md bg-[#3a3a3a] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-[#b85c38] transition-colors"
      />
    </div>
  );
}

// Internal SVG Components for local usage

function GearIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.527.288 1.144.423 1.72.08H10z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
}

function InfoIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

