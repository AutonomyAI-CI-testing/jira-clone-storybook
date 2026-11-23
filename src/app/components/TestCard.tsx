/**
 * TestCard
 *
 * A static stand-in for the "UI magician Agent" settings panel in the referenced
 * Figma frame. It is a self-contained fixture: no props, no state and no
 * behaviour — the two fields are placeholders and the buttons are inert.
 *
 * Colours are the frame's own values, written as Tailwind arbitrary values. The
 * repo's semantic tokens describe the app's own palette and have no equivalent
 * for this dark panel, so no token is used here.
 */

interface ChevronUpIconProps {
  width: number;
  height: number;
}

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <circle cx="7" cy="8" r="4.6" />
      <circle cx="7" cy="8" r="1.9" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="7"
          y1="2.6"
          x2="7"
          y2="1"
          transform={`rotate(${angle} 7 8)`}
        />
      ))}
    </g>
  </svg>
);

const ChevronUpIcon = ({ width, height }: ChevronUpIconProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#b2b2b1]"
  >
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.4"
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
    className="shrink-0 text-[#a5adad]"
  >
    <circle cx="7.5" cy="7.5" r="6.7" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.6v4.2"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.2" r="0.8" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#000000] px-5 py-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon width={8} height={5} />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[78px] flex items-center gap-[5px]">
      <ChevronUpIcon width={12} height={8} />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <div className="mt-2.5 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <div className="mt-2 flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[46px] block text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
