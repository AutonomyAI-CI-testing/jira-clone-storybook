import { MdSettings } from "react-icons/md";
import { IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained and visual only — it takes no props and has no
 * behaviour, so it can be dropped anywhere and rendered on its own.
 *
 * The frame's palette (near-black panel, olive field fills, burnt-orange
 * buttons) has no equivalent in the design system's tokens, so its literal
 * values are used here to keep the card's appearance fixed.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1e1e1e] p-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronUp size={10} className="text-[#8b9291]" aria-hidden />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <IoChevronUp size={14} className="text-[#b2b2b1]" aria-hidden />
      <span className="text-[13.5px] font-primary-bold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[25px] flex items-center gap-2">
      <span className="text-[11.5px] text-[#a4a4a3]">Personal Access Token</span>
      <IoInformationCircleOutline
        size={15}
        className="text-[#a4a4a3]"
        aria-hidden
      />
    </div>
    <div className="mt-3 flex h-[36px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[11px] flex items-center gap-2">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <IoInformationCircleOutline
        size={15}
        className="text-[#a3a3a2]"
        aria-hidden
      />
    </div>
    <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[20px]">
      <span className="text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex gap-[17px]">
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]">
        Awesome
      </div>
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]">
        Prepare
      </div>
    </div>

    <div className="mt-[47px] text-[13.5px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
