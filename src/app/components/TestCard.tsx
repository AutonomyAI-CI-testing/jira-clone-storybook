import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained and presentational: it takes no props and holds no state.
 * Its colours are the design's own values rather than theme roles, because the
 * panel is a fixed dark surface with no counterpart in the app's palette.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1c1c1c] p-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <span className="text-xs text-[#b5b5b5]">UI magician Agent</span>
      <IoSettingsOutline
        aria-hidden="true"
        className="shrink-0 text-[#d0d0d0]"
        size={16}
      />
    </div>

    <div className="mt-[17px] flex items-center gap-2">
      <IoChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
        size={10}
      />
      <span className="truncate text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <IoChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
        size={12}
      />
      <span className="text-xs text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-[27px] flex items-center gap-5">
      <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
      <IoInformationCircleOutline
        aria-hidden="true"
        className="shrink-0 text-[#a4a4a3]"
        size={15}
      />
    </div>
    <input
      readOnly
      tabIndex={-1}
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[11px] h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-2xs text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <span className="text-2xs text-[#a3a3a2]">Design URL</span>
      <IoInformationCircleOutline
        aria-hidden="true"
        className="shrink-0 text-[#a3a3a2]"
        size={15}
      />
    </div>
    <input
      readOnly
      tabIndex={-1}
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-2xs text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="ml-6 mt-[22px] flex gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
