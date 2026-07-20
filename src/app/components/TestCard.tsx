import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen p-5 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white font-bold text-lg">UI magician Agent</h1>
        <IoSettingsOutline className="text-white" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp className="text-[#c0855a]" size={16} />
        <span className="text-[#c0855a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-white font-bold text-xl">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-gray-300 text-sm">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#3a3a3a] border border-gray-600 rounded text-gray-400 text-sm px-3 py-3 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-gray-300 text-sm">Design URL</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#3a3a3a] border border-gray-600 rounded text-gray-400 text-sm px-3 py-3 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 mb-10">
        <button className="flex-1 bg-[#b5461e] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5461e] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-white font-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
