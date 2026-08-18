import { HiChevronUp, HiChevronDown, HiOutlineCog } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1a] flex flex-col py-5"
      style={{ fontFamily: 'Inter, sans-serif', minHeight: 508 }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 mb-2">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 mb-8">
        <HiChevronUp className="text-[#8b9291] shrink-0" size={12} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <HiChevronDown className="text-[#b2b2b1] shrink-0" size={14} />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <AiOutlineInfoCircle className="text-[#a4a4a3]" size={14} />
          </div>
          <div className="bg-[#272822] border-2 border-[#929291] rounded px-3 py-2.5">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <AiOutlineInfoCircle className="text-[#a3a3a2]" size={14} />
          </div>
          <div className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2.5">
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-[#843a17] rounded py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] rounded py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
            Prepare
          </button>
        </div>
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
