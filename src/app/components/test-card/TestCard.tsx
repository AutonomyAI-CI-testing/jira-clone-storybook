import {
  MdInfoOutline,
  MdKeyboardArrowUp,
  MdOutlineSettings,
} from "react-icons/md";

const fieldClass = "mt-2 w-[211px] bg-[#272822] px-[19px]";

const actionButtonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black px-5 pt-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdOutlineSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <MdKeyboardArrowUp size={14} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <MdKeyboardArrowUp size={16} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <MdInfoOutline size={15} className="shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${fieldClass} h-9 border border-[#a5adad] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]`}
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-3">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <MdInfoOutline size={15} className="shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`${fieldClass} h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]`}
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
