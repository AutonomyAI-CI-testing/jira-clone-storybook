import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * Colors mapped from Figma design for use in inline styles.
 * Required because src/components/ is not scanned by Tailwind's JIT.
 */
const COLORS = {
  background: "#2a2a2a",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionHeading: "#b2b2b1",
  label: "#a4a4a3",
  inputBg: "#3a3a3a",
  inputPlaceholder: "#737470",
  buttonBg: "#7a4030",
};

/**
 * Common input field component for local use.
 */
const FormField: React.FC<{
  label: string;
  placeholder: string;
}> = ({ label, placeholder }) => (
  <div className="mb-4 last:mb-6">
    <label
      className="flex items-center gap-2 text-sm font-medium mb-2"
      style={{ color: COLORS.label }}
    >
      {label} <FiInfo size={14} style={{ color: COLORS.label }} />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-3 rounded-md border text-sm focus:outline-none"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBg,
        color: COLORS.headerText,
      }}
    />
  </div>
);

/**
 * TestCard: A smoke-test component visually approximating the Figma design.
 * Render-only component with hardcoded values and root ID "testElem".
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h2>
        <FiSettings size={20} style={{ color: COLORS.headerText }} />
      </div>

      {/* Primary subtitle with collapsible chevron */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp size={18} style={{ color: COLORS.subtitleText }} />
        <p className="text-sm" style={{ color: COLORS.subtitleText }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Form section header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={18} style={{ color: COLORS.sectionHeading }} />
        <h3 className="text-base font-semibold" style={{ color: COLORS.sectionHeading }}>
          Add New Design
        </h3>
      </div>

      <FormField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <FormField label="Design URL" placeholder="https://www.figma.com/file/:" />

      {/* Shared action button pair */}
      <div className="flex gap-4 mb-8">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            className="flex-1 py-3 px-6 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: COLORS.buttonBg, color: COLORS.headerText }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Footer section head */}
      <div>
        <h3 className="text-base font-semibold" style={{ color: COLORS.sectionHeading }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
