import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Colors are applied via inline styles because src/components/ is outside the
// project's Tailwind JIT content glob ("src/app/**/*"), so utility classes
// generated from this file would be purged in production builds.
const COLORS = {
  bg: "#2a2a2a",
  text: "#e0e0e0",
  muted: "#8b9291",
  label: "#c0c0c0",
  inputBg: "#1e1e1e",
  inputBorder: "#444",
  placeholder: "#737470",
  buttonBg: "#7a4030",
} as const;

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const FormField = ({ id, label, placeholder }: FormFieldProps): JSX.Element => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="flex items-center text-sm font-medium mb-2"
      style={{ color: COLORS.label }}
    >
      {label}
      <FiInfo size={14} className="ml-2" style={{ color: COLORS.label }} />
    </label>
    {/* placeholder color is set via a global CSS class since React inline styles
        do not support pseudo-elements like ::placeholder */}
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="test-card-input w-full p-2 rounded-md border text-sm"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBorder,
        color: COLORS.text,
      }}
    />
  </div>
);

const BUTTONS = ["Awesome", "Prepare"] as const;

export const TestCard = (): JSX.Element => {
  return (
    <>
      {/* Scoped style for placeholder color — cannot be set via React inline styles */}
      <style>{`.test-card-input::placeholder { color: ${COLORS.placeholder}; }`}</style>

      <div
        id="testElem"
        style={{ backgroundColor: COLORS.bg }}
        className="p-6 rounded-lg shadow-lg max-w-md mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold" style={{ color: COLORS.text }}>
            UI magician Agent
          </h1>
          <FiSettings size={20} style={{ color: COLORS.text }} />
        </div>

        {/* Subtitle */}
        <div className="flex items-center mb-6">
          <FiChevronUp size={16} className="mr-2" style={{ color: COLORS.muted }} />
          <p className="text-sm" style={{ color: COLORS.muted }}>
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design section header */}
        <div className="flex items-center mb-4 pt-4">
          <FiChevronUp size={16} className="mr-2" style={{ color: COLORS.text }} />
          <h2 className="text-base font-semibold" style={{ color: COLORS.text }}>
            Add New Design
          </h2>
        </div>

        {/* Form fields */}
        <FormField
          id="accessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <div className="mb-6">
          <FormField
            id="designUrl"
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mb-8">
          {BUTTONS.map((label) => (
            <button
              key={label}
              className="flex-1 py-2 px-4 rounded-md font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.buttonBg, color: "white" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Footer */}
        <h2 className="text-base font-semibold" style={{ color: COLORS.text }}>
          Recent Breakdowns
        </h2>
      </div>
    </>
  );
};
