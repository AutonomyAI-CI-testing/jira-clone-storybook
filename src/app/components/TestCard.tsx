import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" panel from the referenced
 * Figma frame. Self-contained smoke test: no props, no state, display-only.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[#000000] px-5 pt-5 font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <FaCog size={16} className="shrink-0" aria-hidden />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <FaChevronUp size={8} className="shrink-0" aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Empty band the frame leaves above the form */}
    <div className="h-[77px] shrink-0" aria-hidden />

    {/* Add New Design */}
    <div className="flex items-center gap-[5px] pl-[6px]">
      <FaChevronUp size={12} className="shrink-0" aria-hidden />
      <span className="text-[#b2b2b1]">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[27px] flex items-center gap-4 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      <span>Personal Access Token</span>
      <FaInfoCircle size={15} className="shrink-0" aria-hidden />
    </div>
    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      readOnly
      className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-4 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
      <span>Design URL</span>
      <FaInfoCircle size={15} className="shrink-0" aria-hidden />
    </div>
    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      readOnly
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        type="button"
        className="flex-center h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-center h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</div>
  </div>
);
