import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Standalone smoke-test card: a reproduction of the attached Figma frame
 * ("UI magician Agent" settings panel). Self-contained — no props, no state.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[420px] bg-[#1b1b1b] p-6 font-primary text-[#d9d9d9]"
  >
    {/* Header */}
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-xl text-[#f0f0f0]">
        UI magician Agent
      </h1>
      <FiSettings
        aria-hidden="true"
        className="mt-1 h-6 w-6 shrink-0 text-[#d9d9d9]"
      />
    </div>

    {/* Collapsed section row */}
    <div className="mt-5 flex items-center gap-2 text-[#8f8f8f]">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="h-6 w-6 shrink-0 text-[#d9d9d9]" />
      <h2 className="font-primary-bold text-xl text-[#f0f0f0]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-9">
      <div className="flex items-center gap-3">
        <label htmlFor="testcard-access-token" className="text-base text-[#e5e5e5]">
          Personal Access Token
        </label>
        <FiInfo
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-[#e5e5e5]"
        />
      </div>
      <input
        id="testcard-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-4 w-full rounded border border-[#6b6b6b] bg-transparent px-5 py-4 text-[#d9d9d9] placeholder:text-[#8f8f8f]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="testcard-design-url" className="text-base text-[#e5e5e5]">
          Design URL
        </label>
        <FiInfo
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-[#e5e5e5]"
        />
      </div>
      <input
        id="testcard-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-4 w-full rounded border border-[#6b6b6b] bg-transparent px-5 py-4 text-[#d9d9d9] placeholder:text-[#8f8f8f]"
      />
    </div>

    {/* Actions */}
    <div className="mt-8 flex gap-6">
      <button
        type="button"
        className="rounded bg-[#a8401a] px-8 py-4 text-[#e0d5cf]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#a8401a] px-8 py-4 text-[#e0d5cf]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-16 font-primary-bold text-xl text-[#f0f0f0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
