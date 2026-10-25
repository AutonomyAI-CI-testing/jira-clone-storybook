import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * The frame's palette, Inter type and numeric weights sit outside this
 * project's semantic token layer, so its own values are used directly as
 * Tailwind arbitrary utilities. Self-contained by design: no props, no state.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 [font-family:Inter,system-ui,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline size={16} className="text-[#c9c9c9]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <IoChevronUp size={12} className="shrink-0 text-[#c9c9c9]" />
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-[5px]">
      <IoChevronUp size={12} className="shrink-0 text-[#c9c9c9]" />
      <span className="text-[13.5px] font-semibold leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-3">
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <IoInformationCircleOutline size={15} className="text-[#c9c9c9]" />
    </div>
    <div className="mt-[10px] flex h-[39px] items-center border border-[#a5adad] bg-[#272822] px-5">
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[10px] flex items-center gap-3">
      <span className="text-[11.5px] font-semibold leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <IoInformationCircleOutline size={15} className="text-[#c9c9c9]" />
    </div>
    <div className="mt-[9px] flex h-[41px] items-center border-2 border-[#929291] bg-[#272822] px-5">
      <span className="text-[10.5px] font-semibold leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-5 flex items-center justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[47px] text-[13.5px] font-semibold leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
