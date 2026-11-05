import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] overflow-hidden bg-[#1C1D17] font-['Inter',sans-serif] font-semibold"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="px-5 pt-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <IoSettingsOutline
            size={16}
            aria-hidden="true"
            className="text-[#d9d9d9]"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <IoChevronUp
            size={10}
            aria-hidden="true"
            className="text-[#8b9291]"
          />
          <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-2">
          <IoChevronUp
            size={12}
            aria-hidden="true"
            className="text-[#b2b2b1]"
          />
          <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <IoInformationCircleOutline
            size={15}
            aria-hidden="true"
            className="text-[#a4a4a3]"
          />
        </div>
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />

        <div className="mt-[11px] flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <IoInformationCircleOutline
            size={15}
            aria-hidden="true"
            className="text-[#a3a3a2]"
          />
        </div>
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[20px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />

        <div className="mt-[22px] flex gap-[17px] pl-6">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
