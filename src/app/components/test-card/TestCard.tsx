import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <FiSettings
        aria-hidden
        className="h-4 w-4 shrink-0 text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-2 w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[60px]">
      <div className="flex items-center gap-1.5">
        <FiChevronUp aria-hidden className="h-3 w-3 shrink-0 text-[#b2b2b1]" />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-5">
          <label
            htmlFor="testcard-pat"
            className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <FiInfo aria-hidden className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          id="testcard-pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-4">
          <label
            htmlFor="testcard-url"
            className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <FiInfo aria-hidden className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          id="testcard-url"
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      <div className="mt-[22px] flex justify-end gap-[17px]">
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
    </div>

    <h2 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
