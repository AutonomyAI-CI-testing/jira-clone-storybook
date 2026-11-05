import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1C1D17] font-primary-bold"
    >
      <div className="h-[9px] bg-[#161613]" />

      <div className="flex flex-col px-5 pb-[62px] pt-[11px]">
        <div className="flex items-start justify-between">
          <h2 className="text-[13.5px] text-[#B5B5B5]">UI magician Agent</h2>
          <HiOutlineCog size={16} className="text-[#B5B5B5]" />
        </div>

        <div className="mt-[18px] flex items-center gap-1">
          <HiChevronUp size={16} className="text-[#8B9291]" />
          <span className="text-[11.5px] text-[#8B9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-1">
          <HiChevronUp size={16} className="text-[#B2B2B1]" />
          <h3 className="text-[13.5px] text-[#B2B2B1]">Add New Design</h3>
        </div>

        <div className="mt-7 flex items-center gap-2">
          <span className="text-[11.5px] text-[#A4A4A3]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle size={15} className="text-[#A4A4A3]" />
        </div>
        <input
          aria-label="Personal Access Token"
          className="mt-2.5 h-[39px] w-full border border-[#A5ADAD] bg-[#272822] px-5 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <div className="mt-2.5 flex items-center gap-2">
          <span className="text-[11.5px] text-[#A3A3A2]">Design URL</span>
          <HiOutlineInformationCircle size={15} className="text-[#A3A3A2]" />
        </div>
        <input
          aria-label="Design URL"
          className="mt-2.5 h-[41px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726E] placeholder:text-[#71726E]"
          placeholder="https://www.figma.com/file/:"
        />

        <div className="mt-[21px] flex justify-end gap-[17px]">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] text-[#8C8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] text-[#8C8078]"
          >
            Prepare
          </button>
        </div>

        <h3 className="mt-[46px] text-[13.5px] text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
