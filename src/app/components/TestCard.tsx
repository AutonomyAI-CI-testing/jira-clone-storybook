import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272727] text-white w-[320px] p-5 rounded-lg font-sans"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-lg">UI magician Agent</span>
        <IoSettingsOutline size={22} className="text-white" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp size={14} className="text-[#c87941]" />
        <span className="text-[#c87941] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp size={16} className="text-white" />
        <span className="font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token input */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">Personal Access Token</span>
          <AiOutlineInfoCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL input */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">Design URL</span>
          <AiOutlineInfoCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#b5541e] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541e] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
};
