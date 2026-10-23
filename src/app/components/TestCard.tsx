import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#000000] px-5 py-5 font-primary"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog className="text-[#b5b5b5]" size={16} aria-hidden="true" />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp className="text-[#8b9291]" size={8} aria-hidden="true" />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-2">
      <FaChevronUp className="text-[#b2b2b1]" size={12} aria-hidden="true" />
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex flex-col">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-token"
          className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FaInfoCircle className="text-[#a4a4a3]" size={15} aria-hidden="true" />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#b0b0b0] placeholder:text-[11.5px] placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex flex-col">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-url"
          className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FaInfoCircle className="text-[#a3a3a2]" size={15} aria-hidden="true" />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[11.5px] text-[#b0b0b0] placeholder:text-[10.5px] placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex items-center gap-4 pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
