/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: no props, no state, no data. Colours are the frame's own literals because the
 * design's palette has no counterpart in this repo's token system and adding tokens would mean
 * editing app.css and tailwind.config.js.
 */

const ChevronUp = ({ width, height, color }: { width: number; height: number; color: string }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0">
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.2" />
    <circle cx="7.5" cy="4.6" r="0.9" fill={color} />
    <path d="M7.5 6.9 V11" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const GearIcon = ({ color }: { color: string }) => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true" className="shrink-0">
    <g stroke={color} strokeWidth="1.3" strokeLinecap="round">
      <path d="M7 1 V4" />
      <path d="M7 12 V15" />
      <path d="M1 8 H4" />
      <path d="M10 8 H13" />
      <path d="M2.8 3.8 L5 6" />
      <path d="M9 10 L11.2 12.2" />
      <path d="M11.2 3.8 L9 6" />
      <path d="M5 10 L2.8 12.2" />
    </g>
    <circle cx="7" cy="8" r="3.4" stroke={color} strokeWidth="1.3" />
    <circle cx="7" cy="8" r="1.1" fill={color} />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] shrink-0 flex-col bg-[#1C1D17] px-5 pt-5 pb-6 text-[#B5B5B5]"
    >
      {/* Panel title */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16px] font-semibold">UI magician Agent</span>
        <GearIcon color="#9E9E9E" />
      </div>

      {/* Collapsed one-line row */}
      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUp width={8} height={5} color="#8B9291" />
        <span className="truncate text-[11.5px] leading-[14px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Frame leaves a large empty gap here */}
      <div className="h-[77px]" aria-hidden="true" />

      {/* Add New Design */}
      <div className="flex items-center gap-2 pl-1.5">
        <ChevronUp width={12} height={8} color="#B2B2B1" />
        <span className="text-[13.5px] leading-[16px] font-semibold text-[#B2B2B1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-3">
        <span className="text-[11.5px] leading-[14px] font-semibold text-[#A4A4A3]">
          Personal Access Token
        </span>
        <InfoIcon color="#A4A4A3" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-2.5 h-[36px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-3">
        <span className="text-[11.5px] leading-[14px] font-semibold text-[#A3A3A2]">Design URL</span>
        <InfoIcon color="#A3A3A2" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-2.5 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold text-[#71726E] placeholder:text-[#71726E]"
      />

      {/* Actions */}
      <div className="mt-6 flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="mt-12 text-[13.5px] leading-[16px] font-semibold text-[#B0B0B0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
