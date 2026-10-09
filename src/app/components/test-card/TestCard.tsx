/**
 * TestCard — a self-contained, presentational smoke-test panel reproduced from
 * a Figma frame (a dark "Add New Design" form).
 *
 * Deliberately hardcodes the frame's literal colours and sizes rather than the
 * app's semantic design tokens: the frame's palette and Inter type have no
 * token equivalents, and this component is a render smoke test, not app UI.
 * It takes no props and has no behaviour.
 */
import type { CSSProperties } from "react";

const GearIcon = () => (
  <svg
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    aria-hidden="true"
    className="absolute left-[216px] top-[20px] h-[16px] w-[14px] text-[#b5b5b5]"
  >
    <circle cx="7" cy="8" r="2.6" />
    <circle cx="7" cy="8" r="5.4" />
    <path d="M7 0.6v2M7 13.4v2M1.6 4.3l1.7 1M10.7 10.7l1.7 1M12.4 4.3l-1.7 1M3.3 10.7l-1.7 1" />
  </svg>
);

const ChevronUpIcon = ({
  className,
  style,
}: {
  className: string;
  style?: CSSProperties;
}) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ style }: { style: CSSProperties }) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.1}
    aria-hidden="true"
    className="absolute h-[15px] w-[15px] text-[#a4a4a3]"
    style={style}
  >
    <circle cx="7.5" cy="7.5" r="6.4" />
    <path d="M7.5 6.6v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.55" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  label,
  labelX,
  labelY,
  labelColor,
  infoX,
  infoY,
  boxY,
  boxHeight,
  boxBorder,
  value,
  valueX,
  valueClass,
}: {
  label: string;
  labelX: number;
  labelY: number;
  labelColor: string;
  infoX: number;
  infoY: number;
  boxY: number;
  boxHeight: number;
  boxBorder: string;
  value: string;
  valueX: number;
  valueClass: string;
}) => (
  <>
    <span
      className={`absolute whitespace-nowrap text-[11.5px] font-semibold leading-[13.92px] ${labelColor}`}
      style={{ left: labelX, top: labelY }}
    >
      {label}
    </span>
    <InfoIcon style={{ left: infoX, top: infoY }} />
    <div
      className={`absolute left-[20px] w-[211px] bg-[#272822] ${boxBorder}`}
      style={{ top: boxY, height: boxHeight }}
    >
      <span
        className={`absolute top-[11px] whitespace-nowrap font-semibold ${valueClass}`}
        style={{ left: valueX }}
      >
        {value}
      </span>
    </div>
  </>
);

const RustButton = ({
  label,
  left,
  top,
}: {
  label: string;
  left: number;
  top: number;
}) => (
  <div
    className="absolute flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
    style={{ left, top }}
  >
    {label}
  </div>
);

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="relative h-[508px] w-[254px] overflow-hidden bg-black font-sans"
    >
      <span className="absolute left-[20px] top-[20px] text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />

      <ChevronUpIcon
        className="absolute h-[5px] w-[8px] text-[#8b9291]"
        style={{ left: 23, top: 57 }}
      />
      <span className="absolute left-[40px] top-[54px] whitespace-nowrap text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>

      <ChevronUpIcon
        className="absolute h-[8px] w-[12px] text-[#b2b2b1]"
        style={{ left: 26, top: 150 }}
      />
      <span className="absolute left-[43px] top-[145px] text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>

      <Field
        label="Personal Access Token"
        labelX={20}
        labelY={189}
        labelColor="text-[#a4a4a3]"
        infoX={173}
        infoY={187}
        boxY={215}
        boxHeight={36}
        boxBorder="border border-[#a5adad]"
        value="figd_xxxxxxxxxxxxxxxxxx"
        valueX={19}
        valueClass="text-[11.5px] leading-[13.92px] text-[#737470]"
      />

      <Field
        label="Design URL"
        labelX={20}
        labelY={262}
        labelColor="text-[#a3a3a2]"
        infoX={100}
        infoY={260}
        boxY={287}
        boxHeight={37}
        boxBorder="border-2 border-[#929291]"
        value="https://www.figma.com/file/:"
        valueX={20}
        valueClass="text-[10.5px] leading-[12.71px] text-[#71726e]"
      />

      <RustButton label="Awesome" left={44} top={347} />
      <RustButton label="Prepare" left={146} top={346} />

      <span className="absolute left-[20px] top-[430px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}

export { TestCard };
