import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between px-5 pt-5">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-2 flex items-center gap-2 px-5">
      <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="h-[70px]" aria-hidden="true" />

    <div className="flex items-center gap-2 px-5">
      <FiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-4 flex items-center gap-1.5 px-5">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo size={15} className="text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mx-5 mt-1.5 h-[38px] w-[211px] border border-[#a5adad] bg-[#272822] px-2.5 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-4 flex items-center gap-1.5 px-5">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <FiInfo size={15} className="text-[#a3a3a2]" />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mx-5 mt-1.5 h-[38px] w-[211px] border border-[#a5adad] bg-[#272822] px-2.5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-4 flex gap-[17px] px-5">
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

    <span className="mt-8 px-5 pb-6 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
