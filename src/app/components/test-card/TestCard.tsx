import React from "react";
import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Color constants matching the design for consistency
const COLORS = {
  primary: "#c97b3a",
  button: "#b5541a",
  buttonHover: "#9e4715",
  background: "#1e1e1e",
  inputBackground: "#2a2a2a",
  borderColor: "#444444",
  placeholder: "#555",
  textMuted: "#888",
};

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}

/**
 * Reusable input field component with consistent styling and an information icon.
 */
const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
}: InputFieldProps) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-white text-sm font-medium mb-2">
      {label}
      <HiInformationCircle className="inline-block ml-1 text-white text-lg" />
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`bg-[${COLORS.inputBackground}] border border-[${COLORS.borderColor}] rounded-md text-[${COLORS.textMuted}] placeholder-[${COLORS.placeholder}] px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[${COLORS.primary}]`}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={`bg-[${COLORS.background}] p-6 rounded-lg max-w-sm mx-auto shadow-lg`}>
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white font-bold text-lg">UI magician Agent</h1>
        <HiCog className="text-white text-xl cursor-pointer" />
      </div>

      {/* Subtitle/Status row */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className={`text-[${COLORS.primary}] text-lg`} />
        <span className={`text-[${COLORS.primary}] text-sm`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-white text-lg" />
        <h2 className="font-bold text-white text-md">Add New Design</h2>
      </div>

      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mb-2">
        <InputField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className={`bg-[${COLORS.button}] text-white rounded-lg px-6 py-3 flex-1 hover:bg-[${COLORS.buttonHover}] transition-colors duration-200`}
        >
          Awesome
        </button>
        <button
          className={`bg-[${COLORS.button}] text-white rounded-lg px-6 py-3 flex-1 hover:bg-[${COLORS.buttonHover}] transition-colors duration-200`}
        >
          Prepare
        </button>
      </div>

      {/* Footer: Recent activity list */}
      <div>
        <h2 className="font-bold text-white text-md">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
