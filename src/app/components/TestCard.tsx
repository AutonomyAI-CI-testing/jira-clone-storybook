/**
 * TestCard — a static reproduction of the "UI magician Agent" panel in the
 * supplied Figma frame.
 *
 * Colours are arbitrary values read from the reference rather than semantic
 * tokens, because this frame's palette (near-black panel, rust buttons) has no
 * role in this repo's token set. The nearest declared tokens, for reference:
 *   panel  #1e1e1e ≈ --DarkNeutral100 (#1d2125)
 *   input  #2a2a2a ≈ --DarkNeutral250 (#282e33)
 *   button #b04a18 ≈ --Orange700      (#b65c02)
 *   muted  #8a8a8a ≈ --Neutral500     (#8590a2)
 * Those are base-palette values, which this repo keeps private to `app.css`,
 * so a real product component should use the semantic layer instead of
 * copying the literals below.
 */

const GearIcon = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6h.08A1.7 1.7 0 0 0 10.1 3.04V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.08a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5V11" />
    <path d="M12 7.9h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1e1e1e] px-10 pb-16 pt-9 font-primary-light text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl leading-none text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <span className="text-[#e6e6e6]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-7 flex items-center gap-3 text-[#8a8a8a]">
      <ChevronUpIcon />
      <span className="text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-28 flex items-center gap-3 text-[#e6e6e6]">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testcard-access-token"
          className="text-[15px] text-[#d0d0d0]"
        >
          Personal Access Token
        </label>
        <span className="text-[#8a8a8a]">
          <InfoIcon />
        </span>
      </div>
      <input
        id="testcard-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-6 h-[56px] w-full rounded bg-[#2a2a2a] px-4 text-sm text-[#e6e6e6] outline outline-1 outline-[#5c5c5c] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="testcard-design-url" className="text-[15px] text-[#d0d0d0]">
          Design URL
        </label>
        <span className="text-[#8a8a8a]">
          <InfoIcon />
        </span>
      </div>
      <input
        id="testcard-design-url"
        type="text"
        placeholder="https://www.figma.com/file:"
        className="mt-6 h-[56px] w-full rounded bg-[#2a2a2a] px-4 text-sm text-[#e6e6e6] outline outline-1 outline-[#5c5c5c] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-10 flex gap-8">
      <button
        type="button"
        className="h-[70px] flex-1 rounded-md bg-[#b04a18] font-primary text-lg text-[#b0b0b0]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[70px] flex-1 rounded-md bg-[#b04a18] font-primary text-lg text-[#b0b0b0]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-14 font-primary-bold text-xl text-[#e6e6e6]">
      Recent Breakdowns
    </h2>
  </div>
);
