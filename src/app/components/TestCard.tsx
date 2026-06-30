
import React from 'react';

/**
 * TestCard component
 * 
 * A self-contained settings/agent panel UI card.
 * Designed according to Figma specs with a dark theme (#2b2a27).
 * Root element has id="testElem" as per requirement.
 */

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9.293 8.293a1 1 0 000 1.414L10.586 11l-1.293 1.293a1 1 0 101.414 1.414L12 12.414l1.293 1.293a1 1 0 001.414-1.414L13.414 11l1.293-1.293a1 1 0 00-1.414-1.414L12 10.586l-1.293-1.293a1 1 0 00-1.414 0z" clipRule="evenodd" />
  </svg>
);

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#2b2a27] p-4 text-[#b5b5b5] font-sans">
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-sm">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center text-[#8b9291] text-xs mb-4">
        <ChevronUpIcon className="mr-1" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer - used to match Figma vertical layout */}
      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <div className="flex items-center text-[#b2b2b1] font-semibold mb-2">
          <ChevronUpIcon className="mr-1" />
          <span>Add New Design</span>
        </div>

        {/* Form Inputs */}
        <div className="mb-2">
          <label className="flex items-center text-[#b0b0b0] text-xs mb-1">
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-xs focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center text-[#b0b0b0] text-xs mb-1">
            Design URL
            <InfoIcon />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded bg-[#272822] border border-[#929291] text-xs focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button className="px-4 py-2 rounded-lg bg-[#843a17] text-[#c9a080] text-sm hover:opacity-90 transition-opacity">
            Awesome
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#843a17] text-[#c9a080] text-sm hover:opacity-90 transition-opacity">
            Prepare
          </button>
        </div>
      </div>

      {/* Footer info section */}
      <div className="text-[#b0b0b0] font-semibold text-sm">
        Recent Breakdowns
      </div>
    </div>
  );
};


export default TestCard;
