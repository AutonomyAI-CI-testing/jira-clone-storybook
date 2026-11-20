import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-[#1c1c1c] px-[20px] py-[20px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        aria-hidden="true"
        className="shrink-0 text-[#b5b5b5]"
        size={15}
      />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
        size={14}
      />
      <span className="truncate font-primary-light text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[10px]">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
        size={16}
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[6px]">
      <span className="font-primary-light text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo aria-hidden="true" className="shrink-0 text-[#a4a4a3]" size={15} />
    </div>
    <input
      aria-label="Personal Access Token"
      className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-light text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      type="text"
    />

    <div className="mt-[11px] flex items-center gap-[6px]">
      <span className="font-primary-light text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo aria-hidden="true" className="shrink-0 text-[#a3a3a2]" size={15} />
    </div>
    <input
      aria-label="Design URL"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] font-primary-light text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/:"
      type="text"
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-light text-[11.5px] leading-[13.92px] text-[#8c8078]"
        type="button"
      >
        Awesome
      </button>
      <button
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-light text-[11.5px] leading-[13.92px] text-[#8c8078]"
        type="button"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
