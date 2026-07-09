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
        <AiOutlineSetting className="text-gray-400" size={22} />
      </div>

      {/* Collapsed row */}
      <div className="mt-3 flex items-center gap-2">
        <FaChevronUp className="text-[#c17b4e]" size={12} />
        <span className="text-sm text-[#c17b4e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <FaChevronUp className="text-white" size={13} />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555555] bg-[#383838] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777777]"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555555] bg-[#383838] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777777]"
        />
      </div>

      {/* Buttons row */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2a] py-3 text-sm font-semibold text-white hover:bg-[#a35025] active:bg-[#923f1e]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2a] py-3 text-sm font-semibold text-white hover:bg-[#a35025] active:bg-[#923f1e]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-12">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
