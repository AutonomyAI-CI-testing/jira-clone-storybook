import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/*
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * The frame's palette (near-black panel, rust buttons) has no counterpart in
 * the semantic token set, so its own values are used verbatim. Icons come from
 * react-icons: the exported assets are PNG bitmaps wrapped in SVG data URIs.
 */
const fieldLabelClass = "text-[11.5px] leading-[13.92px] font-primary-bold";
const infoIconClass = "h-[15px] w-[15px] shrink-0";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-primary-bold text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings
        aria-hidden="true"
        className="h-4 w-[14px] shrink-0 text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="h-[5px] w-2 shrink-0 text-[#8b9291]"
      />
      <span className="truncate text-[11.5px] leading-[13.92px] font-primary-bold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-2 w-3 shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16.34px] font-primary-bold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center justify-between">
      <label
        htmlFor="test-card-personal-access-token"
        className={cx(fieldLabelClass, "text-[#a4a4a3]")}
      >
        Personal Access Token
      </label>
      <FiInfo
        aria-hidden="true"
        className={cx(infoIconClass, "text-[#a4a4a3]")}
      />
    </div>
    <input
      id="test-card-personal-access-token"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] font-primary-bold text-[#737470] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <div className="mt-[11px] flex items-center justify-between">
      <label
        htmlFor="test-card-design-url"
        className={cx(fieldLabelClass, "text-[#a3a3a2]")}
      >
        Design URL
      </label>
      <FiInfo
        aria-hidden="true"
        className={cx(infoIconClass, "text-[#a3a3a2]")}
      />
    </div>
    <input
      id="test-card-design-url"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] font-primary-bold text-[#71726e] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
