
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp, HiOutlineInformationCircle } from 'react-icons/hi';

/**
 * Visual design constants matching the Figma reference.
 * These are kept as hex codes to match the dark-mode smoke test requirements.
 */
const COLORS = {
  bgMain: '#1a1a1a',
  bgInput: '#131110',
  borderInput: '#2e2a27',
  textPrimary: '#d1d1d1',
  textSecondary: '#8b9291',
  textBody: '#b5b5b5',
  placeholder: '#737470',
  placeholderAlt: '#71726e',
  accentButton: '#9d442c',
} as const;

export function TestCard() {
  return (
    <div 
      id="testElem" 
      className="p-8 font-sans min-h-screen"
      style={{ backgroundColor: COLORS.bgMain, color: COLORS.textBody }}
    >
      {/* Header Row: Title and Settings affordance */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[22px] font-bold" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-2xl" style={{ color: COLORS.textPrimary }} />
      </div>

      {/* Collapsed Row: Contextual information */}
      <div className="flex items-center text-lg mb-10" style={{ color: COLORS.textSecondary }}>
        <HiChevronUp className="text-xl mr-2" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section Header */}
      <div className="flex items-center text-[22px] font-bold mb-8 mt-12" style={{ color: COLORS.textPrimary }}>
        <HiChevronUp className="text-xl mr-2" />
        <h3>Add New Design</h3>
      </div>

      {/* Form Fields: Using manual styles for colors to avoid dependency on global theme overrides */}
      <div className="mb-8">
        <label htmlFor="personalAccessToken" className="flex items-center text-lg mb-3" style={{ color: COLORS.textPrimary }}>
          Personal Access Token
          <HiOutlineInformationCircle className="ml-2 text-xl" />
        </label>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{ backgroundColor: COLORS.bgInput, color: COLORS.textBody, borderColor: COLORS.borderInput }}
          className="w-full p-3 border rounded-sm focus:outline-none focus:border-blue-500 text-lg placeholder:text-[#737470]"
        />
      </div>

      <div className="mb-10">
        <label htmlFor="designUrl" className="flex items-center text-lg mb-3" style={{ color: COLORS.textPrimary }}>
          Design URL
          <HiOutlineInformationCircle className="ml-2 text-xl" />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          style={{ backgroundColor: COLORS.bgInput, color: COLORS.textBody, borderColor: COLORS.borderInput }}
          className="w-full p-3 border rounded-sm focus:outline-none focus:border-blue-500 text-lg placeholder:text-[#71726e]"
        />
      </div>

      {/* Primary Actions: Rounded brand buttons */}
      <div className="flex space-x-6 mb-16">
        <button 
          style={{ backgroundColor: COLORS.accentButton }}
          className="flex-1 py-4 px-4 text-xl font-semibold rounded-lg hover:brightness-110 transition-all"
        >
          Awesome
        </button>
        <button 
          style={{ backgroundColor: COLORS.accentButton }}
          className="flex-1 py-4 px-4 text-xl font-semibold rounded-lg hover:brightness-110 transition-all"
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <h3 className="text-[22px] font-bold" style={{ color: COLORS.textPrimary }}>
        Recent Breakdowns
      </h3>
    </div>
  );
}
