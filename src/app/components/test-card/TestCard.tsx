import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

/**
 * Smoke test for the design-to-component path: a static reproduction of the
 * "UI magician Agent" Figma panel. Self-contained by design — no props, no
 * state, no routing — and not wired into the app.
 *
 * Colours are literal hex values rather than semantic tokens on purpose: the
 * design's charcoal/rust palette is a one-off that does not map onto the
 * theme system, and this component must not participate in it.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1e1e1e] px-5 pb-14 pt-5 font-primary">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <LuSettings aria-hidden className="shrink-0 text-[#b5b5b5]" size={16} />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <LuChevronUp aria-hidden className="shrink-0 text-[#8b9291]" size={12} />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <LuChevronUp aria-hidden className="shrink-0 text-[#b2b2b1]" size={14} />
        <h2 className="font-primary-black text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <LuInfo aria-hidden className="shrink-0 text-[#a4a4a3]" size={15} />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-url"
            className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <LuInfo aria-hidden className="shrink-0 text-[#a3a3a2]" size={15} />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      <div className="ml-6 mt-[23px] flex gap-[17px]">
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

      <h3 className="mt-[46px] font-primary-black text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
