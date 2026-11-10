import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS =
  "mt-[11px] h-9 w-full border bg-[#272822] px-[19px] text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]";

const BUTTON_CLASS =
  "h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1c1c1c] p-5 font-primary text-[13.5px] leading-[16px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <FiSettings
        aria-hidden="true"
        size={16}
        className="shrink-0 text-[#c5c5c5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-3 text-[11.5px] leading-[14px] text-[#8b9291]">
      <FiChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#c5c5c5]"
      />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <FiChevronUp
        aria-hidden="true"
        size={14}
        className="shrink-0 text-[#c5c5c5]"
      />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    <label className="mt-[28px] block">
      <span className="flex items-center gap-4 text-[11.5px] leading-[14px] text-[#a4a4a3]">
        Personal Access Token
        <FiInfo
          aria-hidden="true"
          size={15}
          className="shrink-0 text-[#b0b0b0]"
        />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${FIELD_CLASS} border-[#a5adad]`}
      />
    </label>

    <label className="mt-[11px] block">
      <span className="flex items-center gap-4 text-[11.5px] leading-[14px] text-[#a3a3a2]">
        Design URL
        <FiInfo
          aria-hidden="true"
          size={15}
          className="shrink-0 text-[#b0b0b0]"
        />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={`${FIELD_CLASS} border-2 border-[#929291] text-[10.5px] leading-[13px]`}
      />
    </label>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <p className="mt-[47px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
