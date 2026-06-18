
import React from "react";
import { AiOutlineSetting, AiOutlineUp, AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard is a self-contained smoke test component that visually replicates
 * the "UI Magician Agent" Figma design panel.
 * 
 * Design characteristics:
 * - Specific dark theme using arbitrary HEX colors from Figma.
 * - Non-interactive, purely presentational layout.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-xl p-5 w-[320px] flex flex-col gap-4">
      {/* 
          Header: Title and Settings 
          Uses white for primary text to stand out against dark background.
      */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-white text-lg leading-tight">UI magician Agent</span>
        <AiOutlineSetting className="text-white" size={22} />
      </div>

      {/* 
          Subtitle: Breadcrumb-like secondary info
          Uses custom orange-brown color (#c87941) for subtitle text.
      */}
      <div className="flex items-center gap-2">
        <AiOutlineUp className="text-[#c87941]" size={14} />
        <span className="text-[#c87941] text-sm">From entire frame to a singl...</span>
      </div>

      {/* 
          Main Section Heading
      */}
      <div className="flex items-center gap-2 mt-2">
        <AiOutlineUp className="text-white" size={14} />
        <span className="font-bold text-white text-lg">Add New Design</span>
      </div>

      {/* 
          Inputs Section:
          - Tokens and URLs
          - Background #1e1e1e matches Figma input fields
      */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-white text-sm flex items-center gap-1">
            Personal Access Token <AiOutlineInfoCircle className="text-white/60" />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#1e1e1e] border border-[#3a3a3a] text-white/40 rounded px-3 py-2 text-sm w-full outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-white text-sm flex items-center gap-1">
            Design URL <AiOutlineInfoCircle className="text-white/60" />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#1e1e1e] border border-[#3a3a3a] text-white/40 rounded px-3 py-2 text-sm w-full outline-none"
          />
        </div>
      </div>

      {/* 
          Call to Action Buttons:
          Uses accent orange (#b85c2a) for primary actions.
      */}
      <div className="flex gap-3 justify-center mt-2">
        <button className="bg-[#b85c2a] text-white rounded-xl px-6 py-2 font-semibold text-sm transition-opacity hover:opacity-90">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white rounded-xl px-6 py-2 font-semibold text-sm transition-opacity hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* 
          Footer section reference 
      */}
      <div className="mt-2">
        <span className="font-bold text-white text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
};
