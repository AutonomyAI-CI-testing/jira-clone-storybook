import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#282828] w-64 p-5 flex flex-col gap-4 font-sans">

      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-sm font-semibold">UI magician Agent</span>
        <HiCog className="text-[#b5b5b5]" size={20} />
      </div>

      {/* 2. Chevron + muted text row */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-[#8b9291] text-xs">From entire frame to a singl...</span>
      </div>

      {/* 3. Spacer */}
      <div className="my-4" />

      {/* 4. Add New Design section header */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-[#b2b2b1]" size={14} />
        <span className="text-[#b2b2b1] text-base font-bold">Add New Design</span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-1">
        <span className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</span>
        <HiInformationCircle className="text-[#a4a4a3]" size={14} title="Token is required for Figma API access" />
      </div>

      {/* 6. Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-xs outline-none"
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-1">
        <span className="text-[#a4a4a3] text-xs font-semibold">Design URL</span>
        <HiInformationCircle className="text-[#a4a4a3]" size={14} />
      </div>

      {/* 8. URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-xs outline-none"
      />

      {/* 9. Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#a0522d] text-[#8c8078] font-semibold text-sm py-2 px-4 rounded-lg">Awesome</button>
        <button className="flex-1 bg-[#a0522d] text-[#8c8078] font-semibold text-sm py-2 px-4 rounded-lg">Prepare</button>
      </div>

      {/* 10. Footer */}
      <div className="mt-4">
        <span className="text-[#b0b0b0] text-sm font-bold">Recent Breakdowns</span>
      </div>

    </div>
  );
};