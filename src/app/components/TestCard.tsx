import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#2b2b2b] p-5 font-sans"
      style={{ minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <RiArrowDropUpLine className="text-[#8b9291]" size={16} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-1">
        <RiArrowDropUpLine className="text-[#b2b2b1]" size={18} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle className="text-[#a4a4a3]" size={14} />
      </div>

      {/* Token input */}
      <div className="mt-1 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <AiOutlineInfoCircle className="text-[#a3a3a2]" size={14} />
      </div>

      {/* URL input */}
      <div
        className="mt-1 w-full rounded bg-[#272822] px-3 py-2"
        style={{ border: "2px solid #929291" }}
      >
        <span className="text-[11.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          className="flex-1 rounded py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          style={{ backgroundColor: "#843a17", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          style={{ backgroundColor: "#843a17", borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Recent Breakdowns */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
