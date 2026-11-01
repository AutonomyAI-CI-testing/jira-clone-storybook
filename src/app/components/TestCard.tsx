/**
 * TestCard
 *
 * Smoke-test reproduction of the Figma "UI magician Agent" frame
 * (Test Page - Simple, node 2-2). Self-contained: no props, no state and no
 * data wiring. Layout is Tailwind-only and the values are approximate.
 *
 * The palette is deliberately literal: the frame is a dark charcoal panel with
 * rust buttons, which has no equivalent in the app's semantic tokens, and this
 * component is not intended to ship as product UI.
 */

const PANEL_BG = "#1b1b1b";
const PANEL_BORDER = "#2f2f2f";
const MUTED = "#8b9291";

const IconGear = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconChevronUp = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const IconInfo = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="1.2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.8" />
    <path d="M8 7.2v3.6" />
    <circle cx="8" cy="4.9" r="0.85" fill="#a4a4a3" stroke="none" />
  </svg>
);

const PanelButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col border p-5 font-[Inter,system-ui,sans-serif]"
    style={{ backgroundColor: PANEL_BG, borderColor: PANEL_BORDER }}
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IconGear />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <IconChevronUp width={8} height={5} color={MUTED} />
      <span className="text-[11.5px] leading-[14px] font-semibold" style={{ color: MUTED }}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <IconChevronUp width={12} height={8} color="#b2b2b1" />
      <span className="text-[13.5px] leading-[16px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label
      htmlFor="test-card-token"
      className="mt-[28px] flex items-center gap-[6px] text-[11.5px] leading-[14px] font-semibold text-[#a4a4a3]"
    >
      Personal Access Token
      <IconInfo />
    </label>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
    />

    <label
      htmlFor="test-card-url"
      className="mt-[11px] flex items-center gap-[6px] text-[11.5px] leading-[14px] font-semibold text-[#a3a3a2]"
    >
      Design URL
      <IconInfo />
    </label>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[23px] flex gap-[17px] pl-6">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <span className="mt-[46px] text-[13.5px] leading-[16px] font-semibold text-[#b6b6b6]">
      Recent Breakdowns
    </span>
    <div className="mt-2 h-px w-full" style={{ backgroundColor: PANEL_BORDER }} />
  </div>
);
