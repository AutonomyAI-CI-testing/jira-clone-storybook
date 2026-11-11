import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard
 *
 * A self-contained, non-interactive reproduction of the "UI magician Agent"
 * Figma frame. Smoke test only: no props, no state, no data.
 *
 * The frame's own colour, border and type values are carried as Tailwind
 * arbitrary values because this project's `tailwind.config.js` replaces
 * `theme.colors`, `theme.fontFamily` and `theme.boxShadow` outright — stock
 * palette classes such as `bg-gray-800` or `text-white` compile to nothing
 * here, silently.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#000000] p-5 font-[Inter,system-ui,sans-serif]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
      </div>

      {/* Collapsed row */}
      <div className="mt-5 flex items-center gap-3">
        <FiChevronUp size={12} className="text-[#8b9291]" aria-hidden="true" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[76px] flex items-center gap-3">
        <FiChevronUp size={14} className="text-[#b2b2b1]" aria-hidden="true" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Field: Personal Access Token */}
      <div className="mt-7 flex items-center gap-3">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden="true" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />

      {/* Field: Design URL */}
      <div className="mt-3 flex items-center gap-3">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo size={15} className="text-[#a3a3a2]" aria-hidden="true" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <p className="mt-12 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
}
