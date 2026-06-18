
import React from 'react';

/**
 * Icons extracted for readability and reuse within the file.
 * Following the "standalone" requirement from the planner, these are defined locally.
 */
const Icons = {
  Gear: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.62l.3.3a2 2 0 0 1 0 2.82l-2.82 2.82a2 2 0 0 1-2.82 0l-.3-.3a1.65 1.65 0 0 0-1.62-.3H9a1.65 1.65 0 0 0-1.62.3l-.3.3a2 2 0 0 1-2.82 0L1.76 19.4a2 2 0 0 1 0-2.82l.3-.3a1.65 1.65 0 0 0 .3-1.62V9a1.65 1.65 0 0 0-.3-1.62l-.3-.3a2 2 0 0 1 0-2.82L4.64 1.76a2 2 0 0 1 2.82 0l.3.3a1.65 1.65 0 0 0 1.62.3h6a1.65 1.65 0 0 0 1.62-.3l.3-.3a2 2 0 0 1 2.82 0l2.82 2.82a2 2 0 0 1 0 2.82l-.3.3a1.65 1.65 0 0 0-.3 1.62v6z" />
    </svg>
  ),
  ChevronUp: ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} transform rotate-180`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Info: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 ml-1"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
};

/**
 * TestCard component
 * 
 * A self-contained component replicating a Figma design for design fidelity testing.
 * Uses arbitrary Tailwind values (bg-[#...]) to match specific Figma colors
 * that aren't part of the standard theme.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-white rounded-md shadow-lg">
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <Icons.Gear />
      </div>

      {/* Subtitle Row: Contextual hint with muted rust color */}
      <div className="flex items-center text-[#a07060] mb-6">
        <Icons.ChevronUp className="h-4 w-4 mr-1" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Configuration Section */}
      <div className="mb-6">
        <div className="flex items-center font-bold text-lg mb-4">
          <Icons.ChevronUp className="h-4 w-4 mr-2" />
          <span>Add New Design</span>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          <InputField
            id="pat"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <InputField
            id="designUrl"
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        {/* Action Buttons: Rust colored CTAs */}
        <div className="flex justify-between space-x-4 mb-6">
          <ActionButton onClick={() => {}}>Awesome</ActionButton>
          <ActionButton onClick={() => {}}>Prepare</ActionButton>
        </div>
      </div>

      {/* Recent Activity Footer */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Reusable input field with label and info icon.
 * Styled to match the dark theme requirement.
 */
const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-white text-sm font-bold mb-2 flex items-center">
      {label}
      <Icons.Info />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 rounded bg-[#333] border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
    />
  </div>
);

/**
 * Primary action button with the specific rust background color.
 */
const ActionButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex-1 py-2 px-4 bg-[#b85c30] text-white font-bold rounded-md hover:opacity-90 active:scale-[0.98] transition-all"
  >
    {children}
  </button>
);

