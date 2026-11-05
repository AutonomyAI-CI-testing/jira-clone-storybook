import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

const inputClass = "w-full bg-[#272822] px-4 font-semibold";
const buttonClass =
  "h-[40px] w-[87px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] pt-5 font-['Inter',sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <MdOutlineSettings size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <MdKeyboardArrowUp size={16} className="shrink-0 text-[#8b9291]" />
      <span className="flex-1 truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a single frame
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <MdKeyboardArrowUp size={16} className="shrink-0 text-[#b2b2b1]" />
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[36px]">
      <div className="flex items-center justify-between">
        <label
          htmlFor="test-card-token"
          className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <MdOutlineInfo size={15} className="text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={`mt-[6px] h-[39px] border border-[#a5adad] placeholder:text-[#737470] ${inputClass}`}
      />
    </div>

    <div className="mt-[10px]">
      <div className="flex items-center justify-between">
        <label
          htmlFor="test-card-url"
          className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <MdOutlineInfo size={15} className="text-[#a3a3a2]" />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={`mt-[8px] h-[41px] border-2 border-[#929291] text-[10.5px] placeholder:text-[#71726e] ${inputClass}`}
      />
    </div>

    <div className="mt-[18px] flex justify-center gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
