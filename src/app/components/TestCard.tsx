import { FiChevronUp } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const actions = ["Awesome", "Prepare"];

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary-bold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          className="text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#8b9291]" aria-hidden="true" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FiChevronUp size={14} className="text-[#b2b2b1]" aria-hidden="true" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-5">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>

      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[11px] h-9 w-full border border-[color:#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-5">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>

      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border-2 border-[color:#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="ml-6 mt-[22px] flex gap-[17px]">
        {actions.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <span className="mt-[46px] block text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
