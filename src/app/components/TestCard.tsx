import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#282520] text-white min-h-screen p-6 flex flex-col gap-6 max-w-sm"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-300 text-2xl" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-gray-300 text-lg" />
        <span className="text-[#c88a5a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <HiChevronUp className="text-gray-300 text-lg" />
          <span className="text-xl font-bold text-white">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-200">Personal Access Token</span>
            <AiOutlineInfoCircle className="text-gray-300 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#312e2b] border border-[#4a4540] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-200">Design URL</span>
            <AiOutlineInfoCircle className="text-gray-300 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#312e2b] border border-[#4a4540] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8B4513] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8B4513] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
