import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const sourceRowClass =
  "mt-[18px] flex h-[14px] items-center gap-[9px] text-[11.5px] leading-none";

const labelRowClass =
  "mt-[28px] flex h-[14px] items-center gap-2 text-[11.5px] leading-none";

const actionClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-none text-[#8c8078]";

/**
 * Static reproduction of a Figma frame (a small dark settings panel), used as a
 * smoke test for the design-to-code path. Self-contained: no props, no state,
 * no data layer. The frame's palette has no semantic role in this design system,
 * so its values are written as Tailwind arbitrary values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    {/* Panel header */}
    <div className="flex h-4 items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-none">
        UI magician Agent
      </span>
      <IoSettingsOutline size={16} />
    </div>

    {/* Collapsed source row */}
    <div className={cx(sourceRowClass, "text-[#8b9291]")}>
      <IoChevronUp size={10} />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Section heading */}
    <div className="mt-[77px] flex h-4 items-center gap-1.5 text-[13.5px] leading-none text-[#b2b2b1]">
      <IoChevronUp size={14} />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    {/* Personal access token field */}
    <div className={cx(labelRowClass, "text-[#a4a4a3]")}>
      <label htmlFor="testcard-token">Personal Access Token</label>
      <IoInformationCircleOutline size={15} />
    </div>
    <input
      id="testcard-token"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    {/* Design URL field */}
    <div className={cx(labelRowClass, "mt-[11px] text-[#a3a3a2]")}>
      <label htmlFor="testcard-url">Design URL</label>
      <IoInformationCircleOutline size={15} />
    </div>
    <input
      id="testcard-url"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/:"
    />

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    {/* Recent breakdowns */}
    <div className="mt-[47px] flex h-4 items-center font-primary-bold text-[13.5px] leading-none text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
