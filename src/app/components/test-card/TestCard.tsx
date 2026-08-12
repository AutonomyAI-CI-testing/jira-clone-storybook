import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#1c1c1a] flex flex-col gap-3 p-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-[#8b9291]" size={12} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-[#b2b2b1]" size={14} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiInformationCircle className="text-[#a4a4a3]" size={15} />
        </div>
        <div
          className="bg-[#272822] rounded px-3 py-2"
          style={{ border: "1px solid #a5adad" }}
        >
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <HiInformationCircle className="text-[#a3a3a2]" size={15} />
        </div>
        <div
          className="bg-[#272822] rounded px-3 py-2"
          style={{ border: "2px solid #929291" }}
        >
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-1">
        <button
          type="button"
          className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold px-6 py-2"
          style={{ borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold px-6 py-2"
          style={{ borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
