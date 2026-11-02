/**
 * TestCard — a self-contained visual smoke test built from the "UI magician Agent"
 * Figma frame (node 2:2). No props, no state, no behaviour: it exists only to be
 * rendered on screen.
 *
 * Two notes on how it is styled:
 * - This repo's tailwind.config.js replaces `theme.colors` and `theme.fontFamily`
 *   wholesale, so stock palette and font-family utilities compile to nothing.
 *   The frame's measured colours are therefore written as arbitrary values.
 * - The design's typeface is Inter, which this repo does not bundle, so the root
 *   names it as an arbitrary family with a system sans fallback.
 *
 * Focus is left to the global `:focus-visible` ring; the inputs only recolour it
 * to the panel's neutral, as the design system allows.
 */

const GEAR_TEETH = [0, 45, 90, 135, 180, 225, 270, 315];

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 14 16"
    aria-hidden="true"
    className="h-4 w-[14px] shrink-0 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
  >
    {GEAR_TEETH.map((angle) => (
      <rect
        key={angle}
        x="6.1"
        y="0.6"
        width="1.8"
        height="3.2"
        rx="0.5"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
    <circle cx="7" cy="8" r="4.6" />
    <circle cx="7" cy="8" r="1.8" />
  </svg>
);

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.8 6 1.6l5 5.2" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.9v4.1" />
    <circle cx="7.5" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] p-5 pb-[62px] font-['Inter',ui-sans-serif,system-ui,sans-serif]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsible caption row */}
    <div className="mt-[18px] flex items-center gap-3">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[76px] flex items-center gap-1.5">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-5">
      <label
        htmlFor="testElem-token"
        className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id="testElem-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus-visible:outline-[#929291]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-5">
      <label
        htmlFor="testElem-url"
        className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      id="testElem-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-9 w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus-visible:outline-[#929291]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <span className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
