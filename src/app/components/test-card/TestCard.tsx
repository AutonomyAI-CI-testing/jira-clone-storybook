import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static, self-contained reproduction of the
 * "UI magician Agent" panel from the reference Figma frame.
 *
 * Deliberately takes no props and pulls in no app providers, routing or data —
 * it must mount bare. Styling values are approximate; visual fidelity is out of
 * scope for this component.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black p-5"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#b5b5b5]"
      >
        <FiSettings size={16} aria-hidden="true" />
      </button>
    </div>

    {/* Collapsible row */}
    <div className="mt-7 flex items-center gap-2">
      <FiChevronUp size={14} aria-hidden="true" className="shrink-0 text-[#8b9291]" />
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section: Add New Design */}
    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp size={14} aria-hidden="true" className="shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-10">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-personal-access-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo size={14} aria-hidden="true" className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-personal-access-token"
        type="text"
        defaultValue="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[37px] w-full border border-[#a5adad] bg-[#272822] px-3 font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] outline-none"
      />
    </div>

    {/* Design URL */}
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-design-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo size={14} aria-hidden="true" className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[41px] w-full border-2 border-[#929291] bg-[#272822] px-3 font-primary-bold text-[11.5px] leading-[13.92px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-5 flex gap-4">
      <button
        type="button"
        className="h-[37px] flex-1 rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] flex-1 rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Section: Recent Breakdowns */}
    <span className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

export default TestCard;
