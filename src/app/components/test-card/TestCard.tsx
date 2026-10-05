/**
 * TestCard — a static, self-contained recreation of the "UI magician Agent"
 * Figma panel (node 2-2), built as a design-to-code smoke test.
 *
 * Deliberately NOT part of the product's design system: the palette below is
 * hardcoded Tailwind colour values rather than the repo's semantic tokens
 * (`bg-background-brand-bold`, `text-font-subtle`, …), because this panel is an
 * unrelated dark design that does not map onto the app's themes. Do not treat
 * this file as a reference for token usage.
 *
 * Takes no props, holds no state, and is not wired into the app's routing.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
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
    className="text-[#8b9291]"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const ChevronUpLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-[#b2b2b1]"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.9v3.3" strokeLinecap="round" />
    <circle cx="7.5" cy="4.9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] overflow-auto bg-black px-5 pb-10 pt-5 font-primary"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsible row */}
    <div className="mt-5 flex items-center gap-2">
      <ChevronUpSmall />
      <span className="font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-20 flex items-center gap-2">
      <ChevronUpLarge />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-5 font-primary-bold text-2xs text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon className="text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-9 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-2xs text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-11 font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
