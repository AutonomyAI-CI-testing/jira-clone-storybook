import cx from "classix";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 * Every size, colour and spacing below is the frame's own value, taken from the
 * style guide exported alongside the design (frame: 254 x 508 px).
 */

const GEAR_TEETH = Array.from({ length: 8 }, (_, index) => {
  const angle = (index * Math.PI) / 4;
  return {
    angle,
    x1: 7 + 5 * Math.cos(angle),
    y1: 8 + 5 * Math.sin(angle),
    x2: 7 + 6.6 * Math.cos(angle),
    y2: 8 + 6.6 * Math.sin(angle),
  };
});

const SettingsGlyph = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    {GEAR_TEETH.map((tooth) => (
      <line
        key={tooth.angle}
        x1={tooth.x1}
        y1={tooth.y1}
        x2={tooth.x2}
        y2={tooth.y2}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    ))}
    <circle cx="7" cy="8" r="4.4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7" cy="8" r="1.4" fill="currentColor" />
  </svg>
);

const ChevronUpGlyph = ({ width, height }: GlyphProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.3" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="4.5" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.9v4.1"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const GlyphHeading = ({
  glyph,
  label,
  labelAs: Label = "span",
  className,
  labelClassName,
}: GlyphHeadingProps): JSX.Element => (
  <div className={cx("flex items-center", className)}>
    {glyph}
    <Label className={cx("font-semibold", labelClassName)}>{label}</Label>
  </div>
);

const TextField = ({
  id,
  label,
  placeholder,
  className,
  inputClassName,
}: TextFieldProps): JSX.Element => (
  <div className={cx("flex flex-col", className)}>
    <GlyphHeading
      className="gap-5 text-[#A4A4A3]"
      labelClassName="text-[11.5px] leading-[13.92px]"
      glyph={<InfoGlyph />}
      label={label}
    />
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      aria-label={label}
      className={cx("w-full bg-[#272822] px-[19px] font-semibold", inputClassName)}
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] font-semibold text-[11.5px] leading-[13.92px] text-[#8C8078]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={cx(
      "flex w-[254px] flex-col px-5 pt-5 pb-[62px]",
      "bg-[#1C1D17] font-[family-name:Inter,sans-serif]"
    )}
  >
    <div className="flex items-center justify-between text-[#B5B5B5]">
      <h2 className="text-[13.5px] leading-[16.34px] font-semibold">
        UI magician Agent
      </h2>
      <SettingsGlyph />
    </div>

    <GlyphHeading
      className="mt-[18px] gap-[9px] text-[#8B9291]"
      labelClassName="min-w-0 truncate text-[11.5px] leading-[13.92px]"
      glyph={<ChevronUpGlyph width={8} height={5} />}
      label="From entire frame to a single design"
    />

    <GlyphHeading
      className="mt-[77px] gap-[8px] text-[#B2B2B1]"
      labelAs="h3"
      labelClassName="text-[13.5px] leading-[16.34px]"
      glyph={<ChevronUpGlyph width={12} height={8} />}
      label="Add New Design"
    />

    <TextField
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[26px]"
      inputClassName="mt-[13px] h-[36px] border border-[#A5ADAD] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <TextField
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[9px]"
      inputClassName="mt-[12px] h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726E] placeholder:text-[#71726E]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] font-semibold text-[#B0B0B0]">
      Recent Breakdowns
    </h3>
  </div>
);

interface GlyphProps {
  width: number;
  height: number;
}

interface GlyphHeadingProps {
  glyph: React.ReactNode;
  label: string;
  labelAs?: "span" | "h3";
  className?: string;
  labelClassName?: string;
}

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
}
