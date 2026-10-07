import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#000000] p-5 font-primary"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog size={16} className="text-[#8b9291]" aria-hidden />
    </div>

    {/* Collapsed expander row */}
    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp size={11} className="shrink-0 text-[#8b9291]" aria-hidden />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-2">
      <FaChevronUp size={11} className="shrink-0 text-[#b2b2b1]" aria-hidden />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[19px] flex flex-col">
      <div className="flex items-center gap-[6px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FaInfoCircle size={13} className="text-[#a4a4a3]" aria-hidden />
      </div>
      <input
        readOnly
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[37px] w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex flex-col">
      <div className="flex items-center gap-[6px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <FaInfoCircle size={13} className="text-[#a3a3a2]" aria-hidden />
      </div>
      <input
        readOnly
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[12px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[29px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer */}
    <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

export default TestCard;
