import { FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test reproduction of the attached Figma frame — a dark "UI magician
 * Agent" panel. Self-contained and inert: no props, no state, no handlers.
 *
 * Colours and type are the design's own values rather than repo tokens on
 * purpose: this panel's brown-on-near-black palette does not exist in this
 * app's design system, and swapping tokens in would change the design rather
 * than match it. Inter is not loaded by this repo, so the font falls back to a
 * system sans.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] overflow-auto bg-black font-[Inter,sans-serif]"
  >
    <div className="h-[9px] w-full bg-[#1a1a1a]" />

    <div className="flex items-center justify-between px-[20px] pt-[11px]">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[#b5b5b5]"
      >
        <FiSettings size={16} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[23px] pr-[20px] text-[#8b9291]">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M1 1L4 4L7 1"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[26px] pr-[20px] text-[#b2b2b1]">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M1.5 6L6 1.5L10.5 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] px-[20px]">
      <div className="flex items-center gap-[8px] text-[#a4a4a3]">
        <label
          htmlFor="test-card-token"
          className="text-[11.5px] font-semibold leading-[13.92px]"
        >
          Personal Access Token
        </label>
        <FiInfo
          size={15}
          role="img"
          aria-label="Where do I find my personal access token?"
        />
      </div>
      <input
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />
    </div>

    <div className="mt-[11px] px-[20px]">
      <div className="flex items-center gap-[8px] text-[#a3a3a2]">
        <label
          htmlFor="test-card-url"
          className="text-[11.5px] font-semibold leading-[13.92px]"
        >
          Design URL
        </label>
        <FiInfo
          size={15}
          role="img"
          aria-label="Which Figma URL should I paste here?"
        />
      </div>
      <input
        id="test-card-url"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-[44px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] px-[20px] pb-[56px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
