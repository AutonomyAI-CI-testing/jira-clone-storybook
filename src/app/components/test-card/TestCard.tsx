/**
 * TestCard — a static, self-contained panel built from a Figma frame.
 *
 * This is a smoke test for the Figma → component → preview pipeline: it takes
 * no props, holds no state and is not wired into the app. Spacing, colour and
 * typography are approximate on purpose — pixel-perfect fidelity is not the
 * goal here.
 */

/** The gear is drawn as a ring plus eight short teeth, rotated around its centre. */
const GEAR_TEETH = [0, 45, 90, 135, 180, 225, 270, 315];

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.1" />
    {GEAR_TEETH.map((angle) => (
      <line
        key={angle}
        x1="7"
        y1="4.1"
        x2="7"
        y2="2.4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
  </svg>
);

const UpChevron = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SectionChevron = () => (
  <svg
    width="12"
    height="8"
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
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.7v3.5"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.7" r="0.7" fill="currentColor" />
  </svg>
);

const ACTION_BUTTON_CLASSES =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <UpChevron />
        <span className="truncate text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-2 text-[#b2b2b1]">
        <SectionChevron />
        <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
      </div>

      <label
        htmlFor="testElem-token"
        className="mt-[27px] flex items-center gap-2 text-[#a4a4a3]"
      >
        <span className="text-[11.5px] leading-[13.92px]">
          Personal Access Token
        </span>
        <InfoIcon />
      </label>
      <input
        id="testElem-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <label
        htmlFor="testElem-url"
        className="mt-[11px] flex items-center gap-2 text-[#a3a3a2]"
      >
        <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
        <InfoIcon />
      </label>
      <input
        id="testElem-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button type="button" className={ACTION_BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      <span className="mt-auto text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
