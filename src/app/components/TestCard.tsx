import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

// Transcribed from the Figma frame (254x508, 20px gutter). The frame's colours and
// type sizes have no semantic role in this repo, so they are arbitrary values —
// theme-stable, which is why no theme class is pinned on the panel. Every text node
// carries its own colour, because `body` sets `text-font` and an inherited colour
// would follow the app theme instead of this panel's ramp.
const headingClass = "font-primary-bold text-[13.5px] leading-[16.34px]";
const labelClass =
  "font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]";
const buttonClass =
  "flex h-[40px] w-[87px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

const buttonLabels = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-[#1C1D17] font-primary">
    <div className="h-[9px] bg-[#161613]" />

    <div className="px-5 pb-[61px] pt-[11px]">
      <div className="flex items-start justify-between">
        <span className={`${headingClass} text-[#b5b5b5]`}>
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[#b5b5b5]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[#8b9291]"
        />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2 pl-1.5">
        <RiArrowUpSLine
          size={18}
          aria-hidden="true"
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className={`${headingClass} text-[#b2b2b1]`}>Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-5">
        <span className={labelClass}>Personal Access Token</span>
        <IoInformationCircleOutline
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>

      <div className="mt-3 flex h-[36px] items-center border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-[11px] flex items-center gap-5">
        <span className={labelClass}>Design URL</span>
        <IoInformationCircleOutline
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>

      <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      <div className="mt-[21px] flex gap-[15px] pl-[23px]">
        {buttonLabels.map((label) => (
          <div key={label} className={buttonClass}>
            {label}
          </div>
        ))}
      </div>

      <div className={`mt-[45px] ${headingClass} text-[#b0b0b0]`}>
        Recent Breakdowns
      </div>
    </div>
  </div>
);
