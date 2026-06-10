import React from 'react';

/**
 * TestCard component displays a design integration panel with inputs for 
 * Personal Access Tokens and Design URLs.
 */
const TestCard: React.FC = () => {
  // Constants for styling to improve readability and maintain consistency
  const COLORS = {
    bg: 'bg-[#262626]',
    inputBg: 'bg-[#1a1a1a]',
    primaryButton: 'bg-[#b5582f]',
    primaryButtonHover: 'hover:bg-[#a04e28]',
    border: 'border-gray-600',
    textMain: 'text-gray-200',
    textMuted: 'text-gray-400',
    accent: 'focus:border-orange-500'
  };

  return (
    <div className={`${COLORS.bg} ${COLORS.textMain} p-4 w-[254px]`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">UI magician Agent</h1>
        <span className={COLORS.textMuted} aria-hidden="true">⚙️</span>
      </div>

      {/* Status section - truncated text is intentional for design constraints */}
      <div className="mb-4">
        <div className={`flex items-center ${COLORS.textMuted} text-sm font-semibold`}>
          <span className="mr-1" aria-hidden="true">▲</span> From entire frame to a singl...
        </div>
      </div>

      {/* New Design Section */}
      <div className="mb-6">
        <h2 className="flex items-center text-md font-semibold mb-3">
          <span className="mr-1" aria-hidden="true">▲</span> Add New Design
        </h2>

        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label htmlFor="pat-input" className="block text-sm font-medium mb-1">
            Personal Access Token 
            <span className={`inline-block ml-1 ${COLORS.textMuted} text-xs`} title="Your Figma personal access token">ⓘ</span>
          </label>
          <input
            id="pat-input"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
            className={`w-full p-2 ${COLORS.inputBg} border ${COLORS.border} rounded-md text-sm outline-none ${COLORS.accent}`}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-4">
          <label htmlFor="design-url-input" className="block text-sm font-medium mb-1">
            Design URL 
            <span className={`inline-block ml-1 ${COLORS.textMuted} text-xs`} title="Link to the Figma design file">ⓘ</span>
          </label>
          <input
            id="design-url-input"
            type="text"
            placeholder="https://www.figma.com/file/"
            className={`w-full p-2 ${COLORS.inputBg} border ${COLORS.border} rounded-md text-sm outline-none ${COLORS.accent}`}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className={`flex-1 py-2 px-4 ${COLORS.primaryButton} ${COLORS.primaryButtonHover} rounded-md text-white font-medium text-sm transition-colors`}>
            Awesome
          </button>
          <button className={`flex-1 py-2 px-4 ${COLORS.primaryButton} ${COLORS.primaryButtonHover} rounded-md text-white font-medium text-sm transition-colors`}>
            Prepare
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <h2 className="text-md font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
