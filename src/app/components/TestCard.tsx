import { HiCog, HiChevronUp, HiChevronDown, HiInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1a] font-[Inter,sans-serif] overflow-auto"
    >
      {/* Top bar strip */}
      <div className="w-full h-[9px] bg-[#111110]" />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16px]">
          UI magician Agent
        </span>
        <HiCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-3">
        <HiChevronUp className="text-[#8b9291] shrink-0" size={12} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design */}
      <div className="flex items-center gap-3 px-5 mb-4">
        <HiChevronDown className="text-[#b2b2b1] shrink-0" size={14} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-2">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[14px]">
            Personal Access Token
          </span>
          <HiInformationCircle className="text-[#a4a4a3]" size={15} />
        </div>
        <input
          readOnly
          className="w-full h-[37px] bg-[#272822] border border-[#a5adad] rounded px-3 text-[#737470] text-[11.5px] font-semibold leading-[14px] outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[14px]">
            Design URL
          </span>
          <HiInformationCircle className="text-[#a3a3a2]" size={15} />
        </div>
        <input
          readOnly
          className="w-full h-[37px] bg-[#272822] border-2 border-[#929291] rounded px-3 text-[#71726e] text-[10.5px] font-semibold leading-[13px] outline-none"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 px-5 mb-8">
        <button className="flex-1 h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[14px]">
          Awesome
        </button>
        <button className="flex-1 h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[14px]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
