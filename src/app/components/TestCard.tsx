import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

export const TestCard = () => {
  const buttonClass =
    "h-9 w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 py-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px]">
          UI magician Agent
        </span>
        <IoSettingsOutline aria-hidden="true" size={16} />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <RiArrowUpSLine aria-hidden="true" className="shrink-0" size={16} />
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
        <RiArrowUpSLine aria-hidden="true" className="shrink-0" size={16} />
        <span className="font-primary-bold text-[13.5px]">Add New Design</span>
      </div>

      <div className="mt-6 flex items-center gap-5 text-[#a4a4a3]">
        <span className="text-[11.5px]">Personal Access Token</span>
        <IoInformationCircleOutline aria-hidden="true" size={15} />
      </div>
      <div className="mt-2 flex h-9 items-center border border-[color:#a5adad] bg-[#272822] px-5">
        <span className="text-[11.5px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-3 flex items-center gap-5 text-[#a3a3a2]">
        <span className="text-[11.5px]">Design URL</span>
        <IoInformationCircleOutline aria-hidden="true" size={15} />
      </div>
      <div className="mt-2 flex h-9 items-center border-2 border-[color:#929291] bg-[#272822] px-5">
        <span className="text-[10.5px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-6 flex gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-12">
        <span className="font-primary-bold text-[13.5px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
