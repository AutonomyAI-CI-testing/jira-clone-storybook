import {
  AiOutlineInfoCircle,
  AiOutlineSetting,
  AiOutlineUp,
} from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary-bold"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting size={15} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-[18px] flex items-center gap-3">
        <AiOutlineUp size={9} className="text-[#8b9291]" />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-3">
        <AiOutlineUp size={13} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-2">
        <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <AiOutlineInfoCircle size={15} className="text-[#a4a4a3]" />
      </div>
      <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-2">
        <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <AiOutlineInfoCircle size={15} className="text-[#a3a3a2]" />
      </div>
      <div className="mt-3 flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      {/* Buttons */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Closing heading */}
      <div className="mt-[47px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
