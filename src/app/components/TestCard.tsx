import { HiInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

const actionButtonClass =
  "flex h-10 w-[87px] items-center justify-center rounded bg-[#843a17] text-2xs text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1C1D17] p-5 font-primary">
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-3">
        <RiArrowUpSLine size={14} className="text-[#8b9291]" />
        <span className="text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-3">
        <RiArrowUpSLine size={14} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-3">
        <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
        <HiInformationCircle size={15} className="text-[#a4a4a3]" />
      </div>
      <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-2xs text-[#737470]">figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      <div className="mt-[11px] flex items-center gap-3">
        <span className="text-2xs text-[#a3a3a2]">Design URL</span>
        <HiInformationCircle size={15} className="text-[#a3a3a2]" />
      </div>
      <div className="mt-[11px] flex h-9 items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
        <span className="text-2xs text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-5 flex justify-end gap-4">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-11 font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
