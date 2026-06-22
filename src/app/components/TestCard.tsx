import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * Figma-accurate color constants based on designer specs.
 * These are used directly to ensure visual fidelity with the Figma prototype
 * as they don't map directly to the project's default Tailwind palette.
 */
const COLORS = {
  background: "#1a1a1a",
  headerText: "#b5b5b5",
  mutedText: "#8b9291",
  sectionHeading: "#b2b2b1",
  label: "#a3a3a2",
  placeholder: "#737470",
  inputBg: "#252523",
  inputBorder: "#3a3a38",
  buttonBg: "#7c3d1a",
  buttonText: "#8c8078",
  recentHeader: "#b0b0b0",
};

/**
 * TestCard: A smoke-test component for Figma-to-code verification.
 * 
 * DESIGN NOTES:
 * - Uses hardcoded data as per requirements for a self-contained smoke test.
 * - Root element is tagged with id="testElem" for automated UI testing.
 * - Colors are derived from Figma hex codes provided in the spec.
 */
const TestCard: React.FC = () => {
  return (
    <div 
      id="testElem" 
      className="p-5 text-white min-h-screen"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header: Identity and Settings */}
      <header className="flex justify-between items-center mb-5">
        <h2 className="text-lg" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-xl" style={{ color: COLORS.label }} />
      </header>

      {/* Context/Status Row: Muted secondary information */}
      <div className="flex items-center gap-2 mb-20">
        <FiChevronUp style={{ color: COLORS.mutedText }} className="text-lg" />
        <p className="text-sm" style={{ color: COLORS.mutedText }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section: Configurable form inputs */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp style={{ color: COLORS.sectionHeading }} className="text-lg" />
          <h3 className="font-semibold" style={{ color: COLORS.sectionHeading }}>
            Add New Design
          </h3>
        </div>

        {/* Input fields are non-interactive as per spec (presentational only) */}
        <div className="space-y-6">
          {/* Personal Access Token Field */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="pat" className="text-sm" style={{ color: COLORS.label }}>
                Personal Access Token
              </label>
              <AiOutlineInfoCircle className="text-sm" style={{ color: COLORS.label }} />
            </div>
            <input
              type="text"
              id="pat"
              readOnly
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full p-2 rounded-md border text-sm"
              style={{ 
                backgroundColor: COLORS.inputBg, 
                borderColor: COLORS.inputBorder,
                color: COLORS.placeholder 
              }}
            />
          </div>

          {/* Design URL Field */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="design-url" className="text-sm" style={{ color: COLORS.label }}>
                Design URL
              </label>
              <AiOutlineInfoCircle className="text-sm" style={{ color: COLORS.label }} />
            </div>
            <input
              type="text"
              id="design-url"
              readOnly
              placeholder="https://www.figma.com/file/:"
              className="w-full p-2 rounded-md border text-sm"
              style={{ 
                backgroundColor: COLORS.inputBg, 
                borderColor: COLORS.inputBorder,
                color: COLORS.placeholder 
              }}
            />
          </div>
        </div>
      </section>

      {/* Primary Actions */}
      <div className="flex justify-center gap-3 mb-10">
        <button 
          className="px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button 
          className="px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Metadata */}
      <footer>
        <h3 className="font-semibold" style={{ color: COLORS.recentHeader }}>
          Recent Breakdowns
        </h3>
      </footer>
    </div>
  );
};

export default TestCard;
