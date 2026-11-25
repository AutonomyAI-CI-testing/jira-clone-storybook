import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// The values below are the design's own, read from the Figma frame's exported
// style guide (a 254 x 508 design space). Its palette is a dark olive with a
// burnt-orange button and has no equivalent in the app's semantic token set,
// so the values stay local to this component as arbitrary Tailwind values.
const headingText = "font-primary-bold text-[13.5px] leading-[16.34px]";
const bodyText = "text-[11.5px] leading-[13.92px]";
const buttonClass = cx(
  bodyText,
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[#8c8078]"
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1c1d17] px-5 py-5 font-primary"
    >
      <div className="flex items-start justify-between">
        <span className={cx(headingText, "text-[#b5b5b5]")}>
          UI magician Agent
        </span>
        <FiSettings aria-hidden className="h-4 w-[14px] text-[#b5b5b5]" />
      </div>

      <div className="ml-[3px] mt-[18px] flex items-center gap-[9px]">
        <FiChevronUp
          aria-hidden
          className="h-[5px] w-2 shrink-0 text-[#8b9291]"
        />
        <span className={cx(bodyText, "min-w-0 truncate text-[#8b9291]")}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="ml-[6px] mt-[77px] flex items-center gap-[5px]">
        <FiChevronUp aria-hidden className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <span className={cx(headingText, "text-[#b2b2b1]")}>
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-3">
        <label
          htmlFor="test-card-token"
          className={cx(bodyText, "text-[#a4a4a3]")}
        >
          Personal Access Token
        </label>
        <FiInfo
          aria-hidden
          className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
        />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          bodyText,
          "mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[#737470] placeholder:text-[#737470]"
        )}
      />

      <div className="mt-[11px] flex items-center gap-3">
        <label
          htmlFor="test-card-url"
          className={cx(bodyText, "text-[#a3a3a2]")}
        >
          Design URL
        </label>
        <FiInfo
          aria-hidden
          className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="ml-6 mt-[22px] flex gap-[17px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <span className={cx(headingText, "mt-[47px] text-[#b0b0b0]")}>
        Recent Breakdowns
      </span>
    </div>
  );
};
