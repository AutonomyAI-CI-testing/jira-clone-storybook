
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard - A smoke-test fixture reproducing a dark-themed UI Agent card.
 * This component is used to verify Tailwind CSS rendering and icon integration.
 * It follows a specific design spec with hardcoded dark theme values.
 */
const TestCard: React.FC = () => {
  // Design-specific colors based on the Figma reference
  const COLORS = {
    CARD_BG: 'bg-[#1e1e1e]',
    INPUT_BG: 'bg-[#2a2a2a]',
    ACCENT_ORANGE: 'text-[#c47a3a]',
    BUTTON_BROWN: 'bg-[#8B4513]',
    BORDER: 'border-gray-600',
    DIVIDER: 'border-gray-700',
  };

  return (
    <div id="testElem" className={`p-4 ${COLORS.CARD_BG} text-white min-h-screen font-sans`}>
      {/* Header Row: Main title and settings access */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <button aria-label="Settings" className="hover:opacity-80 transition-opacity">
          <FiSettings className="text-lg" />
        </button>
      </div>

      {/* Context/Subtitle Row: Displays current operational scope */}
      <div className="flex items-center mb-6">
        <FiChevronUp className={`mr-2 ${COLORS.ACCENT_ORANGE}`} aria-hidden="true" />
        <span className={COLORS.ACCENT_ORANGE}>From entire frame to a singl...</span>
      </div>

      <div className={`border-b ${COLORS.DIVIDER} mb-6`} />

      {/* Add New Design Section */}
      <section aria-labelledby="add-design-heading">
        <div className="flex items-center mb-4">
          <FiChevronUp className="mr-2 text-white" aria-hidden="true" />
          <h2 id="add-design-heading" className="text-lg font-bold">Add New Design</h2>
        </div>

        {/* Input Fields for Figma Integration */}
        <div className="space-y-4">
          {/* Personal Access Token Field */}
          <div>
            <div className="flex items-center mb-2">
              <label htmlFor="token" className="text-white mr-2 text-sm">Personal Access Token</label>
              <FiInfo className="text-gray-400 cursor-help" title="Figma Personal Access Token" />
            </div>
            <input
              type="password"
              id="token"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              autoComplete="off"
              className={`w-full p-2 rounded ${COLORS.INPUT_BG} border ${COLORS.BORDER} text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500 outline-none`}
            />
          </div>

          {/* Design URL Field */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <label htmlFor="url" className="text-white mr-2 text-sm">Design URL</label>
              <FiInfo className="text-gray-400 cursor-help" title="Full URL to the Figma file" />
            </div>
            <input
              type="url"
              id="url"
              placeholder="https://www.figma.com/file/:"
              className={`w-full p-2 rounded ${COLORS.INPUT_BG} border ${COLORS.BORDER} text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500 outline-none`}
            />
          </div>
        </div>

        {/* Action Buttons: Primary workflow triggers */}
        <div className="flex gap-3 my-6">
          <button className={`flex-1 py-2 rounded ${COLORS.BUTTON_BROWN} text-white font-semibold hover:brightness-110 active:brightness-90 transition-all`}>
            Awesome
          </button>
          <button className={`flex-1 py-2 rounded ${COLORS.BUTTON_BROWN} text-white font-semibold hover:brightness-110 active:brightness-90 transition-all`}>
            Prepare
          </button>
        </div>
      </section>

      {/* Footer Section: Audit trail of previous actions */}
      <h2 className="text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
