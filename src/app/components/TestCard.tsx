import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 bg-[#1a1a18] text-[#b5b5b5] font-semibold overflow-auto"
      style={{ fontFamily: "Inter, sans-serif", minHeight: "508px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={14} className="text-[#b5b5b5] shrink-0" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <FiChevronUp size={12} className="text-[#8b9291] shrink-0" />
        <span className="text-[11.5px] font-semibold text-[#8b9291] truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5 pt-4">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp size={14} className="text-[#b2b2b1] shrink-0" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FiInfo size={13} className="text-[#a4a4a3] shrink-0" />
          </div>
          <div
            className="w-full rounded bg-[#272822] px-3 py-2"
            style={{ border: "1px solid #a5adad" }}
          >
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <FiInfo size={13} className="text-[#a3a3a2] shrink-0" />
          </div>
          <div
            className="w-full rounded bg-[#272822] px-3 py-2"
            style={{ border: "2px solid #929291" }}
          >
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
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
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
