import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 *
 * Self-contained on purpose: no props, no state. Both fields are read-only and
 * carry the design's copy as placeholders, so there is nothing to wire up.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] px-5 pt-5 pb-[62px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog aria-hidden="true" size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#8b9291]"
      />
      <span className="w-[194px] truncate text-2xs text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-3">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={14}
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2">
      <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="text-[#a4a4a3]"
      />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[10px] h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-2xs placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2">
      <span className="text-2xs text-[#a3a3a2]">Design URL</span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="text-[#a3a3a2]"
      />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[9px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-2xs placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] ml-6 flex items-center gap-[17px]">
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

    <div className="mt-[47px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
