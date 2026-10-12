import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-10 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <FiChevronUp size={10} aria-hidden />
      <span className="text-[11.5px] font-semibold leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2 text-[#b2b2b1]">
      <FiChevronUp size={12} aria-hidden />
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <label className="mt-7 flex flex-col gap-3">
      <span className="flex items-center gap-2 text-[#a4a4a3]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          Personal Access Token
        </span>
        <FiInfo size={15} aria-hidden />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />
    </label>

    <label className="mt-2 flex flex-col gap-3">
      <span className="flex items-center gap-2 text-[#a3a3a2]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          Design URL
        </span>
        <FiInfo size={15} aria-hidden />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />
    </label>

    <div className="mt-[22px] flex justify-center gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
