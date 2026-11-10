import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel in the attached Figma
 * frame. A smoke test of the design-to-code path: no props, no state, no
 * behaviour. Every value comes from the frame's own 254x508 CSS space.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1c1c] px-[18px] pb-[62px] pt-[20px] font-primary text-[11.5px] leading-[14px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings
        size={16}
        className="shrink-0 text-[#b5b5b5]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-[6px] pl-[5px] text-[#8b9291]">
      <FiChevronUp size={12} className="shrink-0" aria-hidden="true" />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[74px] flex items-center gap-[4px] pl-[7px]">
      <FiChevronUp
        size={14}
        className="shrink-0 text-[#b2b2b1]"
        aria-hidden="true"
      />
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label className="mt-[28px] block text-[#a4a4a3]">
      <span className="flex items-center gap-[18px]">
        Personal Access Token
        <FiInfo size={15} className="shrink-0" aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] pl-[19px] pr-[8px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </label>

    <label className="mt-[12px] block text-[#a3a3a2]">
      <span className="flex items-center gap-[18px]">
        Design URL
        <FiInfo size={15} className="shrink-0" aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[20px] pr-[8px] text-[11.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </label>

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
