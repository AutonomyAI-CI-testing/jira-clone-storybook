import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#2b2b2b] px-5 pt-5 pb-6 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <MdOutlineSettings
        aria-hidden="true"
        className="h-4 w-[14px] text-[#b5b5b5]"
      />
    </div>

    <div className="mt-2 flex items-center gap-2">
      <MdKeyboardArrowUp
        aria-hidden="true"
        className="h-3 w-3 text-[#8b9291]"
      />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[60px] flex items-center gap-2">
      <MdKeyboardArrowUp
        aria-hidden="true"
        className="h-3.5 w-3.5 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-center gap-6">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <MdOutlineInfo
          aria-hidden="true"
          className="h-[15px] w-[15px] text-[#a4a4a3]"
        />
      </div>
      <input
        readOnly
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="h-[36px] w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <MdOutlineInfo
          aria-hidden="true"
          className="h-[15px] w-[15px] text-[#a3a3a2]"
        />
      </div>
      <input
        readOnly
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-6 ml-[24px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] shrink-0 rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] shrink-0 rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[46px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
