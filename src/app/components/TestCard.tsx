/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: no props, no state, no handlers, nothing interactive. The
 * frame's own copy is the content, so the strings are hardcoded on purpose.
 *
 * The frame's palette is written as Tailwind arbitrary values because the app's
 * design tokens have no counterpart for it — `tailwind.config.js` replaces
 * `theme.colors` with the Atlassian-style semantic tokens, and every one of
 * these dark greys and browns resolves to a visibly different shade. The type
 * uses the repo's `font-primary-bold` (CircularStd Bold) rather than the
 * design's Inter, which is not loaded in this app.
 */

// Frame colours and measurements live here, as whole class strings, so the
// values sit in one place and Tailwind's content scanner can still see them.
const FIELD =
  "h-[39px] w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] leading-[13.92px] text-[#71726e] placeholder:text-[#737470]";
const FIELD_URL =
  "h-[41px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]";
const BUTTON =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";
const LABEL = "flex items-center gap-2 text-[11.5px] leading-[13.92px]";

// Icons are drawn inline: the frame's exported assets are not available in this
// workspace, and `icons.tsx` only ships a checkbox icon. They all paint with
// `currentColor`, so each one takes the colour of the row it sits in.
const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 16 18"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="8" cy="9" r="4.4" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="9" r="1.4" fill="currentColor" />
    <path
      d="M8 1.6v2.2M8 14.2v2.2M1.6 9h2.2M12.2 9h2.2M3.5 4.5l1.6 1.6M10.9 11.9l1.6 1.6M12.5 4.5l-1.6 1.6M5.1 11.9l-1.6 1.6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1.5 6.5L6 2L10.5 6.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.7" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v3.4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-primary-bold text-[13.5px] leading-[16.34px]"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span>UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5 text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <span>Add New Design</span>
    </div>

    <div className={`mt-7 ${LABEL} text-[#a4a4a3]`}>
      <span>Personal Access Token</span>
      <InfoIcon />
    </div>
    <input
      aria-label="Personal Access Token"
      className={`mt-2.5 ${FIELD}`}
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <div className={`mt-2.5 ${LABEL} text-[#a3a3a2]`}>
      <span>Design URL</span>
      <InfoIcon />
    </div>
    <input
      aria-label="Design URL"
      className={`mt-2 ${FIELD_URL}`}
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-5 flex justify-center gap-[17px]">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    <p className="mt-[47px] text-[#b0b0b0]">Recent Breakdowns</p>
  </div>
);
