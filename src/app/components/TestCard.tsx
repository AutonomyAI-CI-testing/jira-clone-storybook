import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static smoke-test card reproducing a single Figma frame.
 * Self-contained on purpose: no props, no state, no handlers.
 */

const BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1b1b1b] px-5 pt-5 pb-[62px] font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <FiSettings aria-hidden size={14} />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <FiChevronUp aria-hidden className="shrink-0" size={9} />
        <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
        <FiChevronUp aria-hidden className="shrink-0" size={12} />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-5 text-[#a4a4a3]">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
          Personal Access Token
        </span>
        <FiInfo aria-hidden className="shrink-0" size={15} />
      </div>

      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-5 text-[#a3a3a2]">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
          Design URL
        </span>
        <FiInfo aria-hidden className="shrink-0" size={15} />
      </div>

      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[18px] font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] ml-6 flex gap-[17px]">
        {["Awesome", "Prepare"].map((label) => (
          <button key={label} type="button" className={BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
