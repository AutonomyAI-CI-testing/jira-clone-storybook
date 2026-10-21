import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained smoke test: no props, no state, no data. The colours are the
 * frame's own literal values because the palette has no equivalent in the
 * app's semantic tokens, and this card is not part of the themed product
 * surface.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1C1D17] px-5 pb-8 pt-5"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary text-xs text-[#B5B5B5]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden size={14} className="shrink-0 text-[#B5B5B5]" />
    </div>

    <div className="mt-4 flex items-center gap-3">
      <FiChevronUp aria-hidden size={12} className="shrink-0 text-[#8B9291]" />
      <span className="min-w-0 flex-1 truncate text-2xs text-[#8B9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp aria-hidden size={14} className="shrink-0 text-[#B2B2B1]" />
      <span className="font-primary text-xs text-[#B2B2B1]">Add New Design</span>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[#A4A4A3]">Personal Access Token</span>
        <FiInfo aria-hidden size={15} className="shrink-0 text-[#A4A4A3]" />
      </div>
      <div className="mt-3 flex h-9 items-center border border-[#A5ADAD] bg-[#272822] px-3">
        <span className="text-2xs text-[#737470]">figd_xxxxxxxxxxxxxxxxx</span>
      </div>
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[#A3A3A2]">Design URL</span>
        <FiInfo aria-hidden size={15} className="shrink-0 text-[#A3A3A2]" />
      </div>
      <div className="mt-3 flex h-9 items-center border-2 border-[#929291] bg-[#272822] px-3">
        <span className="text-2xs text-[#71726E]">
          https://www.figma.com/file/
        </span>
      </div>
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843A17] font-primary text-2xs text-[#8C8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843A17] font-primary text-2xs text-[#8C8078]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-12 font-primary text-xs text-[#B0B0B0]">
      Recent Breakdowns
    </p>
  </div>
);
