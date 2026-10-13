/**
 * TestCard
 *
 * A standalone, self-contained reproduction of a Figma frame. Smoke test only:
 * static presentation, no props, no state, no handlers, every string hardcoded.
 *
 * The colours and sizes below are the design's literal values written as Tailwind
 * arbitrary values. That is deliberate rather than design-system drift: this dark
 * panel has nothing to do with this product's semantic token system
 * (`bg-elevation-*`, `text-font-*`), and the repo's `theme.colors` REPLACES
 * Tailwind's palette, so a stock palette class would emit nothing at all.
 *
 * The design's exported icon files were not reachable from the build
 * environment, so the small icons are drawn here as simple inline SVG shapes.
 */

const GEAR_TEETH_DEGREES = [0, 45, 90, 135, 180, 225, 270, 315];

const GearIcon = () => (
  <svg
    viewBox="0 0 14 16"
    width={14}
    height={16}
    aria-hidden="true"
    className="shrink-0"
  >
    <g stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" fill="none">
      <circle cx={7} cy={8} r={3.4} />
      {GEAR_TEETH_DEGREES.map((degrees) => {
        const radians = (degrees * Math.PI) / 180;
        return (
          <line
            key={degrees}
            x1={7 + Math.cos(radians) * 4.6}
            y1={8 + Math.sin(radians) * 4.6}
            x2={7 + Math.cos(radians) * 6.5}
            y2={8 + Math.sin(radians) * 6.5}
          />
        );
      })}
    </g>
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 12 8"
    width={12}
    height={8}
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    width={15}
    height={15}
    aria-hidden="true"
    className="shrink-0"
  >
    <circle
      cx={7.5}
      cy={7.5}
      r={6.6}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
    />
    <circle cx={7.5} cy={4.7} r={0.9} fill="currentColor" />
    <path
      d="M7.5 6.9v3.6"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
    />
  </svg>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="relative flex min-h-[508px] w-[254px] flex-col bg-[#0d0d0d] px-[18px] pb-[24px] pt-[20px] font-[Inter,sans-serif]"
    >
      <div
        className="absolute left-0 top-0 h-[9px] w-full bg-[#171717]"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between text-[#b5b5b5]">
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon />
        <span className="min-w-0 truncate text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      <div className="mt-[36px] flex items-center gap-[6px] text-[#a4a4a3]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>

      <div className="mt-[10px] flex h-[36px] w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[10px] flex items-center gap-[6px] text-[#a3a3a2]">
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          Design URL
        </span>
        <InfoIcon />
      </div>

      <div className="mt-[10px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[20px]">
        <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[18px] flex gap-[15px] pl-[25px]">
        <div className="flex h-[40px] w-[87px] items-center justify-center rounded-[4px] bg-[#843a17]">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex h-[40px] w-[87px] items-center justify-center rounded-[4px] bg-[#843a17]">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      <div className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
