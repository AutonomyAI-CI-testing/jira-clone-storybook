import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] w-[254px] min-h-[508px] p-4 flex flex-col gap-3 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-bold text-[13.5px]">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-[#b5b5b5] text-[18px]" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1">
        <BiChevronUp className="text-[#8b9291] text-[16px]" />
        <span className="text-[#8b9291] text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Section heading */}
      <div className="flex items-center gap-1">
        <BiChevronUp className="text-[#b2b2b1] text-[18px]" />
        <span className="text-[#b2b2b1] font-semibold text-[13px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-[12px]">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-[13px]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#272822] border border-[#a5adad] text-[#737470] placeholder-[#737470] text-[11.5px] rounded px-2 py-2 w-full outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-[12px]">Design URL</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-[13px]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#272822] border-2 border-[#929291] text-[#737470] placeholder-[#737470] text-[11.5px] rounded px-2 py-2 w-full outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="bg-[#b5522a] text-[#e8d8d0] text-[12px] font-semibold rounded px-5 py-2 hover:opacity-90">
          Awesome
        </button>
        <button className="bg-[#b5522a] text-[#e8d8d0] text-[12px] font-semibold rounded px-5 py-2 hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <span className="text-[#b0b0b0] font-bold text-[13px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
