import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained smoke test: no props, no state, no interactivity.
 *
 * The frame's palette (#000000 panel, #272822 fields, #843a17 buttons) has no
 * equivalent in this repo's semantic token set, so the values are carried as
 * arbitrary Tailwind values rather than re-mapped to unrelated tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed sub-row */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <HiChevronUp size={10} className="text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[77px] flex items-center gap-[9px]">
      <HiChevronUp size={12} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token field */}
    <div className="mt-[28px] flex items-center justify-between">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle size={15} className="text-[#a4a4a3]" />
    </div>
    <div className="mt-[12px] flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL field */}
    <div className="mt-[11px] flex items-center justify-between">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <HiOutlineInformationCircle size={15} className="text-[#a3a3a2]" />
    </div>
    <div className="mt-[11px] flex h-9 items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
