import React from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

/**
 * InputGroup Component
 * Renders a labeled input field with an info icon.
 * Used for Figma PAT and Design URL inputs in the TestCard.
 */
interface InputGroupProps {
  id: string;
  label: string;
  placeholder: string;
  borderClass?: string;
  labelColor: string;
  placeholderColor: string;
}

const InputGroup = ({
  id,
  label,
  placeholder,
  borderClass = "border",
  labelColor,
  placeholderColor,
}: InputGroupProps) => (
  <div className="flex flex-col space-y-1">
    <div className="flex items-center gap-1">
      <label htmlFor={id} className={`text-xs font-semibold ${labelColor}`}>
        {label}
      </label>
      <AiOutlineInfoCircle className="text-xs text-gray-500" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full ${borderClass} bg-[#272822] p-2 text-xs outline-none ${placeholderColor}`}
    />
  </div>
);

/**
 * ActionButton Component
 * Consistent button styling for the primary card actions.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="rounded bg-[#843a17] px-6 py-2.5 text-xs font-semibold text-[#8c8078]">
    {children}
  </button>
);

const TestCard = () => {
  return (
    <div id="testElem" className="flex flex-col space-y-4 bg-[#2a2522] p-4 text-white">
      {/* Card Header: Agent name and settings access */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <AiOutlineSetting className="text-gray-500" />
      </div>

      {/* Breadcrumb/Status: Provides context for the current scope or progress */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#8b9291]" />
        <p className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="h-4" aria-hidden="true" />

      {/* Setup Section: Configuration for new UI extraction designs */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" />
        <h3 className="text-sm font-semibold text-[#b2b2b1]">Add New Design</h3>
      </div>

      <InputGroup
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        labelColor="text-[#a4a4a3]"
        placeholderColor="placeholder-[#737470]"
        borderClass="border-[#a5adad]"
      />

      <InputGroup
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        labelColor="text-[#a3a3a2]"
        placeholderColor="placeholder-[#71726e]"
        borderClass="border-2 border-[#929291]"
      />

      <div className="mt-4 flex justify-center gap-3">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
