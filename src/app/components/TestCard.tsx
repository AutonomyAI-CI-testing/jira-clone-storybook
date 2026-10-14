import cx from "classix";

/**
 * A self-contained, presentational panel reproduced from a Figma frame.
 * It takes no props and holds no state: every string is a literal, and the
 * inputs and buttons are deliberately inert.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 py-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 pl-[3px] text-[#8b9291]">
      <ChevronUp size={8} />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[68px] flex items-center gap-2 pl-1.5 text-[#b2b2b1]">
      <ChevronUp size={12} />
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <Field
      label="Personal Access Token"
      wrapperClassName="mt-7"
      toneClassName="text-[#a4a4a3]"
      inputClassName="h-[36px] border border-[#a5adad] px-3 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      label="Design URL"
      wrapperClassName="mt-3"
      toneClassName="text-[#a3a3a2]"
      inputClassName="h-[37px] border-2 border-[#929291] px-3 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-[22px] flex justify-end gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

const Field = ({
  label,
  wrapperClassName,
  toneClassName,
  inputClassName,
  placeholder,
}: FieldProps): JSX.Element => (
  <div className={wrapperClassName}>
    <div className={cx("mb-2 flex items-center gap-2", toneClassName)}>
      <span className="text-[11.5px] font-semibold leading-[13.92px]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "w-full bg-[#272822] font-semibold outline-none",
        inputClassName
      )}
    />
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
    {GEAR_TEETH.map(([x1, y1, x2, y2]) => (
      <line
        key={`${x1}-${y1}-${x2}-${y2}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    ))}
  </svg>
);

// The eight teeth of the gear, as inner-to-outer spoke coordinates.
const GEAR_TEETH: [number, number, number, number][] = [
  [12.2, 8, 14, 8],
  [10.68, 11.68, 11.95, 12.95],
  [7, 13.2, 7, 15],
  [3.32, 11.68, 2.05, 12.95],
  [1.8, 8, 0, 8],
  [3.32, 4.32, 2.05, 3.05],
  [7, 2.8, 7, 1],
  [10.68, 4.32, 11.95, 3.05],
];

const ChevronUp = ({ size }: { size: number }): JSX.Element => (
  <svg
    width={size}
    height={(size * 8) / 12}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.75"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.8v4.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

interface FieldProps {
  label: string;
  wrapperClassName: string;
  toneClassName: string;
  inputClassName: string;
  placeholder: string;
}
