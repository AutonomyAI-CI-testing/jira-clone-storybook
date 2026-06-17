import React from "react";
import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Design system constants matching the Figma reference
const COLORS = {
  bgMain: "bg-[#2c2c2c]",
  bgInput: "bg-[#3a3a3a]",
  accentSienna: "bg-[#a0522d]",
  accentSiennaHover: "hover:bg-[#8b4513]",
  textMutedOrange: "text-[#c97b4b]",
};

/**
 * Reusable Input component for the TestCard form.
 * Encapsulates styling for labels and input fields.
 */
interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, placeholder }) => (
  <div className="mb-4 last:mb-6">
    <label
      htmlFor={id}
      className="text-gray-300 mb-1 flex items-center text-sm font-medium"
    >
      {label}
      <HiInformationCircle className="text-gray-400 ml-1 h-4 w-4" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full p-2 ${COLORS.bgInput} border-gray-600 placeholder-gray-500 focus:ring-blue-500 rounded-md border text-white focus:outline-none focus:ring-1`}
    />
  </div>
);

/**
 * TestCard component visually replicates the "UI magician Agent" Figma design panel.
 * It serves as a visual test to validate design fidelity and Tailwind styling.
 */
export const TestCard: React.FC = () => {
  return (
    <div id="testElem">
      <div
        className={`p-4 ${COLORS.bgMain} mx-auto my-8 max-w-sm rounded-lg text-white shadow-lg`}
      >
        {/* Header Row */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">UI magician Agent</h2>
          <HiCog className="text-gray-400 h-6 w-6" />
        </div>

        {/* Subtitle Row - informational summary */}
        <div className={`flex items-center ${COLORS.textMutedOrange} mb-6`}>
          <HiChevronUp className="mr-1 h-5 w-5" />
          <p className="text-sm">From entire frame to a singl...</p>
        </div>

        {/* Section Header: Add New Design */}
        <div className="mb-4 flex items-center text-white">
          <HiChevronUp className="mr-2 h-5 w-5" />
          <h3 className="text-lg font-semibold">Add New Design</h3>
        </div>

        {/* Form Inputs */}
        <FormField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        {/* Action Buttons */}
        <div className="mb-6 flex space-x-4">
          <button
            className={`flex-1 py-2 ${COLORS.accentSienna} rounded-lg font-semibold text-white ${COLORS.accentSiennaHover} transition-colors`}
          >
            Awesome
          </button>
          <button
            className={`flex-1 py-2 ${COLORS.accentSienna} rounded-lg font-semibold text-white ${COLORS.accentSiennaHover} transition-colors`}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section Footer */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
