import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[320px] min-h-screen p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="w-6 h-6 text-gray-400" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 mb-10">
        <FiChevronUp className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-[#b87333]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-sm text-gray-300">Design URL</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
