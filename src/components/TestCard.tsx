import React from 'react';

/**
 * TestCard: A self-contained component replicating the "UI magician Agent" panel.
 * 
 * DESIGN NOTE:
 * We use inline styles for colors (e.g., #222222, #9c4a1a) because this component 
 * targets a specific dark theme design that doesn't map to the project's 
 * standard Jira-clone Tailwind tokens.
 */

const ChevronIcon = ({ direction = 'up' }: { direction?: 'up' | 'down' }) => (
  // Using a simple span for the chevron to match the baseline render's appearance
  <span className="text-base leading-none" aria-hidden="true">
    {direction === 'up' ? '∧' : '∨'}
  </span>
);

const InfoIcon = () => (
  <span className="text-xs select-none" style={{ color: '#a4a4a3' }} aria-hidden="true">ⓘ</span>
);

const InputRow = ({ label, id, placeholder }: { label: string; id: string; placeholder: string }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[#a4a4a3] text-sm">{label}</label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      style={{ backgroundColor: '#2a2a2a', borderColor: '#555', color: '#e0e0e0' }}
      className="p-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:border-blue-500 transition-shadow"
    />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{ backgroundColor: '#9c4a1a', color: 'white' }}
    className="px-6 py-2 rounded-lg font-semibold text-sm hover:opacity-90 active:scale-95 transition-all outline-none focus:ring-2 focus:ring-orange-800"
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div 
      id="testElem" 
      style={{ backgroundColor: '#222222' }} 
      className="p-6 text-[#e0e0e0] flex flex-col gap-4 w-full max-w-md mx-auto rounded-lg shadow-xl"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">UI magician Agent</h2>
        <span className="text-xl leading-none select-none" aria-label="Settings">⚙</span>
      </div>

      {/* Hero Subtitle */}
      <div style={{ color: '#b08060' }} className="flex items-center gap-2 text-sm font-medium">
        <ChevronIcon direction="up" />
        <p>From entire frame to a singl...</p>
      </div>

      {/* Visual Spacer to match Figma layout */}
      <div className="h-4" aria-hidden="true" />

      {/* Form Section Header */}
      <div className="flex items-center gap-2">
        <span style={{ color: 'white' }}>
          <ChevronIcon direction="up" />
        </span>
        <h3 className="font-bold text-white">Add New Design</h3>
      </div>

      {/* Inputs */}
      <InputRow 
        id="pat-input" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      
      <InputRow 
        id="url-input" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Row */}
      <div className="flex gap-4 mt-2 justify-start">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[#333] mt-2 pt-2">
        <h3 className="font-bold text-white" style={{ color: '#b5b5b5' }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};
