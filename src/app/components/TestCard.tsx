import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const inputClass =
  "mt-[28px] h-[70px] w-full rounded border border-[#4d4d4d] bg-[#2b2b2b] px-8 text-[18px] text-[#8a8a8a] placeholder:text-[#8a8a8a]";

const buttonClass =
  "h-[70px] w-[172px] rounded-md bg-[#a83e10] font-primary-bold text-[20px] text-white";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] p-[44px] font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[28px] leading-none">
        UI magician Agent
      </span>
      <RiSettings3Line
        aria-hidden="true"
        size={28}
        className="text-[#c8c8c8]"
      />
    </div>

    <div className="mt-[45px] flex items-center gap-4">
      <RiArrowUpSLine aria-hidden="true" size={26} className="text-[#9a9a9a]" />
      <span className="text-[19px] text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[160px] flex items-center gap-4">
      <RiArrowUpSLine aria-hidden="true" size={28} />
      <span className="font-primary-bold text-[24px]">Add New Design</span>
    </div>

    <div className="mt-[60px]">
      <div className="flex items-center gap-4">
        <label htmlFor="testcard-token" className="text-[18px] text-[#b3b3b3]">
          Personal Access Token
        </label>
        <RiInformationLine
          aria-hidden="true"
          size={24}
          className="text-[#c8c8c8]"
        />
      </div>
      <input
        id="testcard-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />
    </div>

    <div className="mt-[30px]">
      <div className="flex items-center gap-4">
        <label htmlFor="testcard-url" className="text-[18px] text-[#b3b3b3]">
          Design URL
        </label>
        <RiInformationLine
          aria-hidden="true"
          size={24}
          className="text-[#c8c8c8]"
        />
      </div>
      <input
        id="testcard-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={inputClass}
      />
    </div>

    <div className="mt-[50px] flex justify-end gap-8">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <div className="mt-[94px] font-primary-bold text-[24px]">
      Recent Breakdowns
    </div>
  </div>
);
