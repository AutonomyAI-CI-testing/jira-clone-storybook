import { FaChevronUp, FaCircleInfo, FaGear } from "react-icons/fa6";

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. It is a smoke test, not a reusable building block: no props, no state,
 * no data.
 *
 * The colours are the frame's own literal values rather than the app's semantic
 * tokens on purpose — the panel is a fixed dark surface taken from another
 * product, and semantic tokens would repaint it whenever the app theme changes.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-primary text-[11.5px] leading-[14px] text-[#a4a4a3]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#b5b5b5]">
        <FaGear aria-hidden size={16} />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp aria-hidden size={8} className="shrink-0 text-[#8b9291]" />
      <span className="text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <FaChevronUp aria-hidden size={12} className="shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <label htmlFor="test-card-access-token" className="text-[#a4a4a3]">
        Personal Access Token
      </label>
      <button
        type="button"
        aria-label="About the personal access token"
        className="text-[#a4a4a3]"
      >
        <FaCircleInfo aria-hidden size={15} />
      </button>
    </div>
    <input
      id="test-card-access-token"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-3 text-[#a4a4a3] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <div className="mt-3 flex items-center gap-2">
      <label htmlFor="test-card-design-url" className="text-[#a3a3a2]">
        Design URL
      </label>
      <button
        type="button"
        aria-label="About the design URL"
        className="text-[#a3a3a2]"
      >
        <FaCircleInfo aria-hidden size={15} />
      </button>
    </div>
    <input
      id="test-card-design-url"
      className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-3 text-[#a4a4a3] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-6 flex justify-center gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
