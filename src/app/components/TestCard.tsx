import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" Figma
 * panel. Self-contained and prop-less by design — it is not wired into the app.
 *
 * The Figma frame is 254x508 (exported at 2x). Colours, sizes and offsets below
 * are transcribed from the frame's extracted style guide; see task/PLAN.md.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-primary-bold"
  >
    {/* Heading */}
    <div className="flex items-start justify-between">
      <span className="text-xs text-[#b5b5b5]">UI magician Agent</span>
      <FiSettings size={16} className="text-[#c4c4c4]" aria-hidden="true" />
    </div>

    {/* Collapsible row */}
    <div className="mt-[18px] ml-[3px] flex items-center gap-[5px] text-[#8b9291]">
      <FiChevronUp size={12} aria-hidden="true" />
      <span className="text-2xs">From entire frame to a singl...</span>
    </div>

    {/* Section heading */}
    <div className="mt-[77px] ml-[6px] flex items-center gap-[5px] text-[#b2b2b1]">
      <FiChevronUp size={16} aria-hidden="true" />
      <span className="text-xs">Add New Design</span>
    </div>

    {/* First field */}
    <div className="mt-[28px] flex items-center gap-6">
      <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
      <FiInfo size={15} className="text-[#cfcfcf]" aria-hidden="true" />
    </div>
    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-2.5 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-2xs text-[#737470] placeholder:text-[#737470]"
    />

    {/* Second field */}
    <div className="mt-[11px] flex items-center gap-5">
      <span className="text-2xs text-[#a3a3a2]">Design URL</span>
      <FiInfo size={15} className="text-[#cfcfcf]" aria-hidden="true" />
    </div>
    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-2 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <span className="mt-[47px] text-xs text-[#b0b0b0]">Recent Breakdowns</span>
  </div>
);

export default TestCard;
