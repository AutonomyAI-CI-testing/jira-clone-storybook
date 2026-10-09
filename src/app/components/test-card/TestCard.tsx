/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" frame.
 *
 * This is a smoke-test component: it takes no props, holds no state and is
 * deliberately outside the product's design system. It reproduces the source
 * design with the design's own literal values (arbitrary Tailwind values)
 * instead of the semantic theme tokens, because the frame it mirrors is a
 * dark external design rather than part of the app's palette.
 */

const ICON_COLOR = "#8b9291";
const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="3.2" />
    <line x1="11.6" y1="8" x2="13.6" y2="8" />
    <line x1="10.25" y1="11.25" x2="11.67" y2="12.67" />
    <line x1="7" y1="12.6" x2="7" y2="14.6" />
    <line x1="3.75" y1="11.25" x2="2.33" y2="12.67" />
    <line x1="2.4" y1="8" x2="0.4" y2="8" />
    <line x1="3.75" y1="4.75" x2="2.33" y2="3.33" />
    <line x1="7" y1="3.4" x2="7" y2="1.4" />
    <line x1="10.25" y1="4.75" x2="11.67" y2="3.33" />
  </svg>
);

const UpChevron = ({ width, height, points }: UpChevronProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points={points} />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <line x1="7.5" y1="7" x2="7.5" y2="11" strokeLinecap="round" />
    <circle cx="7.5" cy="4.2" r="0.9" fill={ICON_COLOR} stroke="none" />
  </svg>
);

const Field = ({
  className,
  id,
  label,
  labelClassName,
  placeholder,
  placeholderClassName,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className={`text-[11.5px] leading-[13.92px] ${labelClassName}`}
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={`mt-3 h-9 w-full bg-[#272822] px-4 text-[11.5px] leading-[13.92px] outline-none ${inputClassName} ${placeholderClassName}`}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col overflow-auto bg-[#000000] px-5 pt-5 font-['Inter',sans-serif] font-semibold"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <UpChevron width={8} height={5} points="1,4.5 4,1 7,4.5" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[72px] flex items-center gap-2">
        <UpChevron width={12} height={8} points="1,7 6,1 11,7" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <Field
        className="mt-7"
        id="test-card-token"
        label="Personal Access Token"
        labelClassName="text-[#a4a4a3]"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        placeholderClassName="placeholder:text-[#737470]"
        inputClassName="border border-[#a5adad]"
      />

      <Field
        className="mt-3"
        id="test-card-url"
        label="Design URL"
        labelClassName="text-[#a3a3a2]"
        placeholder="https://www.figma.com/file/"
        placeholderClassName="placeholder:text-[#71726e]"
        inputClassName="border-2 border-[#929291]"
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface UpChevronProps {
  width: number;
  height: number;
  points: string;
}

interface FieldProps {
  className?: string;
  id: string;
  label: string;
  labelClassName: string;
  placeholder: string;
  placeholderClassName: string;
  inputClassName: string;
}
