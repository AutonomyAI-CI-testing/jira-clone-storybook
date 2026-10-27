import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const LABEL_ROW = "flex items-center gap-[6px] text-[11.5px] leading-[13.92px]";

const FIELD =
  "mt-[11px] w-[211px] rounded-none bg-[#272822] text-[11.5px] leading-[13.92px] outline-none";

const BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black p-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <button type="button" aria-label="Settings" className="cursor-pointer">
          <FiSettings size={16} />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
        <FiChevronUp size={10} aria-hidden="true" />
        <span className="min-w-0 truncate">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        <FiChevronUp size={12} aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      <div className={`mt-[28px] ${LABEL_ROW} text-[#a4a4a3]`}>
        <span>Personal Access Token</span>
        <FiInfo size={15} aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${FIELD} h-[36px] border border-[#a5adad] px-[19px] text-[#737470] placeholder:text-[#737470]`}
      />

      <div className={`mt-[11px] ${LABEL_ROW} text-[#a3a3a2]`}>
        <span>Design URL</span>
        <FiInfo size={15} aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={`${FIELD} h-[37px] border-2 border-[#929291] px-5 text-[#71726e] placeholder:text-[#71726e]`}
      />

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button type="button" className={BUTTON}>
          Awesome
        </button>
        <button type="button" className={BUTTON}>
          Prepare
        </button>
      </div>

      <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
