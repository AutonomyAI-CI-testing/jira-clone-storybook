import cx from "classix";

/**
 * TestCard
 *
 * A self-contained, prop-less reproduction of the supplied Figma panel
 * ("UI magician Agent" — Test Page - Simple (FOR TESTING), node 2:2).
 *
 * Values are taken from the design's extracted style guide at its own 1x
 * scale (a 254px-wide panel; the shared image is a 2x export), and colours
 * are literal because the design's palette has no matching semantic token
 * in this repo.
 */

const GEAR = "#8c8c8c";

const LABEL = "font-primary-bold text-[11.5px] leading-[13.92px]";

const ACTION_BUTTON =
  "h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke={color} strokeWidth="1.5" />
    <path
      d="M7.5 6.75V10.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.35" r="0.95" fill={color} />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3.4" stroke={GEAR} strokeWidth="1.8" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke={GEAR}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#141414] px-5 pt-5 pb-16 font-primary"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span
          className={cx(LABEL, "text-[13.5px] leading-[16.34px] text-[#b5b5b5]")}
        >
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center justify-center text-[#8c8c8c]"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <span className="shrink-0 text-[#8b9291]">
          <ChevronUp width={8} height={5} />
        </span>
        <span className={cx(LABEL, "min-w-0 truncate text-[#8b9291]")}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[75px] flex items-center gap-[5px]">
        <span className="shrink-0 text-[#b2b2b1]">
          <ChevronUp width={12} height={8} />
        </span>
        <span
          className={cx(LABEL, "text-[13.5px] leading-[16.34px] text-[#b2b2b1]")}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-3">
        <span className={cx(LABEL, "text-[#a4a4a3]")}>
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={cx(
          LABEL,
          "mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[#737470] placeholder:text-[#737470]"
        )}
      />

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-3">
        <span className={cx(LABEL, "text-[#a3a3a2]")}>Design URL</span>
        <InfoIcon color="#a3a3a2" />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={cx(
          LABEL,
          "mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        )}
      />

      {/* Actions */}
      <div className="mt-6 flex gap-4 pl-6">
        <button type="button" className={ACTION_BUTTON}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div
        className={cx(LABEL, "mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]")}
      >
        Recent Breakdowns
      </div>
    </div>
  );
};
