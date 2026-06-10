
import React from 'react';

/**
 * A card component representing the 'UI magician Agent' interface.
 * Primarily used for adding new designs and viewing recent breakdowns.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4 bg-[#1b1c16] text-[#b5b5b5] font-sans rounded-lg shadow-lg max-w-sm mx-auto my-8">
      <Header />

      {/* Breadcrumb or context indicator */}
      <div className="flex items-center text-sm mb-6 text-[#71726e]">
        <ChevronUpIcon className="w-4 h-4 mr-2" />
        <span>From entire frame to a singl...</span>
      </div>

      <AddDesignSection />

      {/* Footer Heading */}
      <h3 className="text-md font-semibold text-[#a4a4a3]">Recent Breakdowns</h3>
    </div>
  );
};

const Header: React.FC = () => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-lg font-semibold text-[#a4a4a3]">UI magician Agent</h2>
    <SettingsIcon className="w-5 h-5 text-[#8b9291]" />
  </div>
);

const AddDesignSection: React.FC = () => (
  <div className="mb-6">
    <h3 className="text-md font-semibold mb-4 text-[#a4a4a3]">
      <ChevronUpIcon className="w-4 h-4 inline-block mr-2" />
      Add New Design
    </h3>
    
    <InputGroup 
      label="Personal Access Token" 
      defaultValue="figd_xxxxxxxxxxxxxxxxxxxxx" 
    />

    <InputGroup 
      label="Design URL" 
      defaultValue="https://www.figma.com/file/" 
      className="mb-6"
    />

    <div className="flex justify-between space-x-4 mb-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>
  </div>
);

const InputGroup: React.FC<{ label: string; defaultValue: string; className?: string }> = ({ label, defaultValue, className = "mb-4" }) => (
  <>
    <label className="block text-sm font-medium mb-1 text-[#b5b5b5]">
      {label}
      <InfoIcon className="w-3 h-3 inline-block ml-1 text-[#8b9291]" />
    </label>
    <input 
      type="text" 
      className={`w-full p-2 ${className} rounded-md bg-[#272822] border border-[#8b9291] text-[#b5b5b5] placeholder-[#71726e] focus:outline-none focus:border-white`}
      defaultValue={defaultValue} 
    />
  </>
);

const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="flex-1 px-4 py-2 rounded-md bg-[#843a17] text-white font-medium hover:bg-[#a04a1f] focus:outline-none focus:ring-2 focus:ring-[#843a17] focus:ring-opacity-50">
    {children}
  </button>
);

/* --- Icons --- */

const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
  </svg>
);

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export default TestCard;

