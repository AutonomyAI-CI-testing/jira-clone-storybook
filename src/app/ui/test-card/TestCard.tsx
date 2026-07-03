import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-4 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <IoSettingsOutline className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-8">
        <IoChevronUp className="text-[#8b9291] text-sm" />
        <span className="text-[#8b9291] text-xs">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-5">
        <IoChevronUp className="text-[#b2b2b1] text-sm" />
        <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1.5">
          <span className="text-[#a4a4a3] text-xs font-medium">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#222222] border border-[#4a4a4a] rounded text-[#737470] text-xs px-3 py-2.5 outline-none placeholder:text-[#737470]"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1.5">
          <span className="text-[#a4a4a3] text-xs font-medium">Design URL</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#222222] border border-[#4a4a4a] rounded text-[#737470] text-xs px-3 py-2.5 outline-none placeholder:text-[#737470]"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button className="flex-1 bg-[#a0522d] text-[#e8d5c8] font-semibold text-sm py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#a0522d] text-[#e8d5c8] font-semibold text-sm py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b2b2b1] font-semibold text-sm">Recent Breakdowns</span>
      </div>
    </div>
  );
};
