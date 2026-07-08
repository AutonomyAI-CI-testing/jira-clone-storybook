import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-6 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        <AiOutlineSetting className="text-white" size={24} />
      </div>

      {/* Subtitle / collapsed row */}
      <div className="flex items-center gap-2 mb-10">
        <FaChevronUp className="text-[#c17b4e]" size={12} />
        <span className="text-[#c17b4e] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <FaChevronUp className="text-white" size={14} />
        <span className="text-white text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-white opacity-60" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#383838] border border-[#555] text-gray-400 placeholder-gray-500 text-sm px-4 py-3 rounded outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <AiOutlineInfoCircle className="text-white opacity-60" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#383838] border border-[#555] text-gray-400 placeholder-gray-500 text-sm px-4 py-3 rounded outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#b85c2a] text-white text-sm font-semibold px-8 py-3 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white text-sm font-semibold px-8 py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-white text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
