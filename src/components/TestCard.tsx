// src/components/TestCard.tsx
import { FiChevronUp, FiSettings, FiInfo } from "react-icons/fi";

/**
 * TestCard component
 * 
 * A self-contained panel designed to match the "UI magician Agent" Figma design.
 * This component is intended for preview/demonstration and uses hardcoded values
 * and Tailwind arbitrary colors to achieve high-fidelity with the design source.
 * 
 * Layout Sections:
 * 1. Global Header (Agent Title + Settings)
 * 2. Scope Selector (Collapse/Expand)
 * 3. Feature Section (Add New Design)
 * 4. Credentials Form (Token & URL)
 * 5. Action Buttons (Awesome & Prepare)
 * 6. History List Heading (Recent Breakdowns)
 */
export const TestCard = (): JSX.Element => {
  // Design constants to match Figma specs
  // Background: #2a2a2a (dark panel)
  // Accent colors: #8b4513 (orange-brown buttons)
  
  const labelTextClass = "text-[11.5px] font-semibold text-[#a4a4a3]";
  const inputClass = "bg-[#1a1a1a] border border-[#3a3a3a] rounded px-3 py-2 text-[11.5px] text-[#737470] font-semibold w-full outline-none focus:ring-1 focus:ring-[#8b4513]";
  const buttonClass = "flex-1 py-2 rounded-lg bg-[#8b4513] text-[11.5px] font-semibold text-[#8c8078] hover:opacity-90 transition-opacity";

  return (
    <div id="testElem" className="bg-[#2a2a2a] w-[254px] p-5 font-sans text-[#b5b5b5] flex flex-col gap-4 shadow-xl">
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[13.5px]">UI magician Agent</span>
        <FiSettings className="text-[#b5b5b5] cursor-pointer" size={18} />
      </div>

      {/* 2. Collapse row - Overview of current scope */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={14} className="text-[#8b9291]" />
        <span className="text-[11.5px] text-[#8b9291] font-semibold">From entire frame to a singl...</span>
      </div>

      {/* 3. Spacer for visual hierarchy */}
      <div className="h-4" />

      {/* 4. Add New Design section heading */}
      <div className="flex items-center gap-2 cursor-pointer">
        <FiChevronUp size={14} />
        <span className="font-semibold text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* 5. Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className={labelTextClass}>Personal Access Token</span>
          <FiInfo size={12} className="text-[#a4a4a3]" />
        </div>
        <input
          className={inputClass}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* 6. Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className={labelTextClass}>Design URL</span>
          <FiInfo size={12} className="text-[#a3a3a2]" />
        </div>
        <input
          className={inputClass}
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* 7. Action Buttons */}
      <div className="flex gap-3 mt-1">
        <button className={buttonClass}>
          Awesome
        </button>
        <button className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns - Footer section */}
      <div className="mt-2 border-t border-[#3a3a3a] pt-4">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">Recent Breakdowns</span>
      </div>
    </div>
  );
};
