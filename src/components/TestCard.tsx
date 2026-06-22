import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard is a self-contained smoke test component used to verify Tailwind CSS 
 * rendering and Storybook integration. It replicates a dark-themed UI panel 
 * with various form elements and sections.
 * 
 * Note: Values like colors and spacing are matched to design specifications.
 */
export const TestCard: React.FC = () => {
  // Design constants for consistent color application
  const COLORS = {
    cardBg: '#1e1e1e',
    inputBg: '#2a2a2a',
    inputBorder: '#444',
    headerText: '#b5b5b5',
    subRowText: '#8b9291',
    sectionText: '#b2b2b1',
    labelText: '#a4a4a3',
    placeholder: '#737470',
    buttonBg: '#8c4a23',
    buttonText: '#c8b0a0',
    footerText: '#b0b0b0',
    iconMuted: 'text-gray-500',
    iconHeader: 'text-gray-400',
  };

  return (
    <div id="testElem" className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div 
        style={{ backgroundColor: COLORS.cardBg }}
        className="text-white p-5 rounded-lg w-[320px] font-sans shadow-xl"
      >
        {/* Header - UI Magician Title and Settings */}
        <div className="flex justify-between items-center">
          <span style={{ color: COLORS.headerText }} className="font-semibold text-lg">
            UI magician Agent
          </span>
          <HiCog className={`${COLORS.iconHeader} text-xl cursor-not-allowed`} />
        </div>

        {/* Status/Scope Row - Collapsed summary */}
        <div className="flex items-center gap-2 mt-4">
          <HiChevronUp className={COLORS.iconMuted} />
          <span style={{ color: COLORS.subRowText }} className="text-sm truncate">
            From entire frame to a singl...
          </span>
        </div>

        <div className="my-6 border-b border-[#333]"></div> {/* Visual Divider */}

        {/* Section Heading - Expandable design selector */}
        <div className="flex items-center gap-2">
          <HiChevronUp className={COLORS.iconMuted} />
          <span style={{ color: COLORS.sectionText }} className="font-semibold text-base">
            Add New Design
          </span>
        </div>

        {/* Configuration Form */}
        <div className="mt-4 space-y-4">
          {/* Personal Access Token Field */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label htmlFor="pat" style={{ color: COLORS.labelText }} className="text-sm">
                Personal Access Token
              </label>
              <HiInformationCircle className={COLORS.iconMuted} title="Figma Personal Access Token" />
            </div>
            <input
              type="text"
              id="pat"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              style={{ 
                backgroundColor: COLORS.inputBg, 
                borderColor: COLORS.inputBorder,
                color: COLORS.placeholder 
              }}
              className="border px-3 py-2 rounded text-sm w-full focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Design URL Field */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label htmlFor="designUrl" style={{ color: COLORS.labelText }} className="text-sm">
                Design URL
              </label>
              <HiInformationCircle className={COLORS.iconMuted} title="Figma Design File URL" />
            </div>
            <input
              type="text"
              id="designUrl"
              placeholder="https://www.figma.com/file/:"
              style={{ 
                backgroundColor: COLORS.inputBg, 
                borderColor: COLORS.inputBorder,
                color: COLORS.placeholder 
              }}
              className="border px-3 py-2 rounded text-sm w-full focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button 
            style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
            className="px-5 py-2 rounded-lg font-medium flex-1 hover:brightness-110 active:scale-95 transition-all"
          >
            Awesome
          </button>
          <button 
            style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
            className="px-5 py-2 rounded-lg font-medium flex-1 hover:brightness-110 active:scale-95 transition-all"
          >
            Prepare
          </button>
        </div>

        {/* Footer - Recent activity indicator */}
        <div className="mt-8 pt-4 border-t border-[#333]">
          <span style={{ color: COLORS.footerText }} className="font-semibold text-base">
            Recent Breakdowns
          </span>
          {/* Placeholder for future breakdown history list */}
        </div>
      </div>
    </div>
  );
};
