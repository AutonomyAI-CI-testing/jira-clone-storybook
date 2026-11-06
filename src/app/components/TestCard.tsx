import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex min-h-[508px] w-[254px] flex-col bg-[#1a1a1a] px-5 py-5 font-primary">
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdSettings size={16} className="text-[#b0b0b0]" aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          className="text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          className="text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[12px] flex h-[36px] w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="font-primary-bold text-[11.5px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[12px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[20px]">
        <span className="font-primary-bold text-[10.5px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[46px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
