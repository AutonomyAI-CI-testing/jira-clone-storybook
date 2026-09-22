import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] rounded bg-black p-3 font-sans text-white"
  >
    {/* Header row: title + gear icon */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog className="h-4 w-4 text-[#b5b5b5]" />
    </div>

    {/* Subtitle row with chevron */}
    <div className="mt-4 flex items-center gap-1">
      <FaChevronUp className="h-2 w-2 text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="mt-8 flex items-center gap-1">
      <FaChevronUp className="h-3 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token field */}
    <div className="mt-4">
      <div className="mb-1 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FaInfoCircle className="h-2.5 w-2.5 text-[#a4a4a3]" />
      </div>
      <div className="rounded border border-[#a5adad] bg-[#272822] px-2 py-2">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    {/* Design URL field */}
    <div className="mt-4">
      <div className="mb-1 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FaInfoCircle className="h-2.5 w-2.5 text-[#a3a3a2]" />
      </div>
      <div className="rounded border-2 border-[#929291] bg-[#272822] px-2 py-2">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    {/* Buttons row */}
    <div className="mt-4 flex justify-end gap-2">
      <button
        type="button"
        className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns heading */}
    <div className="mt-8">
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
