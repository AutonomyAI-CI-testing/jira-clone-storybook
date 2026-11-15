import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no behaviour beyond a plain
 * input/button. Colours are the design's own literals (they are not part of the
 * project's semantic token set) and the type is the project's CircularStd
 * families, selected by family rather than by weight utility.
 */

const TITLE = "font-primary-bold text-[13.5px] leading-[16.34px] text-[#B5B5B5]";
const COLLAPSED =
  "truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8B9291]";
const SECTION = "font-primary-bold text-[13.5px] leading-[16.34px] text-[#B2B2B1]";
const LABEL = "font-primary-bold text-[11.5px] leading-[13.92px]";
const INPUT =
  "w-full border border-[#A5ADAD] bg-[#272822] px-[19px] py-[11px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#B5B5B5] placeholder:text-[#737470]";
const BUTTON =
  "h-[37px] w-[85px] cursor-pointer rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8C8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pt-5 pb-[62px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className={TITLE}>UI magician Agent</span>
      <HiOutlineCog size={16} aria-hidden className="shrink-0 text-[#B5B5B5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp size={12} aria-hidden className="shrink-0 text-[#8B9291]" />
      <span className={COLLAPSED}>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <HiChevronUp size={14} aria-hidden className="shrink-0 text-[#B2B2B1]" />
      <span className={SECTION}>Add New Design</span>
    </div>

    <label className="mt-[28px] flex items-center gap-2" htmlFor="testElemToken">
      <span className={cx(LABEL, "text-[#A4A4A3]")}>Personal Access Token</span>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden
        className="shrink-0 text-[#A4A4A3]"
      />
    </label>
    <input
      id="testElemToken"
      className={cx("mt-3", INPUT)}
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <label className="mt-[11px] flex items-center gap-2" htmlFor="testElemUrl">
      <span className={cx(LABEL, "text-[#A3A3A2]")}>Design URL</span>
      <HiOutlineInformationCircle
        size={15}
        aria-hidden
        className="shrink-0 text-[#A3A3A2]"
      />
    </label>
    <input
      id="testElemUrl"
      className={cx(
        "mt-[11px]",
        INPUT,
        "placeholder:text-[10.5px] placeholder:text-[#71726E]"
      )}
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-[23px] flex gap-[17px]">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
      Recent Breakdowns
    </h2>
  </div>
);
