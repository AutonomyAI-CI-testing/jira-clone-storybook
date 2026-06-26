
import React from "react";

// Figma-specific colors preserved from design spec
const COLORS = {
  background: "#1a1a1a",
  inputBg: "#2a2a2a",
  buttonBg: "#7c4a2d",
  buttonBgHover: "#9b5c35",
  titleText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionHeading: "#b2b2b1",
  labelText: "#a4a4a3",
  placeholderText: "#737470",
  recentBreakdownsText: "#b0b0b0",
  buttonText: "#8c8078",
} as const;

/**
 * Small information icon suffix for labels
 */
function InfoIcon() {
  return (
    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#a4a4a3] text-[#a4a4a3] text-xs leading-none">
      i
    </span>
  );
}

/**
 * Standardized input field for Figma credentials/URLs
 */
interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}

function InputField({ id, label, placeholder, type = "text" }: InputFieldProps) {
  return (
    <div className="mt-6">
      <label htmlFor={id} className="text-[#a4a4a3] text-sm flex items-center">
        {label}
        <InfoIcon />
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-[#555] bg-[#2a2a2a] py-4 px-3 text-white placeholder-[#737470] focus:border-[#888] focus:outline-none text-sm"
      />
    </div>
  );
}

/**
 * TestCard component visually replicates the Figma design for a UI magician Agent panel.
 * 
 * Uses arbitrary Tailwind values to match exact hex codes from style spec.
 * Root uses "min-h-screen" as this was the original state, though "h-fit" might be 
 * more typical for a card if it weren't a full-page preview.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.background }}
      className="min-h-screen p-4 font-sans text-white"
    >
      {/* Header Row: Title and Settings icon */}
      <div className="flex items-center justify-between">
        <h2 className="text-[#b5b5b5] text-xl font-medium">UI magician Agent</h2>
        <span className="text-[#b5b5b5] text-xl">⚙</span>
      </div>

      {/* Subtitle Row: Truncated description with chevron prefix */}
      <div className="mt-4 flex items-center text-[#8b9291]">
        <span className="mr-2 text-base">∧</span>
        <span className="truncate text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical Spacer to match Figma layout rhythm */}
      <div className="h-12"></div>

      {/* Add New Design Section Header */}
      <div className="flex items-center text-[#b2b2b1]">
        <span className="mr-2 text-base">∧</span>
        <h3 className="text-xl font-medium">Add New Design</h3>
      </div>

      {/* Credential Inputs */}
      <InputField 
        id="token" 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />
      
      <InputField 
        id="designUrl" 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
      />

      {/* Action Buttons: Principal CTAs for the magician agent */}
      <div className="mt-8 flex justify-between gap-4">
        <button className="w-1/2 rounded-lg bg-[#8b4513] px-4 py-4 text-[#c8a898] font-medium hover:bg-[#a0522d] transition-colors text-base">
          Awesome
        </button>
        <button className="w-1/2 rounded-lg bg-[#8b4513] px-4 py-4 text-[#c8a898] font-medium hover:bg-[#a0522d] transition-colors text-base">
          Prepare
        </button>
      </div>

      {/* History Section Heading */}
      <div className="mt-10">
        <h3 className="text-[#b0b0b0] text-xl font-medium">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
