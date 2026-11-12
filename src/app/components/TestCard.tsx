import cx from "classix";
import { FaChevronUp } from "react-icons/fa";
import { FiInfo, FiSettings } from "react-icons/fi";

const TOKEN_INPUT_ID = "testElem-token";
const URL_INPUT_ID = "testElem-url";

const labelRowClass = "flex items-center justify-between";
const labelClass = "font-primary-bold text-[11.5px] leading-[14px]";
const inputBaseClass =
  "w-full border bg-[#272822] px-[18px] font-primary-bold";
const actionButtonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={14} className="mt-0.5 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <FaChevronUp size={8} className="text-[#8b9291]" />
      <span className="truncate font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-1.5 pl-1.5">
      <FaChevronUp size={12} className="text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[30px]">
      <div className={labelRowClass}>
        <label
          htmlFor={TOKEN_INPUT_ID}
          className={cx(labelClass, "text-[#a4a4a3]")}
        >
          Personal Access Token
        </label>
        <FiInfo size={15} className="text-[#a4a4a3]" />
      </div>
      <input
        id={TOKEN_INPUT_ID}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          inputBaseClass,
          "mt-3 h-9 border-[#a5adad] text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
        )}
      />
    </div>

    <div className="mt-[11px]">
      <div className={labelRowClass}>
        <label
          htmlFor={URL_INPUT_ID}
          className={cx(labelClass, "text-[#a3a3a2]")}
        >
          Design URL
        </label>
        <FiInfo size={15} className="text-[#a3a3a2]" />
      </div>
      <input
        id={URL_INPUT_ID}
        placeholder="https://www.figma.com/file/:"
        className={cx(
          inputBaseClass,
          "mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
        )}
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
