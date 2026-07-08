import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2a2a] px-5 py-6 font-sans text-white"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting size={24} className="text-white opacity-80" />
      </div>

      {/* Subtitle / collapsed row */}
      <div className="mb-8 flex items-center gap-2">
        <FaChevronUp size={12} className="text-[#c17b4e]" />
        <span className="text-sm text-[#c17b4e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading row */}
      <div className="mb-6 flex items-center gap-2">
        <FaChevronUp size={14} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-medium text-white">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-[#c17b4e]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-medium text-white">Design URL</label>
          <AiOutlineInfoCircle size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-[#c17b4e]"
        />
      </div>

      {/* Buttons row */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a04e23] active:bg-[#8c4420]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a04e23] active:bg-[#8c4420]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
