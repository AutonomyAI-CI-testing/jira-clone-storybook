import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: self-contained, no props, no state, and no screen in the app
 * imports it. The values come from the design's own export rather than the
 * semantic token layer, which has no counterpart for this palette (no rust
 * orange, no near-black ground).
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#141414] px-5 pb-[62px] pt-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <h1 className="text-xs leading-[16.34px] font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <HiOutlineCog aria-hidden="true" size={16} className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary row */}
    <div className="ml-[3px] mt-[18px] flex items-center gap-[9px]">
      <HiChevronUp aria-hidden="true" size={10} className="text-[#8b9291]" />
      <span className="text-2xs leading-[13.92px] font-primary-bold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="ml-[6px] mt-[77px] flex items-center gap-[5px]">
      <HiChevronUp aria-hidden="true" size={14} className="text-[#b2b2b1]" />
      <h2 className="text-xs leading-[16.34px] font-primary-bold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-[18px]">
      <label
        htmlFor="test-card-token"
        className="text-2xs leading-[13.92px] font-primary-bold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="text-[#a4a4a3]"
      />
    </div>
    <input
      id="test-card-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[18px] text-2xs leading-[13.92px] font-primary-bold text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-[18px]">
      <label
        htmlFor="test-card-url"
        className="text-2xs leading-[13.92px] font-primary-bold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="text-[#a3a3a2]"
      />
    </div>
    <input
      id="test-card-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] leading-[12.71px] font-primary-bold text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-2xs leading-[13.92px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-2xs leading-[13.92px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Closing section header */}
    <h2 className="mt-[47px] text-xs leading-[16.34px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
