import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * TestCard — a static reproduction of the "UI magician Agent" panel from the
 * attached Figma frame. Self-contained: no props, no state, no data.
 *
 * The frame's palette is off-system, so its colours are written as arbitrary
 * values. This repo replaces Tailwind's colour and font scales wholesale, which
 * makes stock palette/font classes compile to nothing, so a literal is the only
 * honest way to reach a colour the token set does not define.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1C1D17] p-5 font-primary text-[#b5b5b5]"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-sm leading-4">
        UI magician Agent
      </span>
      <HiOutlineCog aria-hidden="true" size={16} className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary */}
    <div className="ml-[3px] mt-[18px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#8b9291]"
      />
      <span className="truncate font-primary-bold text-2xs leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="ml-1.5 mt-[77px] flex items-center gap-1">
      <HiChevronUp
        aria-hidden="true"
        size={14}
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="font-primary-bold text-sm leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-2">
      <span className="font-primary-bold text-2xs leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a4a4a3]"
      />
    </div>
    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-5 font-primary-bold text-2xs text-[#b5b5b5] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-2">
      <span className="font-primary-bold text-2xs leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a3a3a2]"
      />
    </div>
    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-2xs text-[#b5b5b5] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer */}
    <div className="mt-[47px] font-primary-bold text-sm leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
