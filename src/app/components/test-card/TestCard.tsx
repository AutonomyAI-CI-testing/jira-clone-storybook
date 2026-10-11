import {
  HiChevronDown,
  HiChevronUp,
  HiCog,
  HiInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" settings panel.
 * Smoke test only — self-contained, no props, no state, no handlers.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 pb-6 pt-5"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <HiCog className="h-4 w-[14px] text-[#b5b5b5]" aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-1.5">
      <HiChevronDown className="h-[5px] w-2 shrink-0 text-[#8b9291]" aria-hidden />
      <span className="truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[70px] flex items-center gap-1.5">
      <HiChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" aria-hidden />
      <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[28px] flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiInformationCircle className="h-[15px] w-[15px] text-[#a4a4a3]" aria-hidden />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="h-9 w-full border border-[#a5adad] bg-[#272822] px-2.5 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <HiInformationCircle className="h-[15px] w-[15px] text-[#a3a3a2]" aria-hidden />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2.5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-5 flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[66px] text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
