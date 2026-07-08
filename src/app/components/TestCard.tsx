import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[320px] min-h-screen px-5 py-6 flex flex-col gap-6"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400" size={22} />
      </div>

      {/* Subtitle / collapsed row */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-gray-400" size={12} />
        <span className="text-sm text-[#c17b4e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mt-4">
        <FaChevronUp className="text-white" size={14} />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300 font-medium">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#383838] border border-[#555] rounded text-gray-400 placeholder-gray-500 text-sm px-3 py-2.5 outline-none focus:border-[#777] w-full"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300 font-medium">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#383838] border border-[#555] rounded text-gray-400 placeholder-gray-500 text-sm px-3 py-2.5 outline-none focus:border-[#777] w-full"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 justify-center">
        <button className="bg-[#b85c2a] text-white text-sm font-semibold px-8 py-3 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white text-sm font-semibold px-8 py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-4">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
