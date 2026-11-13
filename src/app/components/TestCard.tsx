import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// TestCard reproduces a design that lives outside this app's semantic token layer
// (a black panel with #272822 inputs and #843a17 buttons), so its colours and
// geometry are collected here instead of being spread across the markup.
const panelClass = "w-[254px] bg-black px-5 py-5 pb-[62px] font-primary";
const headingClass = "font-primary-bold text-sm";
const labelClass = "font-primary-bold text-2xs";
const inputClass =
  "mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-2xs text-[#737470] placeholder:text-[#737470]";
const actionClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={panelClass}>
    <div className="flex items-center justify-between">
      <h2 className={`${headingClass} text-[#b5b5b5]`}>UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center text-[#b5b5b5]"
      >
        <FiSettings size={16} aria-hidden />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-3 text-[#8b9291]">
      <FiChevronUp size={12} aria-hidden />
      <span className={labelClass}>From entire frame to a singl...</span>
    </div>

    <div className="mt-[76px] flex items-center gap-3 text-[#b2b2b1]">
      <FiChevronUp size={14} aria-hidden />
      <h3 className={headingClass}>Add New Design</h3>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-3 text-[#a4a4a3]">
        <label htmlFor="test-card-personal-access-token" className={labelClass}>
          Personal Access Token
        </label>
        <FiInfo size={15} aria-hidden />
      </div>
      <input
        id="test-card-personal-access-token"
        className={inputClass}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-3 text-[#a3a3a2]">
        <label htmlFor="test-card-design-url" className={labelClass}>
          Design URL
        </label>
        <FiInfo size={15} aria-hidden />
      </div>
      <input
        id="test-card-design-url"
        className={inputClass}
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-6 flex gap-[17px] pl-6">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    <h3 className={`mt-[46px] ${headingClass} text-[#b0b0b0]`}>
      Recent Breakdowns
    </h3>
  </div>
);
