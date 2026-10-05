import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the attached Figma panel ("UI magician Agent").
 * Deliberately self-contained: no props, no state, no behaviour — the fields
 * and buttons are presentational only.
 *
 * The panel's palette is the design's own dark Figma-plugin styling and is
 * intentionally not mapped onto this app's semantic design tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="relative min-h-[508px] w-[254px] bg-black px-5 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-tight text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <FiSettings size={16} aria-hidden className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp size={12} aria-hidden className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-tight text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp size={12} aria-hidden className="shrink-0 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] leading-tight text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-1">
        <span className="text-[11.5px] leading-tight text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo size={15} aria-hidden className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-tight text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-1">
        <span className="text-[11.5px] leading-tight text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo size={15} aria-hidden className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[11.5px] leading-tight text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-tight text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-tight text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[13.5px] leading-tight text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
