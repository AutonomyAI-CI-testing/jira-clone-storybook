import { BsChevronUp, BsGear, BsInfoCircle } from "react-icons/bs";

/**
 * Standalone panel rebuilt from the "UI magician Agent" Figma frame.
 *
 * Self-contained smoke test: no props, no state, no data. The design's own
 * hexes are used as arbitrary values because this panel's dark/rust palette has
 * no counterpart in the repo's semantic token set.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#141414] px-[20px] pt-[20px] pb-[20px] font-primary text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      {/* Title */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <BsGear aria-hidden size={16} className="shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <BsChevronUp aria-hidden size={8} className="shrink-0 text-[#b5b5b5]" />
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <BsChevronUp
          aria-hidden
          size={12}
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[10px]">
        <span>Personal Access Token</span>
        <BsInfoCircle aria-hidden size={15} className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[10px]">
        <span>Design URL</span>
        <BsInfoCircle aria-hidden size={15} className="shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

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

      {/* Recent Breakdowns */}
      <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
