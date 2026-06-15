import React from "react";
import { HiChevronUp } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard is a static "smoke test" component used to verify the rendering pipeline, 
 * Tailwind CSS configuration, and icon integration. 
 * 
 * It replicates the "UI magician Agent" panel design from the requirements.
 * Since this is a static demonstration component, all values are hardcoded and inputs are read-only.
 */

const FieldLabel = ({ label }: { label: string }) => (
  <label className="flex items-center gap-1 text-white text-sm">
    {label}
    <AiOutlineInfoCircle className="text-gray-400" size={14} />
  </label>
);

const FieldInput = ({ placeholder }: { placeholder: string }) => (
  <input
    readOnly
    placeholder={placeholder}
    className="bg-[#3a3a3a] border border-[#555] text-gray-400 text-sm px-3 py-2 rounded placeholder:text-gray-500 focus:outline-none"
  />
);

const OrangeButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-[#c1622e] text-white px-4 py-2 rounded-lg flex-1 hover:brightness-110 transition-all">
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 flex flex-col gap-4 w-[280px] rounded-lg shadow-xl">
      {/* Header: Title and Settings icon */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <IoSettingsOutline className="text-white" size={22} aria-label="Settings" />
      </div>

      {/* Breadcrumb-style subtitle with amber accent */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-amber-500" size={16} />
        <span className="text-amber-500 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section Toggle: Add New Design */}
      <div className="flex items-center gap-2 mt-2">
        <HiChevronUp className="text-white" size={18} />
        <span className="text-white font-bold text-base">Add New Design</span>
      </div>

      {/* Configuration Fields */}
      <div className="flex flex-col gap-1">
        <FieldLabel label="Personal Access Token" />
        <FieldInput placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      </div>

      <div className="flex flex-col gap-1">
        <FieldLabel label="Design URL" />
        <FieldInput placeholder="https://www.figma.com/file/:" />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <OrangeButton>Awesome</OrangeButton>
        <OrangeButton>Prepare</OrangeButton>
      </div>

      {/* Footer Section */}
      <div className="mt-2 border-t border-[#444] pt-4">
        <span className="text-white font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};
