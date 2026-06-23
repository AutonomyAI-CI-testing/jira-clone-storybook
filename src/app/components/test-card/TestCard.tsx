
import React from 'react';
import { HiOutlineCog, HiChevronUp, HiOutlineInformationCircle } from 'react-icons/hi';

/**
 * TestCard component for the UI magician Agent.
 * Displays configuration fields for Personal Access Token and Design URL,
 * along with action buttons and a list of recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  // Theme constants - preserved exactly from design
  const COLORS = {
    bgMain: '#1c1c1a', // Refined dark background from reference
    bgInput: '#2a2a28', // Refined input background
    borderInput: '#555651', // Matching sharp border color
    textMain: '#e2e2e0', // Brighter text for headers
    textMuted: '#8b9291',
    textLabel: '#969792', // Matching label color
    textInput: '#737470',
    textPlaceholder: '#737470',
    accentBtn: '#8e3f1e', // Darker earthy orange from reference
    textBtn: '#969792', // Label color for button text
    textFooter: '#b0b0b0',
    headerIcon: '#e2e2e0',
    sectionHeader: '#b2b2b1',
  };

  return (
    <div 
      id="testElem"
      className="p-8 flex flex-col gap-8 w-full max-w-[500px]"
      style={{ backgroundColor: COLORS.bgMain }}
    >
      {/* Header: Agent identity and settings access */}
      <div className="flex justify-between items-center mb-2">
        <span 
          className="font-bold text-xl"
          style={{ color: COLORS.textMain }}
        >
          UI magician Agent
        </span>
        <button 
          aria-label="Settings" 
          className="hover:opacity-80 transition-opacity"
        >
          <HiOutlineCog 
            className="text-3xl"
            style={{ color: COLORS.headerIcon }} 
          />
        </button>
      </div>

      {/* Subtitle: Context indicator */}
      <div className="flex items-center gap-3">
        <HiChevronUp 
          className="text-2xl"
          style={{ color: COLORS.textMuted }} 
        />
        <span 
          className="text-base font-semibold"
          style={{ color: COLORS.textMuted }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Form Section Header: Expandable design section */}
      <div className="flex items-center gap-3 mt-10">
        <HiChevronUp 
          className="text-2xl"
          style={{ color: COLORS.sectionHeader }} 
        />
        <span 
          className="font-bold text-xl"
          style={{ color: COLORS.sectionHeader }}
        >
          Add New Design
        </span>
      </div>

      {/* Input Group: Personal Access Token */}
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center gap-4">
          <label 
            htmlFor="pat-input"
            className="text-base font-bold"
            style={{ color: COLORS.textLabel }}
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle 
            className="text-2xl cursor-help"
            style={{ color: COLORS.textLabel }} 
          />
        </div>
        <input
          id="pat-input"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border-2 text-base px-5 py-4 outline-none focus:ring-1 focus:ring-opacity-50"
          style={{ 
            backgroundColor: COLORS.bgInput, 
            borderColor: COLORS.borderInput,
            color: COLORS.textInput,
            borderRadius: '2px'
          }}
        />
      </div>

      {/* Input Group: Design URL */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-4">
          <label 
            htmlFor="url-input"
            className="text-base font-bold"
            style={{ color: COLORS.textLabel }}
          >
            Design URL
          </label>
          <HiOutlineInformationCircle 
            className="text-2xl cursor-help"
            style={{ color: COLORS.textLabel }} 
          />
        </div>
        <input
          id="url-input"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full border-2 text-base px-5 py-4 outline-none focus:ring-1 focus:ring-opacity-50"
          style={{ 
            backgroundColor: COLORS.bgInput, 
            borderColor: COLORS.borderInput,
            color: '#71726e',
            borderRadius: '2px'
          }}
        />
      </div>

      {/* Primary Actions */}
      <div className="flex gap-4 mt-8">
        <button 
          className="px-8 py-5 font-bold text-base flex-1 hover:opacity-90 active:scale-95 transition-all"
          style={{ backgroundColor: COLORS.accentBtn, color: COLORS.textBtn, borderRadius: '8px' }}
        >
          Awesome
        </button>
        <button 
          className="px-8 py-5 font-bold text-base flex-1 hover:opacity-90 active:scale-95 transition-all"
          style={{ backgroundColor: COLORS.accentBtn, color: COLORS.textBtn, borderRadius: '8px' }}
        >
          Prepare
        </button>
      </div>

      {/* Footer: Contextual history */}
      <div className="mt-16">
        <p 
          className="font-bold text-xl"
          style={{ color: COLORS.textFooter }}
        >
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};
