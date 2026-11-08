import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" settings panel from a Figma frame.
 *
 * Smoke test only: no props, no state and no handlers. Colours are pinned literals because the
 * frame's palette has no equivalent in the app's theme tokens, and the panel is a fixed dark mock
 * that must not re-skin with the app's themes.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1a1a1a] font-primary text-[13.5px] leading-[1.2] text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full bg-[#2b2b2b]" />

    {/* Title row */}
    <div className="mt-[11px] flex items-center justify-between px-5">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    {/* Collapsed section row */}
    <div className="mt-[18px] flex items-center gap-2 px-5">
      <HiOutlineChevronUp size={12} className="shrink-0 text-[#8b9291]" />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[62px] flex items-center gap-2 px-5">
      <HiOutlineChevronUp size={14} className="shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[12px] flex items-center gap-2 px-5">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        size={15}
        className="shrink-0 text-[#a4a4a3]"
      />
    </div>
    <div className="mt-[12px] px-5">
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="h-[36px] w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-2 px-5">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <HiOutlineInformationCircle
        size={15}
        className="shrink-0 text-[#a3a3a2]"
      />
    </div>
    <div className="mt-[11px] px-5">
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-[44px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[78px] px-5">
      <span className="font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
