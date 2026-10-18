import cx from "classix";

/**
 * TestCard — a self-contained snapshot of the attached Figma frame (a
 * "UI magician Agent" Figma-plugin panel).
 *
 * Deliberately standalone: no props, no state, no interactivity, and it does
 * not use the repo's semantic token layer. It is a smoke test, so the layout
 * approximates the frame rather than reproducing it pixel for pixel.
 */

const META_TEXT = "text-[11.5px] leading-[13.92px]";
const HEADING_TEXT = "font-primary-bold text-[13.5px] leading-[16.34px]";
const FIELD_BASE = "w-full bg-[#272822] px-[19px]";

const ChevronUp = ({
  size,
  color,
}: {
  size: "sm" | "lg";
  color: string;
}) => {
  const width = size === "lg" ? 12 : 8;
  const height = size === "lg" ? 8 : 5;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`} />
    </svg>
  );
};

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke={color}
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" strokeWidth="1.2" />
    <path d="M7.5 7v3.6" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.85" fill={color} stroke="none" />
  </svg>
);

const FieldLabel = ({
  children,
  color,
}: {
  children: string;
  color: string;
}) => (
  <div className="flex items-center gap-2">
    <span className={cx(META_TEXT, color)}>{children}</span>
    <InfoIcon color={color} />
  </div>
);

const PanelButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className={cx(
      META_TEXT,
      "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[#8c8078]"
    )}
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className={cx(HEADING_TEXT, "text-[#b5b5b5]")}>UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp size="sm" color="#8b9291" />
      <span className={cx(META_TEXT, "text-[#8b9291]")}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-[9px]">
      <ChevronUp size="lg" color="#b2b2b1" />
      <h3 className={cx(HEADING_TEXT, "text-[#b2b2b1]")}>Add New Design</h3>
    </div>

    <div className="mt-[28px]">
      <FieldLabel color="#a4a4a3">Personal Access Token</FieldLabel>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          FIELD_BASE,
          META_TEXT,
          "mt-[12px] h-[36px] border border-[#a5adad] text-[#737470] placeholder:text-[#737470]"
        )}
      />
    </div>

    <div className="mt-[11px]">
      <FieldLabel color="#a3a3a2">Design URL</FieldLabel>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={cx(
          FIELD_BASE,
          "mt-[12px] h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        )}
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h3 className={cx(HEADING_TEXT, "mt-[47px] text-[#b0b0b0]")}>
      Recent Breakdowns
    </h3>
  </div>
);
