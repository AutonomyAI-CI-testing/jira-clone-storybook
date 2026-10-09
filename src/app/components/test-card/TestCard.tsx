/**
 * TestCard — a static, self-contained panel reproduced from a Figma frame.
 *
 * Smoke test only: no props, no state, no data fetching. Every string is
 * literal. Colours are literal Tailwind arbitrary values rather than the
 * repo's theme tokens, because the frame is a standalone dark mock and the
 * token system is theme-driven.
 */

const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 7L6 1.5L11 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 4.1v0.1M7.5 6.7v4.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1c1c1c] p-5 font-[Inter,ui-monospace,monospace] text-[11.5px] leading-[14px] font-semibold"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-5 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp className="h-[5px] w-2 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[76px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp className="h-2 w-3 shrink-0" />
      <h2 className="text-[13.5px] leading-[16px]">Add New Design</h2>
    </div>

    <div className="mt-7 flex items-center gap-2 text-[#a4a4a3]">
      <span>Personal Access Token</span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] text-[#a4a4a3] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2 text-[#a3a3a2]">
      <span>Design URL</span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2 text-[11.5px] text-[#a4a4a3] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-5 flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
