import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const labelClass = "text-[11.5px] leading-[14px]";
const fieldClass = "w-full bg-[#272822] px-[19px] text-[11.5px] leading-[14px]";

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="w-[254px] bg-[#1C1D17] pb-[62px] text-left font-primary text-[13.5px] leading-[16px]">
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="mt-[11px] flex items-center justify-between px-5">
        <span className="font-primary-bold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] px-5">
        <IoChevronUp size={8} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[26px]">
        <IoChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-[26px] px-5">
        <div className="flex items-center gap-[16px]">
          <span className={cx(labelClass, "text-[#a4a4a3]")}>
            Personal Access Token
          </span>
          <IoInformationCircleOutline
            size={15}
            className="shrink-0 text-[#a4a4a3]"
          />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            fieldClass,
            "mt-[12px] h-[36px] border border-[#a5adad] text-[#737470] placeholder:text-[#737470]"
          )}
        />
      </div>

      <div className="mt-[11px] px-5">
        <div className="flex items-center gap-[16px]">
          <span className={cx(labelClass, "text-[#a3a3a2]")}>Design URL</span>
          <IoInformationCircleOutline
            size={15}
            className="shrink-0 text-[#a3a3a2]"
          />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className={cx(
            fieldClass,
            "mt-[11px] h-[37px] border-2 border-[#929291] px-[18px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
          )}
        />
      </div>

      <div className="mt-[22px] flex justify-end gap-[17px] px-5">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] px-5 font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
