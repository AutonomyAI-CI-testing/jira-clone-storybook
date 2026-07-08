import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full p-5 text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-lg text-white">UI magician Agent</span>
        <AiOutlineSetting size={24} className="text-white" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-10">
        <FaChevronUp size={12} className="text-[#c17b4e]" />
        <span className="text-[#c17b4e] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <FaChevronUp size={14} className="text-white" />
        <span className="font-bold text-lg text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-white font-medium">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#383838] border border-[#555] rounded px-3 py-3 text-gray-400 placeholder:text-gray-500 text-sm outline-none focus:border-[#777]"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-white font-medium">Design URL</label>
          <AiOutlineInfoCircle size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#383838] border border-[#555] rounded px-3 py-3 text-gray-400 placeholder:text-gray-500 text-sm outline-none focus:border-[#777]"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#b85c2a] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a34f22] transition-colors">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a34f22] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-bold text-lg text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
