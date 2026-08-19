import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="w-[254px] bg-[#272822] flex flex-col px-5 py-5 min-h-[508px]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16px]">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-10">
        <BiChevronUp className="text-[#8b9291] shrink-0" size={14} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design row */}
      <div className="flex items-center gap-2 mb-5">
        <BiChevronUp className="text-[#b2b2b1] shrink-0" size={14} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[14px]">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle className="text-[#a4a4a3] shrink-0" size={15} />
      </div>

      {/* Token input */}
      <div className="mb-4">
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] px-3 py-2 text-[#737470] text-[11.5px] font-semibold placeholder:text-[#737470] outline-none"
        />
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[14px]">
          Design URL
        </span>
        <AiOutlineInfoCircle className="text-[#a3a3a2] shrink-0" size={15} />
      </div>

      {/* URL input */}
      <div className="mb-6">
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] px-3 py-2 text-[#71726e] text-[10.5px] font-semibold placeholder:text-[#71726e] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#843a17] rounded px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] rounded px-4 py-2 text-[#8c8078] text-[11.5px] font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
