import { HiCog, HiChevronUp, HiChevronDown, HiInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#1e1e1a] font-[Inter,sans-serif] flex flex-col overflow-auto"
    >
      {/* Top bar strip */}
      <div className="w-full h-2 bg-[#111110]" />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-1">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16px]">
          UI magician Agent
        </span>
        <HiCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <HiChevronUp className="text-[#8b9291] flex-shrink-0" size={12} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "36px", maxHeight: "60px" }} />

      {/* Add New Design section label */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <HiChevronUp className="text-[#b2b2b1] flex-shrink-0" size={14} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[14px]">
            Personal Access Token
          </span>
          <HiInformationCircle className="text-[#a4a4a3] flex-shrink-0" size={15} />
        </div>
        <div className="w-full h-[37px] bg-[#272822] border border-[#a5adad] flex items-center px-3">
          <input
            readOnly
            className="w-full bg-transparent text-[#737470] text-[11.5px] font-semibold leading-[14px] outline-none placeholder:text-[#737470]"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 mb-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[14px]">
            Design URL
          </span>
          <HiInformationCircle className="text-[#a3a3a2] flex-shrink-0" size={15} />
        </div>
        <div className="w-full h-[37px] bg-[#272822] border-2 border-[#929291] flex items-center px-3">
          <input
            readOnly
            className="w-full bg-transparent text-[#71726e] text-[10.5px] font-semibold leading-[13px] outline-none placeholder:text-[#71726e]"
            placeholder="https://www.figma.com/file/:"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 px-5 mb-8">
        <button className="flex-1 h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[14px]">
          Awesome
        </button>
        <button className="flex-1 h-[37px] bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold leading-[14px]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
