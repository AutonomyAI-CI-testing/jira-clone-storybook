import { HiOutlineCog, HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#272822] p-5 w-[254px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#b5b5b5] font-semibold text-base">
          UI magician Agent
        </span>
        <HiOutlineCog className="text-[#b5b5b5] text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-8">
        <HiChevronUp className="text-[#8b9291] text-sm" />
        <span className="text-[#8b9291] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="text-[#b2b2b1] text-base" />
        <span className="text-[#b2b2b1] font-semibold text-base">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] placeholder-[#737470] text-sm px-3 py-2 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-sm">Design URL</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] placeholder-[#71726e] text-sm px-3 py-2 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="bg-[#843a17] text-[#c8b0a4] font-medium text-sm px-6 py-2.5 rounded">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#c8b0a4] font-medium text-sm px-6 py-2.5 rounded">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span className="text-[#b0b0b0] font-semibold text-base">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
