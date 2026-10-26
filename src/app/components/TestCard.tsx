import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const labelClass = "flex items-center gap-2 text-2xs";
const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-2xs text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xs text-[#b5b5b5]">UI magician Agent</h1>
      <FiSettings aria-hidden="true" size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-8 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" size={10} className="text-[#8b9291]" />
      <span className="text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" size={12} className="text-[#b2b2b1]" />
      <h2 className="text-xs text-[#b2b2b1]">Add New Design</h2>
    </div>

    <label htmlFor="testcard-access-token" className={cx(labelClass, "mt-7 text-[#a4a4a3]")}>
      Personal Access Token
      <FiInfo aria-hidden="true" size={15} />
    </label>
    <input
      id="testcard-access-token"
      className="mt-2.5 h-9 w-full rounded-md border border-[#a5adad] bg-[#272822] px-3 text-2xs text-[#737470] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <label htmlFor="testcard-design-url" className={cx(labelClass, "mt-3 text-[#a3a3a2]")}>
      Design URL
      <FiInfo aria-hidden="true" size={15} />
    </label>
    <input
      id="testcard-design-url"
      className="mt-2.5 h-9 w-full rounded-md border-2 border-[#929291] bg-[#272822] px-3 text-2xs text-[#71726e] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-6 flex justify-center gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-xs text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
