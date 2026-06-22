import type { FC } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

/**
 * TestCard component serves as a visual smoke test for the Figma-to-component pipeline.
 * It replicates a specific UI design from Figma using Tailwind arbitrary values to ensure
 * pixel-level accuracy for colors and typography as per the toolchain's requirements.
 * 
 * Note: This is an intentionally static component used for visual validation only.
 */

// Shared styles for form labels and inputs to maintain consistency
const LABEL_TEXT_STYLE = "text-[#a4a4a3] text-[11.5px] font-semibold";
const INPUT_BASE_STYLE = "w-full bg-[#3a3937] border border-[#555] rounded px-3 py-2 text-[#737470] text-[11.5px] font-semibold placeholder:text-[#737470] mt-1.5 outline-none";
const BUTTON_STYLE = "bg-[#7a3d1a] text-[#c8a898] text-[11.5px] font-semibold px-6 py-2.5 rounded-lg active:opacity-90";

const FormField = ({ label, placeholder, ariaLabel }: { label: string; placeholder: string; ariaLabel: string }) => (
  <div className="mt-4">
    <div className="flex items-center gap-1.5">
      <span className={LABEL_TEXT_STYLE}>{label}</span>
      <button type="button" aria-label={`Information about ${label}`}>
        <HiInformationCircle className="text-[#a4a4a3] text-sm" />
      </button>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={INPUT_BASE_STYLE}
      aria-label={ariaLabel}
    />
  </div>
);

export const TestCard: FC = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 w-[254px] font-sans rounded-sm shadow-xl" role="region" aria-label="UI magician Agent Panel">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <button type="button" aria-label="Settings">
          <AiOutlineSetting className="text-[#b5b5b5] text-lg hover:rotate-45 transition-transform" />
        </button>
      </div>

      {/* Collapsible row - Status indicator */}
      <div className="flex items-center gap-2 mt-3 cursor-default" aria-expanded="true">
        <HiChevronUp className="text-[#8b9291] text-md shrink-0" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold truncate" title="From entire frame to a singl...">
          From entire frame to a singl...
        </span>
      </div>

      {/* "Add New Design" section header */}
      <div className="flex items-center gap-2 mt-8 cursor-default" aria-expanded="true">
        <HiChevronUp className="text-[#b2b2b1] text-md shrink-0" />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      {/* Input Fields */}
      <FormField 
        label="Personal Access Token" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        ariaLabel="Enter Personal Access Token"
      />
      
      <FormField 
        label="Design URL" 
        placeholder="https://www.figma.com/file/:" 
        ariaLabel="Enter Design URL"
      />

      {/* Primary Actions */}
      <div className="flex gap-3 mt-5 justify-center">
        <button className={BUTTON_STYLE} type="button">Awesome</button>
        <button className={BUTTON_STYLE} type="button">Prepare</button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-8">
        <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
