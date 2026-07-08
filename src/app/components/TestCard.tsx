import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-5 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <AiOutlineSetting className="text-white" size={24} />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-8">
        <FaChevronUp className="text-[#c17b4e]" size={12} />
        <span className="text-[#c17b4e] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FaChevronUp className="text-white" size={14} />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm font-medium">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#383838] border border-[#555] rounded-md px-3 py-2.5 text-gray-400 placeholder:text-gray-500 text-sm outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm font-medium">Design URL</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#383838] border border-[#555] rounded-md px-3 py-2.5 text-gray-400 placeholder:text-gray-500 text-sm outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 justify-center mb-8">
        <button className="bg-[#b85c2a] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 active:opacity-80">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 active:opacity-80">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-white font-bold text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
};
