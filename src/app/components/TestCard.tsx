import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white p-5 rounded-lg w-full max-w-sm font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-base text-white">UI magician Agent</span>
        <IoSettingsOutline size={22} className="text-gray-400" />
      </div>

      {/* Collapsed/expanded row */}
      <div className="flex items-center gap-1 text-sm text-[#c07040] mb-8">
        <FiChevronUp size={14} className="shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={16} className="text-white shrink-0" />
        <span className="font-bold text-base text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <AiOutlineInfoCircle size={16} className="text-gray-400 shrink-0" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333] border border-[#555] rounded px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <label className="text-sm text-gray-300">Design URL</label>
          <AiOutlineInfoCircle size={16} className="text-gray-400 shrink-0" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333] border border-[#666] rounded px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button className="bg-[#a0522d] hover:bg-[#b5622d] text-white rounded-lg px-8 py-2.5 text-sm font-semibold transition-colors">
          Awesome
        </button>
        <button className="bg-[#a0522d] hover:bg-[#b5622d] text-white rounded-lg px-8 py-2.5 text-sm font-semibold transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="border-t border-[#3a3a3a] pt-5">
        <h3 className="font-bold text-base text-white">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
