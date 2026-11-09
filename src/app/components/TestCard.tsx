import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained reproduction of the "UI magician Agent" panel from the
 * supplied Figma frame. Smoke test: takes no props, holds no state and is not
 * wired into any route.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-hidden rounded-md bg-[#0d0d0d] px-5 pt-5 font-primary text-xs text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden="true" className="text-[#b5b5b5]" size={16} />
    </div>

    <div className="mt-4 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="text-[#8b9291]" size={12} />
      <span className="text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="text-[#b2b2b1]" size={14} />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-3">
        <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
        <FiInfo aria-hidden="true" className="text-[#a4a4a3]" size={15} />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-5 text-2xs text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-3">
        <span className="text-2xs text-[#a3a3a2]">Design URL</span>
        <FiInfo aria-hidden="true" className="text-[#a3a3a2]" size={15} />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-5 text-2xs text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-5 flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
