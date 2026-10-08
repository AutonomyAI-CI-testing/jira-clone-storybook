import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * TestCard — a self-contained, presentational panel rebuilt from a Figma frame.
 *
 * Smoke test: no props, no state, no data. It exists only to be rendered.
 * Colours are hard-coded (arbitrary Tailwind values) on purpose so the panel
 * keeps its dark look regardless of the app's active theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[254px] bg-black px-5 py-5 font-primary text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog size={16} className="shrink-0" aria-hidden="true" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-5 flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <FaChevronUp size={10} className="shrink-0" aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-12 flex items-center gap-2 font-primary-bold text-[13.5px] text-[#b2b2b1]">
      <FaChevronUp size={12} className="shrink-0" aria-hidden="true" />
      <span>Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-8 flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
      <span>Personal Access Token</span>
      <FaInfoCircle size={14} className="shrink-0" aria-hidden="true" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
      className="mt-3 w-full rounded-none border border-[#a5adad] bg-[#272822] px-4 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-6 flex items-center gap-2 text-[11.5px] text-[#a3a3a2]">
      <span>Design URL</span>
      <FaInfoCircle size={14} className="shrink-0" aria-hidden="true" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file:"
      className="mt-3 w-full rounded-none border border-[#a5adad] bg-[#272822] px-4 py-2 text-[11.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="w-[85px] rounded-[4px] bg-[#843a17] py-2.5 text-center text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[85px] rounded-[4px] bg-[#843a17] py-2.5 text-center text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
