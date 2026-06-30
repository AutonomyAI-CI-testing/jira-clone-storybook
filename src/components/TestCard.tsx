import React from "react";

/**
 * Icons extracted as sub-components for readability.
 * SVGs are inlined to keep the component self-contained for the smoke test.
 */
const GearIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
);

/**
 * TestCard component
 * 
 * Visual smoke test component approximating a Figma design for a "UI magician Agent" panel.
 * Uses exact hex colors and inline SVGs to ensure fidelity without project-wide dependencies.
 */
const TestCard = () => {
  // Figma design constants
  const COLORS = {
    background: "#2a2a2a",
    buttonBg: "#7c4b2a",
    inputBg: "#333",
    inputBorder: "#444",
    title: "#b5b5b5",
    subtitle: "#8b9291",
    label: "#a4a4a3",
    placeholder: "#737470",
    sectionHeader: "#b2b2b1",
    recentHead: "#b0b0b0",
    btnText: "#8c8078",
  };

  return (
    <div
      id="testElem"
      className="p-4 text-white rounded-lg w-[320px]"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.title }}
        >
          UI magician Agent
        </h2>
        <GearIcon className="w-4 h-4" style={{ color: COLORS.title }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center space-x-2 mb-4">
        <ChevronUpIcon
          className="w-3 h-3"
          style={{ color: COLORS.sectionHeader }}
        />
        <p className="text-[11.5px]" style={{ color: COLORS.subtitle }}>
          From entire frame to a singl...
        </p>
      </div>

      <div className="my-4 border-b border-gray-700 opacity-50" />

      {/* Add New Design Section */}
      <div className="flex items-center space-x-2 mb-4">
        <ChevronUpIcon
          className="w-3 h-3"
          style={{ color: COLORS.sectionHeader }}
        />
        <h3
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.sectionHeader }}
        >
          Add New Design
        </h3>
      </div>

      {/* Input: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center space-x-1 mb-2">
          <label className="text-[11.5px]" style={{ color: COLORS.label }}>
            Personal Access Token
          </label>
          <InfoIcon className="w-3 h-3" style={{ color: COLORS.label }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md border text-[11.5px] outline-none"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholder,
          }}
        />
      </div>

      {/* Input: Design URL */}
      <div className="mb-6">
        <div className="flex items-center space-x-1 mb-2">
          <label className="text-[11.5px]" style={{ color: COLORS.label }}>
            Design URL
          </label>
          <InfoIcon className="w-3 h-3" style={{ color: COLORS.label }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md border text-[11.5px] outline-none"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholder,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className="flex-1 py-1.5 rounded-md text-[11.5px] font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.btnText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-1.5 rounded-md text-[11.5px] font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.btnText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Heading */}
      <div>
        <h3
          className="text-[13.5px] font-semibold"
          style={{ color: COLORS.recentHead }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
