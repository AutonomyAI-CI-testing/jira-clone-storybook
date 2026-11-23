import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a one-off reproduction of the "UI magician Agent" Figma
 * frame. It is self-contained (no props, no data, no handlers) and nothing in
 * the app links to it.
 *
 * The panel's palette is taken from the frame itself as literal values, because
 * the design is a dark utility surface that the app's semantic tokens do not
 * describe.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary">
    {/* Header */}
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FiSettings aria-hidden className="size-4 shrink-0 text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden className="size-3 shrink-0 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp aria-hidden className="size-3 shrink-0 text-[#b2b2b1]" />
      <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px]">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo aria-hidden className="size-4 shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px]">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo aria-hidden className="size-4 shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-3">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
