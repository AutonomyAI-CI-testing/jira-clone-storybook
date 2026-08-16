import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#272822] w-[254px] min-h-[508px] flex flex-col px-5 py-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <AiOutlineSetting size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-10">
        <HiChevronUp size={12} color="#8b9291" />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp size={14} color="#b2b2b1" />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[13.92px]">
          Personal Access Token
        </span>
        <HiInformationCircle size={15} color="#a4a4a3" />
      </div>

      {/* Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full h-[37px] px-3 mb-3 bg-[#272822] border border-[#a5adad] text-[#737470] text-[11.5px] font-semibold placeholder:text-[#737470] outline-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[13.92px]">
          Design URL
        </span>
        <HiInformationCircle size={15} color="#a3a3a2" />
      </div>

      {/* Design URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full h-[37px] px-3 mb-5 bg-[#272822] border-2 border-[#929291] text-[#71726e] text-[10.5px] font-semibold placeholder:text-[#71726e] outline-none"
      />

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button
          type="button"
          className="flex-1 h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold"
          style={{ borderRadius: 4 }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold"
          style={{ borderRadius: 4 }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
