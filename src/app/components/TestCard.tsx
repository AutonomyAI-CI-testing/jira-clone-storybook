import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Values below are approximated from the referenced Figma panel. They are kept
// as literal Tailwind values rather than theme tokens because the reference
// palette is not part of the app's token set and the card is meant to render
// the same regardless of the active theme.
const panelClass = "w-[508px] bg-[#2b2b2b] px-10 pt-10 pb-[130px]";

const rowClass = "flex items-center gap-4";
const labelRowClass = "flex items-center gap-12";
const iconClass = "shrink-0 text-[#c8c8c8]";

const titleClass = "font-primary-bold text-[28px] leading-8 text-[#d5d5d5]";
const rowLabelClass = "truncate font-primary text-[24px] leading-7";
const fieldLabelClass =
  "font-primary-bold text-[24px] leading-7 text-[#c8c8c8]";
const sectionHeadingClass =
  "font-primary-bold text-[28px] leading-8 text-[#d0d0d0]";

const inputClass =
  "h-[72px] w-full rounded border-2 border-[#7a7a7a] bg-transparent px-10 font-primary text-[24px] leading-7 text-[#d5d5d5] placeholder:text-[#8f8f8f]";

const buttonClass =
  "h-[75px] w-[170px] rounded-md bg-[#a03d1a] font-primary text-[24px] leading-7 text-[#d9d9d9] hover:bg-[#8f3617] active:bg-[#7d2f14]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={panelClass}>
    <div className="flex items-center justify-between">
      <h2 className={titleClass}>UI magician Agent</h2>
      <FiSettings size={28} className={iconClass} aria-hidden />
    </div>

    <div className={cx(rowClass, "mt-9 text-[#a8a8a8]")}>
      <FiChevronUp size={24} aria-hidden />
      <span className={rowLabelClass}>From entire frame to a singl...</span>
    </div>

    <div className="h-[160px]" />

    <div className={cx(rowClass, "pl-3 text-[#b0b0b0]")}>
      <FiChevronUp size={26} aria-hidden />
      <span className={rowLabelClass}>Add New Design</span>
    </div>

    <div className="mt-12">
      <div className={labelRowClass}>
        <span className={fieldLabelClass}>Personal Access Token</span>
        <FiInfo size={28} className={iconClass} aria-hidden />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={cx(inputClass, "mt-6")}
      />
    </div>

    <div className="mt-8">
      <div className={labelRowClass}>
        <span className={fieldLabelClass}>Design URL</span>
        <FiInfo size={28} className={iconClass} aria-hidden />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={cx(inputClass, "mt-6")}
      />
    </div>

    <div className="mt-12 flex justify-end gap-8">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className={cx(sectionHeadingClass, "mt-[88px]")}>
      Recent Breakdowns
    </h3>
  </div>
);
