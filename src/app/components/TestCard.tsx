import cx from "classix";
import { BsChevronUp, BsInfoCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Reproduction of the "UI magician Agent" Figma frame (node 2-2 of "Test Page - Simple").
 * Self-contained smoke test: no props, no state, no data. The frame's own palette and type
 * scale are not part of the app's token set, so every value is a design-literal arbitrary
 * class. Measurements come from the frame's extracted style guide, in its own 1x space.
 */
const labelClass = "text-[11.5px] leading-[13.92px]";
const fieldClass =
  "block w-full bg-[#272822] pl-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]";
const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] pb-[62px] font-['Inter',sans-serif] font-semibold"
  >
    <div className="h-[9px] w-full bg-[#161613]" />

    <div className="px-5">
      <div className="mt-[11px] flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Open settings"
          className="flex items-center text-[#b5b5b5]"
        >
          <IoSettingsOutline size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <button
          type="button"
          aria-label="Collapse breakdown summary"
          className="ml-[3px] flex items-center text-[#8b9291]"
        >
          <BsChevronUp size={10} aria-hidden="true" />
        </button>
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <button
          type="button"
          aria-label="Collapse add new design"
          className="ml-[6px] flex items-center text-[#b2b2b1]"
        >
          <BsChevronUp size={14} aria-hidden="true" />
        </button>
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[26px] flex items-center gap-[5px]">
        <span className={cx(labelClass, "text-[#a4a4a3]")}>
          Personal Access Token
        </span>
        <BsInfoCircle size={15} className="text-[#a4a4a3]" aria-hidden="true" />
      </div>

      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(fieldClass, "mt-[12px] h-[36px] border border-[#a5adad]")}
      />

      <div className="mt-[11px] flex items-center gap-[12px]">
        <span className={cx(labelClass, "text-[#a3a3a2]")}>Design URL</span>
        <BsInfoCircle size={15} className="text-[#a3a3a2]" aria-hidden="true" />
      </div>

      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={cx(
          fieldClass,
          "mt-[11px] h-[37px] border-2 border-[#929291]"
        )}
      />

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <p className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  </div>
);
