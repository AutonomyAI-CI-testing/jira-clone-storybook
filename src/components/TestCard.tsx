import {
  AiOutlineSetting,
  AiOutlineInfoCircle,
  AiOutlineUp,
} from "react-icons/ai";

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#272822] p-4">
      {/* Header row */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="mb-8 flex items-center gap-1">
        <AiOutlineUp size={10} color="#8b9291" />
        <span className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-4 flex items-center gap-2">
        <AiOutlineUp size={12} color="#b2b2b1" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle size={15} color="#a4a4a3" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full border border-[#a5adad] bg-[#272822] px-2 py-2 text-xs text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />

      {/* Design URL */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-semibold text-[#a3a3a2]">Design URL</span>
        <AiOutlineInfoCircle size={15} color="#a3a3a2" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mb-6 w-full border-2 border-[#929291] bg-[#272822] px-2 py-2 text-xs text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />

      {/* Action buttons */}
      <div className="mb-8 flex gap-3 px-2">
        <button className="flex-1 rounded bg-[#843a17] py-2 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] py-2 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
