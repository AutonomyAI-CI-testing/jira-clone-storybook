
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard is a smoke-test component that replicates a Figma design.
 * It's used to verify Tailwind CSS rendering and icon integration
 * in a dark-themed, self-contained UI panel.
 */
export const TestCard: React.FC = () => {
  // Theme colors extracted as constants for readability, 
  // though kept as arbitrary values to match the specific smoke-test requirements.
  const theme = {
    cardBg: 'bg-[#1e1e1e]',
    accentText: 'text-[#c49a6c]',
    inputBorder: 'border-[#555]',
    buttonBg: 'bg-[#a0522d]',
  };

  const inputClasses = `w-full p-2 mb-4 border ${theme.inputBorder} bg-transparent rounded text-sm placeholder:text-gray-500 transition-colors focus:outline-none focus:border-gray-400`;
  const buttonClasses = `flex-1 ${theme.buttonBg} hover:opacity-90 active:scale-[0.98] text-white rounded-lg px-4 py-2 text-sm font-medium transition-all`;

  return (
    <div 
      id="testElem" 
      className={`${theme.cardBg} text-white p-4 w-full max-w-xs shadow-xl rounded-sm`}
    >
      {/* Header: Title and Settings */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold tracking-tight">UI magician Agent</h1>
        <button aria-label="Settings" className="hover:opacity-80 transition-opacity">
          <FiSettings className="text-white text-xl" />
        </button>
      </header>

      {/* Subtitle / Breadcrumb-style indicator */}
      <div className={`flex items-center gap-1 ${theme.accentText} text-sm mb-6`}>
        <FiChevronUp aria-hidden="true" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Main Section: Form Controls */}
      <section className="mb-6">
        <h2 className="flex items-center gap-1 font-semibold text-lg mb-4 cursor-default">
          <FiChevronUp aria-hidden="true" />
          Add New Design
        </h2>

        <div className="space-y-4">
          {/* Personal Access Token Input */}
          <div>
            <label htmlFor="accessToken" className="flex items-center gap-1 text-sm text-white mb-2 cursor-pointer">
              Personal Access Token
              <FiInfo className="text-gray-400" aria-hidden="true" />
            </label>
            <input
              id="accessToken"
              type="password" // Changed to password for better security practices by default
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={inputClasses}
            />
          </div>

          {/* Design URL Input */}
          <div>
            <label htmlFor="designUrl" className="flex items-center gap-1 text-sm text-white mb-2 cursor-pointer">
              Design URL
              <FiInfo className="text-gray-400" aria-hidden="true" />
            </label>
            <input
              id="designUrl"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className={`${inputClasses} mb-6`}
            />
          </div>
        </div>

        {/* Primary Actions */}
        <div className="flex gap-3">
          <button className={buttonClasses}>
            Awesome
          </button>
          <button className={buttonClasses}>
            Prepare
          </button>
        </div>
      </section>

      {/* Footer Section: Historical Activity */}
      <footer className="pt-2">
        <h2 className="text-white font-semibold text-lg border-t border-white/10 pt-4">
          Recent Breakdowns
        </h2>
      </footer>
    </div>
  );
};
