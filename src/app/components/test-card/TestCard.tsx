/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel
 * from the attached Figma frame. Smoke test: static markup, no props, no state.
 *
 * Values (colours, type sizes, geometry) are taken from the design's extracted
 * style guide. They are written as literal values rather than the app's
 * semantic tokens because this mock-up's dark palette has no matching token,
 * and adding one would mean editing app.css / tailwind.config.js.
 */

const FIELD_LABELS = {
  token: "Personal Access Token",
  url: "Design URL",
};

const ACTIONS = ["Awesome", "Prepare"];

const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke={color} strokeWidth="1" />
    <path
      d="M7.5 6.6v4.2"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.75" fill={color} />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#0d0d0d] px-5 py-5 font-[family-name:Inter,sans-serif] text-[11.5px] leading-[13.92px] font-semibold"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="7" cy="8" r="2.6" stroke="#c9c9c9" strokeWidth="1.2" />
        <path
          d="M7 1.5v2M7 12.5v2M1.5 8h2M10.5 8h2M3.1 4.1l1.4 1.4M9.5 10.5l1.4 1.4M3.1 11.9l1.4-1.4M9.5 5.5l1.4-1.4"
          stroke="#c9c9c9"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* Collapsed section summary */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M1 4l3-3 3 3"
          stroke="#8b9291"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    {/* Section header */}
    <div className="mt-[76px] flex items-center gap-[9px]">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M1.5 6.5L6 2l4.5 4.5"
          stroke="#b2b2b1"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-3">
      <span className="text-[#a4a4a3]">{FIELD_LABELS.token}</span>
      <InfoIcon color="#a4a4a3" />
    </div>
    <div className="mt-[12px] flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-3">
      <span className="text-[#a3a3a2]">{FIELD_LABELS.url}</span>
      <InfoIcon color="#a3a3a2" />
    </div>
    <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    {/* Actions */}
    <div className="mt-[23px] flex justify-center gap-[17px]">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
        >
          {action}
        </button>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
