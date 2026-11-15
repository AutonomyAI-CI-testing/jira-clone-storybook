import { HiChevronUp } from "react-icons/hi";
import { MdInfoOutline, MdSettings } from "react-icons/md";

/**
 * TestCard — a self-contained recreation of the "UI magician Agent" Figma panel
 * (254x508). Smoke-test component: no props, no state, no data.
 *
 * The colours are arbitrary values rather than semantic tokens on purpose: this
 * design is a foreign dark panel whose palette has no equivalent role in the
 * app's themes, and adding those roles would mean editing app.css, which this
 * task must not touch.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pt-5 pb-[60px] font-primary"
  >
    <div className="flex items-start justify-between pr-1">
      <span className="text-xs text-[#B5B5B5]">UI magician Agent</span>
      <MdSettings size={16} className="text-[#B5B5B5]" aria-hidden />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiChevronUp size={12} className="shrink-0 text-[#8B9291]" aria-hidden />
      <span className="min-w-0 truncate text-2xs text-[#8B9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <HiChevronUp size={14} className="shrink-0 text-[#B2B2B1]" aria-hidden />
      <span className="text-xs text-[#B2B2B1]">Add New Design</span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <span className="text-2xs text-[#A4A4A3]">Personal Access Token</span>
      <MdInfoOutline size={15} className="text-[#A4A4A3]" aria-hidden />
    </div>
    <input
      aria-label="Personal Access Token"
      className="mt-3 h-[36px] w-full border-2 border-[#A5ADAD] bg-[#272822] px-3 text-2xs text-[#737470] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <div className="mt-3 flex items-center gap-2">
      <span className="text-2xs text-[#A3A3A2]">Design URL</span>
      <MdInfoOutline size={15} className="text-[#A3A3A2]" aria-hidden />
    </div>
    <input
      aria-label="Design URL"
      className="mt-3 h-[37px] w-full border-[4px] border-[#929291] bg-[#272822] px-3 text-2xs text-[#71726E] placeholder:text-[#71726E]"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-5 flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843A17] text-2xs text-[#8C8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843A17] text-2xs text-[#8C8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-xs text-[#B0B0B0]">Recent Breakdowns</h2>
  </div>
);

export default TestCard;
