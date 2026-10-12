import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const BUTTONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black font-primary-bold"
  >
    {/* Title + settings */}
    <div className="flex items-center justify-between px-5 pt-5">
      <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <RiSettings3Line size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    {/* Collapsed section */}
    <div className="mt-[18px] flex items-center gap-2 px-5">
      <RiArrowUpSLine size={14} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[88px] flex items-center gap-2 px-5">
      <RiArrowUpSLine size={16} className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 px-5">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <RiInformationLine size={15} className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6 px-5">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <RiInformationLine size={15} className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />
    </div>

    {/* Actions */}
    <div className="mt-6 flex gap-4 pl-11">
      {BUTTONS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] px-5 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
