import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 min-h-screen bg-[#1a1a18] font-semibold"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <FiSettings className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <FiChevronUp className="text-[#8b9291]" size={10} />
        <span className="text-[11.5px] text-[#8b9291] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design row */}
      <div className="flex items-center gap-2 px-5 pt-6 pb-4">
        <FiChevronUp className="text-[#b2b2b1]" size={13} />
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 pb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[11.5px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo className="text-[#a4a4a3]" size={13} />
        </div>
        <div
          className="w-full rounded px-3 py-2 bg-[#272822]"
          style={{ border: "1px solid #a5adad" }}
        >
          <span className="text-[11.5px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
          <FiInfo className="text-[#a3a3a2]" size={13} />
        </div>
        <div
          className="w-full rounded px-3 py-2 bg-[#272822]"
          style={{ border: "2px solid #929291" }}
        >
          <span className="text-[10.5px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 pb-8">
        <button
          className="flex-1 py-2 rounded text-[11.5px] font-semibold text-[#8c8078] bg-[#843a17]"
          style={{ borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded text-[11.5px] font-semibold text-[#8c8078] bg-[#843a17]"
          style={{ borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
