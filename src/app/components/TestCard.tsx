import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the supplied "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no dependencies beyond the
 * icon set the repo already uses. The frame is a dark, non-token palette that
 * none of the semantic tokens resolve to, so its colours are written as
 * Tailwind arbitrary values; spacing, radii and type use the repo's own scale.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pb-[60px] pt-5 font-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer text-[#b5b5b5]"
        >
          <FiSettings size={16} aria-hidden="true" />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp size={12} aria-hidden="true" className="text-[#8b9291]" />
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[76px] flex items-center gap-2">
        <FiChevronUp size={14} aria-hidden="true" className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center justify-between">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo size={15} aria-hidden="true" className="text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#e8e8e8] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center justify-between">
        <label
          htmlFor="test-card-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo size={15} aria-hidden="true" className="text-[#a3a3a2]" />
      </div>
      <input
        id="test-card-url"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border border-[#929291] bg-[#272822] px-[20px] font-primary-bold text-[10.5px] text-[#e8e8e8] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
