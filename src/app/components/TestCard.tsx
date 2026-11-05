import { BsChevronUp } from "react-icons/bs";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pt-5 font-primary-bold text-[#b5b5b5]"
    >
      <div className="-mx-5 -mt-5 h-[9px] bg-[#161613]" />

      <div className="mt-[11px] flex items-center justify-between">
        <span className="text-[13.5px]">UI magician Agent</span>
        <IoSettingsOutline size={16} />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] text-[#8b9291]">
        <BsChevronUp size={12} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-[13.5px] text-[#b2b2b1]">
        <BsChevronUp size={14} />
        <span>Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-3 text-[11.5px] text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <IoInformationCircleOutline size={15} />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-3 text-[11.5px] text-[#a3a3a2]">
        <span>Design URL</span>
        <IoInformationCircleOutline size={15} />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
