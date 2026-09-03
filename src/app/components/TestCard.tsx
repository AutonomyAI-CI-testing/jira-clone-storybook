import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] font-['Inter',sans-serif] py-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-tight">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 mb-8">
        <FiChevronUp className="text-[#8b9291] shrink-0" size={10} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-tight truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp className="text-[#b2b2b1] shrink-0" size={11} />
          <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-tight">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1.5">
            <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
              Personal Access Token
            </span>
            <FiInfo className="text-[#a4a4a3] shrink-0" size={13} />
          </div>
          <div className="w-full border border-[#a5adad] bg-[#272822] rounded px-3 py-2">
            <span className="text-[#737470] text-[11.5px] font-semibold">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1.5">
            <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
              Design URL
            </span>
            <FiInfo className="text-[#a3a3a2] shrink-0" size={13} />
          </div>
          <div className="w-full border-2 border-[#929291] bg-[#272822] rounded px-3 py-2">
            <span className="text-[#71726e] text-[10.5px] font-semibold">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#843a17] rounded py-2.5 text-[#8c8078] text-[11.5px] font-semibold">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] rounded py-2.5 text-[#8c8078] text-[11.5px] font-semibold">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 mt-8">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
