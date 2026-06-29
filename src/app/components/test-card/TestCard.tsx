
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * TestCard component replicates the "UI magician Agent" Figma design panel.
 * It's a standalone visual component for design fidelity testing.
 */
export const TestCard = () => {
  // Design-specific colors from Figma specs
  const colors = {
    cardBg: '#272822',
    textMain: '#b5b5b5',
    textMuted: '#8b9291',
    textHeading: '#b2b2b1',
    textLabel: '#a4a4a3',
    textLabelAlt: '#a3a3a2',
    inputPlaceholder: '#737470',
    inputPlaceholderAlt: '#71726e',
    inputBorder: '#a5adad',
    inputBorderAlt: '#929291',
    buttonBg: '#843a17',
    recentBreakdowns: '#b0b0b0',
  };

  return (
    <div id="testElem" className="w-[254px] p-5 font-sans" style={{ backgroundColor: colors.cardBg }}>
      {/* Header Row */}
      <header className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold" style={{ color: colors.textMain }}>
          UI magician Agent
        </h2>
        <FiSettings className="text-sm" style={{ color: colors.textMain }} />
      </header>

      {/* Collapsed Section Heading */}
      <section className="flex items-center mb-5 gap-1">
        <FiChevronUp className="text-xs" style={{ color: colors.textMuted }} />
        <p className="text-xs truncate" style={{ color: colors.textMuted }}>
          From entire frame to a singl...
        </p>
      </section>

      {/* Main Action Section: Add New Design */}
      <section className="flex items-center mb-4 gap-1">
        <FiChevronUp className="text-sm" style={{ color: colors.textHeading }} />
        <h3 className="text-sm font-semibold" style={{ color: colors.textHeading }}>
          Add New Design
        </h3>
      </section>

      {/* Form Fields */}
      <div className="space-y-4 mb-5">
        {/* Personal Access Token Input */}
        <div>
          <label 
            htmlFor="pat" 
            className="flex items-center text-xs mb-1 gap-1" 
            style={{ color: colors.textLabel }}
          >
            Personal Access Token
            <FiInfo className="text-xs" />
          </label>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 bg-transparent border text-xs focus:outline-none focus:ring-1"
            style={{ 
              borderColor: colors.inputBorder,
              color: colors.inputPlaceholder,
              // Focus ring color matches border color
              '--tw-ring-color': colors.inputBorder 
            } as React.CSSProperties}
          />
        </div>

        {/* Design URL Input */}
        <div>
          <label 
            htmlFor="designUrl" 
            className="flex items-center text-xs mb-1 gap-1" 
            style={{ color: colors.textLabelAlt }}
          >
            Design URL
            <FiInfo className="text-xs" />
          </label>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 bg-transparent border-2 text-xs focus:outline-none focus:ring-1"
            style={{ 
              borderColor: colors.inputBorderAlt,
              color: colors.inputPlaceholderAlt,
              '--tw-ring-color': colors.inputBorderAlt
            } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Primary Actions */}
      <div className="flex gap-3 mb-5">
        <button 
          className="flex-1 p-2 text-white rounded font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: colors.buttonBg }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 p-2 text-white rounded font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: colors.buttonBg }}
        >
          Prepare
        </button>
      </div>

      {/* Secondary Section Header */}
      <footer>
        <h3 className="text-sm font-semibold" style={{ color: colors.recentBreakdowns }}>
          Recent Breakdowns
        </h3>
      </footer>
    </div>
  );
};

