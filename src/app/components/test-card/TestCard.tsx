import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/** Class shared by the two field labels in the frame. */
const LABEL = "font-primary-bold text-[11.5px] text-[#a4a4a3]";

/** Class shared by the two field boxes in the frame. */
const FIELD = "w-full bg-[#272822] px-[19px] font-primary-bold outline-none";

/**
 * A static reproduction of the "UI magician Agent" Figma frame. It is a
 * self-contained smoke test: no props, no state, no wiring into the app.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#222222] px-5 pt-5 font-primary text-[11.5px] text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px]">
          UI magician Agent
        </span>
        <IoSettingsOutline aria-hidden className="h-4 w-[14px]" />
      </div>

      {/* Collapsed summary */}
      <div className="mt-[18px] flex items-center gap-2">
        <IoChevronUp aria-hidden className="h-2 w-2 shrink-0" />
        <span className="truncate font-primary-bold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <IoChevronUp aria-hidden className="h-3 w-3 shrink-0" />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center justify-between">
        <span className={LABEL}>Personal Access Token</span>
        <IoInformationCircleOutline aria-hidden className="h-[15px] w-[15px]" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className={`${FIELD} mt-3 h-9 border border-[#a5adad] text-[11.5px] text-[#737470]`}
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[13px]">
        <span className={LABEL}>Design URL</span>
        <IoInformationCircleOutline aria-hidden className="h-[15px] w-[15px]" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        defaultValue="https://www.figma.com/file/:"
        className={`${FIELD} mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e]`}
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="mt-[47px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
