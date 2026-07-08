import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2a2a] px-5 py-6 font-sans text-white"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting size={24} className="text-gray-300" />
      </div>

      {/* 2. Collapsed subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <FaChevronUp size={12} className="text-[#c17b4e]" />
        <span className="text-sm text-[#c17b4e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design heading */}
      <div className="mt-10 flex items-center gap-2">
        <FaChevronUp size={14} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* 5. Design URL field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">Design URL</span>
          <AiOutlineInfoCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#666] bg-[#383838] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* 6. Buttons row */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a34f24] active:bg-[#8e4320]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a34f24] active:bg-[#8e4320]">
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns heading */}
      <div className="mt-12">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
