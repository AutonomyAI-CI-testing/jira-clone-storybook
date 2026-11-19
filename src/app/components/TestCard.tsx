import { useId } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test only — not part of the design system.
 *
 * A standalone copy of the "UI magician Agent" frame from the Test Page Figma
 * file (node 2-2). It takes no props and holds its own state, so it renders the
 * same wherever it is placed. Sizes, colours and spacing are transcribed from
 * the frame's exported style guide and are deliberately approximate: the frame
 * is an off-system dark palette, so its own hex values are used here rather
 * than the app's semantic tokens.
 */
export const TestCard = () => {
  const tokenFieldId = useId();
  const designUrlFieldId = useId();

  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-primary text-[11.5px] leading-[13.92px] text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <FiSettings
          aria-hidden
          size={14}
          className="mt-px shrink-0 text-[#b5b5b5]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <FiChevronUp
          aria-hidden
          size={10}
          className="shrink-0 text-[#8b9291]"
        />
        <span className="min-w-0 truncate text-[#8b9291]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[77px] ml-[6px] flex items-center gap-[5px]">
        <FiChevronUp
          aria-hidden
          size={13}
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <label
        htmlFor={tokenFieldId}
        className="mt-7 flex items-center gap-[10px] font-primary-bold text-[#a4a4a3]"
      >
        Personal Access Token
        <FiInfo aria-hidden size={15} className="shrink-0" />
      </label>
      <input
        id={tokenFieldId}
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[#737470] placeholder:text-[#737470]"
      />

      <label
        htmlFor={designUrlFieldId}
        className="mt-[11px] flex items-center gap-[10px] font-primary-bold text-[#a3a3a2]"
      >
        Design URL
        <FiInfo aria-hidden size={15} className="shrink-0" />
      </label>
      <input
        id={designUrlFieldId}
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
