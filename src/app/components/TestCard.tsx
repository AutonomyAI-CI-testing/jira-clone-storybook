import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 pb-[30px] pt-5 font-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdSettings size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed section header */}
      <div className="mt-[18px] flex items-center gap-2">
        <MdKeyboardArrowUp size={12} className="text-[#8b9291]" />
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[83px] flex items-center gap-2">
        <MdKeyboardArrowUp size={14} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[29px] flex items-center gap-[32px]">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <MdInfoOutline size={15} className="text-[#a4a4a3]" />
      </div>
      <div className="mt-[10px] flex h-[39px] w-[214px] items-center border border-[#a5adad] bg-[#272822] px-4 font-primary-bold text-[11.5px] leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL */}
      <div className="mt-[10px] flex items-center gap-[15px]">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <MdInfoOutline size={15} className="text-[#a3a3a2]" />
      </div>
      <div className="mt-[10px] flex h-[41px] w-[214px] items-center border-2 border-[#929291] bg-[#272822] px-4 font-primary-bold text-[10.5px] leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      {/* Buttons */}
      <div className="ml-[23px] mt-[18px] flex gap-[15px]">
        <div className="flex h-10 w-[87px] items-center justify-center">
          <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]">
            Awesome
          </div>
        </div>
        <div className="flex h-10 w-[87px] items-center justify-center">
          <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]">
            Prepare
          </div>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[46px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
