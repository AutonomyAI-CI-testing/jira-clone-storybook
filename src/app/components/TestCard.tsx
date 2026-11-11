import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp size={12} className="text-[#8b9291]" />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp size={12} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-primary-bold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-6">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo size={15} className="text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-primary-bold text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-6">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <FiInfo size={15} className="text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-primary-bold text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-5 flex gap-[18px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-12 text-[13.5px] font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
