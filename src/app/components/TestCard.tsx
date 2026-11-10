import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Type, colour and spacing values read from the Figma frame (254 x 508).
// None of them maps to a token in this repo, so they are written as arbitrary
// utilities rather than stock Tailwind colours, which compile to nothing here.
const headingText = "text-[13.5px] leading-[16.34px]";
const bodyText = "text-[11.5px] leading-[13.92px]";
const fieldBase =
  "h-9 w-full bg-[#272822] px-5 text-[#c9c9c9] placeholder:text-[#737470]";
const buttonBase = "h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 pb-14 pt-5 font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className={headingText}>UI magician Agent</span>
      <FiSettings aria-hidden="true" className="shrink-0" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={14} />
      <span className={cx(bodyText, "truncate")}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={18} />
      <span className={headingText}>Add New Design</span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <label className={cx(bodyText, "text-[#a4a4a3]")} htmlFor="test-card-token">
        Personal Access Token
      </label>
      <FiInfo aria-hidden="true" className="shrink-0 text-[#a4a4a3]" size={15} />
    </div>

    <input
      id="test-card-token"
      className={cx(fieldBase, bodyText, "mt-3 border border-[#a5adad]")}
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <div className="mt-3 flex items-center gap-2">
      <label className={cx(bodyText, "text-[#a3a3a2]")} htmlFor="test-card-url">
        Design URL
      </label>
      <FiInfo aria-hidden="true" className="shrink-0 text-[#a3a3a2]" size={15} />
    </div>

    <input
      id="test-card-url"
      className={cx(fieldBase, bodyText, "mt-3 border-2 border-[#929291]")}
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-6 flex gap-[17px] pl-6">
      <button className={cx(buttonBase, bodyText)} type="button">
        Awesome
      </button>
      <button className={cx(buttonBase, bodyText)} type="button">
        Prepare
      </button>
    </div>

    <span className={cx(headingText, "mt-[46px] text-[#b0b0b0]")}>
      Recent Breakdowns
    </span>
  </div>
);
