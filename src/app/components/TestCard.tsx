import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const inputClassName =
  "mt-4 w-full rounded-[2px] border border-[#4a4a4a] bg-[#262626] px-4 py-3 text-[17px] text-[#d0d0d0] placeholder:text-[#7a7a7a] focus:outline-none";

const buttonClassName =
  "w-[172px] rounded-[2px] bg-[#9a4522] px-6 py-3 text-[18px] text-[#d0d0d0]";

/**
 * Smoke-test panel reproducing the "UI magician Agent" Figma frame.
 *
 * Self-contained: no props, no state, no handlers. The dark palette is a
 * deliberate one-off for this component — the app's semantic tokens are
 * light-first and have no near-black surface or brick orange, and they are
 * not to be rewritten for a smoke test.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] px-10 py-8 font-primary text-[15px] text-[#c9c9c9]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] text-[#d6d6d6]">
        UI magician Agent
      </h1>
      <FaCog aria-hidden size={24} className="text-[#d6d6d6]" />
    </div>

    {/* Collapsed section row */}
    <div className="mt-8 flex items-center gap-3">
      <FaChevronUp aria-hidden size={16} className="shrink-0 text-[#a9a9a9]" />
      <span className="truncate text-[18px] text-[#a9a9a9]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-32 flex items-center gap-3">
      <FaChevronUp aria-hidden size={20} className="shrink-0 text-[#d6d6d6]" />
      <h2 className="font-primary-bold text-[22px] text-[#d6d6d6]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-16 flex items-center gap-3">
      <span className="font-primary-bold text-[17px] text-[#d0d0d0]">
        Personal Access Token
      </span>
      <FaInfoCircle aria-hidden size={18} className="text-[#d0d0d0]" />
    </div>
    <input
      className={inputClassName}
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    {/* Design URL */}
    <div className="mt-8 flex items-center gap-3">
      <span className="font-primary-bold text-[17px] text-[#d0d0d0]">
        Design URL
      </span>
      <FaInfoCircle aria-hidden size={18} className="text-[#d0d0d0]" />
    </div>
    <input
      className={inputClassName}
      placeholder="https://www.figma.com/file/"
    />

    {/* Actions */}
    <div className="mt-10 flex gap-8 pl-12">
      <button
        type="button"
        className={buttonClassName}
      >
        Awesome
      </button>
      <button
        type="button"
        className={buttonClassName}
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <h2 className="mt-24 font-primary-bold text-[22px] text-[#d6d6d6]">
      Recent Breakdowns
    </h2>
  </div>
);
