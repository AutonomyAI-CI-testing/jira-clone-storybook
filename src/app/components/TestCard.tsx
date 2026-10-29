import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the supplied Figma
 * frame. Self-contained: no props, no state and nothing outside this file.
 * The design's palette has no equivalents among this project's semantic colour
 * tokens, so its hexes are carried here as Tailwind arbitrary values.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 py-5 font-primary-bold text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-4">UI magician Agent</span>
        <FiSettings size={16} aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11.5px] text-[#8b9291]">
        <FiChevronUp size={12} aria-hidden />
        {/* The frame truncates this line, so the ellipsis is part of the copy. */}
        <span>From entire frame to a singl...</span>
      </div>

      <div className="h-[77px]" />

      <div className="flex items-center gap-2 text-[13.5px] leading-4 text-[#b2b2b1]">
        <FiChevronUp size={14} aria-hidden />
        <span>Add New Design</span>
      </div>

      <label
        htmlFor="testElem-token"
        className="mt-7 flex items-center gap-2 text-[11.5px] text-[#a4a4a3]"
      >
        <span>Personal Access Token</span>
        <FiInfo size={15} aria-hidden />
      </label>
      <input
        id="testElem-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />

      <label
        htmlFor="testElem-url"
        className="mt-3 flex items-center gap-2 text-[11.5px] text-[#a3a3a2]"
      >
        <span>Design URL</span>
        <FiInfo size={15} aria-hidden />
      </label>
      <input
        id="testElem-url"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />

      <div className="mt-6 flex justify-end gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-12 text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
