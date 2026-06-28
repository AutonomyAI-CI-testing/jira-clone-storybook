import React from 'react';

/**
 * TestCard component replicates a "UI magician Agent" panel.
 * It's used as a visual smoke test for Figma-to-Tailwind rendering fidelity.
 */
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#252525] w-[254px] p-5 font-sans">
      <Header />
      <Subheader />
      
      <SectionHeading title="Add New Design" className="mt-8" />
      
      <InputSection 
        id="accessToken"
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-4"
        borderColor="border-[#444]"
      />

      <InputSection 
        id="designUrl"
        label="Design URL" 
        placeholder="https://www.figma.com/file/:"
        className="mt-3"
        borderColor="border-[#555]"
      />

      <ButtonRow />

      <div className="mt-8">
        <h3 className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

// --- Sub-components ---

const Header: React.FC = () => (
  <div className="flex justify-between items-center">
    <h2 className="text-[#b5b5b5] font-bold text-[13.5px]">UI magician Agent</h2>
    {/* Gear icon */}
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5b5b5]">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  </div>
);

const Subheader: React.FC = () => (
  <div className="flex items-center gap-1 mt-1">
    <ChevronUpIcon className="text-[#8b9291] w-3 h-3" />
    <p className="text-[#8b9291] text-[11.5px]">From entire frame to a singl...</p>
  </div>
);

const SectionHeading: React.FC<{ title: string; className?: string }> = ({ title, className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <ChevronUpIcon className="text-[#b2b2b1] w-4 h-4" />
    <h3 className="text-[#b2b2b1] font-semibold text-[13.5px]">{title}</h3>
  </div>
);

const InputSection: React.FC<{ 
  id: string; 
  label: string; 
  placeholder: string; 
  className?: string;
  borderColor: string;
}> = ({ id, label, placeholder, className, borderColor }) => (
  <div className={className}>
    <div className="flex items-center gap-1 mb-1">
      <label htmlFor={id} className="text-[#a4a4a3] text-[11.5px]">{label}</label>
      <InfoIcon className="text-[#a4a4a3] w-3 h-3" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full bg-[#1e1e1e] border ${borderColor} rounded px-3 py-2 text-[#737470] text-sm focus:outline-none focus:border-[#b5541c]`}
    />
  </div>
);

const ButtonRow: React.FC = () => (
  <div className="flex gap-3 mt-5">
    <ActionButton>Awesome</ActionButton>
    <ActionButton>Prepare</ActionButton>
  </div>
);

const ActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="bg-[#b5541c] text-[#8c8078] font-semibold px-5 py-2 rounded-lg flex-1 text-[13.5px]">
    {children}
  </button>
);

// --- Icons ---

const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export default TestCard;
