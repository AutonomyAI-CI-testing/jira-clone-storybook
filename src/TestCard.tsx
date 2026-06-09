import React from 'react';

/**
 * TestCard component displays a stylized dark-themed interface for design agent configuration.
 * It uses a hardcoded dark background and custom orange buttons as per the design requirements.
 */
const TestCard: React.FC = () => {
  return (
    <div className="bg-[#121212] text-neutral-300 p-6 w-80 flex flex-col space-y-4 rounded-md font-sans">
      <CardHeader title="UI magician Agent" />

      {/* Navigation breadcrumb or status indicator showing context */}
      <div className="flex items-center space-x-2 text-sm text-neutral-400">
        <ChevronUpIcon className="w-3 h-3" />
        <span className="font-medium">From entire frame to a singl...</span>
      </div>

      <div className="pt-6 space-y-5">
        <div className="flex items-center space-x-2">
          <ChevronUpIcon className="w-3.5 h-3.5 text-neutral-300" strokeWidth={2.5} />
          <h3 className="text-lg font-bold text-neutral-200">Add New Design</h3>
        </div>

        <InputGroup 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxxx" 
        />
        
        <InputGroup 
          label="Design URL" 
          placeholder="https://www.figma.com/file/" 
        />

        <div className="flex justify-between space-x-4 pt-2">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </div>

      <div className="text-lg font-bold text-neutral-300 pt-8">
        <h3>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

// --- Sub-components ---

const CardHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-xl font-bold text-neutral-200">{title}</h2>
    <SettingsIcon className="w-6 h-6 text-neutral-400" />
  </div>
);

const InputGroup: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-semibold flex items-center space-x-1 text-neutral-400">
      <span>{label}</span>
      <InfoIcon className="w-3.5 h-3.5 ml-1" />
    </label>
    {/* Read-only placeholder style for token/URL fields */}
    <div className="bg-transparent border border-neutral-700 rounded-sm p-3 text-neutral-500 text-sm font-medium">
      {placeholder}
    </div>
  </div>
);

const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="bg-[#8a3f1b] hover:bg-[#a34a20] transition-colors text-neutral-300 font-bold px-4 py-3 rounded-[3px] flex-1">
    {children}
  </button>
);

// --- Icons ---

const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.125 1.125 0 011.924 1.066 1.125 1.125 0 001.446 1.184c1.157.295 1.157 1.943 0 2.238a1.125 1.125 0 00-.603 1.085c.343 1.637 2.705 1.637 3.048 0a1.125 1.125 0 011.085-.603c1.157-.295 1.943.295 2.238 1.446a1.125 1.125 0 011.066 1.924c1.756.426 1.756 2.924 0 3.35a1.125 1.125 0 01-1.066 1.924c-.295 1.157-.881 1.157-1.446 0a1.125 1.125 0 00-1.085.603c-.343 1.637-2.705 1.637-3.048 0a1.125 1.125 0 01-1.924-1.066 1.125 1.125 0 00-1.446-1.184c-1.157-.295-1.157-1.943 0-2.238a1.125 1.125 0 00.603-1.085c-.343-1.637-2.705-1.637-3.048 0a1.125 1.125 0 01-1.066-1.924c-1.756-.426-1.756-2.924 0-3.35a1.125 1.125 0 011.066-1.924z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronUpIcon: React.FC<{ className?: string; strokeWidth?: number }> = ({ className, strokeWidth = 2 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02A.75.75 0 0112 12.75h.008c.441 0 .75-.291.75-.69S12.441 10.5 12 10.5h-.008c-.441 0-.75.291-.75.69v.007c0 .4.309.69.75.69h.008c.212 0 .37.109.37.241S12.212 13.5 12 13.5h-.008c-.212 0-.37-.109-.37-.241v-.007c0-.4-.309-.69-.75-.69z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 14.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

export default TestCard;

