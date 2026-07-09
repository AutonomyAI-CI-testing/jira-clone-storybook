import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2a2a] px-5 py-6 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-300" size={22} />
      </div>

      {/* Collapsed subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <FaChevronUp className="text-[#c17b4e]" size={12} />
        <span className="text-sm text-[#c17b4e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <FaChevronUp className="text-white" size={14} />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-sm text-gray-300">Design URL</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2a] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2a] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
