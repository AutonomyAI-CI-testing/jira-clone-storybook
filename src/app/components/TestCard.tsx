import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const actionButton =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

/**
 * Smoke-test reproduction of the "UI magician Agent" Figma panel.
 * Self-contained: no props, no state, and not wired into any screen.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pt-5 pb-14 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden className="shrink-0 text-[#b5b5b5]" size={16} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp aria-hidden className="shrink-0 text-[#8b9291]" size={12} />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <FiChevronUp aria-hidden className="shrink-0 text-[#b2b2b1]" size={14} />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo aria-hidden className="shrink-0 text-[#a4a4a3]" size={15} />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-2.5 h-[39px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#b5b5b5] placeholder:text-[#737470]"
    />

    <div className="mt-2.5 flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo aria-hidden className="shrink-0 text-[#a3a3a2]" size={15} />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-2 h-[41px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#b5b5b5] placeholder:text-[#71726e]"
    />

    <div className="mt-5 flex justify-center gap-4">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={actionButton}>
          {label}
        </button>
      ))}
    </div>

    <p className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
