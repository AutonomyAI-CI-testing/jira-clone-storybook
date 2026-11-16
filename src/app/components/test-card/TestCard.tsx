/**
 * TestCard — a self-contained, prop-less card built from the attached Figma frame
 * ("UI magician Agent" panel, 254x508).
 *
 * Smoke test only: spacing, colour and type are approximate by design, and the card
 * is not wired into any screen, route or store. It imports nothing from the app and
 * holds no state, so it renders anywhere without a provider.
 *
 * Colours come from the frame's palette, which has no equivalent among the app's
 * semantic tokens (they would have to be declared in app.css and tailwind.config.js
 * across every theme block), so they are written as arbitrary Tailwind values here.
 * The frame's exported icon assets are PNGs embedded in SVG wrappers rather than
 * vector paths, so the gear, chevron and info glyphs are drawn inline instead.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1a1a1a] px-[20px] pt-[20px] pb-[20px] font-[Inter,system-ui,sans-serif] text-[11.5px] leading-[13.92px] font-semibold antialiased"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <p className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">UI magician Agent</p>
        <GearIcon />
      </div>

      {/* Collapsible summary row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronIcon width={8} height={5} />
        <p className="truncate text-[#8b9291]">From entire frame to a singl...</p>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronIcon width={12} height={8} />
        <p className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">Add New Design</p>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[10px]">
        <p className="text-[#a4a4a3]">Personal Access Token</p>
        <InfoIcon />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[#737470]">figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[10px]">
        <p className="text-[#a3a3a2]">Design URL</p>
        <InfoIcon />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
        <span className="text-[#71726e]">https://www.figma.com/file/: </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex items-center justify-center gap-[17px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <p className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">Recent Breakdowns</p>
    </div>
  );
};

export default TestCard;

const GearIcon = () => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="text-[#b5b5b5]"
  >
    <circle cx={7} cy={8} r={3.4} stroke="currentColor" strokeWidth={1.4} />
    <g stroke="currentColor" strokeWidth={1.4} strokeLinecap="round">
      <path d="M11.2 8H13" />
      <path d="M9.97 10.97l1.27 1.27" />
      <path d="M7 12.2V14" />
      <path d="M4.03 10.97l-1.27 1.27" />
      <path d="M2.8 8H1" />
      <path d="M4.03 5.03L2.76 3.76" />
      <path d="M7 3.8V2" />
      <path d="M9.97 5.03l1.27-1.27" />
    </g>
  </svg>
);

const ChevronIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#b2b2b1]"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx={7.5} cy={7.5} r={6.75} stroke="currentColor" strokeWidth={1.4} />
    <circle cx={7.5} cy={4.6} r={0.9} fill="currentColor" />
    <rect x={6.9} y={6.5} width={1.2} height={4.5} rx={0.6} fill="currentColor" />
  </svg>
);
