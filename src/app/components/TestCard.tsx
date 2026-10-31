import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * TestCard — a static reproduction of the "UI magician Agent" panel from the
 * attached Figma frame. It is intentionally self-contained: no props, no state,
 * no handlers. The frame is its own visual language (dark panel, rust actions)
 * which the app's semantic token layer does not describe, so the frame's values
 * are written here as literal utilities.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-[39px] pb-[40px] pt-[36px] font-primary text-[#c9c9c9]"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[22px] leading-none text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <IoSettingsOutline size={26} aria-hidden="true" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[40px] flex items-center gap-[10px]">
        <IoChevronUp size={20} className="shrink-0" aria-hidden="true" />
        <span className="truncate text-[18px] text-[#a8a8a8]">
          From entire frame to a single component
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[150px] flex items-center gap-[12px]">
        <IoChevronUp size={22} className="shrink-0" aria-hidden="true" />
        <h2 className="font-primary-bold text-[22px] leading-none text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[57px] flex items-center gap-[46px]">
        <span className="text-[18px]">Personal Access Token</span>
        <IoInformationCircleOutline
          size={26}
          className="shrink-0"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-[24px] h-[70px] w-full rounded-[2px] border-2 border-[#8a8a8a] bg-[#2b2b2b] px-[40px] text-[20px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
      />

      {/* Design URL */}
      <div className="mt-[28px] flex items-center gap-[32px]">
        <span className="text-[18px]">Design URL</span>
        <IoInformationCircleOutline
          size={26}
          className="shrink-0"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[23px] h-[70px] w-full rounded-[2px] border-2 border-[#8a8a8a] bg-[#2b2b2b] px-[40px] text-[20px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
      />

      {/* Actions */}
      <div className="mt-[50px] grid grid-cols-2 gap-[37px] pl-[50px]">
        <button
          type="button"
          className="h-[70px] rounded-[10px] bg-[#8f3a1b] text-[20px] text-[#b5b5b5]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[70px] rounded-[10px] bg-[#8f3a1b] text-[20px] text-[#b5b5b5]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[97px] font-primary-bold text-[22px] leading-none text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
