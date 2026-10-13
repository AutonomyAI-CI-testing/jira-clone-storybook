import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Smoke-test card reproducing a Figma frame (the "UI magician Agent" settings
 * panel). It is deliberately self-contained: no props, no state, no handlers and
 * no route. Its only job is to prove a design can come out the other side as a
 * rendered component.
 *
 * Colours and measurements are the design's own literals rather than theme
 * tokens: this card sits outside the app's token system, which exists so the
 * whole product can re-skin across themes.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="relative w-[254px] bg-[#1a1a1a] px-5 py-5 font-['Inter',sans-serif]"
    >
      {/* Top edge highlight from the frame */}
      <div className="absolute inset-x-0 top-0 h-[9px] bg-white/5" aria-hidden />

      {/* Title row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <RiSettings3Line
          size={16}
          className="shrink-0 text-[#b5b5b5]"
          aria-hidden
        />
      </div>

      {/* Collapsed section row */}
      <div className="mt-[18px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          className="shrink-0 text-[#8b9291]"
          aria-hidden
        />
        <p className="truncate text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
          From entire frame to a single component
        </p>
      </div>

      {/* Section header */}
      <div className="mt-[75px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden
        />
        <h2 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7">
        <div className="flex items-center justify-between">
          <label
            htmlFor="test-card-token"
            className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <RiInformationLine
            size={15}
            className="shrink-0 text-[#a4a4a3]"
            aria-hidden
          />
        </div>
        <input
          id="test-card-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[10px] w-full border border-[#a5adad] bg-[#272822] px-5 py-[11px] text-[11.5px] leading-[13.92px] font-semibold text-[#b5b5b5] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[10px]">
        <div className="flex items-center justify-between">
          <label
            htmlFor="test-card-design-url"
            className="text-[11.5px] leading-[13.92px] font-semibold text-[#a3a3a2]"
          >
            Design URL
          </label>
          <RiInformationLine
            size={15}
            className="shrink-0 text-[#a3a3a2]"
            aria-hidden
          />
        </div>
        <input
          id="test-card-design-url"
          placeholder="https://www.figma.com/file/:"
          className="mt-[9px] w-full border-2 border-[#929291] bg-[#272822] px-5 py-[10px] text-[11.5px] leading-[13.92px] font-semibold text-[#b5b5b5] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-[19px] flex justify-end gap-[15px]">
        <button
          type="button"
          className="h-[37px] w-[87px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[87px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Closing heading */}
      <h3 className="mt-12 text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
