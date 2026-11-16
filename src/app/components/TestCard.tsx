import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Standalone smoke-test card, rendered from the "UI magician Agent" Figma frame.
 * Self-contained on purpose: no props, no state, no data layer.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-[#1c1c1a] px-5 py-5 font-primary-light text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        size={16}
        aria-hidden="true"
        className="shrink-0 text-[#b5b5b5]"
      />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <IoChevronUp
        size={12}
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
      />
      <span className="min-w-0 truncate text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <IoChevronUp
        size={12}
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-5">
      <div className="flex items-center gap-1.5">
        <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <div className="mt-2 flex h-[36px] items-center border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>
    </div>

    <div className="mt-4">
      <div className="flex items-center gap-1.5">
        <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <div className="mt-2 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>
    </div>

    <div className="mt-6 flex justify-center gap-4">
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

    <div className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
