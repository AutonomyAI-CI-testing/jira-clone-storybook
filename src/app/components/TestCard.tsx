import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black p-5 font-primary text-[13.5px] leading-[16px]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[#b5b5b5]">UI magician Agent</span>
        <MdSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[22px] flex items-center gap-[9px]">
        <MdKeyboardArrowUp size={12} className="text-[#8b9291]" />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-[5px]">
        <MdKeyboardArrowUp size={14} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <MdInfoOutline size={15} className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
            Design URL
          </span>
          <MdInfoOutline size={15} className="text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      <div className="mt-[23px] flex gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
