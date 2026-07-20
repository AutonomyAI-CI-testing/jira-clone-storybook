import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#282828] min-h-screen p-6 text-white">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline size={24} className="text-white" />
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp size={16} className="text-[#C4703A]" />
        <span className="text-[#C4703A] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp size={20} className="text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-2 mb-2">
          <label className="text-sm text-white">Personal Access Token</label>
          <AiOutlineInfoCircle size={16} className="text-white/70" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#4A4A4A] rounded p-3 text-gray-400 placeholder:text-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 mb-2">
          <label className="text-sm text-white">Design URL</label>
          <AiOutlineInfoCircle size={16} className="text-white/70" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#888888] rounded p-3 text-gray-400 placeholder:text-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Button row */}
      <div className="flex gap-4 mb-8">
        <button
          type="button"
          className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold cursor-pointer"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold cursor-pointer"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold text-white mt-4">Recent Breakdowns</h2>
    </div>
  );
};
