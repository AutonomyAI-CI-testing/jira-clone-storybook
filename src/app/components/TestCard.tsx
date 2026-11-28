import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <p className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </p>
        <IoSettingsOutline size={15} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-1.5 pl-[3px]">
        <IoChevronUpOutline size={11} className="text-[#8b9291]" />
        <p className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[77px] flex items-center gap-1 pl-[6px]">
        <IoChevronUpOutline size={12} className="text-[#b2b2b1]" />
        <p className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </p>
      </div>

      <div className="mt-[28px] flex items-center gap-3">
        <p className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </p>
        <IoInformationCircleOutline size={15} className="text-[#a4a4a3]" />
      </div>

      <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <p className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </p>
      </div>

      <div className="mt-[11px] flex items-center gap-3">
        <p className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </p>
        <IoInformationCircleOutline size={15} className="text-[#a3a3a2]" />
      </div>

      <div className="mt-3 flex h-9 items-center border-2 border-[#929291] bg-[#272822] pl-[19px]">
        <p className="font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </p>
      </div>

      <div className="mt-[21px] flex justify-end gap-[17px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <p className="mt-[45px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};
