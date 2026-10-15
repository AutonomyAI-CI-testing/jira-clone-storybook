/**
 * Smoke-test reproduction of the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no data. Colours are the frame's own
 * literals (see task/PLAN.md D2) — it is a visual reproduction of an external
 * design, not a product surface, so it does not use the app's semantic tokens.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4 4 1 7 4" />
  </svg>
);

const ChevronUpLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1.5 6.5 6 2 10.5 6.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.3v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUpSmall />
      <span className="truncate text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <span className="text-[#d0d0d0]">
        <ChevronUpLarge />
      </span>
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[10px]">
      <label
        htmlFor="testcard-token"
        className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <span className="text-[#a4a4a3]">
        <InfoIcon />
      </span>
    </div>
    <input
      id="testcard-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[11.5px] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-[10px]">
      <label
        htmlFor="testcard-url"
        className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <span className="text-[#a3a3a2]">
        <InfoIcon />
      </span>
    </div>
    <input
      id="testcard-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[10.5px] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[47px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
