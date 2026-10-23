import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * A static replica of the "UI magician Agent" frame from Figma.
 *
 * Self-contained smoke-test component: it takes no props, holds no state and
 * has no behaviour. Its colours and type sizes are the design's own values
 * rather than the app's semantic tokens, because this frame is a design
 * replica and not product UI.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1d17] px-5 pt-5 pb-[57px] font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <RiSettings3Line size={16} aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-1.5 text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <RiArrowUpSLine size={16} className="-ml-px shrink-0" aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5 text-[#b2b2b1]">
      <RiArrowUpSLine size={16} className="shrink-0" aria-hidden />
      <span>Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      <span>Personal Access Token</span>
      <RiInformationLine size={15} className="shrink-0" aria-hidden />
    </div>

    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
      <span>Design URL</span>
      <RiInformationLine size={15} className="shrink-0" aria-hidden />
    </div>

    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] ml-[24px] flex gap-[17px]">
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

    <div className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</div>
  </div>
);
