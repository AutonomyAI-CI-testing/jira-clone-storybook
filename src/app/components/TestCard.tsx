import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard is a standalone component created to validate the visual rendering 
 * of the "UI magician Agent" panel from Figma.
 * 
 * It is self-contained and used primarily for visual verification in Storybook.
 * 
 * Design characteristics:
 * - Dark theme (#2a2a2a background)
 * - Muted amber accents (#c87040)
 * - Custom rounded buttons (#b85c38)
 */
export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 rounded-xl w-[300px] flex flex-col gap-4 text-white font-sans shadow-xl">
      {/* Header: Displays the agent name and settings access point */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">UI magician Agent</h1>
        <IoSettingsOutline className="text-white text-xl cursor-pointer hover:opacity-80" />
      </div>

      {/* Status/Subtitle: Indicates the current scope or action */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-[#c87040] text-lg" />
        <p className="text-[#c87040] text-sm">From entire frame to a singl...</p>
      </div>

      {/* Main Action Section: Form for adding new design resources */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-white text-lg" />
        <h2 className="text-lg font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <label htmlFor="pat" className="text-sm">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400 text-sm cursor-help" title="Figma Personal Access Token" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#555] rounded-md px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#b85c38] transition-colors"
        />
      </div>

      {/* Design URL Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <label htmlFor="designUrl" className="text-sm">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400 text-sm cursor-help" title="Link to your Figma design" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#555] rounded-md px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#b85c38] transition-colors"
        />
      </div>

      {/* Action Buttons: Primary triggers for processing designs */}
      <div className="flex gap-3">
        <button className="bg-[#b85c38] hover:bg-[#c96840] text-white rounded-xl px-4 py-2 text-sm font-medium flex-1 transition-colors">
          Awesome
        </button>
        <button className="bg-[#b85c38] hover:bg-[#c96840] text-white rounded-xl px-4 py-2 text-sm font-medium flex-1 transition-colors">
          Prepare
        </button>
      </div>

      {/* Secondary Information Section */}
      <h2 className="text-lg font-semibold mt-2">Recent Breakdowns</h2>
    </div>
  );
}
