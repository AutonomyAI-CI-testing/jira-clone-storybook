/**
 * TestCard — smoke test only.
 *
 * A one-off reproduction of the supplied Figma frame: an off-system dark panel
 * (black ground, #272822 wells, brown buttons, Inter type). Nothing in that frame
 * maps to this repo's semantic tokens, so every colour, size and face below is a
 * Tailwind arbitrary value carrying the design's own literal — the escape hatch
 * for a value that has no role. This is not a pattern for new UI in this app.
 *
 * The frame's four glyphs (gear, chevron, info) are simple inline SVGs at the
 * design's own sizes and positions; Inter is not loaded by this repo, so the
 * font stack falls back to the system sans.
 */

const heading = "absolute font-semibold text-[13.5px] leading-[16.34px]";
const caption = "absolute font-semibold text-[11.5px] leading-[13.92px]";
const field = "absolute flex items-center bg-[#272822]";
const button =
  "absolute h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-semibold text-[11.5px] leading-[13.92px] text-[#8c8078]";

const Chevron = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    preserveAspectRatio="none"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.4 6 1.6 11 6.4" />
  </svg>
);

const Info = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.9v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="relative h-[508px] w-[254px] bg-[#000000] font-[Inter,sans-serif]"
  >
    <span className={`${heading} left-[20px] top-[20px] text-[#b5b5b5]`}>
      UI magician Agent
    </span>
    <svg
      aria-hidden="true"
      viewBox="0 0 14 16"
      fill="none"
      stroke="currentColor"
      className="absolute left-[216px] top-[20px] h-[16px] w-[14px] text-[#b5b5b5]"
    >
      <circle cx="7" cy="8" r="5.8" strokeWidth="1.3" strokeDasharray="2.3 2.25" />
      <circle cx="7" cy="8" r="3" strokeWidth="1.3" />
    </svg>

    <Chevron className="absolute left-[23px] top-[57px] h-[5px] w-[8px] text-[#8b9291]" />
    <span className={`${caption} left-[40px] top-[54px] text-[#8b9291]`}>
      From entire frame to a singl...
    </span>

    <Chevron className="absolute left-[26px] top-[150px] h-[8px] w-[12px] text-[#b2b2b1]" />
    <span className={`${heading} left-[43px] top-[145px] text-[#b2b2b1]`}>
      Add New Design
    </span>

    <span className={`${caption} left-[20px] top-[189px] text-[#a4a4a3]`}>
      Personal Access Token
    </span>
    <Info className="absolute left-[173px] top-[187px] h-[15px] w-[15px] text-[#a4a4a3]" />
    <div
      className={`${field} left-[20px] top-[215px] h-[36px] w-[211px] border border-[#a5adad] px-[19px]`}
    >
      <span className="font-semibold text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <span className={`${caption} left-[20px] top-[262px] text-[#a3a3a2]`}>
      Design URL
    </span>
    <Info className="absolute left-[100px] top-[260px] h-[15px] w-[15px] text-[#a4a4a3]" />
    <div
      className={`${field} left-[20px] top-[287px] h-[37px] w-[211px] border-2 border-[#929291] px-[20px]`}
    >
      <span className="font-semibold text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <button type="button" className={`${button} left-[44px] top-[347px]`}>
      Awesome
    </button>
    <button type="button" className={`${button} left-[146px] top-[346px]`}>
      Prepare
    </button>

    <span className={`${heading} left-[20px] top-[430px] text-[#b0b0b0]`}>
      Recent Breakdowns
    </span>
  </div>
);
