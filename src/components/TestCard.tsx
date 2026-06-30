import React from "react";

/**
 * Constants for the TestCard component to maintain consistency and readability.
 * The hex values are kept exactly as in the original design.
 */
const COLORS = {
  bg: "#222",
  inputBg: "#2a2a2a",
  borderColor: "#3a3a3a",
  textPrimary: "#b5b5b5",
  textSecondary: "#8b9291",
  textTertiary: "#b2b2b1",
  label: "#a4a4a3",
  inputText: "#737470",
  buttonBg: "#7a4020",
  buttonHover: "#915a3a",
  buttonText: "#8c8078",
  footerHeader: "#b0b0b0",
};

/**
 * Helper component for rendering input labels with an info icon.
 */
const InputLabel = ({ label, htmlFor }: { label: string; htmlFor: string }) => (
  <div className="flex items-center gap-1 mb-1">
    <label htmlFor={htmlFor} className="text-xs font-semibold" style={{ color: COLORS.label }}>
      {label}
    </label>
    <svg
      className="w-3 h-3"
      style={{ color: COLORS.label }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
);

/**
 * TestCard component - A UI card for the "UI magician Agent" featuring design input fields.
 * Extracted into smaller parts for maintainability while preserving the identical UI.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="w-full max-w-sm p-4 rounded-lg shadow-lg"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header: Title and Settings Icon */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-sm" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h2>
        <svg
          className="w-4 h-4"
          style={{ color: COLORS.textSecondary }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Subtitle with Chevron */}
      <div className="flex items-center gap-1 mt-1">
        <svg
          className="w-3 h-3 transform rotate-180"
          style={{ color: COLORS.textSecondary }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
        <p className="text-xs font-semibold" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center gap-1 mt-4">
        <svg
          className="w-3 h-3 transform rotate-180"
          style={{ color: COLORS.textTertiary }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
        <h3 className="font-semibold text-sm" style={{ color: COLORS.textTertiary }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mt-4">
        <InputLabel label="Personal Access Token" htmlFor="pat" />
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full rounded border p-2 text-xs focus:ring-blue-500 focus:border-blue-500"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.borderColor,
            color: COLORS.inputText 
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mt-4">
        <InputLabel label="Design URL" htmlFor="design-url" />
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border p-2 text-xs focus:ring-blue-500 focus:border-blue-500"
          style={{ 
            backgroundColor: COLORS.inputBg, 
            borderColor: COLORS.borderColor,
            color: COLORS.inputText 
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button 
          className="flex-1 rounded-lg py-2 font-semibold text-xs transition-colors"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBg)}
        >
          Awesome
        </button>
        <button 
          className="flex-1 rounded-lg py-2 font-semibold text-xs transition-colors"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBg)}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section Title */}
      <div className="mt-6">
        <h3 className="font-semibold text-sm" style={{ color: COLORS.footerHeader }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
 
