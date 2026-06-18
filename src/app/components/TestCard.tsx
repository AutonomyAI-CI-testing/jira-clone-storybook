
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { LuChevronUp } from "react-icons/lu";
import { FiInfo } from "react-icons/fi";

// Root component for the UI magician Agent panel.
// This is a static replication of a Figma design used for UI demonstration.
const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white p-4 rounded-lg w-full max-w-xs font-sans">
      <Header />
      <Subtitle />

      {/* Spacer per Figma vertical rhythm */}
      <div className="mb-6" aria-hidden="true" />

      <section>
        <div className="flex items-center gap-2 mb-4">
          <LuChevronUp className="text-white text-lg" aria-hidden="true" />
          <h2 className="font-bold text-white">Add New Design</h2>
        </div>

        <InputGroup
          id="pat-input"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputGroup
          id="url-input"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
          containerClassName="mb-6"
        />

        <ActionButtons />
      </section>

      <h2 className="font-semibold text-white text-md">Recent Breakdowns</h2>
    </div>
  );
};

interface InputGroupProps {
  id: string;
  label: string;
  placeholder: string;
  containerClassName?: string;
}

/**
 * Reusable input group with a label and info icon.
 * Inputs are read-only as this is a static demonstration component.
 */
const InputGroup: React.FC<InputGroupProps> = ({ id, label, placeholder, containerClassName = "mb-4" }) => (
  <div className={containerClassName}>
    <div className="flex items-center gap-1 mb-1">
      <label htmlFor={id} className="text-white text-sm">
        {label}
      </label>
      <FiInfo className="text-gray-500 text-sm" aria-label="More information" />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-[#1e1e1e] border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
    />
  </div>
);

const Header: React.FC = () => (
  <div className="flex justify-between items-center mb-4">
    <h1 className="font-bold text-lg">UI magician Agent</h1>
    <IoSettingsOutline className="text-gray-400 text-xl" role="button" aria-label="Settings" />
  </div>
);

const Subtitle: React.FC = () => (
  <div className="flex items-center gap-1 mb-6">
    <LuChevronUp className="text-[#c4905a] text-lg" aria-hidden="true" />
    <span className="text-[#c4905a] text-sm">From entire frame to a singl...</span>
  </div>
);

const ActionButtons: React.FC = () => (
  <div className="flex gap-3 mb-6">
    {/* Orange-brown buttons matching Figma specific brand colors */}
    <button
      type="button"
      className="flex-1 bg-[#b85c38] hover:bg-[#a65332] transition-colors text-white rounded-lg px-4 py-2 text-sm font-medium"
    >
      Awesome
    </button>
    <button
      type="button"
      className="flex-1 bg-[#b85c38] hover:bg-[#a65332] transition-colors text-white rounded-lg px-4 py-2 text-sm font-medium"
    >
      Prepare
    </button>
  </div>
);

export default TestCard;
