/**
 * Smoke test: a static reproduction of the "UI magician Agent" Figma panel.
 *
 * Deliberately self-contained — no props, no state, no event handlers and no
 * data dependencies. The values are approximations of the reference design
 * (which uses its own dark palette and Inter), not this app's design tokens.
 */
export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black px-5 pt-5 pb-[60px]">
    {/* Title */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsed section row */}
    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp color="#b5b5b5" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[72px] flex items-center gap-2">
      <ChevronUp width={12} height={8} color="#b2b2b1" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[26px] flex items-center gap-2">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
      className="mt-[10px] h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-2">
      <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/"
      aria-label="Design URL"
      className="mt-[9px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] text-[#b5b5b5] placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex gap-5 pl-[22px]">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const PanelButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {label}
  </button>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="7" cy="8" r="2.8" stroke="#b5b5b5" strokeWidth="1.4" />
    <path
      d="M7 1.2v1.6M7 13.2v1.6M1.2 8h1.6M11.2 8h1.6M2.9 3.9l1.1 1.1M10 10.9l1.1 1.2M11.1 3.9 10 5M3.9 10.9 2.9 12.1"
      stroke="#b5b5b5"
      strokeWidth="1.4"
      strokeLinecap="round"
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
    focusable="false"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#a4a4a3" strokeWidth="1.2" />
    <path
      d="M7.5 6.8v3.7"
      stroke="#a4a4a3"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="#a4a4a3" />
  </svg>
);

const ChevronUp = ({
  width = 10,
  height = 6,
  color = "#b2b2b1",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M1 5 5 1l4 4"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TestCard;
