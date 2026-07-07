import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] min-h-screen w-full p-5 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#b5b5b5] text-xl font-bold">UI magician Agent</span>
        <IoSettingsOutline className="text-[#b5b5b5] text-2xl" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp className="text-[#8b9291] text-base" />
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className="text-[#b2b2b1] text-base" />
        <span className="text-[#b2b2b1] text-xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-sm font-medium">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-[#3a3a3a] rounded-md px-3 py-3 text-[#737470] placeholder-[#737470] text-sm outline-none focus:border-[#5a5a5a]"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#a4a4a3] text-sm font-medium">Design URL</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-[#3a3a3a] rounded-md px-3 py-3 text-[#737470] placeholder-[#737470] text-sm outline-none focus:border-[#5a5a5a]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b5451b] text-[#e8d4c8] font-semibold py-3 px-4 rounded-xl text-base">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] text-[#e8d4c8] font-semibold py-3 px-4 rounded-xl text-base">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
