// Smoke-test component reproducing a Figma frame as a static panel.
// Values are explicit on purpose: the frame's dark palette has no equivalents in
// this repo's semantic token system, and this component is a throwaway test —
// do not copy this styling approach into real components.
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1b1b1b] px-5 pb-16 pt-5 font-primary text-[13.5px] text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold leading-none">UI magician Agent</h1>
        <FiSettings aria-hidden="true" className="h-4 w-3.5 shrink-0" />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[11.5px] font-primary-bold text-[#8b9291]">
        <FiChevronUp aria-hidden="true" className="h-3 w-3 shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-2 font-primary-bold text-[13.5px] text-[#b2b2b1]">
        <FiChevronUp aria-hidden="true" className="h-3 w-3 shrink-0" />
        <h2>Add New Design</h2>
      </div>

      <div className="mt-[26px] flex items-center gap-3 text-[11.5px] font-primary-bold text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <FiInfo aria-hidden="true" className="h-[15px] w-[15px] shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-3 text-[11.5px] font-primary-bold text-[#a3a3a2]">
        <span>Design URL</span>
        <FiInfo aria-hidden="true" className="h-[15px] w-[15px] shrink-0" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[23px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
