import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke-test card reproducing the attached Figma frame: a dark, plugin-style
 * panel with a title row, two collapsed section rows, two labelled fields, two
 * buttons and a section heading.
 *
 * Self-contained — no props, no state, nothing interactive.
 *
 * Colours and type sizes are the design's own values, written as Tailwind
 * arbitrary values rather than design tokens: this card reproduces an external
 * design, the repo's semantic tokens are theme-dependent (the card would change
 * colour with the app theme), and no declared token is a close match for any of
 * these values.
 */
const headingClass = "text-[13.5px] leading-[16px] font-semibold";
const labelClass = "text-[11.5px] leading-[14px] font-semibold";
const fieldClass =
  "h-9 w-full bg-[#272822] px-[19px] text-[11.5px] leading-[14px] font-semibold text-[#b5b5b5] outline-none";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] font-semibold text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#000000] px-5 pb-[62px] pt-5 text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className={headingClass}>UI magician Agent</span>
      <IoSettingsOutline size={16} aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
      <IoChevronUp size={10} aria-hidden="true" />
      <span>From entire frame to a singl...</span>
    </div>

    <div
      className={cx(
        "mt-[77px] flex items-center gap-[10px] text-[#b2b2b1]",
        headingClass
      )}
    >
      <IoChevronUp size={12} aria-hidden="true" />
      <span>Add New Design</span>
    </div>

    <div
      className={cx(
        "mt-[28px] flex items-center gap-5 text-[#a4a4a3]",
        labelClass
      )}
    >
      <span>Personal Access Token</span>
      <IoInformationCircleOutline size={15} aria-hidden="true" />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        "mt-3 border border-[color:#a5adad] placeholder:text-[#737470]",
        fieldClass
      )}
    />

    <div
      className={cx(
        "mt-[11px] flex items-center gap-5 text-[#a3a3a2]",
        labelClass
      )}
    >
      <span>Design URL</span>
      <IoInformationCircleOutline size={15} aria-hidden="true" />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/"
      className={cx(
        "mt-[11px] border-2 border-[color:#929291] text-[10.5px] placeholder:text-[#71726e]",
        fieldClass
      )}
    />

    <div className="mt-[23px] flex items-center gap-[17px] pl-[24px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <p className={cx("mt-[46px] text-[#b0b0b0]", headingClass)}>
      Recent Breakdowns
    </p>
  </div>
);

export default TestCard;
