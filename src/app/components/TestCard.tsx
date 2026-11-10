import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no handlers. The panel is a
 * fixed dark surface with its own palette, so it deliberately does not use the
 * app's semantic colour roles and does not re-skin with the active theme.
 * Icons come from `react-icons` (already a dependency); the design's own
 * exported SVGs are not available in this repository.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1c1c1c] px-5 pb-16 pt-5 font-primary"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-[#c8c8c8]" />
      </div>

      {/* Collapsed section row */}
      <div className="mt-3.5 flex items-center gap-2">
        <IoChevronUp size={12} className="text-[#b5b5b5]" />
        <span className="text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-[60px] flex items-center gap-2">
        <IoChevronUp size={16} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-7 flex items-center gap-2">
        <span className="text-2xs text-[#a4a4a3]">Personal Access Token</span>
        <IoInformationCircleOutline size={15} className="text-[#a5adad]" />
      </div>
      <input
        readOnly
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-2xs text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL field */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-2xs text-[#a3a3a2]">Design URL</span>
        <IoInformationCircleOutline size={15} className="text-[#a5adad]" />
      </div>
      <input
        readOnly
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 text-2xs text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-5 flex justify-end gap-4">
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

      {/* Recent breakdowns heading */}
      <div className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
