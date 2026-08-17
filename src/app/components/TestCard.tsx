import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1b] text-[#b5b5b5] font-sans overflow-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <LuSettings size={14} className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 px-5 pb-4">
        <LuChevronUp size={8} className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          <LuChevronUp size={12} className="text-[#b2b2b1]" />
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
            <LuInfo size={13} className="text-[#a4a4a3]" />
          </div>
          <div
            className="w-full rounded-sm px-3 py-2"
            style={{ background: "#272822", border: "1px solid #a5adad" }}
          >
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <LuInfo size={13} className="text-[#a3a3a2]" />
          </div>
          <div
            className="w-full rounded-sm px-3 py-2"
            style={{ background: "#272822", border: "2px solid #929291" }}
          >
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className="flex-1 py-2 rounded text-[11.5px] font-semibold text-[#8c8078] bg-[#843a17]"
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded text-[11.5px] font-semibold text-[#8c8078] bg-[#843a17]"
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
};

export default TestCard;
