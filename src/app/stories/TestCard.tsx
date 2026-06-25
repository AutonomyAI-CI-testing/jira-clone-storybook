import React from 'react';

/**
 * UI Magician Agent Smoke Test Component
 * 
 * A self-contained component that approximates a dark Figma design panel.
 * Used to verify the code generation pipeline and UI rendering.
 * 
 * Design choices (colors, spacing, icons) are hardcoded to match the visual
 * requirements for this smoke test.
 */

// Color Constants - Exact hex codes from Figma requirements
const COLORS = {
  bg_panel: '#282826',
  bg_input: '#1e1e1c',
  bg_button: '#b85c38',
  border_subtle: '#4a4a48',
  border_input: '#595956',
  text_primary: '#ffffff',
  text_muted: '#dcdfe4',
  text_placeholder: '#737470',
  text_button: '#fcd7c5',
};

export const TestCard = () => {
  return (
    <div 
      id="testElem" 
      className="p-4 rounded-lg shadow-lg max-w-sm" 
      style={{ backgroundColor: COLORS.bg_panel }}
    >
      {/* Header: Title and Settings Icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 
          className="text-lg font-semibold" 
          style={{ color: COLORS.text_primary }}
        >
          UI magician Agent
        </h2>
        <svg 
          className="w-5 h-5" 
          style={{ color: 'rgb(209 213 219)' }} // text-gray-300
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37zm-2.831 8.25c-.755 0-1.366-.61-1.366-1.365s.61-1.366 1.366-1.366 1.365.61 1.365 1.366-.61 1.365-1.365 1.365z" 
          />
        </svg>
      </div>

      {/* Collapsible Label Row - Uses Unicode chevron for self-containment */}
      <div className="flex items-center mb-6">
        <span className="mr-2 text-xs" style={{ color: COLORS.text_muted }}>▲</span>
        <span className="text-sm" style={{ color: COLORS.text_muted }}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div 
        className="flex items-center mb-4 border-t pt-4" 
        style={{ borderColor: COLORS.border_subtle }}
      >
        <span className="mr-2 text-xs" style={{ color: COLORS.text_primary }}>▲</span>
        <h3 
          className="text-md font-semibold" 
          style={{ color: COLORS.text_primary }}
        >
          Add New Design
        </h3>
      </div>

      {/* Input Fields: PAT and Design URL */}
      <div className="space-y-4 mb-6">
        <div>
          <label 
            htmlFor="p_access_token" 
            className="flex items-center text-sm font-medium mb-2"
            style={{ color: COLORS.text_muted }}
          >
            Personal Access Token 
            <span 
              title="Info about personal access token" 
              className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] ml-1 text-white"
              style={{ backgroundColor: COLORS.border_subtle }}
            >
              i
            </span>
          </label>
          <input
            type="text"
            id="p_access_token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2.5 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500 text-white"
            style={{ 
              backgroundColor: COLORS.bg_input,
              borderColor: COLORS.border_input
            }}
          />
        </div>

        <div>
          <label 
            htmlFor="design_url" 
            className="flex items-center text-sm font-medium mb-2"
            style={{ color: COLORS.text_muted }}
          >
            Design URL 
            <span 
              title="Info about design URL" 
              className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] ml-1 text-white"
              style={{ backgroundColor: COLORS.border_subtle }}
            >
              i
            </span>
          </label>
          <input
            type="text"
            id="design_url"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2.5 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500 text-white"
            style={{ 
              backgroundColor: COLORS.bg_input,
              borderColor: COLORS.border_input
            }}
          />
        </div>
      </div>

      {/* Actions: Primary Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className="flex-1 py-2.5 rounded-lg font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.bg_button, color: COLORS.text_button }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2.5 rounded-lg font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.bg_button, color: COLORS.text_button }}
        >
          Prepare
        </button>
      </div>

      {/* Footer: Recent Activity */}
      <div className="border-t pt-4" style={{ borderColor: COLORS.border_subtle }}>
        <h3 
          className="text-md font-semibold mb-2" 
          style={{ color: COLORS.text_primary }}
        >
          Recent Breakdowns
        </h3>
        <p className="text-xs italic" style={{ color: COLORS.text_muted }}>
          No recent activity found.
        </p>
      </div>
    </div>
  );
};
