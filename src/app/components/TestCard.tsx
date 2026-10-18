import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * A self-contained reproduction of the "UI magician Agent" design frame: a
 * fixed-width dark settings panel with a header, two labelled fields and a pair
 * of actions.
 *
 * Deliberately static — no props, no state and no data — and measured against
 * the design's own palette, which the app's semantic tokens do not describe.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#0d0d0d] px-5 py-5 font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-[16.34px]">UI magician Agent</h1>
      <RiSettings3Line size={16} className="shrink-0 text-[#a4a4a3]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <RiArrowUpSLine size={12} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <RiArrowUpSLine size={14} className="shrink-0 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
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
        <RiInformationLine size={15} className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
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
        <RiInformationLine size={15} className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
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

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
