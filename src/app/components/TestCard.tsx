import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white min-h-screen w-full p-5 flex flex-col gap-4"
    >
      {/* 1. Header row */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl text-white">UI magician Agent</span>
        <AiOutlineSetting className="text-white" size={24} />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-[#c17b4e]" size={12} />
        <span className="text-[#c17b4e] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer + Add New Design heading */}
      <div className="mt-6 flex items-center gap-2">
        <FaChevronUp className="text-white" size={14} />
        <span className="font-bold text-xl text-white">Add New Design</span>
      </div>

      {/* 4. Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white font-medium">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#383838] border border-[#555] rounded px-3 py-2.5 text-gray-400 placeholder-gray-500 outline-none focus:border-[#777] text-sm"
        />
      </div>

      {/* 5. Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white font-medium">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#383838] border border-[#555] rounded px-3 py-2.5 text-gray-400 placeholder-gray-500 outline-none focus:border-[#777] text-sm"
        />
      </div>

      {/* 6. Buttons */}
      <div className="flex gap-4 mt-2">
        <button className="bg-[#b85c2a] text-white font-semibold rounded-lg px-6 py-3 flex-1">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white font-semibold rounded-lg px-6 py-3 flex-1">
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns */}
      <div className="mt-6">
        <span className="font-bold text-xl text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
