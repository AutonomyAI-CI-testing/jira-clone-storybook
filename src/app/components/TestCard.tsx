import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdKeyboardArrowUp, MdOutlineSettings } from "react-icons/md";

/**
 * Self-contained reproduction of the "UI magician Agent" Figma frame (254x508).
 * No props, no state — the fields are uncontrolled and the buttons are inert.
 * Colours and type sizes are the frame's own values as Tailwind arbitrary
 * values: the repo's Tailwind theme is a full override, so no token matches
 * this frame's palette and none is invented for it.
 */
const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-[#1C1D17] px-5 pt-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdOutlineSettings
        size={16}
        aria-hidden="true"
        className="text-[#b5b5b5]"
      />
    </div>

    {/* Collapsed frame-summary row */}
    <div className="mt-[18px] flex items-center gap-2">
      <MdKeyboardArrowUp
        size={12}
        aria-hidden="true"
        className="text-[#8b9291]"
      />
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-2">
      <MdKeyboardArrowUp
        size={12}
        aria-hidden="true"
        className="text-[#b2b2b1]"
      />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden="true"
        className="text-[#a4a4a3]"
      />
    </div>
    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] pl-[19px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden="true"
        className="text-[#a3a3a2]"
      />
    </div>
    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border border-[#a5adad] bg-[#272822] pl-5 font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[23px] flex items-center gap-[17px] pl-[4px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <div className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

export default TestCard;
