import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

const actionButtonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdOutlineSettings
        size={16}
        aria-label="Settings"
        className="text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <MdKeyboardArrowUp
        size={12}
        aria-hidden="true"
        className="text-[#8b9291]"
      />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[83px] flex items-center gap-[5px]">
      <MdKeyboardArrowUp
        size={12}
        aria-hidden="true"
        className="text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[26px]">
      <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <MdOutlineInfo size={15} aria-hidden="true" className="text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-[26px]">
      <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <MdOutlineInfo size={15} aria-hidden="true" className="text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[19px] text-[11.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex w-[211px] justify-between">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-[46px] text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
