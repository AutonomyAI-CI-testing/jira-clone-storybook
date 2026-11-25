import cx from "classix";
import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const HEADING_CLASS = "text-[13.5px] leading-[16.34px] text-[#b2b2b1]";
const COLLAPSED_ROW_CLASS = "text-[11.5px] leading-[13.92px] text-[#8b9291]";
const LABEL_CLASS = "text-[11.5px] leading-[13.92px] text-[#a4a4a3]";
const INPUT_CLASS =
  "w-full bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]";
const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <h2 className={HEADING_CLASS}>UI magician Agent</h2>
      <IoSettingsOutline size={16} className="text-[#b2b2b1]" aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" aria-hidden />
      <span className={cx(COLLAPSED_ROW_CLASS, "min-w-0 truncate")}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp size={14} className="shrink-0 text-[#8b9291]" aria-hidden />
      <h3 className={HEADING_CLASS}>Add New Design</h3>
    </div>

    <div className="mt-7 flex items-center gap-5">
      <label htmlFor="test-card-token" className={LABEL_CLASS}>
        Personal Access Token
      </label>
      <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" aria-hidden />
    </div>
    <input
      id="test-card-token"
      className={cx(INPUT_CLASS, "mt-3 h-9 border border-[#a5adad]")}
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <label htmlFor="test-card-url" className={LABEL_CLASS}>
        Design URL
      </label>
      <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" aria-hidden />
    </div>
    <input
      id="test-card-url"
      className={cx(INPUT_CLASS, "mt-[11px] h-[37px] border-2 border-[#929291]")}
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-[22px] flex justify-center gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className={cx(HEADING_CLASS, "mt-[47px]")}>Recent Breakdowns</h3>
  </div>
);
