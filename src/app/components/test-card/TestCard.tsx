import React from 'react';

/**
 * TestCard - A smoke test component that replicates a "UI magician Agent" panel.
 * 
 * DESIGN NOTES:
 * - Uses arbitrary Tailwind values ([#...]) to match the Figma spec.
 * - Root element id="testElem" is required by the automated pipeline.
 * - Self-contained with static content per requirements.
 */

// --- Icons ---

const GearIcon = ({ color = '#b5b5b5' }: { color?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M20 12h2"></path>
    <path d="M2 12h2"></path>
    <path d="M18.364 5.636l-1.414 1.414"></path>
    <path d="M6.05 17.95l-1.414 1.414"></path>
    <path d="M17.95 6.05l1.414-1.414"></path>
    <path d="M5.636 18.364l1.414-1.414"></path>
  </svg>
);

const ChevronUpIcon = ({ color = '#8b9291' }: { color?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const InfoIcon = ({ color = '#a4a4a3' }: { color?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

// --- Sub-components ---

interface FormFieldProps {
  label: string;
  id: string;
  placeholder: string;
  labelColor: string;
  textColor: string;
}

const FormField = ({ label, id, placeholder, labelColor, textColor }: FormFieldProps) => (
  <div className="mb-4">
    <label htmlFor={id} className={`flex items-center text-[${labelColor}] text-[11.5px] font-semibold mb-2`}>
      {label}
      <span className="ml-1">
        <InfoIcon color={labelColor} />
      </span>
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full p-2 bg-transparent border border-[#3a3a3a] rounded text-[${textColor}] text-[11.5px] outline-none focus:border-[#b5541c] transition-colors`}
    />
  </div>
);

const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#1f1f1f] rounded-lg text-white font-sans w-96 shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <GearIcon />
      </div>

      {/* Subtitle */}
       <div className="flex items-center mb-4">
        <ChevronUpIcon color="#8b9291" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold ml-1">From entire frame to a singl...</p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#3a3a3a] mb-4"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon color="#b2b2b1" />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold ml-1">Add New Design</h3>
      </div>

      {/* Inputs */}
      <FormField 
        label="Personal Access Token" 
        id="token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        labelColor="#a4a4a3" 
        textColor="#737470" 
      />
      
      <div className="mb-2"> {/* Extra spacing for the URL input group */}
        <FormField 
          label="Design URL" 
          id="designUrl" 
          placeholder="https://www.figma.com/file/" 
          labelColor="#a3a3a2" 
          textColor="#71726e" 
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between space-x-2 mb-6">
        <button className="flex-1 bg-[#b5541c] text-[#8c8078] text-[11.5px] font-semibold py-2 rounded hover:bg-[#c6652d] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541c] text-[#8c8078] text-[11.5px] font-semibold py-2 rounded hover:bg-[#c6652d] transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <p className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</p>
      </div>
    </div>
  );
};

export default TestCard;
