import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  // Common styles for the input fields to ensure consistency
  const inputStyles = "w-full bg-[#1a1a1a] border border-[#444] rounded-md px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#c97c4a]";
  
  // Common styles for the primary action buttons
  const buttonStyles = "bg-[#b5451b] text-white rounded-lg px-5 py-2 text-sm font-medium flex-1 focus:outline-none focus:ring-2 focus:ring-[#c97c4a]";

  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-xl p-5 w-80 text-white flex flex-col gap-4 shadow-xl">
      {/* Header row: Agent name and settings icon */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-white text-lg">UI magician Agent</span>
        <AiOutlineSetting size={22} className="text-gray-400 cursor-pointer hover:text-white transition-colors" aria-label="Settings" />
      </div>

      {/* Collapsed section row: Breadcrumb or status hint */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={14} className="text-[#c97c4a]" />
        <span className="text-[#c97c4a] text-sm truncate font-medium">From entire frame to a singl...</span>
      </div>

      {/* Section Header: Add New Design expansion toggle */}
      <div className="flex items-center gap-2 mt-1">
        <HiChevronUp size={18} className="cursor-pointer" />
        <span className="font-bold text-white text-base">Add New Design</span>
      </div>

      {/* Personal Access Token input field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label htmlFor="pat-input" className="text-sm font-medium">Personal Access Token</label>
          <AiOutlineInfoCircle size={16} className="text-gray-400 cursor-help" title="Figma Personal Access Token" />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={inputStyles}
        />
      </div>

      {/* Design URL input field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label htmlFor="design-url-input" className="text-sm font-medium">Design URL</label>
          <AiOutlineInfoCircle size={16} className="text-gray-400 cursor-help" title="Figma Design URL" />
        </div>
        <input
          id="design-url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={inputStyles}
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="flex gap-3 mt-2">
        <button className={buttonStyles}>
          Awesome
        </button>
        <button className={buttonStyles}>
          Prepare
        </button>
      </div>

      {/* Recent Activity Section */}
      <h2 className="font-bold text-white text-base mt-2 border-t border-[#444] pt-4">Recent Breakdowns</h2>
    </div>
  );
};
