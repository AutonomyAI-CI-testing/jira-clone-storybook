import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test: a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Colour values are written as literals rather than design tokens on purpose. The
 * frame is a third-party tool panel that sits outside this app's palette — the
 * closest tokens are visibly different shades and the rust buttons have no role at
 * all — and it is meant to look the same under every theme, which a semantic role
 * cannot express.
 *
 * Measurements come from the frame's extracted style guide (254x508 at 1x), not
 * from eyeballing the image. Type is the app's own CircularStd families rather than
 * the frame's Inter, which this repo does not ship.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] px-5 pb-16 pt-5 font-primary text-[13.5px] text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FiSettings
        size={16}
        className="mt-px shrink-0 text-[#b5b5b5]"
        aria-hidden="true"
      />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp
        size={12}
        className="shrink-0 text-[#8b9291]"
        aria-hidden="true"
      />
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp
        size={14}
        className="shrink-0 text-[#b2b2b1]"
        aria-hidden="true"
      />
      <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7">
      <div className="flex items-center gap-4">
        <label
          htmlFor="testElem-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo
          size={15}
          className="shrink-0 text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-3">
      <div className="flex items-center gap-4">
        <label
          htmlFor="testElem-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo size={15} className="shrink-0 text-[#a3a3a2]" aria-hidden="true" />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="ml-6 mt-5 flex items-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
