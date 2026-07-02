import React from "react";
import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

/**
 * TestCard is a standalone component designed to match a specific Figma design.
 * It is used for visual fidelity verification of Figma-to-Tailwind conversion.
 *
 * Design characteristics:
 * - Specific hex codes from Figma design tokens
 * - Dark theme with characteristic #272822 background
 * - Custom border widths and colors for form inputs
 */

// Design colors from Figma tokens
const COLORS = {
  background: "#272822",
  headerText: "#b5b5b5",
  mutedText: "#8b9291",
  sectionHeaderText: "#b2b2b1",
  labelPat: "#a4a4a3",
  labelUrl: "#a3a3a2",
  placeholderPat: "#737470",
  placeholderUrl: "#71726e",
  inputBorderPat: "#a5adad",
  inputBorderUrl: "#929291",
  buttonBackground: "#843a17",
  buttonText: "#e8d5c8", // Slightly different from planner spec to match visual design
  recentBreakdowns: "#b0b0b0",
} as const;

export function TestCard() {
  return (
    <div id="testElem" className="max-w-md bg-[#272822] p-4 text-white">
      {/* Header Row: Identifies the agent and provides configuration access */}
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold text-[#b5b5b5]">UI magician Agent</span>
        <HiCog className="text-gray-400 text-xl" />
      </div>

      {/* Collapsed Breadcrumb/Status: Shows context of current operation */}
      <div className="mb-4 flex items-center gap-2">
        <HiChevronUp className="text-gray-400 text-xl" />
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Divider: Separates general status from action section */}
      <div className="bg-gray-700 my-4 h-px" />

      {/* Add New Design Section Header */}
      <div className="mb-4 flex items-center gap-2">
        <HiChevronUp className="text-gray-400 text-xl" />
        <span className="font-semibold text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Configuration Form */}
      <div className="mb-6 space-y-4">
        {/* Personal Access Token Input: Required for Figma API authentication */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="pat" className="text-[#a4a4a3]">
              Personal Access Token
            </label>
            <HiInformationCircle className="text-gray-500" />
          </div>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded-md border border-[#a5adad] bg-[#272822] p-2 text-[#737470]"
          />
        </div>

        {/* Design URL Input: The target Figma file to process */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="designUrl" className="text-[#a3a3a2]">
              Design URL
            </label>
            <HiInformationCircle className="text-gray-500" />
          </div>
          <input
            id="designUrl"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded-md border-2 border-[#929291] bg-[#272822] p-2 text-[#71726e]"
          />
        </div>
      </div>

      {/* Action Buttons: Primary triggers for processing */}
      <div className="mb-6 flex justify-end gap-4">
        <button className="rounded-lg bg-[#843a17] px-6 py-2 font-semibold text-[#e8d5c8] transition-opacity hover:opacity-90">
          Awesome
        </button>
        <button className="rounded-lg bg-[#843a17] px-6 py-2 font-semibold text-[#e8d5c8] transition-opacity hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Recent Activity Header */}
      <div>
        <span className="text-xl font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
