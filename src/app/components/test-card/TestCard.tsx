import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Standalone reproduction of a Figma frame, built as a pipeline smoke test.
 * Self-contained: no props, no state, no interaction, nothing else in the app
 * uses it. Values are the design's own, not the app's design tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 pt-5 pb-[62px] font-primary text-[11.5px] leading-[13.92px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        <span>UI magician Agent</span>
        <FiSettings size={16} />
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <FiChevronUp size={12} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section title */}
      <div className="mt-[75px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        <FiChevronUp size={14} />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-2 text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <FiInfo size={15} />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-2 text-[#a3a3a2]">
        <span>Design URL</span>
        <FiInfo size={15} />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      {/* Buttons */}
      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Section heading */}
      <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
