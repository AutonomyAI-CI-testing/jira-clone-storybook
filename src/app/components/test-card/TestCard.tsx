import React from "react";
import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

/**
 * TestCard is a self-contained smoke test component used to validate
 * code generation and visual output against a specific dark-theme UI design.
 */

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const FormField = ({ id, label, placeholder }: FormFieldProps) => (
  <div className="mt-4">
    <div className="flex items-center gap-2 mb-1">
      <label htmlFor={id} className="text-sm text-white">
        {label}
      </label>
      <HiInformationCircle className="text-gray-400" size={16} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="bg-[#3a3a3a] border border-[#555555] text-gray-400 rounded px-3 py-2 w-full placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#c1622a]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-6 rounded-lg bg-[#2a2a2a] text-white max-w-md mx-auto">
      {/* Header row: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <HiOutlineCog className="text-white" size={24} />
      </div>

      {/* Collapsible row: Design context breadcrumb/status */}
      <div className="flex items-center gap-2 mt-2">
        <HiChevronUp className="text-[#c1622a]" />
        <span className="text-[#c1622a] text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      <div className="my-6 h-px bg-gray-700" />

      {/* Action Section: Main form header */}
      <div className="flex items-center gap-2 mt-4">
        <HiChevronUp className="text-white" />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Inputs for Figma integration */}
      <FormField id="pat" label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Primary Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          type="button"
          className="bg-[#c1622a] text-white font-semibold px-6 py-3 rounded-lg text-sm flex-1"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#c1622a] text-white font-semibold px-6 py-3 rounded-lg text-sm flex-1"
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: History/Audit log header */}
      <h2 className="text-white font-bold text-lg mt-8">Recent Breakdowns</h2>
    </div>
  );
};
