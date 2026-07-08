import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2a2a] px-5 py-6 font-sans text-white"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <AiOutlineSetting className="text-gray-400" size={24} />
      </div>

      {/* Subtitle / collapsed row */}
      <div className="mb-10 flex items-center gap-2">
        <FaChevronUp className="text-gray-400" size={12} />
        <span className="text-sm text-[#c17b4e]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <FaChevronUp className="text-white" size={14} />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-1.5 flex items-center gap-2">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-1.5 flex items-center gap-2">
          <label className="text-sm text-gray-300">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#383838] px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777]"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-12 flex justify-center gap-4">
        <button className="rounded-lg bg-[#b85c2a] px-8 py-3 text-sm font-semibold text-white hover:bg-[#a34f22]">
          Awesome
        </button>
        <button className="rounded-lg bg-[#b85c2a] px-8 py-3 text-sm font-semibold text-white hover:bg-[#a34f22]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
