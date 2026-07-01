
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { LuChevronUp, LuInfo } from "react-icons/lu";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Reusable input field component for the TestCard form
 * Includes a label with an info icon and a styled dark input
 */
function InputField({ id, label, placeholder }: InputFieldProps) {
  return (
    <div className="mb-4 last:mb-6">
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={id} className="text-[#a4a4a3] font-semibold text-xs">
          {label}
        </label>
        <LuInfo className="text-[#a4a4a3] text-sm" />
      </div>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg bg-[#222222] border border-[#444] text-[#71726e] text-xs focus:outline-none focus:ring-1 focus:ring-[#b5541a]"
      />
    </div>
  );
}

/**
 * TestCard: A self-contained smoke test component reproducing a Figma design.
 * Used to verify the rendering pipeline.
 */
export function TestCard() {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-[#b5b5b5] font-sans rounded-sm">
      {/* Header Row: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg cursor-pointer" />
      </div>

      {/* Collapse Row: Secondary information */}
      <div className="flex items-center gap-2 mb-6">
        <LuChevronUp className="text-[#8b9291] text-lg" />
        <span className="text-[#8b9291] font-semibold text-xs">
          From entire frame to a singl...
        </span>
      </div>

      {/* Fixed spacer from design spec */}
      <div className="my-6"></div>

      {/* "Add New Design" Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <LuChevronUp className="text-[#b2b2b1] text-lg" />
        <h3 className="text-[#b2b2b1] font-semibold text-sm">Add New Design</h3>
      </div>

      {/* Form Fields: Access Token and Design URL */}
      <InputField 
        id="pat" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      <InputField 
        id="design-url" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Primary Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 rounded-lg bg-[#b5541a] text-[#d4b8a8] font-semibold text-xs py-3 hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5541a] text-[#d4b8a8] font-semibold text-xs py-3 hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Bottom Spacer */}
      <div className="my-6"></div>

      {/* Footer Section */}
      <div>
        <h3 className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
