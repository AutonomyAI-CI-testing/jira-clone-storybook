import { HiOutlineCog, HiOutlineInformationCircle } from "react-icons/hi";
import { RiArrowUpSLine } from "react-icons/ri";

/*
 * Smoke-test component built from a Figma frame: a dark Figma-plugin style
 * panel. The palette is off-system (no matching semantic token exists), so
 * colours are written as arbitrary values — note that `tailwind.config.js`
 * replaces `theme.colors` wholesale, which means stock Tailwind colour classes
 * such as `bg-gray-800` compile to nothing here.
 */

const labelClass = "font-primary-bold text-[17px] text-[#c9c9c9]";

const infoIconClass = "shrink-0 text-[#c9c9c9]";

const inputClass =
  "mt-5 h-[60px] w-full rounded border border-[#8a8a8a] bg-[#262626] pl-7 pr-4 text-[17px] text-[#d7d7d7] placeholder:text-[#7d7d7d]";

const buttonClass =
  "h-[75px] w-[170px] rounded-lg bg-[#9e4a20] text-[19px] text-[#a89a93]";

const headingClass = "font-primary-bold text-[22px] leading-tight";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#1c1c1c] p-10 font-primary text-[#d7d7d7]"
    >
      {/* Title + settings */}
      <div className="flex items-center justify-between">
        <h1 className={headingClass}>UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#c9c9c9]">
          <HiOutlineCog size={22} />
        </button>
      </div>

      {/* Collapsed summary */}
      <div className="mt-11 flex items-center gap-3">
        <RiArrowUpSLine
          size={22}
          aria-hidden="true"
          className="shrink-0 text-[#c9c9c9]"
        />
        <span className="truncate text-[16px] text-[#cfcfcf]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[165px] flex items-center gap-3">
        <RiArrowUpSLine size={26} aria-hidden="true" className="shrink-0" />
        <h2 className={headingClass}>Add New Design</h2>
      </div>

      <div className="mt-[52px]">
        <div className="flex items-center gap-6">
          <label htmlFor="test-elem-pat" className={labelClass}>
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            size={22}
            aria-hidden="true"
            className={infoIconClass}
          />
        </div>
        <input
          id="test-elem-pat"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-6">
          <label htmlFor="test-elem-url" className={labelClass}>
            Design URL
          </label>
          <HiOutlineInformationCircle
            size={22}
            aria-hidden="true"
            className={infoIconClass}
          />
        </div>
        <input
          id="test-elem-url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={inputClass}
        />
      </div>

      {/* Actions */}
      <div className="mt-[52px] flex gap-9 pl-[46px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className={`mt-14 ${headingClass}`}>Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
