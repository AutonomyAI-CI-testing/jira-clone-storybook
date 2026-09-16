import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-black p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-4 flex items-center gap-1.5">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-1.5">
        <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
        </div>
        <div className="rounded-[2px] border border-[#a5adad] bg-[#272822] px-2.5 py-2.5">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-1">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
        </div>
        <div className="rounded-[2px] border-2 border-[#929291] bg-[#272822] px-2.5 py-2.5">
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
