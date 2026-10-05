import cx from "classix";
import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const FONT_FAMILY = "font-[Inter,ui-sans-serif,sans-serif]";

const FIELD =
  "w-full border bg-[#272822] pl-[18px] text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]";

const BUTTON =
  "flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={cx(
      FONT_FAMILY,
      "min-h-[508px] w-[254px] bg-[#1c1c1c] text-[11.5px] font-semibold leading-[13.92px]"
    )}
  >
    <div className="flex flex-col px-5 pt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <RiSettings3Line size={16} className="text-[#d9d9d9]" aria-hidden />
      </div>

      <div className="mt-[18px] flex items-center gap-1">
        <RiArrowUpSLine size={16} className="text-[#b5b5b5]" aria-hidden />
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      <h2 className="mt-[75px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        <RiArrowUpSLine size={16} className="text-[#d0d0d0]" aria-hidden />
        Add New Design
      </h2>

      <label
        htmlFor="testElem-token"
        className="mt-[30px] flex items-center gap-[23px]"
      >
        <span className="text-[#a4a4a3]">Personal Access Token</span>
        <RiInformationLine size={15} className="text-[#e0e0e0]" aria-hidden />
      </label>
      <input
        id="testElem-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          FONT_FAMILY,
          FIELD,
          "mt-[12px] h-[36px] border-[#a5adad] placeholder:text-[#737470]"
        )}
      />

      <label
        htmlFor="testElem-url"
        className="mt-[11px] flex items-center gap-[18px]"
      >
        <span className="text-[#a3a3a2]">Design URL</span>
        <RiInformationLine size={15} className="text-[#e0e0e0]" aria-hidden />
      </label>
      <input
        id="testElem-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={cx(
          FONT_FAMILY,
          FIELD,
          "mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] placeholder:text-[#71726e]"
        )}
      />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button type="button" className={cx(FONT_FAMILY, BUTTON)}>
          Awesome
        </button>
        <button type="button" className={cx(FONT_FAMILY, BUTTON)}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
