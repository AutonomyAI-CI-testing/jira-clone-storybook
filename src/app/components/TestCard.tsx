/**
 * TestCard — smoke-test component built from a Figma frame.
 *
 * Self-contained and prop-free on purpose: this exists to prove the
 * design-to-code path renders, not to be a product feature. Values are
 * hardcoded from the frame's style guide as Tailwind arbitrary values,
 * deliberately not mapped onto this repo's semantic design tokens — the
 * design is a foreign dark theme, not the product's design system.
 */

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="2.4" stroke="#b5b5b5" strokeWidth="1.2" />
    <path
      d="M7 1.6v1.6M7 12.8v1.6M1.6 8h1.6M10.8 8h1.6M3.2 4.2l1.13 1.13M9.67 10.67l1.13 1.13M10.8 4.2L9.67 5.33M4.33 10.67L3.2 11.8"
      stroke="#b5b5b5"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUp = ({ width, height, color }: ChevronUpProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    preserveAspectRatio="none"
    className="shrink-0"
    aria-hidden="true"
  >
    <path
      d="M1 6.5L6 1.5l5 5"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke={color} strokeWidth="1.1" />
    <path
      d="M7.5 6.9v3.5"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.85" fill={color} />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#0d0d0d] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    {/* Header — title left, settings gear right */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <GearIcon />
    </div>

    {/* Collapsed section row */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp width={8} height={5} color="#8b9291" />
      <span className="truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[86px] flex items-center gap-[9px]">
      <ChevronUp width={12} height={8} color="#b2b2b1" />
      <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-[8px]">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon color="#a4a4a3" />
    </div>
    <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-[8px]">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <InfoIcon color="#a3a3a2" />
    </div>
    <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[20px]">
      <span className="text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[21px] flex gap-[15px] pl-[23px]">
      <div className="flex h-[40px] w-[87px] items-center justify-center rounded-[4px] bg-[#843a17]">
        <span className="text-[11.5px] text-[#8c8078]">Awesome</span>
      </div>
      <div className="flex h-[40px] w-[87px] items-center justify-center rounded-[4px] bg-[#843a17]">
        <span className="text-[11.5px] text-[#8c8078]">Prepare</span>
      </div>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[45px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

interface ChevronUpProps {
  width: number;
  height: number;
  color: string;
}

export default TestCard;
