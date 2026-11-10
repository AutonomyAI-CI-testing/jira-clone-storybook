import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, not wired into any route.
 *
 * Colours are literal rather than semantic tokens because the design's palette
 * sits outside this repo's token set, and `theme.colors` is a full override in
 * `tailwind.config.js` — stock Tailwind colour names would compile to nothing.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1917] px-10 py-10 font-primary text-[#d6d3d1]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] leading-7">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[#d6d3d1]"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-2 text-[#a8a29e]">
      <FiChevronUp size={20} />
      <span className="text-[17px] leading-6">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-28 flex items-center gap-2">
      <FiChevronUp size={22} />
      <h2 className="font-primary-bold text-[22px] leading-7">
        Add New Design
      </h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-token" className="text-[17px] leading-6">
            Personal Access Token
          </label>
          <FiInfo size={18} className="text-[#a8a29e]" />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="h-[62px] w-full rounded border border-[#57534e] bg-transparent px-5 text-[17px] text-[#d6d3d1] outline-none placeholder:text-[#78716c]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-url" className="text-[17px] leading-6">
            Design URL
          </label>
          <FiInfo size={18} className="text-[#a8a29e]" />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="h-[62px] w-full rounded border border-[#57534e] bg-transparent px-5 text-[17px] text-[#d6d3d1] outline-none placeholder:text-[#78716c]"
        />
      </div>
    </div>

    <div className="mt-10 flex items-center gap-8">
      <button
        type="button"
        className="h-16 w-[170px] cursor-pointer rounded-md bg-[#9a3412] text-[19px] text-[#e7e5e4] hover:bg-[#7c2d12]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-16 w-[170px] cursor-pointer rounded-md bg-[#9a3412] text-[19px] text-[#e7e5e4] hover:bg-[#7c2d12]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-28 font-primary-bold text-[22px] leading-7">
      Recent Breakdowns
    </h2>
  </div>
);
