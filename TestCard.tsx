import { AiFillSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] w-full max-w-sm p-4 flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <AiFillSetting className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Chevron collapse row */}
      <div className="flex items-center gap-1">
        <BiChevronUp className="text-[#8b9291]" size={16} />
        <span className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 mt-2">
        <BiChevronUp className="text-[#b2b2b1]" size={18} />
        <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" size={13} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="bg-[#272822] border border-[#a5adad] text-[#737470] placeholder-[#737470] text-xs font-semibold px-3 py-2 rounded w-full outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a3a3a2] text-xs font-semibold">Design URL</span>
          <AiOutlineInfoCircle className="text-[#a3a3a2]" size={13} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#272822] border border-[#a5adad] text-[#71726e] placeholder-[#71726e] text-xs font-semibold px-3 py-2 rounded w-full outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold text-xs py-2 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold text-xs py-2 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-2">
        <span className="text-[#b2b2b1] font-semibold text-sm">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
