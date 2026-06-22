import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

const COLORS = {
  BACKGROUND: '#1e1e1e',
  INPUT_BACKGROUND: '#2a2a2a',
  PRIMARY: '#b5541a',
  PRIMARY_HOVER: '#a04a16',
};

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-6 text-white rounded-lg shadow-lg max-w-md mx-auto" style={{ backgroundColor: COLORS.BACKGROUND }}>
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <HiCog className="text-gray-400 text-2xl" />
      </div>

      {/* Collapsible Row 1 */}
      <div className="flex items-center gap-1 mb-4" style={{ color: COLORS.PRIMARY }}>
        <HiChevronUp className="text-xl" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer - provides vertical rhythm between sections */}
      <div className="h-8"></div>

      {/* Section Header Row */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-white text-xl" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Section */}
      <div className="flex items-center gap-1 mt-4 mb-2">
        <label htmlFor="pat" className="text-white font-medium">Personal Access Token</label>
        <HiInformationCircle className="text-gray-400" title="Provide your Figma Personal Access Token" />
      </div>
      <input
        id="pat"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full border border-gray-600 rounded text-gray-400 px-3 py-2 mb-4 focus:outline-none focus:ring-1"
        style={{ 
          backgroundColor: COLORS.INPUT_BACKGROUND,
          borderColor: 'rgb(75 85 99)', // gray-600
        }}
      />

      {/* Design URL Section */}
      <div className="flex items-center gap-1 mt-3 mb-2">
        <label htmlFor="designUrl" className="text-white font-medium">Design URL</label>
        <HiInformationCircle className="text-gray-400" title="The link to your Figma design file" />
      </div>
      <input
        id="designUrl"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full border border-gray-600 rounded text-gray-400 px-3 py-2 mb-6 focus:outline-none focus:ring-1"
        style={{ 
          backgroundColor: COLORS.INPUT_BACKGROUND,
        }}
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button 
          className="text-white px-6 py-3 rounded-xl font-medium shadow-md transition-colors"
          style={{ backgroundColor: COLORS.PRIMARY }}
        >
          Awesome
        </button>
        <button 
          className="text-white px-6 py-3 rounded-xl font-medium shadow-md transition-colors"
          style={{ backgroundColor: COLORS.PRIMARY }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Heading */}
      <h2 className="mt-8 text-lg font-bold text-white mb-2">Recent Breakdowns</h2>
    </div>
  );
};