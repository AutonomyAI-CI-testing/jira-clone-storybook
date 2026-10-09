import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of a Figma frame — a dark "Add New Design" panel.
 *
 * Smoke test only: no props, no state, no data. The palette and type here come
 * from that design rather than this repo's semantic tokens (none of them match
 * these values), so the colours are written as one-off arbitrary values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-['Inter',sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="shrink-0 text-[#a4a4a3]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[70px] flex items-center gap-1.5">
      <FiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2.5">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2.5">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo size={15} className="shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-6 flex justify-center gap-4">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <span className="mb-16 mt-auto text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const buttonClassName =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";
