import { useId } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Deliberately self-contained: no props, no state, no data.
 *
 * Colours are the frame's own values as arbitrary utilities rather than theme
 * tokens, because the frame's warm-dark palette has no equivalent in this
 * app's semantic palette. Type is approximated with the app's Circular Std
 * families (the frame uses Inter at weight 600, which maps to font-primary-bold
 * here since weight is a family decision in this design system).
 */
export const TestCard = () => {
  const tokenId = useId();
  const urlId = useId();

  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1a1a1a] px-5 py-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-sm text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FaCog aria-hidden="true" size={15} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FaChevronUp aria-hidden="true" size={9} className="text-[#8b9291]" />
        <span className="min-w-0 truncate font-primary-bold text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <FaChevronDown aria-hidden="true" size={13} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-sm text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <label
          htmlFor={tokenId}
          className="font-primary-bold text-2xs text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FaInfoCircle aria-hidden="true" size={15} className="text-[#a4a4a3]" />
      </div>
      <input
        id={tokenId}
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-9 w-full border border-[#a5adad] bg-[#272822] px-2 font-primary-bold text-2xs text-[#a4a4a3] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center justify-between">
        <label
          htmlFor={urlId}
          className="font-primary-bold text-2xs text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FaInfoCircle aria-hidden="true" size={15} className="text-[#a3a3a2]" />
      </div>
      <input
        id={urlId}
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 h-9 w-full border-2 border-[#929291] bg-[#272822] px-2 font-primary-bold text-2xs text-[#a3a3a2] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex justify-center gap-4">
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

      <h2 className="mt-12 font-primary-bold text-sm text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
