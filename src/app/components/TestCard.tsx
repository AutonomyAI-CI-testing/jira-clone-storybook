import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame
 * (254x508). Self-contained: no props, no state, no data wiring.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="relative h-[508px] w-[254px] overflow-hidden bg-[#1c1d17] font-primary"
  >
    {/* Title */}
    <span className="absolute left-[20px] top-[20px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
      UI magician Agent
    </span>
    <HiOutlineCog
      aria-hidden="true"
      className="absolute left-[216px] top-[20px] h-[16px] w-[14px] text-[#b5b5b5]"
    />

    {/* Collapsible row */}
    <HiChevronUp
      aria-hidden="true"
      className="absolute left-[23px] top-[57px] h-[5px] w-[8px] text-[#8b9291]"
    />
    <span className="absolute left-[40px] top-[54px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
      From entire frame to a singl...
    </span>

    {/* Add New Design */}
    <HiChevronUp
      aria-hidden="true"
      className="absolute left-[26px] top-[150px] h-[8px] w-[12px] text-[#b2b2b1]"
    />
    <span className="absolute left-[43px] top-[145px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
      Add New Design
    </span>

    {/* Personal Access Token */}
    <span className="absolute left-[20px] top-[189px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      Personal Access Token
    </span>
    <HiOutlineInformationCircle
      aria-hidden="true"
      className="absolute left-[173px] top-[187px] h-[15px] w-[15px] text-[#a4a4a3]"
    />
    <div className="absolute left-[20px] top-[215px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822]">
      <span className="absolute left-[18px] top-[10px] text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <span className="absolute left-[20px] top-[262px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
      Design URL
    </span>
    <HiOutlineInformationCircle
      aria-hidden="true"
      className="absolute left-[100px] top-[260px] h-[15px] w-[15px] text-[#a3a3a2]"
    />
    <div className="absolute left-[20px] top-[287px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822]">
      <span className="absolute left-[18px] top-[9px] text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <button
      type="button"
      className="absolute left-[44px] top-[346px] flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
    >
      Awesome
    </button>
    <button
      type="button"
      className="absolute left-[146px] top-[346px] flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
    >
      Prepare
    </button>

    {/* Recent Breakdowns */}
    <span className="absolute left-[20px] top-[430px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
