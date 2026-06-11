import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * TestCard component replicates a "UI magician Agent" panel.
 * It's a pure presentational component used for demonstration.
 * 
 * Design choices (based on planner spec):
 * - Background: #2a2a2a (dark grey)
 * - Primary buttons: amber-700 (#b45309)
 * - Layout: standard vertical stack with fixed max-width
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white p-6 max-w-[360px] rounded-xl shadow-[0_4_24px_rgba(0,0,0,0.5)] mx-auto"
    >
      {/* Header row: Agent title and settings */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-[18px]">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400" size={22} />
      </div>

      {/* Subtitle row with context icon */}
      <div className="flex items-center gap-1 mt-2">
        <RiArrowUpSLine className="text-[#b45309]" size={18} />
        <span className="text-[#888] text-sm italic">From entire frame to a singl...</span>
      </div>

      {/* Vertical spacing between header and main content */}
      <div className="h-8" />

      {/* Section Header: Input group for new designs */}
      <div className="flex items-center gap-2">
        <RiArrowUpSLine size={20} />
        <span className="font-bold text-[18px]">Add New Design</span>
      </div>

      <div className="space-y-4 mt-4">
        {/* Input group: Personal Access Token */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-gray-200">Personal Access Token</span>
            <AiOutlineInfoCircle className="text-gray-400" size={16} />
          </div>
          <CardInput placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        </div>

        {/* Input group: Design URL */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-gray-200">Design URL</span>
            <AiOutlineInfoCircle className="text-gray-400" size={16} />
          </div>
          <CardInput placeholder="https://www.figma.com/file/:" />
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex gap-3 mt-5">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Future section placeholder */}
      <div className="mt-10">
        <span className="font-bold text-[18px]">Recent Breakdowns</span>
      </div>
    </div>
  );
};

/**
 * Shared input component for consistent styling across the card
 */
const CardInput = ({ placeholder }: { placeholder: string }) => (
  <input
    placeholder={placeholder}
    className="w-full bg-[#1e1e1e] border border-[#555] rounded-md text-gray-400 px-3 py-2 outline-none focus:border-[#b45309] transition-colors"
  />
);

/**
 * Shared action button with specific amber branding
 */
const ActionButton = ({ label }: { label: string }) => (
  <button
    className="flex-1 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg py-3 border-none cursor-pointer text-[15px] transition-colors"
  >
    {label}
  </button>
);
