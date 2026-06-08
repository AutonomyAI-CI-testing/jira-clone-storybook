import React from "react";

// Color palette for the dark-themed card UI
const COLORS = {
  bg: "#1a1a1a",
  text: "#b5b5b5",
  textSecondary: "#8b9291",
  textTertiary: "#a4a4a3",
  textDim: "#737470",
  border: "#444",
  buttonBg: "#7c4b35",
  buttonText: "#c9a98c",
  headingDim: "#b0b0b0",
  sectionHeading: "#b2b2b1",
};

/**
 * FormInput component for consistent input styling across the card.
 * Handles both visible labels and hidden info icons indicators.
 */
const FormInput = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mb-4 last:mb-6">
    <label
      htmlFor={id}
      className="mb-1 block text-sm font-medium text-[#a4a4a3]"
    >
      {label} <span className="text-[#a4a4a3]">ⓘ</span>
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full rounded border p-2 border-[${COLORS.border}] text-[${COLORS.text}] placeholder-[${COLORS.textDim}] focus:border-blue-500 focus:outline-none`}
      style={{
        backgroundColor: COLORS.bg,
        borderColor: COLORS.border,
        color: COLORS.text,
      }}
    />
  </div>
);

/**
 * ActionButton component for consistent button styling.
 * Used for form submission actions like "Awesome" and "Prepare".
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="flex-1 rounded px-4 py-2 font-medium transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50"
    style={{
      backgroundColor: COLORS.buttonBg,
      color: COLORS.buttonText,
      focusRingColor: COLORS.buttonBg,
    }}
  >
    {children}
  </button>
);

/**
 * TestCard component renders a design workflow panel with:
 * - Header with title and settings icon
 * - Expandable collapsed item showing a recent action
 * - "Add New Design" form section with input fields and action buttons
 * - "Recent Breakdowns" heading for a future list
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="font-sans mx-auto my-8 max-w-sm rounded-lg p-4 shadow-lg"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
        <span className="text-lg">⚙️</span>
      </div>

      {/* Collapsed recent item section */}
      <div
        className="mb-6 flex items-center"
        style={{ color: COLORS.textSecondary }}
      >
        <span className="mr-2">⬆️</span>
        <p className="truncate">From entire frame to a singl...</p>
      </div>

      {/* Add New Design form section */}
      <div className="mb-6">
        <div
          className="mb-3 flex items-center"
          style={{ color: COLORS.sectionHeading }}
        >
          <span className="mr-2">⬆️</span>
          <h2 className="text-lg font-medium">Add New Design</h2>
        </div>

        {/* Form inputs */}
        <FormInput
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormInput
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        {/* Action buttons */}
        <div className="flex justify-between space-x-4">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h2
          className="text-lg font-medium"
          style={{ color: COLORS.headingDim }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
