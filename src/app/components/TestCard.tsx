import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] pb-10 font-[Inter,system-ui,sans-serif]"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" aria-hidden />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-3 flex items-center gap-1.5 px-5">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" aria-hidden />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-12 flex items-center gap-1.5 px-5">
        <FiChevronUp className="h-3.5 w-3.5 text-[#b2b2b1]" aria-hidden />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-6 flex items-center gap-2 px-5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="h-3.5 w-3.5 text-[#a4a4a3]" aria-hidden />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="ml-5 mt-2 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />

      {/* Design URL field */}
      <div className="mt-5 flex items-center gap-2 px-5">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo className="h-3.5 w-3.5 text-[#a3a3a2]" aria-hidden />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="ml-5 mt-2 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      {/* Buttons */}
      <div className="mt-5 flex gap-3 px-5">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-14 px-5 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
