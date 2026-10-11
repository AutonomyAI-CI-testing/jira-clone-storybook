import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-[20px] pb-[50px] pt-[20px] font-[Inter,sans-serif] text-[13.5px] font-semibold leading-[16.34px]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5]">UI magician Agent</span>
        <HiOutlineCog className="h-[16px] w-[16px] shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <HiChevronUp className="h-[10px] w-[12px] shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-[5px]">
        <HiChevronUp className="h-[12px] w-[14px] shrink-0 text-[#b2b2b1]" />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-[23px] flex items-center gap-[6px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
      </div>

      <div className="mt-[11px] flex h-[36px] w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-[6px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
      </div>

      <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[20px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px]">
        {actions.map((action) => (
          <div
            key={action}
            className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            {action}
          </div>
        ))}
      </div>

      <div className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
};
