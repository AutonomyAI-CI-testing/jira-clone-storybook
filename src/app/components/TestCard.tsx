
import React from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';

// Colors matched to the Figma design specs for the smoke test
const COLORS = {
  background: '#1a1a1a',
  surface: '#2a2a2a',
  border: '#4a4a4a',
  primary: '#b5541a', // Orange/brown buttons
  textMuted: '#b87046', // Muted orange subtitle
  textWhite: '#ffffff',
} as const;

/**
 * TestCard is a self-contained smoke test component used to verify the 
 * rendering pipeline, Tailwind CSS, and icon libraries.
 * 
 * Replicates the "UI magician Agent" panel from Figma.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ 
        backgroundColor: COLORS.background, 
        color: COLORS.textWhite, 
        width: '300px', 
        fontFamily: 'sans-serif' 
      }}
      className="p-5 flex flex-col gap-4"
    >
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <IoSettingsOutline style={{ width: '1.25rem', height: '1.25rem' }} />
      </div>

      {/* Subtitle with chevron indicator */}
      <div className="flex items-center gap-1">
        <BsChevronUp style={{ width: '1rem', height: '1rem' }} />
        <span style={{ color: COLORS.textMuted }}>From entire frame to a singl...</span>
      </div>

      {/* Visual spacer to match the design's vertical rhythm */}
      <div className="py-6" aria-hidden="true" />

      {/* Main interaction section header */}
      <div className="flex items-center gap-2 font-bold text-lg">
        <BsChevronUp style={{ width: '1rem', height: '1rem' }} />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token Input */}
      <div>
        <div className="flex items-center gap-2 text-sm mb-1">
          <label htmlFor="pat-input">Personal Access Token</label>
          <AiOutlineInfoCircle style={{ width: '1rem', height: '1rem' }} />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{ 
            backgroundColor: COLORS.surface, 
            border: `1px solid ${COLORS.border}`, 
            color: COLORS.textWhite, 
            width: '100%' 
          }}
          className="p-2 rounded-lg"
        />
      </div>

      {/* Design URL Input */}
      <div>
        <div className="flex items-center gap-2 text-sm mb-1">
          <label htmlFor="url-input">Design URL</label>
          <AiOutlineInfoCircle style={{ width: '1rem', height: '1rem' }} />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{ 
            backgroundColor: COLORS.surface, 
            border: `1px solid ${COLORS.border}`, 
            color: COLORS.textWhite, 
            width: '100%' 
          }}
          className="p-2 rounded-lg"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          style={{ backgroundColor: COLORS.primary, color: COLORS.textWhite }}
          className="rounded-lg px-5 py-2 font-bold"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: COLORS.primary, color: COLORS.textWhite }}
          className="rounded-lg px-5 py-2 font-bold"
        >
          Prepare
        </button>
      </div>

      {/* Recent history section header */}
      <h2 className="font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};
