import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const BUTTON_CLASS =
  "rounded-[4px] bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]";

const INPUT_CLASS = "w-full rounded-[2px] bg-[#272822] px-2 py-2 text-[11.5px]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col gap-5 bg-black p-5 text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold">UI magician Agent</span>
      <button type="button" aria-label="Settings">
        <FaCog size={14} />
      </button>
    </div>

    <div className="flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <FaChevronUp size={10} aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1]">
      <FaChevronUp size={12} aria-hidden />
      <span>Add New Design</span>
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
        <label htmlFor="personal-access-token">Personal Access Token</label>
        <FaInfoCircle size={15} aria-hidden />
      </div>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={cx(
          INPUT_CLASS,
          "border border-[#a5adad] placeholder:text-[#737470]"
        )}
      />
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-[11.5px] text-[#a3a3a2]">
        <label htmlFor="design-url">Design URL</label>
        <FaInfoCircle size={15} aria-hidden />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={cx(
          INPUT_CLASS,
          "border-2 border-[#929291] placeholder:text-[#71726e]"
        )}
      />
    </div>

    <div className="flex items-center gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
