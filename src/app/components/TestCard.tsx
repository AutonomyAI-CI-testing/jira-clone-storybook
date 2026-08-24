import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#1a1a17] flex flex-col p-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5] font-sans">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp className="text-[#8b9291]" size={10} />
        <span className="text-[11.5px] font-semibold text-[#8b9291] font-sans">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-[#b2b2b1]" size={12} />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1] font-sans">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3] font-sans">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle className="text-[#a4a4a3]" size={15} />
      </div>

      {/* Token input box */}
      <div className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 mb-3">
        <span className="text-[11.5px] font-semibold text-[#737470] font-sans">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2] font-sans">
          Design URL
        </span>
        <AiOutlineInfoCircle className="text-[#a3a3a2]" size={15} />
      </div>

      {/* URL input box */}
      <div className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 mb-5">
        <span className="text-[10.5px] font-semibold text-[#71726e] font-sans">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-10">
        <button className="flex-1 bg-[#843a17] rounded py-2 text-[11.5px] font-semibold text-[#8c8078] font-sans">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] rounded py-2 text-[11.5px] font-semibold text-[#8c8078] font-sans">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <span className="text-[13.5px] font-semibold text-[#b0b0b0] font-sans">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
