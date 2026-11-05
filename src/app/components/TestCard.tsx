import { FaChevronUp } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

/**
 * Static reproduction of a Figma frame — a self-contained smoke test.
 * No props, no state, no data: every colour and size is an arbitrary value
 * taken from the frame's style guide, because the frame's palette (monokai
 * greys and a rust orange) has no matching semantic role in this repo.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1C1D17] p-5 font-['Inter',sans-serif]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp size={8} className="text-[#8b9291]" aria-hidden="true" />
        <span className="min-w-0 flex-1 truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FaChevronUp size={11} className="text-[#b2b2b1]" aria-hidden="true" />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center justify-between">
          <label
            htmlFor="testElem-token"
            className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            size={15}
            className="text-[#a4a4a3]"
            aria-hidden="true"
          />
        </div>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center justify-between">
          <label
            htmlFor="testElem-url"
            className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle
            size={15}
            className="text-[#a3a3a2]"
            aria-hidden="true"
          />
        </div>
        <input
          id="testElem-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
