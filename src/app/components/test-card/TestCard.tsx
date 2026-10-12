import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component built from an unrelated dark Figma frame.
 *
 * Deliberately self-contained: no props, no state, no repo design tokens and no
 * shared components. The design it reproduces is not part of this app's design
 * system, and values are approximate by design.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black p-5 font-[family-name:Inter,sans-serif] text-[13.5px] font-semibold text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#b5b5b5] hover:text-white"
      >
        <FiSettings size={16} />
      </button>
    </div>

    {/* Collapsed summary row */}
    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp size={14} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-12 flex items-center gap-2">
      <FiChevronUp size={14} className="shrink-0 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-6 flex items-center gap-2">
      <label
        htmlFor="test-card-personal-access-token"
        className="text-[11.5px] font-semibold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <FiInfo size={15} aria-hidden="true" className="text-[#a4a4a3]" />
    </div>
    <input
      id="test-card-personal-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-2 w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#b5b5b5] outline-none placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-4 flex items-center gap-2">
      <label
        htmlFor="test-card-design-url"
        className="text-[11.5px] font-semibold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <FiInfo size={15} aria-hidden="true" className="text-[#a3a3a2]" />
    </div>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-2 w-full border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#b5b5b5] outline-none placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-6 flex gap-4 pl-6">
      <button
        type="button"
        className="w-[85px] rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[85px] rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-12 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
