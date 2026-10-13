/**
 * TestCard — a static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: no props, no state, no data, and nothing in the product
 * imports this file. The colours are the frame's own literals rather than
 * design-system tokens because the frame sits outside this product's design
 * system and no token matches it closely (see task/PLAN.md).
 */

interface ChevronProps {
  width: number;
  height: number;
}

const ChevronUp = ({ width, height }: ChevronProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.8v3.9"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle
      cx="7"
      cy="8"
      r="4.7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeDasharray="2 1.5"
    />
    <circle cx="7" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pb-8 pt-5 font-[Inter,system-ui,sans-serif] text-[11.5px] font-semibold leading-[13.92px]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <SettingsIcon />
    </div>

    {/* Collapsed row */}
    <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Section heading */}
    <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-6 text-[#a4a4a3]">
      <label htmlFor="testElem-token">Personal Access Token</label>
      <InfoIcon />
    </div>
    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 font-semibold text-[#a4a4a3] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-6 text-[#a3a3a2]">
      <label htmlFor="testElem-url">Design URL</label>
      <InfoIcon />
    </div>
    <input
      id="testElem-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 font-semibold text-[#a3a3a2] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <div className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
