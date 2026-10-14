/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke-test component: no props, no state, nothing interactive. The frame's
 * own colours and type sizes are carried as literal values because the app's
 * semantic tokens have no close match for this palette.
 */

interface ChevronUpIconProps {
  width: number;
  height: number;
  color: string;
}

const ChevronUpIcon = ({ width, height, color }: ChevronUpIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 7L6 1.6L11 7"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7.2" stroke={color} strokeWidth="1.2" />
    <path
      d="M8 7.4V11.2"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="5.1" r="0.9" fill={color} />
  </svg>
);

const GearIcon = ({ color }: { color: string }) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="relative h-[508px] w-[254px] bg-[#000000] px-5 pt-5"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon color="#b5b5b5" />
      </div>

      {/* Collapsed section row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon width={8} height={5} color="#8b9291" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronUpIcon width={12} height={8} color="#b2b2b1" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-[28px] flex items-center gap-4">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>
      <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL field */}
      <div className="mt-[11px] flex items-center gap-4">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon color="#a3a3a2" />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
          <span className="text-[11.5px] leading-[13.92px] text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
          <span className="text-[11.5px] leading-[13.92px] text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      {/* Recent breakdowns */}
      <div className="mt-[46px]">
        <span className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
