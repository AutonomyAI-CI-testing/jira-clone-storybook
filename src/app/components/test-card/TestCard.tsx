import { Settings, Info, ChevronUp } from "lucide-react";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1f1a] px-4 py-5 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-[#b5b5b5] text-base">
          UI magician Agent
        </span>
        <Settings size={16} color="#b5b5b5" />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2">
        <ChevronUp size={14} color="#8b9291" />
        <span className="text-[#8b9291] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <ChevronUp size={16} color="#b2b2b1" />
        <span className="text-[#b2b2b1] font-semibold text-xl">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-[#a4a4a3] text-sm">
            Personal Access Token
          </label>
          <Info size={14} color="#a4a4a3" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[#737470] placeholder-[#737470] text-sm outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-[#a3a3a2] text-sm">Design URL</label>
          <Info size={14} color="#a3a3a2" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-[#71726e] placeholder-[#71726e] text-sm outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 mt-1 justify-center">
        <button className="bg-[#843a17] text-[#8c8078] font-semibold rounded px-6 py-2 text-sm">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] font-semibold rounded px-6 py-2 text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-[#b0b0b0] font-semibold text-xl">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
