
import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * TestCard component for the UI magician Agent.
 * Displays configuration fields for Personal Access Token and Design URL,
 * along with action buttons and a list of recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  // Theme constants - preserved exactly from design
  const COLORS = {
    bgMain: '#2a2a2a',
    bgInput: '#333',
    borderInput: '#444',
    textMain: '#b5b5b5',
    textMuted: '#8b9291',
    textLabel: '#a4a4a3',
    textInput: '#737470',
    textPlaceholder: '#737470',
    accentBtn: '#b5501e',
    textBtn: '#8c8078',
    textFooter: '#b0b0b0',
    headerIcon: '#b5b5b5',
    sectionHeader: '#b2b2b1',
  };

  return (
    <div 
      id="testElem"
      className="p-4 flex flex-col gap-4 min-w-[300px]"
      style={{ backgroundColor: COLORS.bgMain }}
    >
      {/* Header: Agent identity and settings access */}
      <div className="flex justify-between items-center">
        <span 
          className="font-semibold text-sm"
          style={{ color: COLORS.textMain }}
        >
          UI magician Agent
        </span>
        <button 
          aria-label="Settings" 
          className="hover:opacity-80 transition-opacity"
        >
          <HiCog 
            className="text-lg"
            style={{ color: COLORS.headerIcon }} 
          />
        </button>
      </div>

      {/* Subtitle: Context indicator */}
      <div className="flex items-center gap-1">
        <HiChevronUp 
          className="text-lg"
          style={{ color: COLORS.textMuted }} 
        />
        <span 
          className="text-xs font-semibold"
          style={{ color: COLORS.textMuted }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Form Section Header: Expandable design section */}
      <div className="flex items-center gap-1 mt-2">
        <HiChevronUp 
          className="text-lg"
          style={{ color: COLORS.sectionHeader }} 
        />
        <span 
          className="font-semibold text-sm"
          style={{ color: COLORS.sectionHeader }}
        >
          Add New Design
        </span>
      </div>

      {/* Input Group: Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label 
            htmlFor="pat-input"
            className="text-xs font-semibold"
            style={{ color: COLORS.textLabel }}
          >
            Personal Access Token
          </label>
          <HiInformationCircle 
            className="text-sm cursor-help"
            style={{ color: COLORS.textLabel }} 
          />
        </div>
        <input
          id="pat-input"
          type="password" // Security best practice for tokens
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border text-xs px-3 py-2 outline-none focus:ring-1 focus:ring-opacity-50"
          style={{ 
            backgroundColor: COLORS.bgInput, 
            borderColor: COLORS.borderInput,
            color: COLORS.textInput 
          }}
        />
      </div>

      {/* Input Group: Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label 
            htmlFor="url-input"
            className="text-xs font-semibold"
            style={{ color: COLORS.textLabel }}
          >
            Design URL
          </label>
          <HiInformationCircle 
            className="text-sm cursor-help"
            style={{ color: COLORS.textLabel }} 
          />
        </div>
        <input
          id="url-input"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border text-xs px-3 py-2 outline-none focus:ring-1 focus:ring-opacity-50"
          style={{ 
            backgroundColor: COLORS.bgInput, 
            borderColor: COLORS.borderInput,
            color: '#71726e' // Preserving unique color from design
          }}
        />
      </div>

      {/* Primary Actions */}
      <div className="flex gap-3 mt-2">
        <button 
          className="rounded-lg px-4 py-2 font-semibold text-xs flex-1 hover:opacity-90 active:scale-95 transition-all"
          style={{ backgroundColor: COLORS.accentBtn, color: COLORS.textBtn }}
        >
          Awesome
        </button>
        <button 
          className="rounded-lg px-4 py-2 font-semibold text-xs flex-1 hover:opacity-90 active:scale-95 transition-all"
          style={{ backgroundColor: COLORS.accentBtn, color: COLORS.textBtn }}
        >
          Prepare
        </button>
      </div>

      {/* Footer: Contextual history */}
      <div className="mt-4">
        <p 
          className="font-semibold text-sm"
          style={{ color: COLORS.textFooter }}
        >
          Recent Breakdowns
        </p>
      </div>
    </div>
  );
};
