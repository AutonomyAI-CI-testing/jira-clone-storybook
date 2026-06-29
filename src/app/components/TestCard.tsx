import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard is a smoke-test component that approximates a "UI magician Agent" Figma design.
 * It is fully self-contained with hardcoded content to validate design fidelity.
 */
export const TestCard = () => {
  // Common styles for consistency and easier maintenance
  const textTitle = "text-[13.5px] font-semibold";
  const textMuted = "text-[11.5px] font-semibold";
  const inputBase = "w-full p-3 rounded-md bg-[#232323] border text-[#b5b5b5] placeholder-[#737470] text-[11.5px]";
  const buttonBase = "bg-[#b5603a] text-[#c9a090] text-[11.5px] font-semibold px-8 py-3 rounded-xl flex-1 hover:brightness-110 transition-all";

  return (
    <div id="testElem" className="p-6 bg-[#2a2a2a] min-w-[300px] shadow-xl rounded-sm">
      {/* Top row: UI magician Agent title and settings icon */}
      <div className="flex justify-between items-center">
        <h2 className={`text-[#b5b5b5] ${textTitle}`}>UI magician Agent</h2>
        <FiSettings className="text-[#b5b5b5] text-lg cursor-pointer" />
      </div>

      {/* Collapsible-style row: chevron and muted text */}
      <div className="flex items-center gap-2 mt-4 cursor-pointer">
        <FiChevronUp className="text-[#8b9291] text-lg" />
        <p className={`text-[#8b9291] ${textMuted}`}>From entire frame to a singl...</p>
      </div>

      {/* Large vertical gap/spacer — matches the visual hierarchy in Figma */}
      <div className="my-8 h-px"></div>

      {/* "Add New Design" section header with chevron */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-[#b2b2b1] text-lg" />
        <h3 className={`text-[#b2b2b1] ${textTitle}`}>Add New Design</h3>
      </div>
      
      {/* Personal Access Token input */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="pat" className={`text-[#a4a4a3] ${textMuted}`}>Personal Access Token</label>
          <FiInfo className="text-[#a4a4a3] text-sm cursor-help" />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={`${inputBase} border-[#444444] placeholder-[#737470]`}
        />
      </div>

      {/* Design URL input */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <label htmlFor="designUrl" className={`text-[#a4a4a3] ${textMuted}`}>Design URL</label>
          <FiInfo className="text-[#a4a4a3] text-sm cursor-help" />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className={`${inputBase} border-[#555555] placeholder-[#71726e]`}
        />
      </div>

      {/* Buttons: Awesome and Prepare — Rounded orange-brown buttons per design */}
      <div className="flex gap-4 justify-center mt-4">
        <button className={buttonBase}>
          Awesome
        </button>
        <button className={buttonBase}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <h3 className={`text-[#b0b0b0] ${textTitle} mt-8`}>Recent Breakdowns</h3>
    </div>
  );
};
