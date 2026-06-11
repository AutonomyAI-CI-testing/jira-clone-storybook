
import React from 'react';
import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { IoChevronUp } from 'react-icons/io5';

/**
 * Constants for the component's theme and styles.
 * Extracted to maintain consistency and allow for easier updates.
 */
const COLORS = {
  background: '#2a2a2a',
  inputBackground: '#3a3a3a',
  inputBorder: '#555',
  buttonBackground: '#b45309', // Amber-brown color for primary actions
  textSecondary: '#a0a0a0',
  white: 'white',
};

/**
 * TestCard: A smoke test component that approximates a dark-themed UI panel.
 * It follows a specific Figma design used to verify rendering fidelity.
 */
export function TestCard() {
  return (
    <div 
      id="testElem" 
      className="p-4 rounded-lg shadow-lg" 
      style={{ 
        backgroundColor: COLORS.background, 
        color: COLORS.white, 
        width: '300px' 
      }}
    >
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <button 
          type="button" 
          aria-label="Settings"
          className="hover:opacity-80 transition-opacity"
        >
          <AiOutlineSetting size={20} />
        </button>
      </div>

      {/* Breadcrumb/Status Row: Shows context of the current design source */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUp size={16} style={{ color: COLORS.buttonBackground }} />
        <p className="text-sm" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Trigger: Visual header for adding new content */}
      <div className="flex items-center gap-2 mb-4 mt-6">
        <IoChevronUp size={16} />
        <h3 className="text-md font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Field: Input for Figma API authentication */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="pat" className="text-sm">Personal Access Token</label>
          <AiOutlineInfoCircle 
            size={14} 
            style={{ color: COLORS.textSecondary }} 
            title="Your Figma Personal Access Token"
          />
        </div>
        <input
          id="pat"
          type="password" // Changed to password for security-sensitive data
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border text-sm outline-none focus:ring-1 focus:ring-amber-600 transition-all"
          style={{ 
            backgroundColor: COLORS.inputBackground, 
            borderColor: COLORS.inputBorder, 
            color: COLORS.white 
          }}
        />
      </div>

      {/* Design URL Field: Link to the Figma file to be processed */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label htmlFor="designUrl" className="text-sm">Design URL</label>
          <AiOutlineInfoCircle 
            size={14} 
            style={{ color: COLORS.textSecondary }} 
            title="URL of the Figma file"
          />
        </div>
        <input
          id="designUrl"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border text-sm outline-none focus:ring-1 focus:ring-amber-600 transition-all"
          style={{ 
            backgroundColor: COLORS.inputBackground, 
            borderColor: COLORS.inputBorder, 
            color: COLORS.white 
          }}
        />
      </div>

      {/* Action Buttons: Principal UI actions for the agent */}
      <div className="flex gap-3 mb-6">
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded-md font-semibold hover:brightness-110 active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.white }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded-md font-semibold hover:brightness-110 active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.buttonBackground, color: COLORS.white }}
        >
          Prepare
        </button>
      </div>

      {/* Recent History Section Footer */}
      <div className="border-t pt-4" style={{ borderColor: '#444' }}>
        <h3 className="text-md font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
