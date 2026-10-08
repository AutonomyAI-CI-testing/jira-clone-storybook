import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static smoke-test component reproducing a dark settings-panel frame.
 *
 * Deliberately standalone: it takes no props and hardcodes approximate values
 * read off the design image, so it does not use this app's semantic design
 * tokens or its light/dark themes.
 */

const labelRowClass = "flex items-center gap-2";
const labelTextClass = "text-[16px] text-[#d4d4d4]";
const inputClass =
  "mt-3 w-full rounded-[2px] border border-[#5f5f5f] bg-[#252525] px-4 py-4 text-[15px] text-[#9a9a9a] outline-none placeholder:text-[#9a9a9a]";
const buttonClass =
  "flex-1 rounded-lg bg-[#8f4218] py-4 text-center text-[16px] text-[#c9c9c9]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] text-[#d4d4d4]">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden="true" className="h-6 w-6 text-[#d4d4d4]" />
    </div>

    <div className="mt-4 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#d4d4d4]"
      />
      <span className="min-w-0 truncate text-[15px] text-[#9a9a9a]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-[#d4d4d4]"
      />
      <h2 className="font-primary-bold text-[20px] text-[#d4d4d4]">
        Add New Design
      </h2>
    </div>

    <div className={`mt-8 ${labelRowClass}`}>
      <label htmlFor="personal-access-token" className={labelTextClass}>
        Personal Access Token
      </label>
      <FiInfo aria-hidden="true" className="h-5 w-5 text-[#d4d4d4]" />
    </div>
    <input
      id="personal-access-token"
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={inputClass}
    />

    <div className={`mt-6 ${labelRowClass}`}>
      <label htmlFor="design-url" className={labelTextClass}>
        Design URL
      </label>
      <FiInfo aria-hidden="true" className="h-5 w-5 text-[#d4d4d4]" />
    </div>
    <input
      id="design-url"
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={inputClass}
    />

    <div className="mt-10 flex gap-5">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[20px] text-[#d4d4d4]">
      Recent Breakdowns
    </h2>
  </div>
);
