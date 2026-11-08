import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel from
 * the attached Figma frame.
 *
 * This is a smoke test: the layout approximates the frame's measured positions,
 * and the colours are the frame's own literals, which correspond to no role in
 * this repo's token system. It takes no props and is wired to no route.
 */

const actionClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-[20px] pb-[20px] pt-[20px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} aria-hidden="true" className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <HiChevronUp size={10} aria-hidden="true" className="text-[#8b9291]" />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <HiChevronUp size={12} aria-hidden="true" className="text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[20px]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden="true"
        className="text-[#a4a4a3]"
      />
    </div>
    <div className="mt-[12px] flex h-[36px] items-center border border-[color:#a5adad] bg-[#272822] px-[18px]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[11px] flex items-center gap-[20px]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden="true"
        className="text-[#a3a3a2]"
      />
    </div>
    <div className="mt-[11px] flex h-[37px] items-center border-2 border-[color:#929291] bg-[#272822] px-[18px]">
      <span className="font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
