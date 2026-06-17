import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

/**
 * Reusable input field with label and info icon
 * Extracted to avoid repetition in the main card layout
 */
const InputField = ({ label, id, ...props }: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="flex items-center gap-1 text-sm mb-1">
      {label} <AiOutlineInfoCircle className="text-gray-500 aria-hidden" />
    </label>
    <input
      id={id}
      className="w-full bg-[#2d2d2d] text-gray-400 p-2 rounded-md border border-[#3d3d3d] focus:outline-none focus:border-blue-500 transition-colors"
      {...props}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <article
      id="testElem"
      className="bg-[#232323] p-6 w-80 text-white rounded-lg shadow-lg space-y-4"
    >
      {/* Header with Title and Settings */}
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">UI magician Agent</h1>
        <button
          aria-label="Settings"
          className="hover:bg-white/10 p-1 rounded-full transition-colors"
        >
          <IoSettingsOutline className="text-gray-400 text-xl" />
        </button>
      </header>

      {/* Breadcrumb-style status/context row */}
      <div className="flex items-center gap-2" aria-hidden="true">
        <FiChevronUp className="text-[#a0835a]" />
        <p className="text-[#a0835a] truncate text-sm">
          From entire frame to a singl...
        </p>
      </div>

      {/* Main Form Section */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 font-bold text-md">
          <FiChevronUp aria-hidden="true" /> Add New Design
        </h2>

        <InputField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          type="password" // Changed to password for security of the PAT, though visually it remains masked
        />

        <InputField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          type="url"
        />

        {/* Action Buttons - Orange theme matches the UI's brand color */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 bg-[#b5522a] text-white font-medium rounded-lg px-5 py-2 hover:bg-[#a04824] transition-colors focus:ring-2 focus:ring-[#b5522a] focus:ring-offset-2 focus:ring-offset-[#232323] outline-none">
            Awesome
          </button>
          <button className="flex-1 bg-[#b5522a] text-white font-medium rounded-lg px-5 py-2 hover:bg-[#a04824] transition-colors focus:ring-2 focus:ring-[#b5522a] focus:ring-offset-2 focus:ring-offset-[#232323] outline-none">
            Prepare
          </button>
        </div>
      </section>

      {/* History section footer */}
      <footer className="pt-2">
        <h2 className="font-bold text-md">Recent Breakdowns</h2>
      </footer>
    </article>
  );
};
