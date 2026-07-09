import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400" size={22} />
      </div>

      {/* Subtitle / collapsed row */}
      <div className="flex items-center gap-2 mb-8">
        <FaChevronUp className="text-gray-400" size={12} />
        <span className="text-sm text-[#c17b4e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-3 mb-6">
        <FaChevronUp className="text-white" size={13} />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-200 font-medium">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#383838] border border-[#555] rounded px-3 py-2.5 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#888]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-200 font-medium">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#383838] border border-[#555] rounded px-3 py-2.5 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#888]"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 justify-center mb-10">
        <button
          type="button"
          className="flex-1 bg-[#b85c2a] hover:bg-[#a0501f] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#b85c2a] hover:bg-[#a0501f] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
