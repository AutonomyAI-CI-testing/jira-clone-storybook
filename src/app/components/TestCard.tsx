import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans h-[508px] w-[254px] bg-black px-5 pt-5 text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] font-semibold leading-4">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-[14px] shrink-0" aria-hidden="true" />
      </div>

      {/* Collapsed section */}
      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <FiChevronUp className="h-[8px] w-[8px] shrink-0" aria-hidden="true" />
        <span className="truncate text-[11.5px] font-semibold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
        <FiChevronUp className="h-3 w-3 shrink-0" aria-hidden="true" />
        <span className="text-[13.5px] font-semibold leading-4">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-2 text-[#a4a4a3]">
        <span className="text-[11.5px] font-semibold leading-[14px]">
          Personal Access Token
        </span>
        <FiInfo className="h-[15px] w-[15px] shrink-0" aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[10px] h-[39px] w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[10px] flex items-center gap-2 text-[#a3a3a2]">
        <span className="text-[11.5px] font-semibold leading-[14px]">
          Design URL
        </span>
        <FiInfo className="h-[15px] w-[15px] shrink-0" aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[9px] h-[41px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-5 flex gap-[17px] pl-6">
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

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] text-[13.5px] font-semibold leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
