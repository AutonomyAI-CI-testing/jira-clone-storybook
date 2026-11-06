import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1c1c1c] px-[20px] pb-[62px] pt-[20px] font-primary-bold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          className="shrink-0 text-[#b5b5b5]"
        >
          <IoSettingsOutline size={16} />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <IoChevronUpOutline size={10} className="shrink-0 text-[#b5b5b5]" />
        <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-[5px]">
        <IoChevronUpOutline size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[8px]">
        <label
          htmlFor="testElem-token"
          className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[9px] h-[36px] w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[14px] text-[#b5b5b5] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-[8px]">
        <label
          htmlFor="testElem-url"
          className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[9px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[20px] text-[10.5px] leading-[13px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
