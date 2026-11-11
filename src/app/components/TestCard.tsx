import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "mt-3 w-full rounded border border-[#6b6b6b] bg-[#2b2b2b] px-4 py-4 text-[15px] text-[#d6d6d6] placeholder:text-[#8a8a8a] focus:outline-none";

const buttonClass =
  "w-[169px] rounded-lg bg-[#9c4a27] py-5 text-base text-[#c9c2ba]";

/**
 * Rebuild of the "UI magician Agent" panel from a Figma frame.
 * Self-contained and prop-less on purpose: this is a smoke test that the
 * design-to-component path renders, not a pixel match. Colours are literal
 * values read off the frame, since the app's semantic palette has no role for
 * this dark panel / rust button surface.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-6 font-primary text-[#d6d6d6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl text-[#d6d6d6]">UI magician Agent</h1>
      <FiSettings aria-hidden="true" className="h-6 w-6 text-[#e0e0e0]" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-[#d6d6d6]"
      />
      <span className="truncate text-[15px] text-[#a0a0a0]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#d6d6d6]"
      />
      <h2 className="text-xl text-[#f0f0f0]">Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-token" className="text-[15px] text-[#c4c4c4]">
          Personal Access Token
        </label>
        <FiInfo aria-hidden="true" className="h-5 w-5 text-[#d6d6d6]" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-url" className="text-[15px] text-[#c4c4c4]">
          Design URL
        </label>
        <FiInfo aria-hidden="true" className="h-5 w-5 text-[#d6d6d6]" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file:"
        className={fieldClass}
      />
    </div>

    <div className="mt-12 flex justify-center gap-[34px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-14 text-xl text-[#f0f0f0]">Recent Breakdowns</h2>
  </div>
);
