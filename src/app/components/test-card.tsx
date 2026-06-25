
import React from 'react';

/**
 * Icons used within the TestCard component.
 * Extracted here for better readability of the main component structure.
 */
const Icons = {
  Settings: () => (
    <svg
      width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="#737470" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="feather feather-settings"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.5l.6 1a.65.65 0 0 1-.5 1h-3.9a1.65 1.65 0 0 0-1.5.3L12 21.6a.6.6 0 0 1-1 0l-.6-1a1.65 1.65 0 0 0-1.5-.3H5a.65.65 0 0 1-.5-1l.6-1a1.65 1.65 0 0 0 .3-1.5L2.4 12a.6.6 0 0 1 0-1l1-1a1.65 1.65 0 0 0 .3-1.5L5 6a.65.65 0 0 1 .5 1h3.9a1.65 1.65 0 0 0 1.5-.3L12 2.4a.6.6 0 0 1 1 0l.6 1a1.65 1.65 0 0 0 1.5.3h3.9a.65.65 0 0 1 .5 1l-.6 1a1.65 1.65 0 0 0-.3 1.5L21.6 12a.6.6 0 0 1 0 1l-1 1z"></path>
    </svg>
  ),
  ChevronUp: ({ color = "#8b9291" }: { color?: string }) => (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="feather feather-chevron-up"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  ),
  Info: ({ color = "#a4a4a3" }: { color?: string }) => (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="feather feather-info"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  ),
};

interface InputFieldProps {
  label: string;
  placeholder: string;
  labelColor: string;
}

/**
 * Reusable input field with label and info icon.
 */
const InputField = ({ label, placeholder, labelColor }: InputFieldProps) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center gap-2 mb-2">
      <p className={`text-[${labelColor}] text-[11.5px] font-semibold`}>{label}</p>
      <Icons.Info color={labelColor} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[#2a2a2a] border border-[#3a3a3a] rounded px-3 py-2 w-full text-[11.5px] text-[#737470] font-semibold"
    />
  </div>
);

/**
 * TestCard: A management card for the UI Magician Agent.
 * Used for configuring Figma design URLs and access tokens.
 *
 * NOTE: UI element colors and sizes are intentionally hardcoded to match the desired design spec.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4">
      {/* Main card container with dark theme support */}
      <div className="bg-[#232323] rounded-lg p-4 max-w-sm mx-auto shadow-xl">
        
        {/* Header Row: Agent name and settings button */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</span>
          <button type="button" aria-label="Settings">
            <Icons.Settings />
          </button>
        </div>

        {/* Status indicator / Collapsible Row */}
        <div className="flex items-center gap-2 mb-4">
          <Icons.ChevronUp color="#8b9291" />
          <span className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</span>
        </div>

        {/* Separator */}
        <div className="border-t border-[#3a3a3a] mb-4"></div>

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <Icons.ChevronUp color="#b2b2b1" />
          <span className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</span>
        </div>

        {/* Configuration Inputs */}
        <InputField 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
          labelColor="#a4a4a3" 
        />
        
        <InputField 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
          labelColor="#a3a3a2" 
        />

        {/* Action Buttons Row */}
        <div className="flex gap-3 mb-6">
          <button 
            type="button" 
            className="bg-[#b5532a] text-[#8c8078] hover:opacity-90 active:scale-[0.98] transition-all rounded-lg px-6 py-2 font-semibold text-[11.5px] w-full"
          >
            Awesome
          </button>
          <button 
            type="button" 
            className="bg-[#b5532a] text-[#8c8078] hover:opacity-90 active:scale-[0.98] transition-all rounded-lg px-6 py-2 font-semibold text-[11.5px] w-full"
          >
            Prepare
          </button>
        </div>

        {/* Activity Log / Footer Section */}
        <div>
          <h3 className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h3>
        </div>
      </div>
    </div>
  );
};

