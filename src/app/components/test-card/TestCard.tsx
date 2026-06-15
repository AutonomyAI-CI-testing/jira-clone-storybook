import React from 'react';
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// The specific orange-brown color used for buttons as requested in the design spec
const ACCENT_COLOR = '#b85c2c';
// Muted text and icon color for secondary information
const MUTED_COLOR = '#9ca3af';

/**
 * TestCard: A self-contained smoke-test component mirroring a "UI Magician Agent" design.
 * This component validates the rendering pipeline and visual structure.
 * It uses hardcoded content and inline styling for specific brand colors.
 */
const TestCard: React.FC = () => {
  return (
    <div 
      id="testElem" 
      className="p-5 max-w-xs font-sans rounded-lg shadow-lg bg-[#1a1a1a] text-white"
    >
      {/* Header row: title + gear icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <HiOutlineCog className="w-5 h-5" />
      </div>

      {/* Subtitle row: chevron-up + muted text */}
      <div className="flex items-center gap-1 text-sm mb-6" style={{ color: MUTED_COLOR }}>
        <HiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Vertical spacer to separate header from action section */}
      <div className="h-8" aria-hidden="true"></div>

      {/* Section: chevron-up + "Add New Design" */}
      <div className="flex items-center gap-1 mb-4">
        <HiChevronUp className="w-4 h-4 text-white" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Label: "Personal Access Token" + info icon */}
      <div className="flex items-center gap-1 text-sm mb-2">
        <span>Personal Access Token</span>
        <HiInformationCircle className="w-4 h-4" style={{ color: MUTED_COLOR }} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full p-2 mb-4 rounded-md border bg-[#2a2a2a] border-[#374151] text-[#d1d5db]"
      />

      {/* Label: "Design URL" + info icon */}
      <div className="flex items-center gap-1 text-sm mb-2">
        <span>Design URL</span>
        <HiInformationCircle className="w-4 h-4" style={{ color: MUTED_COLOR }} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full p-2 mb-6 rounded-md border bg-[#2a2a2a] border-[#374151] text-[#d1d5db]"
      />

      {/* Action buttons: Side-by-side with accent brand color */}
      <div className="flex gap-3 mb-8">
        <button
          style={{ backgroundColor: ACCENT_COLOR }}
          className="text-white rounded-lg px-6 py-3 font-semibold flex-1 hover:brightness-110 transition-all"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: ACCENT_COLOR }}
          className="text-white rounded-lg px-6 py-3 font-semibold flex-1 hover:brightness-110 transition-all"
        >
          Prepare
        </button>
      </div>

      {/* Footer section heading */}
      <h2 className="text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
