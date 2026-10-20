/**
 * TestCard
 *
 * A static render of the "UI magician Agent" Figma frame.
 *
 * Smoke-test component: no props, no state and no behaviour — it exists to show
 * that a Figma frame can be turned into a React component and rendered.
 *
 * The frame brings its own dark palette, written below as Tailwind arbitrary
 * values because the app's token layer has no equivalents for these colours.
 * Sizes and positions come from the frame's extracted style guide (a 254x508
 * logical frame); they are approximations by design.
 */

const BUTTON_CLASSES =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]";

const ChevronUpIcon = ({
  width = 12,
  height = 8,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.5" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.9V11"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="4.2" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7" cy="8" r="1.7" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7 3.8V2.2M7 12.2v1.6M2.8 8H1.2M12.8 8h-1.6M4.03 5.03 2.9 3.9M11.1 3.9 9.97 5.03M4.03 10.97 2.9 12.1M11.1 12.1 9.97 10.97"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col overflow-auto bg-black px-5 pt-5 font-primary text-[#b5b5b5]"
    >
      {/* Title */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">
          <GearIcon />
        </span>
      </div>

      {/* Collapse row */}
      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon width={8} height={5} />
        <span className="truncate font-primary-bold text-[11.5px] leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[83px] flex items-center gap-[5px] text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-5 text-[#a4a4a3]">
        <label
          htmlFor="testElem-personal-access-token"
          className="font-primary-bold text-[11.5px] leading-[14px]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[11px] h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-5 text-[#a3a3a2]">
        <label
          htmlFor="testElem-design-url"
          className="font-primary-bold text-[11.5px] leading-[14px]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[10px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
