import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#1e1e1b] flex flex-col font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5] leading-[16.34px]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <FiChevronUp className="text-[#8b9291]" size={10} />
        <span className="text-[11.5px] font-semibold text-[#8b9291] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="text-[#b2b2b1]" size={12} />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1] leading-[16.34px]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3] leading-[13.92px]">
              Personal Access Token
            </span>
            <AiOutlineInfoCircle className="text-[#a4a4a3]" size={15} />
          </div>
          <div className="w-full h-[37px] bg-[#272822] border border-[#a5adad] flex items-center px-3">
            <span className="text-[11.5px] font-semibold text-[#737470] leading-[13.92px]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2] leading-[13.92px]">
              Design URL
            </span>
            <AiOutlineInfoCircle className="text-[#a3a3a2]" size={15} />
          </div>
          <div className="w-full h-[37px] bg-[#272822] border-2 border-[#929291] flex items-center px-3">
            <span className="text-[10.5px] font-semibold text-[#71726e] leading-[12.71px]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="w-[85px] h-[37px] bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] leading-[13.92px]">
            Awesome
          </button>
          <button className="w-[85px] h-[37px] bg-[#843a17] rounded text-[11.5px] font-semibold text-[#8c8078] leading-[13.92px]">
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0] leading-[16.34px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
