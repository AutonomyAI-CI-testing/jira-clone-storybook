
import React from "react";

/**
 * TestCard component for UI Magician Agent
 * Renders a dark-themed card with configuration fields and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#222] p-4 rounded-lg shadow-lg max-w-sm mx-auto my-4">
      <Header />
      <Subtitle />
      <NewDesignSection />
      <ConfigFields />
      <ActionButtons />
      <Footer />
    </div>
  );
};

const Header = () => (
  <div className="flex items-center justify-between">
    <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
    <SettingsIcon />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center gap-1 mt-2">
    <ChevronUpIcon className="text-[#8b9291]" />
    <p className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</p>
  </div>
);

const NewDesignSection = () => (
  <div className="flex items-center gap-1 mt-4">
    <ChevronUpIcon className="text-[#b2b2b1]" />
    <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
  </div>
);

const ConfigFields = () => (
  <>
    <InputField
      id="personalAccessToken"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
    />
    <InputField
      id="designURL"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />
  </>
);

const ActionButtons = () => (
  <div className="flex gap-3 mt-6">
    <Button>Awesome</Button>
    <Button>Prepare</Button>
  </div>
);

const Footer = () => (
  <div className="mt-6">
    <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
  </div>
);

/** Accessible input field with info icon */
const InputField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="mt-4">
    <label htmlFor={id} className="flex items-center gap-1 text-[#a4a4a3] text-xs font-semibold mb-1">
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      // Using #7a4020 for focus ring to match the primary button brand color
      className="w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] p-2 text-[#737470] text-xs focus:outline-none focus:ring-1 focus:ring-[#7a4020]"
    />
  </div>
);

/** Primary brand button */
const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="flex-1 rounded-lg py-2 bg-[#7a4020] text-[#8c8078] font-semibold text-xs transition-colors duration-200 hover:bg-[#92502a]">
    {children}
  </button>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4 text-[#b5b5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg className={`w-3 h-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
  </svg>
);

const InfoIcon = () => (
  <svg className="w-3 h-3 text-[#a4a4a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

