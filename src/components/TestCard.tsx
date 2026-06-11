import React from "react";

/**
 * Design constants matched from Figma design
 */
const COLORS = {
  background: "#2a2a2a",
  accent: "#c8611a",
  buttonBg: "#b5521b",
  inputBorder: "#4a4a4a",
  inputBg: "#1e1e1e",
  white: "#ffffff",
} as const;

/**
 * Reusable layout for form input fields
 */
const FormField: React.FC<{
  id: string;
  label: string;
  placeholder: string;
}> = ({ id, label, placeholder }) => (
  <div className="mb-4">
    <div className="mb-2 flex items-center gap-1">
      <label htmlFor={id} className="text-sm text-white">
        {label}
      </label>
      <span className="text-gray-400 text-xs">ℹ</span>
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full rounded-lg border p-3 focus:outline-none"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBorder,
        color: COLORS.white,
      }}
    />
  </div>
);

/**
 * TestCard component
 *
 * Replicates a "UI Magician Agent" interface from a Figma design.
 * Uses inline styles for custom colors because src/components/ is outside
 * the project's Tailwind content scan.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="shadow-xl rounded-lg p-6"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <span className="cursor-pointer text-white opacity-80 transition-opacity hover:opacity-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.82-.33z"></path>
          </svg>
        </span>
      </div>

      {/* Subtitle Row - Truncation matches Figma design intent */}
      <div className="mt-2 flex items-center gap-1">
        <span className="text-xs text-white opacity-60">^</span>
        <p className="text-sm font-medium" style={{ color: COLORS.accent }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer */}
      <div className="mt-8"></div>

      {/* Section Header */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs text-white opacity-60">^</span>
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <FormField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Design URL Field */}
      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Buttons Row */}
      <div className="mt-4 flex gap-3">
        <button
          className="rounded-lg px-6 py-3 font-semibold text-white transition-all hover:brightness-110 active:scale-95"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Awesome
        </button>
        <button
          className="rounded-lg px-6 py-3 font-semibold text-white transition-all hover:brightness-110 active:scale-95"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="mt-8 border-t border-white/10 pt-4">
        <h2 className="text-xl font-bold text-white opacity-90">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
