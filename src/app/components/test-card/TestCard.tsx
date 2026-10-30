const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = (): JSX.Element => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    aria-hidden="true"
    {...iconProps}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    strokeWidth={1.2}
    aria-hidden="true"
    {...iconProps}
  >
    <path d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    strokeWidth={1.1}
    aria-hidden="true"
    {...iconProps}
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.9v3.9" />
    <path d="M7.5 4.6h.01" strokeWidth={1.8} />
  </svg>
);

const PANEL_FIELD_CLASS = "bg-[#272822] text-[11.5px] leading-[13.92px]";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1e1e1e] font-primary text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full bg-[#2c2c2c]" />

    <div className="px-5 pt-[11px] pb-5">
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon width={8} height={5} />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronUpIcon width={12} height={8} />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <div
        className={`mt-3 flex h-9 items-center border border-[#a5adad] pl-[19px] text-[#737470] ${PANEL_FIELD_CLASS}`}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-[11px] flex items-center gap-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <div
        className={`mt-[11px] flex h-[37px] items-center border-2 border-[#929291] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] ${PANEL_FIELD_CLASS}`}
      >
        https://www.figma.com/file/:
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        {ACTION_LABELS.map((label) => (
          <div
            key={label}
            className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
