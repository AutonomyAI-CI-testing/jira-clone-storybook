import cx from "classix";

/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel from
 * the attached Figma frame. Static markup: no props, no state, no interaction.
 *
 * Colours are the frame's own literal values (it is deliberately off-palette),
 * sizes come from the exported style guide at the frame's 1x scale, and spacing
 * between blocks is approximated from the frame's y positions.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 pt-5 pb-5 font-primary text-[13.5px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px]">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[11.5px] text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px] text-[13.5px] text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <span>Add New Design</span>
    </div>

    <FieldLabel className="mt-[30px] text-[#a4a4a3]">
      Personal Access Token
    </FieldLabel>

    <Field
      className="mt-[12px] h-[36px] border border-[#a5adad] px-[19px]"
      textClassName="text-[11.5px] text-[#737470]"
    >
      figd_xxxxxxxxxxxxxxxxxx
    </Field>

    <FieldLabel className="mt-[11px] text-[#a3a3a2]">Design URL</FieldLabel>

    <Field
      className="mt-[12px] h-[37px] border-2 border-[#929291] px-[20px]"
      textClassName="text-[10.5px] text-[#71726e]"
    >
      https://www.figma.com/file/:
    </Field>

    <div className="mt-[23px] flex gap-[17px] pl-[24px]">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-[46px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const FieldLabel = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cx(
      "flex items-center gap-3 text-[11.5px] whitespace-nowrap",
      className
    )}
  >
    <span>{children}</span>
    <InfoIcon />
  </div>
);

const Field = ({
  className,
  textClassName,
  children,
}: {
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cx(
      "flex w-[211px] items-center bg-[#272822]",
      className
    )}
  >
    <span className={cx("truncate", textClassName)}>{children}</span>
  </div>
);

const CardButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] pl-4 text-left text-[11.5px] text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUpIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d={`M1 ${height - 1} ${width / 2} 1 ${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.7" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.7v4.1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.1" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="7"
        y1="1.6"
        x2="7"
        y2="3.7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
  </svg>
);
